"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Referanslar", href: "/#referanslar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const scrollToReferences = () => {
    const el = document.getElementById("referanslar");
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 2 +
      el.offsetHeight / 2;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleReferenceClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === "/") {
      scrollToReferences();
      return;
    }

    router.push("/#referanslar");
  };

  const navbarClasses = useMemo(() => {
    return scrolled
      ? "border-white/60 bg-white/78 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
      : "border-white/30 bg-white/55 backdrop-blur-xl";
  }, [scrolled]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-5">
        <div
          className={`mx-auto max-w-7xl rounded-[24px] border transition-all duration-300 ${navbarClasses}`}
        >
          <div className="flex h-20 items-center justify-between px-5 lg:px-8">
            <Link
              href="/"
              className="group relative flex shrink-0 items-center"
              aria-label="FYM Danışmanlık Ana Sayfa"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#27C1E6]/0 blur-xl transition duration-300 group-hover:bg-[#27C1E6]/10" />
              <Image
                src="/fymlogo.png"
                alt="FYM Logo"
                width={300}
                height={70}
                priority
                className="relative h-12 w-auto object-contain md:h-14"
              />
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isReference = item.href === "/#referanslar";
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : isReference
                    ? false
                    : pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={isReference ? handleReferenceClick : undefined}
                    className={`group relative inline-flex items-center rounded-full px-5 py-3 text-[15px] font-semibold tracking-[0.01em] transition-all duration-300 ${
                      isActive
                        ? "bg-[#27C1E6]/10 text-[#119fc4]"
                        : "text-gray-800 hover:bg-white/70 hover:text-black"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    <span
                      className={`absolute bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-[#27C1E6]"
                          : "w-0 bg-[#27C1E6] group-hover:w-8"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 rounded-full bg-[#27C1E6] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(39,193,230,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#18b6de]"
              >
                Bize Ulaşın
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition duration-300 hover:bg-white md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              mobileOpen ? "max-h-[420px] pb-5 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-4 space-y-2 rounded-[22px] border border-white/50 bg-white/70 p-3 backdrop-blur-xl">
              {navItems.map((item) => {
                const isReference = item.href === "/#referanslar";
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : isReference
                    ? false
                    : pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={isReference ? handleReferenceClick : () => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                      isActive
                        ? "bg-[#27C1E6]/10 text-[#119fc4]"
                        : "text-gray-800 hover:bg-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-70" />
                  </Link>
                );
              })}

              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#27C1E6] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(39,193,230,0.24)] transition duration-300 hover:bg-[#18b6de]"
              >
                Bize Ulaşın
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}