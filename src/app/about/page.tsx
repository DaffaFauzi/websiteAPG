import NavbarSection from '@/components/sections/NavbarSection';
import FooterSection from '@/components/sections/FooterSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  return (
    <main className="min-h-screen relative">
      <NavbarSection />

      {/* Breadcrumb */}
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* About Section */}
      <AboutUsSection />

      <FooterSection />
    </main>
  );
}
