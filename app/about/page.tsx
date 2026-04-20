import type { Metadata } from "next";
import HakkimizdaPageClient from "./HakkimizdaPageClient";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description:
    "FYM Danışmanlık hizmetleri: iş güvenliği eğitimleri, danışmanlık, üçüncü göz uygulamaları ve sahaya özel profesyonel destek çözümleri.",
  alternates: {
    canonical: "/about",
  },
};

export default function HizmetlerPage() {
  return <HakkimizdaPageClient />;
}