import NavbarSection from '@/components/sections/NavbarSection';
import FooterSection from '@/components/sections/FooterSection';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: 'Products' }
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

      {/* Products Content - To be implemented later */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Enterprise Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive enterprise software solutions are designed to transform your business operations with cutting-edge technology and unparalleled efficiency.
          </p>
          <div className="mt-8 text-gray-500">
            <p>Products page content will be implemented here.</p>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
