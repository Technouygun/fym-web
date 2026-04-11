import type { Metadata } from "next";
import HizmetlerPageClient from "./HizmetlerPageClient";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "FYM Danışmanlık hizmetleri: iş güvenliği eğitimleri, danışmanlık, üçüncü göz uygulamaları ve sahaya özel profesyonel destek çözümleri.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return <HizmetlerPageClient />;
}