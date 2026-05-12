import IntroSection from '@/components/sections/IntroSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import BusinessFocusSection from '@/components/sections/BusinessFocusSection';
import SubsidiariesShowcaseSection from '@/components/sections/SubsidiariesShowcaseSection';
import ProcessSection from '@/components/sections/TrustSection';
import InsightsSection from '@/components/sections/InsightsSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FooterSection from '@/components/sections/FooterSection';


export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 text-[var(--foreground)]">
      <IntroSection />
      <WhyChooseUsSection variant="home" />
      <AboutPreviewSection />
      <BusinessFocusSection />
      <SubsidiariesShowcaseSection />
      <ProcessSection />
      <InsightsSection />
      <LeadershipSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
}
