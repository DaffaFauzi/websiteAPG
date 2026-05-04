'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const ASSISTANT_NAME_ENV = process.env.NEXT_PUBLIC_AI_ASSISTANT_NAME;

export default function AIAssistant() {
  const { language, t } = useLanguage();
  const assistantName = ASSISTANT_NAME_ENV ?? t('ai.name');
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      role: 'assistant',
      content: t('ai.greeting'),
    },
  ]);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<ChatMessage[]>(messages);

  const displayMessages = useMemo(() => {
    if (messages.length !== 1 || messages[0]?.role !== 'assistant') return messages;
    return [
      {
        role: 'assistant' as const,
        content: t('ai.greeting'),
      },
    ];
  }, [messages, t]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    const w = window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number };
    const cancel = window as unknown as { cancelIdleCallback?: (id: number) => void };
    const id =
      typeof w.requestIdleCallback === 'function'
        ? w.requestIdleCallback(() => setReady(true), { timeout: 1500 })
        : window.setTimeout(() => setReady(true), 600);

    return () => {
      if (typeof w.requestIdleCallback === 'function' && typeof cancel.cancelIdleCallback === 'function') {
        cancel.cancelIdleCallback(id as number);
      } else {
        window.clearTimeout(id as number);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages.length, open]);

  const quickPrompts = useMemo(() => {
    return [
      t('ai.suggestion.1'),
      t('ai.suggestion.2'),
      t('ai.suggestion.3'),
    ];
  }, [t]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messagesRef.current, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = (await res.json().catch(() => null)) as { reply?: string; error?: string } | null;
      const reply = data?.reply?.trim();
      if (!res.ok || !reply) {
        throw new Error(data?.error ?? 'AI request failed');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: t('ai.error'),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!ready) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open ? (
        <div className="w-[21.25rem] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-slate-950 truncate">{assistantName}</div>
              <div className="text-[0.6875rem] text-slate-600 truncate">
                {t('ai.subtitle')}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="min-h-12 min-w-12 rounded-xl hover:bg-slate-100 text-slate-700 active:scale-95 transition-transform"
              aria-label={t('ai.aria.close')}
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="max-h-[23.75rem] overflow-auto px-4 py-3 space-y-3 bg-white">
            {displayMessages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 text-white px-4 py-2 text-sm leading-relaxed'
                      : 'max-w-[85%] rounded-2xl rounded-bl-md bg-slate-100 text-slate-900 px-4 py-2 text-sm leading-relaxed'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-100 text-slate-700 px-4 py-2 text-sm">
                  {t('ai.typing')}
                </div>
              </div>
            ) : null}
          </div>

          <div className="px-4 pb-3 pt-2 border-t border-slate-200 bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => send(p)}
                  className="min-h-12 text-[0.6875rem] px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 truncate max-w-full active:scale-95 transition-transform"
                >
                  {p}
                </button>
              ))}
            </div>

            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('ai.placeholder')}
                className="flex-1 min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2]"
              />
              <button
                type="submit"
                disabled={loading}
                className="min-h-12 px-6 rounded-xl bg-[#0A66C2] text-white font-extrabold disabled:opacity-60 truncate active:scale-95 transition-transform"
              >
                {t('ai.send')}
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="h-12 px-6 rounded-2xl bg-[#0A66C2] text-white font-extrabold shadow-xl inline-flex items-center gap-2 active:scale-95 transition-transform"
          aria-label={t('ai.aria.open')}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-white"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 0 1 2 0v2h2.5A3.5 3.5 0 0 1 21 8.5v8A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-8A3.5 3.5 0 0 1 6.5 5H11V3zm-2.25 8.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM8.75 16a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z" />
          </svg>
          {t('ai.button')}
        </button>
      ) : null}
    </div>
  );
}
