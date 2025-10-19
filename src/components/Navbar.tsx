"use client";

import Image from "next/image";
import logo from "@/asstes/logo2.png";
import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { href: "#home", label: "Beranda", id: "home" },
  { href: "#layanan", label: "Layanan", id: "layanan" },
  { href: "#portofolio", label: "Portofolio", id: "portofolio" },
  { href: "#harga", label: "Harga", id: "harga" },
  { href: "#proses", label: "Proses", id: "proses" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#testimoni", label: "Testimoni", id: "testimoni" },
  { href: "#kontak", label: "Kontak", id: "kontak" },
];

export default function Navbar({ wa }: { wa: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const ids = useMemo(() => LINKS.map(l => l.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = (id: string) =>
    `rounded-full px-2.5 sm:px-3 py-1 text-sm font-medium transition ${
      active === id
        ? "text-sky-900 bg-sky-100/80"
        : "text-gray-700 hover:text-sky-900 hover:bg-sky-100/60"
    }`;

  return (
    <header className="fixed top-2 sm:top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative w-full flex items-center justify-between rounded-full bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur ring-1 ring-gray-200 shadow-lg px-3 py-2 md:px-4">
          <a href="#home" className="inline-flex items-center gap-2" aria-label="Beranda">
            <Image src={logo} alt="Printing" priority className="h-9 w-auto sm:h-10" />
          </a>

          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={linkCls(l.id)} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full ring-1 ring-gray-300 px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-sky-50"
            >
              Chat WA
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-300 bg-white text-gray-700"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {open && (
            <div className="absolute left-0 right-0 top-full mt-2 md:hidden">
              <div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-gray-200 shadow-lg p-2 grid grid-cols-2 gap-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium ${active === l.id ? "bg-sky-100 text-sky-900" : "text-gray-700 hover:bg-sky-50 hover:text-sky-900"}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
