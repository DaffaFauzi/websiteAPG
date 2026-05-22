'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';

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
            <div className="bg-[#A7C7E7] border-b border-slate-300 px-4 sm:px-6 py-3">
              <div className="text-center text-xs sm:text-sm font-semibold tracking-wide text-slate-900 uppercase">{title}</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="overflow-auto">
                <div className="w-fit mx-auto px-6 py-6">
                  <svg width="2400" height="640" viewBox="0 0 2400 640" className="block h-auto max-w-none" role="img" aria-label={title} shapeRendering="crispEdges">
                    <motion.g stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.5 }}>
                      {/* Top: RUPS → Komisaris → DirUt → Direktur */}
                      <L x1={cx} y1={60} x2={cx} y2={75} />
                      <L x1={cx} y1={110} x2={cx} y2={125} />
                      <L x1={cx} y1={163} x2={cx} y2={195} />
                      <L x1={cx} y1={233} x2={cx} y2={260} />
                      <L x1={240} y1={260} x2={2100} y2={260} />
                      {[240, 920, 1560, 2100].map(x => <L key={x} x1={x} y1={260} x2={x} y2={280} />)}

                      {/* Finance */}
                      <L x1={240} y1={320} x2={240} y2={350} />
                      <L x1={120} y1={350} x2={360} y2={350} />
                      {[120, 360].map(x => <L key={`f1-${x}`} x1={x} y1={350} x2={x} y2={370} />)}
                      <L x1={120} y1={415} x2={120} y2={440} />
                      <L x1={50} y1={440} x2={160} y2={440} />
                      {[50, 160].map(x => <L key={`f2-${x}`} x1={x} y1={440} x2={x} y2={460} />)}
                      <L x1={360} y1={415} x2={360} y2={440} />
                      <L x1={290} y1={440} x2={400} y2={440} />
                      {[290, 400].map(x => <L key={`f3-${x}`} x1={x} y1={440} x2={x} y2={460} />)}

                      {/* IT */}
                      <L x1={920} y1={320} x2={920} y2={350} />
                      <L x1={pCx} y1={350} x2={sCx} y2={350} />
                      {[pCx, sCx].map(x => <L key={`it1-${x}`} x1={x} y1={350} x2={x} y2={370} />)}
                      <L x1={pCx} y1={415} x2={pCx} y2={440} />
                      {(() => { const cs = Array.from({length: 6}, (_, i) => pX0 + i * (pW + pG) + pW / 2); return <><L x1={cs[0]} y1={440} x2={cs[5]} y2={440} />{cs.map(c => <L key={`ip-${c}`} x1={c} y1={440} x2={c} y2={460} />)}</>; })()}
                      <L x1={sCx} y1={415} x2={sCx} y2={440} />
                      {(() => { const cs = Array.from({length: 3}, (_, i) => sX0 + i * (sW + sG) + sW / 2); return <><L x1={cs[0]} y1={440} x2={cs[2]} y2={440} />{cs.map(c => <L key={`is-${c}`} x1={c} y1={440} x2={c} y2={460} />)}</>; })()}

                      {/* Support */}
                      <L x1={1560} y1={320} x2={1560} y2={350} />
                      <L x1={1440} y1={350} x2={1680} y2={350} />
                      {[1440, 1680].map(x => <L key={`s1-${x}`} x1={x} y1={350} x2={x} y2={370} />)}
                      <L x1={1440} y1={415} x2={1440} y2={440} />
                      <L x1={1380} y1={440} x2={1500} y2={440} />
                      {[1380, 1500].map(x => <L key={`s2-${x}`} x1={x} y1={440} x2={x} y2={460} />)}
                      <L x1={1680} y1={415} x2={1680} y2={440} />
                      <L x1={1620} y1={440} x2={1740} y2={440} />
                      {[1620, 1740].map(x => <L key={`s3-${x}`} x1={x} y1={440} x2={x} y2={460} />)}

                      {/* Operasional */}
                      <L x1={2100} y1={320} x2={2100} y2={350} />
                      <L x1={1960} y1={350} x2={2240} y2={350} />
                      {[1960, 2240].map(x => <L key={`o1-${x}`} x1={x} y1={350} x2={x} y2={370} />)}
                      <L x1={1960} y1={415} x2={1960} y2={440} />
                      <L x1={1900} y1={440} x2={2020} y2={440} />
                      {[1900, 2020].map(x => <L key={`o2-${x}`} x1={x} y1={440} x2={x} y2={460} />)}
                      <L x1={2020} y1={500} x2={2020} y2={530} />
                      <L x1={1870} y1={530} x2={2170} y2={530} />
                      {[1870, 1970, 2070, 2170].map(x => <L key={`o3-${x}`} x1={x} y1={530} x2={x} y2={550} />)}
                      <L x1={2240} y1={415} x2={2240} y2={440} />
                      <L x1={2170} y1={440} x2={2310} y2={440} />
                      {[2170, 2310].map(x => <L key={`o4-${x}`} x1={x} y1={440} x2={x} y2={460} />)}
                    </motion.g>

                    {/* === NODES === */}
                    {/* Top hierarchy */}
                    <N x={950} y={20} w={500} h={40} lines={[t('org.chart.gm')]} />
                    <N x={1100} y={75} w={200} h={35} lines={[t('org.chart.board')]} />
                    <N x={1050} y={125} w={300} h={38} lines={[t('org.chart.ceo.1')]} />
                    <N x={1050} y={195} w={300} h={38} lines={[t('org.chart.opsdir.1')]} />

                    {/* KADIVs */}
                    <N x={140} y={280} w={200} h={40} lines={[t('org.chart.head.finance')]} />
                    <N x={820} y={280} w={200} h={40} lines={[t('org.chart.head.it')]} />
                    <N x={1460} y={280} w={200} h={40} lines={[t('org.chart.head.support')]} />
                    <N x={2000} y={280} w={200} h={40} lines={[t('org.chart.head.ops')]} />

                    {/* Finance */}
                    <N x={40} y={370} w={160} h={45} lines={[t('org.chart.spv.acc')]} />
                    <N x={280} y={370} w={160} h={45} lines={[t('org.chart.spv.finance')]} />
                    <N x={5} y={460} w={90} h={40} lines={[t('org.chart.staff.acc')]} />
                    <N x={115} y={460} w={90} h={40} lines={[t('org.chart.staff.tax')]} />
                    <N x={245} y={460} w={90} h={40} lines={[t('org.chart.staff.finance')]} />
                    <N x={355} y={460} w={90} h={40} lines={[t('org.chart.staff.bizplan.1'), t('org.chart.staff.bizplan.2')]} />

                    {/* IT - Programmer */}
                    <N x={pCx - 90} y={370} w={180} h={45} lines={[t('org.chart.spv.itprog')]} />
                    {Array.from({length: 6}, (_, i) => (
                      <N key={`p${i}`} x={pX0 + i * (pW + pG)} y={460} w={pW} h={40} lines={[t(`org.chart.staff.itprog.${i + 1}`)]} />
                    ))}
                    {/* IT - Support */}
                    <N x={sCx - 80} y={370} w={160} h={45} lines={[t('org.chart.spv.itsupport')]} />
                    {Array.from({length: 3}, (_, i) => (
                      <N key={`s${i}`} x={sX0 + i * (sW + sG)} y={460} w={sW} h={40} lines={[t(`org.chart.staff.itsupport.${i + 1}`)]} />
                    ))}

                    {/* Support */}
                    <N x={1365} y={370} w={150} h={45} lines={[t('org.chart.spv.marketing')]} />
                    <N x={1605} y={370} w={150} h={45} lines={[t('org.chart.spv.compliance')]} />
                    <N x={1325} y={460} w={110} h={40} lines={[t('org.chart.staff.digital')]} />
                    <N x={1445} y={460} w={110} h={40} lines={[t('org.chart.staff.markexec.1'), t('org.chart.staff.markexec.2')]} />
                    <N x={1565} y={460} w={110} h={40} lines={[t('org.chart.staff.audit.1'), t('org.chart.staff.audit.2')]} />
                    <N x={1685} y={460} w={110} h={40} lines={[t('org.chart.staff.legal.1'), t('org.chart.staff.legal.2')]} />

                    {/* Operasional */}
                    <N x={1880} y={370} w={160} h={45} lines={[t('org.chart.spv.hr')]} />
                    <N x={2140} y={370} w={200} h={45} lines={[t('org.chart.spv.cosec.1'), t('org.chart.spv.cosec.2')]} />
                    <N x={1855} y={460} w={90} h={40} lines={[t('org.chart.staff.hr')]} />
                    <N x={1975} y={460} w={90} h={40} lines={[t('org.chart.staff.general')]} />
                    <N x={2125} y={460} w={90} h={40} lines={[t('org.chart.staff.relations.1'), t('org.chart.staff.relations.2')]} />
                    <N x={2265} y={460} w={90} h={40} lines={[t('org.chart.staff.corpcom.1'), t('org.chart.staff.corpcom.2')]} />
                    {/* Pelaksana */}
                    <N x={1828} y={550} w={85} h={40} lines={[t('org.chart.exec.driver.1'), t('org.chart.exec.driver.2')]} />
                    <N x={1928} y={550} w={85} h={40} lines={[t('org.chart.exec.driver2.1'), t('org.chart.exec.driver2.2')]} />
                    <N x={2028} y={550} w={85} h={40} lines={[t('org.chart.exec.ob.1'), t('org.chart.exec.ob.2')]} />
                    <N x={2128} y={550} w={85} h={40} lines={[t('org.chart.exec.courier.1'), t('org.chart.exec.courier.2')]} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
