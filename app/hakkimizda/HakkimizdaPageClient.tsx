"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Briefcase, LifeBuoy, Eye, BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const services = [
  {
    title: "Eğitimlerimiz",
    description:
      "Çalışanlara anlaşılır, etkili ve geri dönüş alınabilir üst düzey iş sağlığı ve güvenliği eğitimleri sunuyoruz.",
    icon: GraduationCap,
  },
  {
    title: "Danışmanlık",
    description:
      "İşletmelere özel analizler, uygulanabilir çözümler ve profesyonel iş güvenliği danışmanlığı sağlıyoruz.",
    icon: Briefcase,
  },
  {
    title: "Destek",
    description:
      "Süreçlerin her aşamasında işletmelere rehberlik ederek sürdürülebilir iş güvenliği kültürü oluşturuyoruz.",
    icon: LifeBuoy,
  },
];

const features = [
  "Tarafsız ve profesyonel değerlendirme",
  "Uygulanabilir ve sahaya uygun öneriler",
  "İşletmeye özel risk analizi yaklaşımı",
  "Çalışan odaklı güvenlik kültürü",
];

export default function HizmetlerPageClient() {
  return (
    <main className="bg-white text-slate-800 overflow-hidden">
      {/* HERO */}
      <section className="relative isolate min-h-[88vh] flex items-center bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.14),transparent_35%),linear-gradient(135deg,#0f172a_0%,#111827_40%,#1e293b_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
              >
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Profesyonel Eğitim • Denetim • Danışmanlık
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl"
              >
                Güvenli çalışma kültürünü
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                  profesyonel bakış açısıyla güçlendiriyoruz
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Önceliği çalışanlarının sağlığını ve güvenliğini korumak, sonrasında
                işletmelerin güvenliğini sağlamak olan firmalara profesyonel düzeyde
                eğitim, denetim ve danışmanlık hizmetleri sunuyoruz.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/iletisim"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.03] hover:bg-cyan-300"
                >
                  Bizimle İletişime Geçin
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/hizmetler"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Hizmetlerimizi İnceleyin
                </Link>
              </motion.div>
            </div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-white/95 p-6 text-slate-800 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
                        <BadgeCheck className="h-6 w-6 text-cyan-700" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Yaklaşımımız</p>
                        <h3 className="text-xl font-bold">Sadece tespit değil, uygulanabilir çözüm</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600 leading-7">
                      Riskleri yalnızca belirlemekle kalmıyor, işletmeler için sahada
                      karşılığı olan uygulanabilir öneriler sunuyoruz.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-white">
                      <h4 className="text-lg font-semibold">Tarafsız Bakış</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Süreçlerinizi dış gözle değerlendirerek objektif sonuçlar sunarız.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-white">
                      <h4 className="text-lg font-semibold">Güvenlik Kültürü</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Çalışanlarda kalıcı iş güvenliği farkındalığı oluşturmayı hedefleriz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Hakkımızda
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                İşletmeler için güvenliği,
                <span className="text-cyan-600"> çalışanlar için farkındalığı </span>
                güçlendiriyoruz
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Çalışanlara anlaşılır ve geri dönüş alınabilir üst düzey eğitimlerle
                  iş güvenliği bilincinin işletme kültürünün bir parçası haline gelmesini
                  amaçlıyoruz.
                </p>
                <p>
                  İşletmelerde çalışanların sağlığını ve güvenliğini etkileyebilecek
                  riskleri belirleyerek, uygun yöntemlerle daha güvenli hale gelmeleri
                  için uygulanabilir öneriler sunuyoruz.
                </p>
                <p>
                  Bağımsız değerlendirme yaklaşımımız sayesinde firmalara mevcut
                  durumlarını daha net görme, eksik alanlarını tespit etme ve iş sağlığı
                  ve güvenliği açısından daha sağlam adımlar atma fırsatı sağlıyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-2xl font-bold text-slate-900">Neden Biz?</h3>
              <div className="mt-6 space-y-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                      <BadgeCheck className="h-4 w-4 text-cyan-700" />
                    </div>
                    <p className="text-slate-600 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Hizmetlerimiz
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900">
              İşletmenize değer katan profesyonel çözümler
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  custom={index + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-[28px] bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:bg-cyan-500">
                    <Icon className="h-7 w-7 text-cyan-700 transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GÖZ ÖZEL ALAN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8 md:p-12 text-white shadow-[0_30px_100px_rgba(8,15,30,0.35)]"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                  <Eye className="h-8 w-8 text-cyan-300" />
                </div>
                <h2 className="mt-6 text-3xl md:text-5xl font-black leading-tight">
                  3. Göz Uygulaması
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  İş güvenliği hizmeti alıyor olsanız bile, süreçlerinizi tarafsız ve
                  profesyonel bir ekip tarafından yeniden değerlendiriyoruz.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">Tarafsız Yeterlilik Raporu</h3>
                  <p className="mt-2 text-slate-300 leading-7">
                    Mevcut iş güvenliği hizmetinizin yeterliliğini objektif şekilde analiz eder,
                    güçlü ve gelişime açık yönleri raporlarız.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">Bağımsız Risk Değerlendirmesi</h3>
                  <p className="mt-2 text-slate-300 leading-7">
                    İşletmenizin iş sağlığı ve güvenliği açısından mevcut durumunu
                    bağımsız risk değerlendirmesiyle ortaya koyarız.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">Net ve Uygulanabilir Sonuçlar</h3>
                  <p className="mt-2 text-slate-300 leading-7">
                    Sadece teorik tespitler değil, sahada uygulanabilecek net öneriler
                    sunarak dönüşüm sürecini hızlandırırız.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-8 md:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                  Birlikte Çalışalım
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">
                  İşletmenizin güvenlik süreçlerini daha güçlü hale getirelim
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Eğitim, danışmanlık, destek ve bağımsız değerlendirme hizmetlerimizle
                  işletmenize profesyonel katkı sunmak için hazırız.
                </p>
              </div>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:scale-[1.03] hover:bg-cyan-600"
              >
                Hemen İletişime Geçin
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}