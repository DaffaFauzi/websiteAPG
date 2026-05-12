'use client';

import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import { apgSystem } from '@ds/apg-system';

type ConnectorVProps = { delay?: number };

function ConnectorV({ delay = 0 }: ConnectorVProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={`origin-top w-px h-10 ${apgSystem.diagram.connector}`}
    />
  );
}

type NodeProps = { role: string; name?: string; delay: number };

function Node({ role, name, delay }: NodeProps) {
  return (
    <motion.div
      {...apgSystem.motion.itemDelay(delay)}
      whileHover={apgSystem.motion.hoverLift.whileHover}
      transition={apgSystem.motion.hoverLift.transition}
      className={[
        apgSystem.diagram.node,
        'w-[200px] sm:w-[220px] lg:w-[240px] h-[108px] sm:h-[104px] lg:h-[100px] flex flex-col items-center justify-center px-4',
      ].join(' ')}
    >
      <div className={`${apgSystem.diagram.role} leading-snug`}>{role}</div>
      {name ? <div className={apgSystem.diagram.name}>{name}</div> : null}
    </motion.div>
  );
}

export default function StrukturManajemenPage() {
  const { t } = useLanguage();

  const managementStructure = {
    commissioner: { role: 'Komisaris' },
    ceo: { role: 'Direktur Utama' },
    director: { role: 'Direktur' },
    operationalDirector: { role: 'Direktur Operasional' },
    divisions: {
      finance: { role: 'Kepala Divisi Keuangan' },
      it: {
        role: 'Kepala Divisi IT',
        children: [{ role: 'Supervisor IT Developer' }, { role: 'Supervisor IT Support' }],
      },
      support: {
        role: 'Kepala Divisi Support',
        children: [{ role: 'Supervisor Marketing' }, { role: 'Supervisor Compliance' }],
      },
      operational: {
        role: 'Kepala Divisi Operasional',
        children: [{ role: 'Supervisor SDM & Umum' }, { role: 'Supervisor Sekretaris Perusahaan' }],
      },
    },
  } as const;

  return (
    <main className={`min-h-screen ${apgSystem.diagram.sectionBg} text-slate-950`}>
      <PageHero
        tag={t('nav.structure')}
        title={t('nav.management')}
        description={t('leadership.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.structure'), href: '/struktur' },
          { label: t('nav.management') },
        ]}
        imageAlt={t('nav.management')}
        variant="management"
      />

      <section className={`apg-section-divider ${apgSystem.spacing.sectionY}`}>
        <div className={apgSystem.spacing.container}>
          <motion.div {...apgSystem.motion.reveal} className="text-center">
            <div className="inline-flex flex-col items-center">
              <div className={`text-slate-500 ${apgSystem.typography.tag}`}>Struktur Manajemen</div>
              <h2 className={`mt-3 ${apgSystem.typography.h2}`}>Hierarchy Diagram</h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-[var(--color-primary)]" />
            </div>
          </motion.div>

          <div className="mt-10 md:mt-12">
            <motion.div {...apgSystem.motion.stagger} className="md:hidden flex flex-col items-center">
              <Node role={managementStructure.commissioner.role} delay={0.1} />
              <div className="mt-8">
                <ConnectorV delay={0.14} />
              </div>
              <Node role={managementStructure.ceo.role} delay={0.2} />
              <div className="mt-8">
                <ConnectorV delay={0.24} />
              </div>

              <Node role={managementStructure.director.role} delay={0.3} />
              <div className="mt-8">
                <ConnectorV delay={0.34} />
              </div>
              <Node role={managementStructure.divisions.finance.role} delay={0.4} />
              <div className="mt-8">
                <ConnectorV delay={0.44} />
              </div>
              <Node role={managementStructure.divisions.it.role} delay={0.5} />
              <div className="mt-8">
                <ConnectorV delay={0.54} />
              </div>
              <Node role={managementStructure.divisions.it.children[0].role} delay={0.6} />
              <div className="mt-8">
                <ConnectorV delay={0.64} />
              </div>
              <Node role={managementStructure.divisions.it.children[1].role} delay={0.7} />
              <div className="mt-8">
                <ConnectorV delay={0.74} />
              </div>
              <Node role={managementStructure.operationalDirector.role} delay={0.8} />
              <div className="mt-8">
                <ConnectorV delay={0.84} />
              </div>
              <Node role={managementStructure.divisions.support.role} delay={0.9} />
              <div className="mt-8">
                <ConnectorV delay={0.94} />
              </div>
              <Node role={managementStructure.divisions.support.children[0].role} delay={1.0} />
              <div className="mt-8">
                <ConnectorV delay={1.04} />
              </div>
              <Node role={managementStructure.divisions.support.children[1].role} delay={1.1} />
              <div className="mt-8">
                <ConnectorV delay={1.14} />
              </div>
              <Node role={managementStructure.divisions.operational.role} delay={1.2} />
              <div className="mt-8">
                <ConnectorV delay={1.24} />
              </div>
              <Node role={managementStructure.divisions.operational.children[0].role} delay={1.3} />
              <div className="mt-8">
                <ConnectorV delay={1.34} />
              </div>
              <Node role={managementStructure.divisions.operational.children[1].role} delay={1.4} />
            </motion.div>

            <motion.div {...apgSystem.motion.stagger} className="hidden md:flex flex-col items-center">
              <Node role={managementStructure.commissioner.role} delay={0.1} />
              <div className="mt-10">
                <ConnectorV delay={0.14} />
              </div>
              <Node role={managementStructure.ceo.role} delay={0.2} />
              <div className="mt-10">
                <ConnectorV delay={0.24} />
              </div>
              <div className="relative w-full max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className={`absolute left-[10%] right-[10%] top-5 h-px origin-left ${apgSystem.diagram.connector}`}
                />
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                  className={`absolute left-1/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                />
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                  className={`absolute left-3/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                />

                <div className="grid grid-cols-2 gap-10 pt-10">
                  <div className="flex flex-col items-center">
                    <Node role={managementStructure.director.role} delay={0.34} />
                    <div className="mt-10">
                      <ConnectorV delay={0.38} />
                    </div>

                    <div className="relative w-full max-w-xl">
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
                        className={`absolute left-[16%] right-[16%] top-5 h-px origin-left ${apgSystem.diagram.connector}`}
                      />
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                        className={`absolute left-1/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                      />
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                        className={`absolute left-3/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                      />

                      <div className="grid grid-cols-2 gap-8 pt-10">
                        <div className="flex flex-col items-center">
                          <Node role={managementStructure.divisions.finance.role} delay={0.48} />
                        </div>

                        <div className="flex flex-col items-center">
                          <Node role={managementStructure.divisions.it.role} delay={0.52} />
                          <div className="mt-10">
                            <ConnectorV delay={0.56} />
                          </div>
                          <div className="mt-2 flex flex-col items-center">
                            <Node role={managementStructure.divisions.it.children[0].role} delay={0.66} />
                            <div className="mt-8">
                              <ConnectorV delay={0.7} />
                            </div>
                            <Node role={managementStructure.divisions.it.children[1].role} delay={0.74} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Node role={managementStructure.operationalDirector.role} delay={0.36} />
                    <div className="mt-10">
                      <ConnectorV delay={0.4} />
                    </div>

                    <div className="relative w-full max-w-xl">
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
                        className={`absolute left-[16%] right-[16%] top-5 h-px origin-left ${apgSystem.diagram.connector}`}
                      />
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
                        className={`absolute left-1/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                      />
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true, amount: 0.22 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
                        className={`absolute left-3/4 top-5 h-5 w-px origin-top ${apgSystem.diagram.connector}`}
                      />

                      <div className="grid grid-cols-2 gap-8 pt-10">
                        <div className="flex flex-col items-center">
                          <Node role={managementStructure.divisions.support.role} delay={0.5} />
                          <div className="mt-10">
                            <ConnectorV delay={0.54} />
                          </div>
                          <div className="mt-2 flex flex-col items-center">
                            <Node role={managementStructure.divisions.support.children[0].role} delay={0.64} />
                            <div className="mt-8">
                              <ConnectorV delay={0.68} />
                            </div>
                            <Node role={managementStructure.divisions.support.children[1].role} delay={0.72} />
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <Node role={managementStructure.divisions.operational.role} delay={0.52} />
                          <div className="mt-10">
                            <ConnectorV delay={0.56} />
                          </div>
                          <div className="mt-2 flex flex-col items-center">
                            <Node role={managementStructure.divisions.operational.children[0].role} delay={0.66} />
                            <div className="mt-8">
                              <ConnectorV delay={0.7} />
                            </div>
                            <Node role={managementStructure.divisions.operational.children[1].role} delay={0.74} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
