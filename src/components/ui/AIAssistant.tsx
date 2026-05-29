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
    return language === 'en' 
      ? [
          'Who is APG?', 
          'What are APG\'s business sectors?', 
          'List all subsidiaries', 
          'What is the vision and mission?',
          'How to contact the team?'
        ]
      : [
          'Siapa itu APG?', 
          'Apa saja sektor bisnis APG?', 
          'Daftar semua anak perusahaan', 
          'Apa visi dan misi perusahaan?',
          'Bagaimana cara menghubungi tim?'
        ];
  }, [language]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messagesRef.current, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    // Immediate scroll to bottom after user message
    setTimeout(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);

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
      // Final scroll to bottom after AI reply
      setTimeout(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  if (!ready) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      {open ? (
        <div className="w-[22.5rem] max-w-[calc(100vw-2.5rem)] max-h-[min(600px,calc(100vh-100px))] rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col transition-all duration-300">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shrink-0 shadow-sm shadow-[#0A66C2]/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 3a1 1 0 0 1 2 0v2h2.5A3.5 3.5 0 0 1 21 8.5v8A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-8A3.5 3.5 0 0 1 6.5 5H11V3zm-2.25 8.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM8.75 16a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-black text-slate-900 truncate tracking-tight">{assistantName}</div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {language === 'en' ? 'Online' : 'Aktif'}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all active:scale-90"
              aria-label={t('ai.aria.close')}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-5 bg-slate-50/30 scroll-smooth">
            {displayMessages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-[1.25rem] rounded-tr-sm bg-[#0A66C2] text-white px-4 py-3 text-sm leading-relaxed shadow-sm font-medium'
                      : 'max-w-[85%] rounded-[1.25rem] rounded-tl-sm bg-white border border-slate-100 text-slate-800 px-4 py-3 text-sm leading-relaxed font-medium shadow-sm'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-[1.25rem] rounded-tl-sm bg-white border border-slate-100 text-slate-700 px-4 py-3 text-sm shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="px-5 pb-6 pt-4 border-t border-slate-100 bg-white shrink-0">
            <div className="flex flex-wrap gap-2 mb-4 max-h-[100px] overflow-y-auto scrollbar-hide">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => send(p)}
                  className="text-[11px] font-bold px-3.5 py-2 rounded-full border border-slate-200 bg-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white text-slate-600 transition-all active:scale-95 whitespace-nowrap shadow-sm"
                >
                  {p}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-1.5 focus-within:border-[#0A66C2] focus-within:ring-4 focus-within:ring-[#0A66C2]/10 transition-all"
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
                className="flex-1 bg-transparent border-none px-3 text-sm text-slate-950 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="h-10 w-10 rounded-xl bg-[#0A66C2] text-white disabled:opacity-40 disabled:grayscale transition-all flex items-center justify-center shrink-0 shadow-lg shadow-[#0A66C2]/20 active:scale-90"
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="h-14 px-7 rounded-2xl bg-[#0A66C2] text-white font-black shadow-[0_15px_40px_-10px_rgba(10,102,194,0.4)] inline-flex items-center gap-3 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(10,102,194,0.5)] active:scale-95 transition-all"
          aria-label={t('ai.aria.open')}
        >
          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 text-white"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 0 1 2 0v2h2.5A3.5 3.5 0 0 1 21 8.5v8A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-8A3.5 3.5 0 0 1 6.5 5H11V3zm-2.25 8.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM8.75 16a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="text-sm tracking-wide">{t('ai.button')}</span>
        </button>
      ) : null}
    </div>
  );
}
