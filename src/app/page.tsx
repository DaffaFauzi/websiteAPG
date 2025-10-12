import NavbarSection from '@/components/sections/NavbarSection';
import HeroSection from '@/components/sections/HeroSection';
import BusinessStrategySection from '@/components/sections/BusinessStrategySection';
import AboutQDCSection from '@/components/sections/AboutQDCSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EnterpriseProductsSection from '@/components/sections/EnterpriseProductsSection';
import CompetitiveAdvantageSection from '@/components/sections/CompetitiveAdvantageSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NavbarSection />
      <HeroSection />
      <BusinessStrategySection />
      {/* <AboutQDCSection /> */}
      {/* <ServicesSection /> */}
      {/* <EnterpriseProductsSection /> */}
      {/* <CompetitiveAdvantageSection /> */}
      <FAQSection />
      <FooterSection />
    </main>
  );
}
