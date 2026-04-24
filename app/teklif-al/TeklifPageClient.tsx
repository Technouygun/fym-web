"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Briefcase,
  ClipboardList,
  Phone,
  Send,
  CheckCircle2,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";

type FormData = {
  sirketAdi: string;
  isTanimi: string;
  beklenenHizmet: string;
  telefon: string;
};

const hizmetSecenekleri = [
  "Yangın Söndürme Eğitimi ve Tatbikatı",
  "İşaretçi - Sapancı Eğitimi",
  "Yüksekte Güvenli Çalışma Eğitimi",
  "EKED - LOTO Eğitimi",
  "İş Ekipmanları Güvenli Kullanma Eğitimi",
  "Üçüncü Göz",
  "Yangın ve Acil Durum Ekipmanları Danışmanlığı",
  "Fuar Kurulum – Söküm İSG Hizmetleri",
  "Diğer",
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpWithDelay: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <div className="mb-4 inline-flex items-center rounded-full border border-sky-100 bg-white/80 px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
        {badge}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUpWithDelay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_10px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_70px_rgba(14,165,233,0.18)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)] opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-cyan-100 text-sky-700 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={26} strokeWidth={2.1} />
        </div>

        <h3 className="text-lg font-bold leading-7 text-slate-900 md:text-xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeklifAlPage() {
  const [formData, setFormData] = useState<FormData>({
    sirketAdi: "",
    isTanimi: "",
    beklenenHizmet: "",
    telefon: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "telefon") {
      newValue = value.replace(/[^\d+]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (submitState !== "idle") {
      setSubmitState("idle");
      setSubmitMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.sirketAdi.trim()) {
      newErrors.sirketAdi = "Şirket adı zorunludur.";
    }

    if (!formData.isTanimi.trim()) {
      newErrors.isTanimi = "İş tanımı zorunludur.";
    }

    if (!formData.beklenenHizmet.trim()) {
      newErrors.beklenenHizmet = "Lütfen bir hizmet seçin.";
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = "Telefon numarası zorunludur.";
    } else if (formData.telefon.replace(/\s/g, "").length < 10) {
      newErrors.telefon = "Geçerli bir telefon numarası girin.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      setSubmitState("idle");
      setSubmitMessage("");

      const response = await fetch("/api/teklif-al", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Gönderim sırasında bir hata oluştu.");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Teklif talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz."
      );

      setFormData({
        sirketAdi: "",
        isTanimi: "",
        beklenenHizmet: "",
        telefon: "",
      });
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fcff_0%,#f6fbff_35%,#ffffff_100%)] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute right-[-100px] top-[420px] h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <section className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-12 lg:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
                <ShieldCheck size={16} />
                Profesyonel Teklif Süreci
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
                İşletmenize özel
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  hızlı teklif talebi
                </span>
                oluşturun
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                İhtiyacınız olan hizmeti kısa bilgilerle bize iletin. Talebinizi
                değerlendirip size en uygun hizmet planlaması için hızlı şekilde
                dönüş sağlayalım.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">4</div>
                  <div className="text-sm text-slate-500">Temel bilgi alanı</div>
                </div>

                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">Hızlı</div>
                  <div className="text-sm text-slate-500">Ön değerlendirme süreci</div>
                </div>

                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">Kurumsal</div>
                  <div className="text-sm text-slate-500">Net teklif yaklaşımı</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpWithDelay}
              initial="hidden"
              animate="show"
              custom={1}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_15px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%)]" />

                <div className="relative z-10 space-y-5">
                  <div className="rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                        <FileText size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Kısa ve net başvuru
                        </h3>
                        <p className="text-sm text-slate-500">
                          Şirket ve ihtiyaç bilgileriniz tek formda toplanır
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                        <Sparkles size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Hızlı değerlendirme
                        </h3>
                        <p className="text-sm text-slate-500">
                          İhtiyacınıza en uygun hizmet yapısı daha net belirlenir
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                        <Users size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Profesyonel geri dönüş
                        </h3>
                        <p className="text-sm text-slate-500">
                          Talebiniz sonrasında sizinle doğrudan iletişime geçilir
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <SectionHeader
            badge="Teklif Formu"
            title="Bilgilerinizi iletin, size uygun yapıyı oluşturalım"
            description="Şirket yapınıza, iş kapsamınıza ve ihtiyaç duyduğunuz hizmet modeline göre teklif sürecinizi profesyonel şekilde başlatalım."
          />

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <InfoCard
              index={0}
              icon={Building2}
              title="Şirket bilgisi"
              description="Talebinizi doğru değerlendirebilmemiz için işletme yapınızı temel düzeyde tanımlar."
            />

            <motion.div
              variants={fadeUpWithDelay}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-[0_10px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label
                    htmlFor="sirketAdi"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Şirket Adı
                  </label>
                  <div className="relative">
                    <Building2
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      id="sirketAdi"
                      name="sirketAdi"
                      type="text"
                      value={formData.sirketAdi}
                      onChange={handleChange}
                      placeholder="Örn. FYM Danışmanlık"
                      className="w-full rounded-2xl border border-sky-100 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>
                  {errors.sirketAdi && (
                    <p className="mt-2 text-sm text-red-600">{errors.sirketAdi}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="isTanimi"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    İş Tanımı
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="pointer-events-none absolute left-4 top-4 text-slate-400"
                      size={18}
                    />
                    <textarea
                      id="isTanimi"
                      name="isTanimi"
                      value={formData.isTanimi}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Yapılacak işin kapsamını, çalışma alanını ve ihtiyacınızı kısaca yazınız."
                      className="w-full rounded-2xl border border-sky-100 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>
                  {errors.isTanimi && (
                    <p className="mt-2 text-sm text-red-600">{errors.isTanimi}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="beklenenHizmet"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Beklenen Hizmet
                  </label>
                  <div className="relative">
                    <ClipboardList
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <select
                      id="beklenenHizmet"
                      name="beklenenHizmet"
                      value={formData.beklenenHizmet}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-2xl border border-sky-100 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    >
                      <option value="">Hizmet seçiniz</option>
                      {hizmetSecenekleri.map((hizmet) => (
                        <option key={hizmet} value={hizmet}>
                          {hizmet}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.beklenenHizmet && (
                    <p className="mt-2 text-sm text-red-600">{errors.beklenenHizmet}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Telefon
                  </label>
                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="05xxxxxxxxx"
                      className="w-full rounded-2xl border border-sky-100 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>
                  {errors.telefon && (
                    <p className="mt-2 text-sm text-red-600">{errors.telefon}</p>
                  )}
                </div>

                {submitState === "success" && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {submitMessage}
                  </div>
                )}

                {submitState === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={18} />
                  {isSubmitting ? "Gönderiliyor..." : "Teklif Al"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 pt-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[36px] border border-white/70 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-[0_20px_80px_rgba(2,6,23,0.35)] md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_28%)]" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
                Profesyonel teklif değerlendirme süreci
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                İhtiyacınıza uygun hizmet modelini birlikte netleştirelim
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                Form üzerinden ilettiğiniz bilgiler doğrultusunda işletmenize uygun
                yaklaşımı değerlendirip size en doğru hizmet planlaması ile dönüş
                sağlayabiliriz.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Hızlı talep toplama
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Kurumsal teklif akışı
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Profesyonel geri dönüş
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}