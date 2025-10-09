import HeroSection from '@/components/sections/HeroSection';
import AboutQDCSection from '@/components/sections/AboutQDCSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EnterpriseProductsSection from '@/components/sections/EnterpriseProductsSection';
import CompetitiveAdvantageSection from '@/components/sections/CompetitiveAdvantageSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <LanguageSwitcher />
      <HeroSection />
      <AboutQDCSection />
      <ServicesSection />
      <EnterpriseProductsSection />
      <CompetitiveAdvantageSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
