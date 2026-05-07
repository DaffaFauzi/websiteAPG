import type { Metadata } from 'next';
import IntroSection from '@/components/sections/IntroSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import KeyMetricsSection from '@/components/sections/KeyMetricsSection';
import EcosystemSnapshotSection from '@/components/sections/EcosystemSnapshotSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import SubsidiariesShowcaseSection from '@/components/sections/SubsidiariesShowcaseSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import InsightsSection from '@/components/sections/InsightsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import GallerySection from '@/components/sections/GallerySection';
import FooterSection from '@/components/sections/FooterSection';


export default function Home() {
  return (
    <main className="min-h-screen relative bg-[var(--background)] text-[var(--foreground)]">
      <div className="scroll-section" data-scroll-section>
        <IntroSection />
      </div>
      <div className="relative rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-slate-50 overflow-hidden">
        <div className="scroll-section" data-scroll-section>
          <AboutPreviewSection />
        </div>
        <div className="scroll-section" data-scroll-section>
          <WhyChooseUsSection />
        </div>
        <div className="scroll-section" data-scroll-section>
          <SubsidiariesShowcaseSection />
        </div>
        <div className="scroll-section" data-scroll-section>
          <LeadershipSection />
        </div>
        <div className="scroll-section" data-scroll-section>
          <FinalCTASection />
        </div>
        <div className="scroll-section" data-scroll-section>
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
