import HeroSection from '@/components/sections/HeroSection';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
    </main>
  );
}
