"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Award,
  Globe,
  Clock,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";



function Counter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const scrollToReference = () => {
      if (window.location.hash !== "#referanslar") return;

      const el = document.getElementById("referanslar");
      if (!el) return;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        window.innerHeight / 2 +
        el.offsetHeight / 2;

      setTimeout(() => {
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 150);
    };

    scrollToReference();

    window.addEventListener("hashchange", scrollToReference);
    return () => window.removeEventListener("hashchange", scrollToReference);
  }, []);

  useEffect(() => {
    let start = 0;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const referenceLogos = [
  "/ref1.png",
  "/ref2.jpg",
  "/ref3.svg",
  "/ref4.png",
  "/ref5.png",
  "/ref6.png",
  "/ref7.png",
  "/ref8.png",
  "/ref9.png",
  "/ref10.png",
  "/ref11.jpg",
];

const services = [
  {
    title: "Danışmanlık Hizmetlerimiz",
    description:
      "İşletmenizin ihtiyaçlarına özel, uygulanabilir ve profesyonel iş sağlığı ve güvenliği danışmanlığı sunuyoruz.",
    image: "/isg.jpg",
  },
  {
    title: "Saha Hizmetlerimiz",
    description:
      "Sahada riskleri yerinde değerlendiriyor, süreci kontrol altına alan güçlü ve gerçekçi çözümler sağlıyoruz.",
    image: "/isgsaha.jpg",
  },
  {
    title: "Uzmanlara Yönelik Hizmetlerimiz",
    description:
      "Profesyoneller için mevzuata uygun, geliştirici ve sahada karşılığı olan destek ve yönlendirme sunuyoruz.",
    image: "/hiz1.jpeg",
  },
];

const processSteps = [
  {
    title: "Tespit",
    text: "İşletmenizdeki riskleri, ihtiyaçları ve öncelikli alanları analiz ediyoruz.",
  },
  {
    title: "Planlama",
    text: "Firmanıza özel uygulanabilir yol haritası ve hizmet planı oluşturuyoruz.",
  },
  {
    title: "Uygulama",
    text: "Eğitim, saha desteği ve danışmanlık süreçlerini etkili şekilde devreye alıyoruz.",
  },
  {
    title: "Sürdürülebilir Takip",
    text: "Sürecin kalıcı olması için gelişimi izliyor, iyileştirme önerileri sunuyoruz.",
  },
];


export default function PageClient() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-24 text-gray-900">
      <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Kurumsal web sitesi ana görseli"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#27C1E6]/20 blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/90 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#7ee7ff]" />
              PROFESYONEL İSG ÇÖZÜMLERİ
            </div>

            <h1 className="text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
              İşletmeniz İçin
              <span className="mt-2 block text-[#6edfff] drop-shadow-[0_0_22px_rgba(39,193,230,0.65)]">
              Güvenli, Proaktif
              </span>
              <span className="block">Sürdürülebilir İSG Yanaşımları</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
              Eğitim, saha desteği ve danışmanlık hizmetleriyle işletmenizde iş
              güvenliği kültürünü güçlendiriyor; riskleri kaynağında tespit edip, 
              uygulanabilir ve profesyonel çözümlerle güvenliği ortamın sürekliliğini sağlıyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/hizmetler"
                className="group inline-flex items-center gap-2 rounded-full bg-[#27C1E6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(39,193,230,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#18b6de]"
              >
                Hizmetlerimizi İnceleyin
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <PhoneCall className="h-4 w-4" />
                İletişime Geçin
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#6edfff]" />
                Uygulanabilir çözümler
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#6edfff]" />
                Profesyonel saha yaklaşımı
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#6edfff]" />
                Güçlü kurumsal destek
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Odak Noktamız
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Güvenli ve sürdürülebilir işletmeler
                    </p>
                  </div>
                  <ShieldCheck className="h-10 w-10 text-[#7ee7ff]" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-extrabold text-white">
                      <Counter end={500} suffix="+" />
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Tamamlanan Proje
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-extrabold text-white">
                      <Counter end={40} suffix="+" />
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Şehirde Hizmet
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-extrabold text-white">
                      <Counter end={13} suffix="+" />
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      Yıl tecrübe
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-extrabold text-white">7/24</p>
                    <p className="mt-1 text-sm text-white/75">
                      Süreç desteği
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#27C1E6]/25 to-cyan-300/10 p-4">
                  <p className="text-sm leading-6 text-white/90">
                    İşiniz ve içiniz rahat olsun diye; eğitimden denetime,
                    danışmanlıktan saha desteğine kadar güçlü bir yapı
                    kuruyoruz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[28px] border border-gray-200 bg-white/90 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl p-4 transition duration-300 hover:bg-gray-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
              <ShieldCheck className="h-6 w-6 text-[#27C1E6]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Risk Odaklı Yaklaşım</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Sadece görünürdeki değil, işletmenizi etkileyen temel riskleri
                de ele alıyoruz.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl p-4 transition duration-300 hover:bg-gray-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
              <BadgeCheck className="h-6 w-6 text-[#27C1E6]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Kurumsal Standart</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                İşletmenize güven veren, profesyonel ve düzenli bir hizmet akışı
                oluşturuyoruz.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl p-4 transition duration-300 hover:bg-gray-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
              <Clock className="h-6 w-6 text-[#27C1E6]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Süreç Boyunca Destek</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Hizmet sonrası da yanında duran, erişilebilir bir iş ortaklığı
                sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#f6fbfd] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#27C1E6]/10 px-4 py-1.5 text-xs font-semibold text-[#27C1E6]">
              İSTATİSTİKLER
            </div>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Rakamlarla
              <span className="text-[#27C1E6]"> Gücümüz</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
              Tamamladığımız projeler, memnun müşterilerimiz ve yıllara dayanan
              tecrübemiz ile işletmelere sürdürülebilir ve etkili çözümler
              sunuyoruz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="group rounded-3xl border border-white bg-white/80 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                  <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/20 blur-md transition duration-300 group-hover:bg-[#27C1E6]/30" />
                  <Briefcase className="relative z-10 h-7 w-7 text-[#27C1E6]" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">
                    <Counter end={40} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    ŞEHİRDE
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
Türkiye genelinde aktif hizmet</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white bg-white/80 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                  <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/20 blur-md transition duration-300 group-hover:bg-[#27C1E6]/30" />
                  <Users className="relative z-10 h-7 w-7 text-[#27C1E6]" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">
                    <Counter end={100} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    TAHLİYE PLANI
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
Profesyonel planlama çözümleri</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white bg-white/80 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                  <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/20 blur-md transition duration-300 group-hover:bg-[#27C1E6]/30" />
                  <Award className="relative z-10 h-7 w-7 text-[#27C1E6]" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">
                    <Counter end={50} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    3. GÖZ
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
Bağımsız denetim hizmeti</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white bg-white/80 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                  <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/20 blur-md transition duration-300 group-hover:bg-[#27C1E6]/30" />
                  <Globe className="relative z-10 h-7 w-7 text-[#27C1E6]" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">
                    <Counter end={10.000} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    ÖĞRENCİ
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
Geniş katılımlı eğitimler</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white bg-white/80 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                  <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/20 blur-md transition duration-300 group-hover:bg-[#27C1E6]/30" />
                  <Globe className="relative z-10 h-7 w-7 text-[#27C1E6]" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">
                    <Counter end={30} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    AKTİF HİZMETLERİMİZ
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
Sürekli profesyonel destek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#27C1E6]/10 px-4 py-1.5 text-xs font-semibold text-[#27C1E6]">
              HİZMETLERİMİZ
            </div>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              İşiniz & İçiniz
              <span className="text-[#27C1E6]"> Rahat</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
              İşletmenizin ihtiyaç duyduğu alanlarda profesyonel, güven veren ve
              sahada karşılığı olan destekler sunuyoruz.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#27C1E6]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                <div className="relative p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27C1E6]/10">
                    <ShieldCheck className="h-6 w-6 text-[#27C1E6]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>

                  <Link
                    href="/hizmetler"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#27C1E6] transition duration-300 hover:gap-3"
                  >
                    Detayları görüntüle
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f8fcfe] to-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#27C1E6]/10 px-4 py-1.5 text-xs font-semibold text-[#27C1E6]">
              NASIL ÇALIŞIYORUZ
            </div>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Sistemli, Ölçülü ve
              <span className="text-[#27C1E6]"> Sonuç Odaklı</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
              Her işletmenin dinamiği farklıdır. Bu yüzden süreci standart değil,
              firmanıza özel ihtiyaçlara göre planlıyor ve yönetiyoruz.
            </p>

            <div className="mt-8 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-gray-600">
                Amacımız yalnızca bir hizmet vermek değil; işletmenizde güvenlik
                kültürünü güçlendiren, sürdürülebilir ve profesyonel bir yapı
                oluşturmaktır.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group flex gap-5 rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#27C1E6] text-lg font-extrabold text-white shadow-[0_12px_30px_rgba(39,193,230,0.28)]">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-[#07161d] via-[#0d2732] to-[#103746] px-8 py-14 shadow-[0_30px_100px_rgba(10,30,40,0.28)] lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#8ae9ff]">
                HEMEN BAŞLAYALIM
              </div>

              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                İşletmenizi daha güvenli ve daha güçlü hale getirelim.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/75 md:text-lg">
                Eğitim, danışmanlık ve saha çözümleri ile firmanız için doğru
                yapıyı birlikte oluşturalım.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full bg-[#27C1E6] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#18b6de]"
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Hizmetleri Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="referanslar" className="overflow-hidden bg-white py-24">
        <div className="mx-auto mb-16 max-w-3xl px-6 text-center lg:px-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#27C1E6]/10 px-4 py-1.5 text-xs font-semibold text-[#27C1E6]">
            REFERANSLAR
          </div>

          <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            Güvenilen Markalarla
            <span className="text-[#27C1E6]"> Çalışıyoruz</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
            Farklı sektörlerden markalarla kurduğumuz iş birlikleriyle güçlü ve
            sürdürülebilir projeler geliştiriyoruz.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee gap-16 px-6">
            {[...referenceLogos, ...referenceLogos].map((logo, index) => (
              <div
                key={index}
                className="flex h-24 w-[180px] shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-4 grayscale opacity-70 shadow-sm transition duration-300 hover:-translate-y-1 hover:grayscale-0 hover:opacity-100 hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt={`Referans logo ${index + 1}`}
                  width={160}
                  height={72}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-b from-white to-[#f7fbfd] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#27C1E6]/10 px-4 py-1.5 text-xs font-semibold text-[#27C1E6]">
              SOSYAL MEDYA
            </div>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Bizi
              <span className="text-[#27C1E6]"> Takip Edin</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
              Güncel paylaşımlarımız, eğitim içeriklerimiz ve projelerimiz için
              sosyal medya hesaplarımızı takip edebilirsiniz.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://www.instagram.com/fymdanismanlik/"
              target="_blank"
              className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#27C1E6]/30 hover:shadow-lg"
            >
              <svg
                className="h-7 w-7 text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-[#27C1E6]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </Link>

            <Link
              href="https://tr.linkedin.com/in/fym-danismanlik"
              target="_blank"
              className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#27C1E6]/30 hover:shadow-lg"
            >
              <svg
                className="h-7 w-7 text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-[#27C1E6]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6v10h-4v-9c0-2.2 0-5-3-5s-3.5 2.3-3.5 4.8V24h-4V8z" />
              </svg>
            </Link>

            <Link
              href="https://www.youtube.com/@iguozkancoskun"
              target="_blank"
              className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#27C1E6]/30 hover:shadow-lg"
            >
              <svg
                className="h-7 w-7 text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-[#27C1E6]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.7a2.9 2.9 0 00-2 2A30.6 30.6 0 000 12a30.6 30.6 0 00.5 5.8 2.9 2.9 0 002 2c1.8.7 9.5.7 9.5.7s7.7 0 9.5-.7a2.9 2.9 0 002-2A30.6 30.6 0 0024 12a30.6 30.6 0 00-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}