'use client';

import NavbarSection from '@/components/sections/NavbarSection';
import FooterSection from '@/components/sections/FooterSection';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('products.breadcrumb') as string }
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

      {/* Product Head Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
            {t('products.headline') as string}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t('products.subheadline') as string}
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => window.open('https://wa.me/+6282114929200', '_blank')}
            >
              {t('products.ctaButton') as string}
            </Button>
          </div>
        </div>
      </div>

      {/* QDC Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              {t('products.resources.title') as string}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              {t('products.resources.description') as string}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              {t('products.features.title') as string}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('products.features.description') as string}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Salary Schedule */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {t('products.features.salarySchedule.title') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('products.features.salarySchedule.description') as string}
              </p>
            </div>

            {/* Document Storage */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {t('products.features.documentStorage.title') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('products.features.documentStorage.description') as string}
              </p>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {t('products.features.attendanceTracking.title') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('products.features.attendanceTracking.description') as string}
              </p>
            </div>

            {/* Tax Management */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {t('products.features.taxManagement.title') as string}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('products.features.taxManagement.description') as string}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Summary */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('products.features.summary') as string}
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
