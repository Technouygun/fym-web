import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.fymdanismanlik.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FYM Danışmanlık | İş Sağlığı ve Güvenliği Eğitim ve Danışmanlık",
    template: "%s | FYM Danışmanlık",
  },
  description:
    "FYM Danışmanlık; iş sağlığı ve güvenliği alanında eğitim, denetim, üçüncü göz uygulamaları ve profesyonel danışmanlık hizmetleri sunar.",
  keywords: [
    "FYM Danışmanlık",
    "iş sağlığı ve güvenliği",
    "iş güvenliği danışmanlık",
    "isg eğitimi",
    "yangın söndürme eğitimi",
    "yüksekte güvenli çalışma eğitimi",
    "işaretçi sapancı eğitimi",
    "eked loto eğitimi",
    "iş ekipmanları güvenli kullanma eğitimi",
    "üçüncü göz uygulaması",
    "yangın ve acil durum danışmanlığı",
    "fuar kurulum söküm isg hizmetleri",
  ],
  authors: [{ name: "FYM Danışmanlık" }],
  creator: "FYM Danışmanlık",
  publisher: "FYM Danışmanlık",
  applicationName: "FYM Danışmanlık",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FYM Danışmanlık | İş Sağlığı ve Güvenliği Eğitim ve Danışmanlık",
    description:
      "İş sağlığı ve güvenliği alanında profesyonel eğitim, denetim ve danışmanlık hizmetleri.",
    url: siteUrl,
    siteName: "FYM Danışmanlık",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "FYM Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FYM Danışmanlık | İş Sağlığı ve Güvenliği Eğitim ve Danışmanlık",
    description:
      "İş sağlığı ve güvenliği alanında profesyonel eğitim, denetim ve danışmanlık hizmetleri.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FYM Danışmanlık",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: "info@fymdanismanlik.com",
    telephone: "+90 505 578 30 33",
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FYM Danışmanlık",
    image: `${siteUrl}/opengraph-image.jpg`,
    url: siteUrl,
    email: "info@fymdanismanlik.com",
    telephone: "+90 505 578 30 33",
    areaServed: "TR",
    priceRange: "₺₺",
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
        >
          Ana içeriğe geç
        </a>

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}