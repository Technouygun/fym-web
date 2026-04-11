import type { Metadata } from "next";
import IletisimPageClient from "./IletisimPageClient";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "FYM Danışmanlık hizmetleri: iş güvenliği eğitimleri, danışmanlık, üçüncü göz uygulamaları ve sahaya özel profesyonel destek çözümleri.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimPage() {
  return <IletisimPageClient />;
}