import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function IletisimPageClient() {
  const whatsappMessage = encodeURIComponent(
    "Merhaba, FYM Danışmanlık ile iletişime geçmek istiyorum."
  );

  const whatsappLink = `https://wa.me/905055783033?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-white text-gray-800">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-70" />
          <div className="absolute right-[-60px] bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
              İletişim
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Bizimle <span className="text-[#27C1E6]">iletişime</span> geçin
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Sorularınız ve danışmanlık talepleriniz için bizimle WhatsApp üzerinden hemen iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-12">
          <div className="space-y-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Phone size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                <p className="mt-2 text-gray-600">+90 505 578 30 33</p>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Mail size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">E-posta</h3>
                <p className="mt-2 text-gray-600">info@fymdanismanlik.com</p>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <MapPin size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Adres</h3>
                <p className="mt-2 text-gray-600">İstanbul, Türkiye</p>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Clock size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Çalışma Saatleri</h3>
                <p className="mt-2 text-gray-600">Pzt - Cmt / 09:00 - 18:00</p>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)]">
              <h3 className="text-xl font-semibold text-gray-900">Sosyal Medya</h3>
              <p className="mt-2 text-gray-600">
                Bizi sosyal medyada da takip edebilirsiniz.
              </p>

               <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
      {/* Instagram */}
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

      {/* LinkedIn */}
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

      {/* YouTube */}
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
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(2,132,199,0.08)] md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">WhatsApp ile Ulaşın</h2>
            <p className="mt-2 text-gray-600">
              Hızlı iletişim için WhatsApp üzerinden bize yazabilirsiniz.
            </p>

            <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg">
                  <MessageCircle size={28} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    WhatsApp Destek Hattı
                  </h3>
                  <p className="text-gray-600">+90 505 578 30 33</p>
                </div>
              </div>

              <Link
                href={whatsappLink}
                target="_blank"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-600"
              >
                WhatsApp’tan Mesaj Gönder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}