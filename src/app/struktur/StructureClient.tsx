'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';

const NodeCard = ({ title, width = 'w-32' }: { title: string; width?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.99 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={[
      'relative group border border-slate-700 bg-white px-2 py-1.5 text-center flex items-center justify-center z-10',
      'shadow-sm',
      'transition-[transform,border-color,box-shadow] duration-300',
      'hover:-translate-y-0.5 hover:border-[#0A66C2] hover:shadow-md',
      'min-h-[2.5rem]',
      width
    ].join(' ')}
  >
    <div className={'relative z-10 font-bold tracking-tight leading-snug text-slate-800 text-[8px] sm:text-[9px] uppercase'}>
      <span dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />
    </div>
  </motion.div>
);

const TreeLineVertical = ({ h = 4 }: { h?: number }) => <div className="w-[1px] bg-slate-400 mx-auto" style={{ height: `${h * 4}px` }} />;

const GroupCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-full max-w-none rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg"
  >
    <div className="relative px-6 py-4 bg-[#E8F0FE]">
      <div className="relative z-10 text-center">
        <div className="text-sm sm:text-base font-black tracking-widest uppercase text-slate-900">
          {title}
        </div>
      </div>
    </div>
    <div className="py-6 sm:py-8 bg-white overflow-x-auto">
      <div className="min-w-[1400px] px-4">
        {children}
      </div>
    </div>
  </motion.div>
);

const StructureClient = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('struktur.tag')}
        title={t('struktur.title')}
        description={t('struktur.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.structure') },
        ]}
        imageAlt={t('struktur.title')}
      />

      <section className="apg-section-divider py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-[95%] mx-auto px-2 sm:px-6 relative z-10">
          <GroupCard title={t('org.chart.header')}>
            
            {/* RUPS */}
            <div className="flex flex-col items-center">
              <NodeCard title={[t('org.chart.gm'), t('org.chart.gm.2')].filter(Boolean).join('<br/>')} width="w-[260px]" />
              
              <div className="relative w-full flex justify-center">
                <TreeLineVertical h={5} />
                
                {/* DEWAN KOMISARIS */}
                <div className="absolute top-[10px] left-[50%] w-[100px] h-[1px] bg-slate-400" />
                <div className="absolute top-[0px] left-[calc(50%+100px)]">
                  <NodeCard title={t('org.chart.board')} width="w-[180px]" />
                </div>
              </div>
              
              <NodeCard title={[t('org.chart.ceo.1'), t('org.chart.ceo.2')].filter(Boolean).join('<br/>')} width="w-[220px]" />
              <TreeLineVertical h={4} />
              <NodeCard title={[t('org.chart.opsdir.1'), t('org.chart.opsdir.2')].filter(Boolean).join('<br/>')} width="w-[220px]" />
              <TreeLineVertical h={5} />
              
              {/* Main 4 Divisions */}
              <div className="relative w-full max-w-[1400px]">
                {/* Horizontal line connecting the 4 divisions */}
                <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-slate-400" />
                
                <div className="flex justify-between items-start w-full">
                  
                  {/* DIV 1: KEUANGAN */}
                  <div className="flex flex-col items-center w-1/4 px-1">
                    <div className="w-[1px] h-5 bg-slate-400" />
                    <NodeCard title={t('org.chart.head.finance')} width="w-[160px]" />
                    <TreeLineVertical h={5} />
                    
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.acc')} width="w-[140px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.acc')} width="w-full" />
                              </div>
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.tax')} width="w-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.finance')} width="w-[140px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.finance')} width="w-full" />
                              </div>
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.bizplan.1'), t('org.chart.staff.bizplan.2')].filter(Boolean).join('<br/>')} width="w-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIV 2: IT */}
                  <div className="flex flex-col items-center w-1/4 px-1">
                    <div className="w-[1px] h-5 bg-slate-400" />
                    <NodeCard title={t('org.chart.head.it')} width="w-[160px]" />
                    <TreeLineVertical h={5} />
                    
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[30%] right-[15%] h-[1px] bg-slate-400" />
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col items-center w-[65%] px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.itprog')} width="w-[160px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[8.33%] right-[8.33%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              {[1, 2, 3, 4, 5, 6].map(num => (
                                <div key={num} className="flex flex-col items-center w-1/6">
                                  <div className="w-[1px] h-4 bg-slate-400" />
                                  {/* Read directly from translations so user gets exactly what they typed */}
                                  <NodeCard title={t(`org.chart.staff.itprog.${num}`)} width="w-full text-[7.5px]" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center w-[35%] px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.itsupport')} width="w-[120px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              {[1, 2, 3].map(num => (
                                <div key={num} className="flex flex-col items-center w-1/3">
                                  <div className="w-[1px] h-4 bg-slate-400" />
                                  <NodeCard title={t(`org.chart.staff.itsupport.${num}`)} width="w-full text-[7.5px]" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIV 3: SUPPORT */}
                  <div className="flex flex-col items-center w-1/4 px-1">
                    <div className="w-[1px] h-5 bg-slate-400" />
                    <NodeCard title={t('org.chart.head.support')} width="w-[160px]" />
                    <TreeLineVertical h={5} />
                    
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.marketing')} width="w-[120px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.digital')} width="w-full text-[7.5px]" />
                              </div>
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.markexec.1'), t('org.chart.staff.markexec.2')].filter(Boolean).join('<br/>')} width="w-full text-[7.5px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.compliance')} width="w-[120px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full gap-1">
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.audit.1'), t('org.chart.staff.audit.2')].filter(Boolean).join('<br/>')} width="w-full text-[7.5px]" />
                              </div>
                              <div className="flex flex-col items-center w-1/2">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.legal.1'), t('org.chart.staff.legal.2')].filter(Boolean).join('<br/>')} width="w-full text-[7.5px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIV 4: OPERASIONAL */}
                  <div className="flex flex-col items-center w-1/4 px-1">
                    <div className="w-[1px] h-5 bg-slate-400" />
                    <NodeCard title={t('org.chart.head.ops')} width="w-[160px]" />
                    <TreeLineVertical h={5} />
                    
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={t('org.chart.spv.hr')} width="w-[160px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col items-center w-1/2 px-1">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.hr')} width="w-full text-[7.5px]" />
                              </div>
                              <div className="flex flex-col items-center w-1/2 px-1">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={t('org.chart.staff.general')} width="w-full text-[7.5px]" />
                                <TreeLineVertical h={4} />
                                <div className="relative w-full">
                                  <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-slate-400" />
                                  <div className="flex justify-between items-start w-full gap-1">
                                    <div className="flex flex-col items-center w-1/4">
                                      <div className="w-[1px] h-4 bg-slate-400" />
                                      <NodeCard title={[t('org.chart.exec.driver.1'), t('org.chart.exec.driver.2')].filter(Boolean).join('<br/>')} width="w-full text-[7px]" />
                                    </div>
                                    <div className="flex flex-col items-center w-1/4">
                                      <div className="w-[1px] h-4 bg-slate-400" />
                                      <NodeCard title={[t('org.chart.exec.driver2.1'), t('org.chart.exec.driver2.2')].filter(Boolean).join('<br/>')} width="w-full text-[7px]" />
                                    </div>
                                    <div className="flex flex-col items-center w-1/4">
                                      <div className="w-[1px] h-4 bg-slate-400" />
                                      <NodeCard title={[t('org.chart.exec.ob.1'), t('org.chart.exec.ob.2')].filter(Boolean).join('<br/>')} width="w-full text-[7px]" />
                                    </div>
                                    <div className="flex flex-col items-center w-1/4">
                                      <div className="w-[1px] h-4 bg-slate-400" />
                                      <NodeCard title={[t('org.chart.exec.courier.1'), t('org.chart.exec.courier.2')].filter(Boolean).join('<br/>')} width="w-full text-[7px]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center w-1/2 px-1">
                          <div className="w-[1px] h-5 bg-slate-400" />
                          <NodeCard title={[t('org.chart.spv.cosec.1'), t('org.chart.spv.cosec.2')].filter(Boolean).join('<br/>')} width="w-[160px]" />
                          <TreeLineVertical h={4} />
                          <div className="relative w-full">
                            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-400" />
                            <div className="flex justify-between items-start w-full">
                              <div className="flex flex-col items-center w-1/2 px-1">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.relations.1'), t('org.chart.staff.relations.2')].filter(Boolean).join('<br/>')} width="w-full text-[7.5px]" />
                              </div>
                              <div className="flex flex-col items-center w-1/2 px-1">
                                <div className="w-[1px] h-4 bg-slate-400" />
                                <NodeCard title={[t('org.chart.staff.corpcom.1'), t('org.chart.staff.corpcom.2')].filter(Boolean).join('<br/>')} width="w-full text-[7.5px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
          </GroupCard>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default StructureClient;
