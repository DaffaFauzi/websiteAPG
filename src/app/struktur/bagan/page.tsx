'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import ImagePreviewModal from '@/components/ui/ImagePreviewModal';
import Button from '@/components/ui/Button';

function wrapLine(text: string, max: number) {
  const s = text.replace(/\s+/g, ' ').trim();
  if (!s) return [];
  if (s.length <= max) return [s];
  const words = s.split(' ');
  const out: string[] = [];
  let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= max) { cur += ' ' + w; continue; }
    out.push(cur); cur = w;
  }
  if (cur) out.push(cur);
  return out;
}

function normalizeLines(raw: string[], max: number) {
  const out: string[] = [];
  for (const r of raw) for (const p of r.split('\n').map(s => s.trim()).filter(Boolean)) out.push(...wrapLine(p, max));
  return out;
}

function N({ x, y, w, h, lines }: { x: number; y: number; w: number; h: number; lines: string[] }) {
  const px = 6; let fs = 10; let lh = 12;
  const mc = () => Math.max(6, Math.floor((Math.max(24, w - px * 2)) / (fs * 0.55)));
  let wr = normalizeLines(lines, mc());
  while (wr.length * lh > h - 6 && fs > 7) { fs -= 0.5; lh = Math.max(9, 12 * (fs / 10)); wr = normalizeLines(lines, mc()); }
  const cy = y + h / 2;
  const dy0 = -((wr.length - 1) * lh) / 2;
  return (
    <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: Math.min(0.5, 0.1 + (y / 700) * 0.3) }}>
      <rect x={x} y={y} width={w} height={h} fill="#fff" stroke="#64748b" strokeWidth="1.3" />
      <text x={x + w / 2} y={cy} textAnchor="middle" fontSize={fs} fontWeight={600} fill="#111827" dominantBaseline="middle">
        {wr.map((l, i) => <tspan key={i} x={x + w / 2} dy={i === 0 ? dy0 : lh}>{l}</tspan>)}
      </text>
    </motion.g>
  );
}

function L({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000" strokeWidth="2" />;
}

export default function StrukturBaganPage() {
  const { t } = useLanguage();
  const title = t('org.chart.header');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Layout: SVG 2400x640, 4 divisions
  // Finance center=240, IT center=920, Support=1560, Ops=2100
  const cx = 1200;
  // IT sub-layout
  const pW = 80, pG = 16, pN = 6; // programmer box width, gap, count
  const pTot = pN * pW + (pN - 1) * pG; // 510
  const pX0 = 460; // first prog box x
  const pCx = pX0 + pTot / 2; // prog group center = 715
  const sW = 85, sG = 8, sN = 3;
  const sTot = sN * sW + (sN - 1) * sG; // 271
  const sX0 = pX0 + pTot + 20; // 990
  const sCx = sX0 + sTot / 2; // 1125

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero tag={t('nav.structure')} title={t('nav.structure_chart')} description={t('struktur.desc')}
        breadcrumbs={[{ label: t('nav.home'), href: '/' }, { label: t('nav.structure'), href: '/struktur' }, { label: t('nav.structure_chart') }]}
        imageAlt={t('nav.structure_chart')} variant="orgChart" />
      <section className="apg-section-divider py-10 lg:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
            <div className="bg-[#A7C7E7] border-b border-slate-300 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="text-left text-xs sm:text-sm font-semibold tracking-wide text-slate-900 uppercase">{title}</div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsPreviewOpen(true)}
                className="bg-white/50 backdrop-blur border-slate-400/30 text-slate-900 hover:bg-white"
              >
                Preview Bagan
              </Button>
            </div>
            <div className="p-4 sm:p-6">
              <div 
                className="group relative w-full aspect-[16/6] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer"
                onClick={() => setIsPreviewOpen(true)}
              >
                <Image 
                  src="/images/struktur APG.png" 
                  alt={title} 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full text-slate-900 font-bold text-xs shadow-lg flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Klik untuk Zoom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImagePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imageSrc="/images/struktur APG.png"
        imageAlt={title}
      />
      
      <FooterSection />
    </main>
  );
}
