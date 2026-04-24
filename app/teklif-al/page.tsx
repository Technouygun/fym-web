import type { Metadata } from "next";
import TeklifPageClient from "./TeklifPageClient";

export const metadata: Metadata = {
  title: "Teklif Al",
  description:
    "FYM Danışmanlık hizmetleri: iş güvenliği eğitimleri, danışmanlık, üçüncü göz uygulamaları ve sahaya özel profesyonel destek çözümleri.",
  alternates: {
    canonical: "/teklif",
  },
};

export default function IletisimPage() {
  return <TeklifPageClient />;
}