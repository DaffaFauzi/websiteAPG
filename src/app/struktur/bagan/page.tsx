'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';

type OrgNodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
};

function wrapLine(text: string, maxChars: number) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];
  if (normalized.length <= maxChars) return [normalized];

  const words = normalized.split(' ');
  const out: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
      continue;
    }

    const candidate = `${current} ${word}`;
    if (candidate.length <= maxChars) {
      current = candidate;
      continue;
    }

    out.push(current);
    current = word;
  }

  if (current) out.push(current);
  return out;
}

function normalizeLines(rawLines: string[], maxChars: number) {
  const out: string[] = [];

  for (const raw of rawLines) {
    const parts = raw
      .split('\n')
      .map((p) => p.trim())
      .filter(Boolean);

    for (const part of parts) {
      out.push(...wrapLine(part, maxChars));
    }
  }

  return out;
}

function OrgNode({ x, y, w, h, lines }: OrgNodeProps) {
  const paddingX = 8;
  const minFontSize = 8.5;
  const baseFontSize = 11;
  const baseLineHeight = 13;
  const delay = Math.max(0, Math.min(0.55, 0.1 + (y / 820) * 0.35));

  let fontSize = baseFontSize;
  let lineHeight = baseLineHeight;

  const computeMaxChars = () => {
    const approxCharWidth = fontSize * 0.58;
    const availableWidth = Math.max(24, w - paddingX * 2);
    return Math.max(6, Math.floor(availableWidth / approxCharWidth));
  };

  let wrapped = normalizeLines(lines, computeMaxChars());

  while (wrapped.length * lineHeight > h - 8 && fontSize > minFontSize) {
    fontSize = Math.max(minFontSize, fontSize - 0.5);
    lineHeight = Math.max(10, baseLineHeight * (fontSize / baseFontSize));
    wrapped = normalizeLines(lines, computeMaxChars());
  }

  const centerY = y + h / 2;
  const firstDy = -((wrapped.length - 1) * lineHeight) / 2;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      <rect x={x} y={y} width={w} height={h} fill="#ffffff" stroke="#64748b" strokeWidth="1.35" />
      <text
        x={x + w / 2}
        y={centerY}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight={600}
        fill="#111827"
        dominantBaseline="middle"
      >
        {wrapped.map((line, idx) => (
          <tspan key={idx} x={x + w / 2} dy={idx === 0 ? firstDy : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    </motion.g>
  );
}

export default function StrukturBaganPage() {
  const { t } = useLanguage();

  const headerTitle = t('org.chart.header');

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        tag={t('nav.structure')}
        title={t('nav.structure_chart')}
        description={t('struktur.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.structure'), href: '/struktur' },
          { label: t('nav.structure_chart') },
        ]}
        imageAlt={t('nav.structure_chart')}
        variant="orgChart"
      />

      <section className="apg-section-divider py-10 lg:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
            <div className="bg-[#A7C7E7] border-b border-slate-300 px-4 sm:px-6 py-3">
              <div className="text-center text-xs sm:text-sm font-semibold tracking-wide text-slate-900 uppercase">
                {headerTitle}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="overflow-auto">
                <div className="w-fit mx-auto px-6 py-6">
                  <svg
                    width="1400"
                    height="820"
                    viewBox="0 0 1400 820"
                    className="block h-auto max-w-none"
                    role="img"
                    aria-label={headerTitle}
                    shapeRendering="crispEdges"
                  >
                    <motion.g
                      stroke="#64748b"
                      strokeWidth="1.35"
                      fill="none"
                      strokeLinecap="square"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: 0.55 }}
                    >
                    <line x1="600" y1="88" x2="600" y2="118" />
                    <line x1="800" y1="88" x2="800" y2="118" />
                    <line x1="600" y1="118" x2="800" y2="118" />
                    <line x1="600" y1="118" x2="600" y2="160" />

                    <line x1="600" y1="204" x2="600" y2="232" />
                    <line x1="600" y1="220" x2="190" y2="220" />
                    <line x1="190" y1="220" x2="190" y2="286" />
                    <line x1="190" y1="286" x2="440" y2="286" />
                    <line x1="190" y1="286" x2="190" y2="290" />
                    <line x1="440" y1="286" x2="440" y2="290" />

                    <line x1="600" y1="276" x2="600" y2="286" />
                    <line x1="600" y1="286" x2="1010" y2="286" />
                    <line x1="730" y1="286" x2="730" y2="290" />
                    <line x1="1010" y1="286" x2="1010" y2="290" />

                    <line x1="190" y1="324" x2="190" y2="558" />
                    <line x1="190" y1="365" x2="205" y2="365" />
                    <line x1="190" y1="406" x2="230" y2="406" />
                    <line x1="190" y1="438" x2="230" y2="438" />
                    <line x1="190" y1="485" x2="195" y2="485" />
                    <line x1="190" y1="526" x2="230" y2="526" />
                    <line x1="190" y1="558" x2="230" y2="558" />

                    <line x1="440" y1="324" x2="440" y2="712" />
                    <line x1="440" y1="365" x2="450" y2="365" />
                    <line x1="440" y1="406" x2="495" y2="406" />
                    <line x1="440" y1="438" x2="495" y2="438" />
                    <line x1="440" y1="470" x2="495" y2="470" />
                    <line x1="440" y1="502" x2="495" y2="502" />
                    <line x1="440" y1="534" x2="495" y2="534" />
                    <line x1="440" y1="566" x2="495" y2="566" />
                    <line x1="440" y1="607" x2="450" y2="607" />
                    <line x1="440" y1="648" x2="495" y2="648" />
                    <line x1="440" y1="680" x2="495" y2="680" />
                    <line x1="440" y1="712" x2="495" y2="712" />

                    <line x1="730" y1="324" x2="730" y2="485" />
                    <line x1="730" y1="365" x2="800" y2="365" />
                    <line x1="730" y1="485" x2="800" y2="485" />
                    <line x1="800" y1="382" x2="800" y2="392" />
                    <line x1="800" y1="420" x2="800" y2="424" />
                    <line x1="800" y1="502" x2="800" y2="512" />
                    <line x1="800" y1="540" x2="800" y2="544" />

                    <line x1="1010" y1="324" x2="1010" y2="607" />
                    <line x1="1010" y1="365" x2="1040" y2="365" />
                    <line x1="1040" y1="365" x2="1040" y2="438" />
                    <line x1="1040" y1="365" x2="1050" y2="365" />
                    <line x1="1040" y1="406" x2="1090" y2="406" />
                    <line x1="1040" y1="438" x2="1090" y2="438" />

                    <line x1="1210" y1="438" x2="1230" y2="438" />
                    <line x1="1230" y1="406" x2="1230" y2="502" />
                    <line x1="1230" y1="406" x2="1240" y2="406" />
                    <line x1="1230" y1="438" x2="1240" y2="438" />
                    <line x1="1230" y1="470" x2="1240" y2="470" />
                    <line x1="1230" y1="502" x2="1240" y2="502" />

                    <line x1="1010" y1="607" x2="1000" y2="607" />
                    <line x1="910" y1="624" x2="910" y2="648" />
                    <line x1="910" y1="648" x2="850" y2="648" />
                    <line x1="850" y1="648" x2="850" y2="680" />
                    </motion.g>

                    <OrgNode x={520} y={50} w={160} h={38} lines={[t('org.chart.gm'), t('org.chart.gm.2')]} />
                    <OrgNode x={690} y={50} w={220} h={38} lines={[t('org.chart.board')]} />

                  <OrgNode x={530} y={160} w={140} h={44} lines={[t('org.chart.ceo.1'), t('org.chart.ceo.2')]} />
                  <OrgNode x={530} y={232} w={140} h={44} lines={[t('org.chart.opsdir.1'), t('org.chart.opsdir.2')]} />

                  <OrgNode x={120} y={290} w={140} h={34} lines={[t('org.chart.head.finance')]} />
                  <OrgNode x={380} y={290} w={120} h={34} lines={[t('org.chart.head.it')]} />
                  <OrgNode x={660} y={290} w={140} h={34} lines={[t('org.chart.head.support')]} />
                  <OrgNode x={940} y={290} w={140} h={34} lines={[t('org.chart.head.ops')]} />

                  <OrgNode x={205} y={348} w={160} h={34} lines={[t('org.chart.spv.acc')]} />
                  <OrgNode x={230} y={392} w={110} h={28} lines={[t('org.chart.staff.acc')]} />
                  <OrgNode x={230} y={424} w={110} h={28} lines={[t('org.chart.staff.tax')]} />
                  <OrgNode x={195} y={468} w={180} h={34} lines={[t('org.chart.spv.finance')]} />
                  <OrgNode x={230} y={512} w={110} h={28} lines={[t('org.chart.staff.finance')]} />
                  <OrgNode x={230} y={544} w={110} h={28} lines={[t('org.chart.staff.bizplan.1'), t('org.chart.staff.bizplan.2')]} />

                  <OrgNode x={450} y={348} w={180} h={34} lines={[t('org.chart.spv.itprog')]} />
                  <OrgNode x={495} y={392} w={110} h={28} lines={[t('org.chart.staff.itprog.1')]} />
                  <OrgNode x={495} y={424} w={110} h={28} lines={[t('org.chart.staff.itprog.2')]} />
                  <OrgNode x={495} y={456} w={110} h={28} lines={[t('org.chart.staff.itprog.3')]} />
                  <OrgNode x={495} y={488} w={110} h={28} lines={[t('org.chart.staff.itprog.4')]} />
                  <OrgNode x={495} y={520} w={110} h={28} lines={[t('org.chart.staff.itprog.5')]} />
                  <OrgNode x={495} y={552} w={110} h={28} lines={[t('org.chart.staff.itprog.6')]} />
                  <OrgNode x={450} y={590} w={190} h={34} lines={[t('org.chart.spv.itsupport')]} />
                  <OrgNode x={495} y={634} w={110} h={28} lines={[t('org.chart.staff.itsupport.1')]} />
                  <OrgNode x={495} y={666} w={110} h={28} lines={[t('org.chart.staff.itsupport.2')]} />
                  <OrgNode x={495} y={698} w={110} h={28} lines={[t('org.chart.staff.itsupport.3')]} />

                  <OrgNode x={720} y={348} w={160} h={34} lines={[t('org.chart.spv.marketing')]} />
                  <OrgNode x={740} y={392} w={120} h={28} lines={[t('org.chart.staff.digital')]} />
                  <OrgNode x={740} y={424} w={120} h={28} lines={[t('org.chart.staff.markexec.1'), t('org.chart.staff.markexec.2')]} />
                  <OrgNode x={720} y={468} w={160} h={34} lines={[t('org.chart.spv.compliance')]} />
                  <OrgNode x={740} y={512} w={120} h={28} lines={[t('org.chart.staff.audit.1'), t('org.chart.staff.audit.2')]} />
                  <OrgNode x={740} y={544} w={120} h={28} lines={[t('org.chart.staff.legal.1'), t('org.chart.staff.legal.2')]} />

                  <OrgNode x={1050} y={348} w={160} h={34} lines={[t('org.chart.spv.hr')]} />
                  <OrgNode x={1090} y={392} w={120} h={28} lines={[t('org.chart.staff.hr')]} />
                  <OrgNode x={1090} y={424} w={120} h={28} lines={[t('org.chart.staff.general')]} />
                  <OrgNode x={820} y={590} w={180} h={34} lines={[t('org.chart.spv.cosec.1'), t('org.chart.spv.cosec.2')]} />
                  <OrgNode x={850} y={634} w={140} h={28} lines={[t('org.chart.staff.relations.1'), t('org.chart.staff.relations.2')]} />
                  <OrgNode x={850} y={666} w={140} h={28} lines={[t('org.chart.staff.corpcom.1'), t('org.chart.staff.corpcom.2')]} />

                  <OrgNode x={1240} y={392} w={120} h={28} lines={[t('org.chart.exec.driver.1'), t('org.chart.exec.driver.2')]} />
                  <OrgNode x={1240} y={424} w={120} h={28} lines={[t('org.chart.exec.driver2.1'), t('org.chart.exec.driver2.2')]} />
                  <OrgNode x={1240} y={456} w={120} h={28} lines={[t('org.chart.exec.ob.1'), t('org.chart.exec.ob.2')]} />
                  <OrgNode x={1240} y={488} w={120} h={28} lines={[t('org.chart.exec.courier.1'), t('org.chart.exec.courier.2')]} />
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
