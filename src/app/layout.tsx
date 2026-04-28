import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NavbarSection from "@/components/sections/NavbarSection";
import AIAssistant from "@/components/ui/AIAssistant";
import PageTransition from "@/components/ui/PageTransition";
import SplashScreen from "@/components/ui/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ardanaperkasagroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ardana Perkasa Group (APG)",
    template: "%s | Ardana Perkasa Group",
  },
  description:
    "Ardana Perkasa Group (APG) adalah holding company yang membangun ekosistem bisnis lintas sektor dengan tata kelola kuat, eksekusi disiplin, dan strategi berkelanjutan.",
  keywords: [
    "Ardana Perkasa Group",
    "APG",
    "holding company",
    "tata kelola",
    "portfolio management",
    "risk & governance",
    "konsultasi",
    "enterprise",
  ],
  openGraph: {
    type: "website",
    siteName: "Ardana Perkasa Group",
    title: "Ardana Perkasa Group (APG)",
    description:
      "Holding company yang membangun ekosistem lintas sektor dengan standar enterprise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardana Perkasa Group (APG)",
    description:
      "Holding company yang membangun ekosistem lintas sektor dengan standar enterprise.",
  },
  icons: {
    icon: "/favicon.ico",
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
