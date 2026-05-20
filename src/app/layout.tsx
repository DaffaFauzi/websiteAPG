import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NavbarSection from "@/components/sections/NavbarSection";
import AIAssistant from "@/components/ui/AIAssistant";
import PageTransition from "@/components/ui/PageTransition";
import SplashScreen from "@/components/ui/SplashScreen";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ardanaperkasagroup.com";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: './',
  },
  title: {
    default: "Ardana Perkasa Group (APG) - National Holding Company",
    template: "%s | Ardana Perkasa Group",
  },
  description:
    "Ardana Perkasa Group (APG) adalah holding company berskala nasional yang membangun ekosistem bisnis lintas sektor dengan standar tata kelola enterprise yang kuat, eksekusi disiplin, dan strategi berkelanjutan.",
  keywords: [
    "Ardana Perkasa Group",
    "APG",
    "holding company indonesia",
    "tata kelola",
    "portfolio management",
    "risk & governance",
    "konsultasi manajemen",
    "enterprise solutions",
  ],
  authors: [{ name: "Ardana Perkasa Group" }],
  creator: "Ardana Perkasa Group",
  publisher: "Ardana Perkasa Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Ardana Perkasa Group",
    title: "Ardana Perkasa Group (APG) - National Holding Company",
    description:
      "Holding company yang membangun ekosistem bisnis lintas sektor dengan standar enterprise dan strategi berkelanjutan.",
    images: [
      {
        url: "/images/og-apg-fallback.jpg", // The temporary enterprise-safe APG branded fallback
        width: 1200,
        height: 630,
        alt: "Ardana Perkasa Group - National Holding Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardana Perkasa Group (APG) - National Holding Company",
    description:
      "Holding company yang membangun ekosistem bisnis lintas sektor dengan standar enterprise dan strategi berkelanjutan.",
    images: ["/images/og-apg-fallback.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/apgg.png", sizes: "32x32", type: "image/png" },
      { url: "/images/apgg.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/apgg.png" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <JsonLd />
        <LanguageProvider>
          <SplashScreen>
            <NavbarSection />
            <AIAssistant />
            <PageTransition>{children}</PageTransition>
          </SplashScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
