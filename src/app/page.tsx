import HeroSection from '@/components/sections/HeroSection';
import { heroData } from '@/constants/heroData';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection data={heroData} />
    </main>
  );
}
