"use client";

import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Flame,
  HardHat,
  Construction,
  Lock,
  Wrench,
  Eye,
  LifeBuoy,
  AlertTriangle,
  PanelsTopLeft,
  Book,
  Bell,
  Scale,
  Shield,
  Presentation,
} from "lucide-react";


const consultingServices = [
  {
    title: "ÜÇÜNCÜ GÖZ",
    description:
      "İşletmelerde mevcut sistemi dışarıdan, tarafsız ve profesyonel bir bakış açısıyla yürürlükteki mevzuatlara ve işletmenin ve çalışanlarının sağlık ve güvenliğine uygunluğunu değerlendiren.",
    icon: Eye,
  },
  {
    title: "İş İzinleri Eğitimi",
    description:
      "İşletmelerde iş izinlerinin kurulum ve takip süreçlerinin organizasyonu ve uygulamaları.",
    icon: Book,
  },
  {
    title: "Özel Gruplar ve Acil Durum Uygulamaları",
    description:
      "Özel politika gerektiren gebe, yaşlı, çocuk ve engelliler için acil durum planlamaları ve uygulamaları.",
    icon: Bell,
  },
  {
    title: "İş Hukuku Hizmetleri",
    description:
      "Adli Bilirkişi gözüyle işletmelerde işveren ve çalışanların iş hukuku açısından görev sorumluluk ve yükümlülüklerinin bilgilendirilmesi.",
    icon: Scale,
  },
  {
    title: "Öz Denetim",
    description:
      "İşyerlerinin kendi profesyonelleri ile yürürlükteki mevzuatlara uygun şekilde öz denetimlerini yapabilecekleri sistemlerin oluşturulması.",
    icon: Shield,
  },
];

const educationServices = [
  {
    title: "YANGIN SÖNDÜRME EĞİTİMİ VE TATBİKATI",
    description:
      "İşletmeler için teorik ve uygulamalı yangın farkındalığı, müdahale prosedürleri ve saha tatbikat süreçleri.",
    icon: Flame,
  },
  {
    title: "İŞARETÇİ - SAPANCI EĞİTİMİ",
    description:
      "Yük kaldırma, yönlendirme ve güvenli koordinasyon süreçlerine yönelik saha odaklı eğitim altyapısı.",
    icon: HardHat,
  },
  {
    title: "YÜKSEKTE GÜVENLİ ÇALIŞMA EĞİTİMİ",
    description:
      "Yüksekte çalışma riskleri, ekipman kullanımı, önleyici tedbirler ve güvenli çalışma kültürü odaklı içerik.",
    icon: Construction,
  },
  {
    title: "EKED - LOTO EĞİTİMİ",
    description:
      "Tehlikeli enerjinin kontrolü, kilitleme-etiketleme prosedürleri ve güvenli bakım süreçlerine yönelik eğitim.",
    icon: Lock,
  },
  {
    title: "İŞ EKİPMANLARI GÜVENLİ KULLANMA EĞİTİMİ",
    description:
      "İş ekipmanlarının güvenli kullanımı, operasyonel farkındalık ve uygulamada hata risklerini azaltmaya yönelik yapı.",
    icon: Wrench,
  },
];



const supportServices = [
  {
    title: "Tahliye Planı Hazırlama",
    description:
      "İşyerlerinde acil durumlar hakkında yönetmelik ve binaların yangından korunması hakkındaki yönetmelikler ışığında 23601 ve 7010 sayılı standartlara uygun yerinde tespit ile tahliye planı hazırlama.",
    icon: Presentation,
  },


  {
    title: "YANGIN VE ACİL DURUM EKİPMANLARI VE LEVHALARI KURULUM DANIŞMANLIĞI",
    description:
      "Saha ihtiyaçlarına uygun ekipman, yönlendirme ve acil durum levhalarının doğru konumlandırılması için rehberlik.",
    icon: AlertTriangle,
  },
  {
    title: "FUAR KURULUM – SÖKÜM İSG HİZMETLERİ",
    description:
      "Kurulum ve söküm süreçlerinde sahaya özel iş sağlığı ve güvenliği desteği, risk kontrolü ve operasyon takibi.",
    icon: PanelsTopLeft,
  },
   
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

function ServiceCard({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
}) {
  const Icon = item.icon;

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
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {item.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-700">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          Profesyonel hizmet alanı
        </div>
      </div>
    </motion.div>
  );
}

export default function HizmetlerPageClient() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fcff_0%,#f6fbff_35%,#ffffff_100%)] text-slate-900">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute right-[-100px] top-[420px] h-[300px] w-[300px] rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-12 lg:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
                <ShieldCheck size={16} />
                Profesyonel Hizmet Çözümleri
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]">
                İşletmenize özel
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  eğitim, danışmanlık ve destek
                </span>
                çözümleri
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Saha gerçeklerine uygun, uygulanabilir ve kurumsal düzeyde
                kurgulanmış hizmet yapımız ile işletmelerin iş sağlığı ve
                güvenliği süreçlerine profesyonel katkı sunuyoruz.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">3</div>
                  <div className="text-sm text-slate-500">Ana hizmet grubu</div>
                </div>

                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">10+</div>
                  <div className="text-sm text-slate-500">
                    Yapılandırılmış hizmet başlığı
                  </div>
                </div>

                <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">360°</div>
                  <div className="text-sm text-slate-500">
                    Bütüncül güvenlik yaklaşımı
                  </div>
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
                        <Eye size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Danışmanlık
                        </h3>
                        <p className="text-sm text-slate-500">
                          Tarafsız değerlendirme ve profesyonel rehberlik
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                        <GraduationCap size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Eğitimler
                        </h3>
                        <p className="text-sm text-slate-500">
                          Uygulamalı ve farkındalık odaklı içerikler
                        </p>
                      </div>
                    </div>
                  </div>

              
                  <div className="rounded-3xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                        <LifeBuoy size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Destek
                        </h3>
                        <p className="text-sm text-slate-500">
                          Sahada uygulanabilir tamamlayıcı çözümler
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


  {/* Danışmanlık */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <SectionHeader
            badge="Danışmanlık"
            title="Tarafsız ve stratejik bakış"
            description="Mevcut işleyişi profesyonel bir perspektifle değerlendirerek gelişim alanlarını görünür hale getiren danışmanlık yaklaşımı."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {consultingServices.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Eğitimler */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <SectionHeader
            badge="Eğitimler"
            title="Kurumsal eğitim yapımız"
            description="Çalışan farkındalığını güçlendiren, saha gerçeklerine uyarlanabilen ve iş güvenliği kültürünü destekleyen profesyonel eğitim çözümleri."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {educationServices.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

    

      {/* Destek */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <SectionHeader
            badge="Destek"
            title="Sahaya dokunan tamamlayıcı hizmetler"
            description="Kurulum, yönlendirme, organizasyon ve operasyonel süreçlerde iş güvenliğini destekleyen uygulamaya dönük profesyonel çözümler."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportServices.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
                Güvenli çalışma kültürü için profesyonel yaklaşım
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                İşletmenize uygun hizmet modelini birlikte şekillendirelim
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                Bu alanı istersen daha sonra teklif çağrısı, iletişim yönlendirmesi
                veya hizmet özeti olarak da düzenleyebiliriz.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Eğitim çözümleri
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Danışmanlık yaklaşımı
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100">
                  Saha destek hizmetleri
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}