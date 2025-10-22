"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import CarouselControls from "@/components/CarouselControls";

type Item = {
  id: string;
  title: string;
  price: string;
  img: string;
  desc: string;
  tags: string[];
  label?: string;
  category: "Large" | "Merch" | "Print";
};

const ITEMS: Item[] = [
  { id: "banner", title: "Banner & Spanduk", price: "Mulai Rp25.000", img: "/cat-large.svg", desc: "Bahan tebal, warna tajam, cocok untuk promo.", tags: ["Vinyl", "Eyelets", "Full color"], label: "Popular", category: "Large" },
  { id: "mmt", title: "MMT / Indoor-Outdoor", price: "Mulai Rp30.000/m2", img: "/cat-large.svg", desc: "Backdrop, booth, dan signage.", tags: ["Indoor/Outdoor", "Tahan cuaca", "High-res"], label: "Best Value", category: "Large" },
  { id: "pin", title: "Pin Gantungan Kunci", price: "Mulai Rp10.000", img: "/cat-merch.svg", desc: "Merchandise lucu untuk komunitas & brand.", tags: ["Cetak custom", "Banyak varian", "Warna cerah"], label: "Custom", category: "Merch" },
  { id: "stiker", title: "Stiker", price: "Mulai Rp5.000", img: "/cat-merch.svg", desc: "Vinyl waterproof, bisa die-cut.", tags: ["Vinyl", "Waterproof", "Die-cut"], label: "Hemat", category: "Merch" },
  { id: "kartunama", title: "Kartu Nama", price: "Mulai Rp35.000", img: "/cat-print.svg", desc: "Art carton, laminasi doff/glossy.", tags: ["Art carton", "Laminasi", "Full color"], label: "Favorit", category: "Print" },
  { id: "poster", title: "Poster", price: "Mulai Rp20.000", img: "/cat-print.svg", desc: "A3/A2/A1, warna tajam.", tags: ["A3/A2/A1", "Full color", "Kertas tebal"], label: "Baru", category: "Print" },
];

const CATS = [
  { key: "Large" as const, name: "Large Format" },
  { key: "Merch" as const, name: "Merchandise" },
  { key: "Print" as const, name: "Print Umum" },
];

export default function LayananTabsCarousel() {
  const [active, setActive] = useState<"Large" | "Merch" | "Print">("Large");
  const items = useMemo(() => ITEMS.filter(i => i.category === active), [active]);
  const waFor = (title: string) =>
    `https://wa.me/6285701100111?text=${encodeURIComponent(
      `Halo! Saya tertarik ${title}. Boleh info lebih lanjut?`
    )}`;

  const Icon = ({ cat }: { cat: Item["category"] }) => {
    // Minimal inline icons per category to avoid external deps
    if (cat === "Large") {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10" />
        </svg>
      );
    }
    if (cat === "Merch") {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    // Print
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 9V2h12v7" />
        <rect x="6" y="13" width="12" height="8" rx="2" />
        <path d="M6 13h12" />
      </svg>
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {CATS.map(c => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={`rounded-full text-xs font-semibold ring-1 px-3 py-1 transition ${active === c.key ? "bg-sky-600 text-white ring-sky-700" : "bg-white/80 text-gray-700 ring-gray-200 hover:bg-white"}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="relative mt-4 layanan-carousel">
        <div id="layanan-scroll" className="flex gap-6 overflow-x-auto overflow-y-visible pt-2 pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing px-4 lg:px-6">
          {items.map((card) => (
            <div key={card.id} className="snap-start shrink-0 min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative rounded-2xl bg-white/90 p-6 backdrop-blur">
                {card.label && (
                  <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">{card.label}</span>
                )}
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow">
                    <Icon cat={card.category} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-xs text-gray-500">{card.price}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl ring-1 ring-black/5 overflow-hidden">
                  <div className="relative h-44 sm:h-52 lg:h-56 w-full bg-white">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 32vw"
                      className="object-contain p-6 transition transform-gpu group-hover:scale-[1.02] group-hover:rotate-[0.5deg]"
                      priority={false}
                    />
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{card.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.tags.map(t => (
                    <span key={t} className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200 transition hover:bg-sky-100">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={waFor(card.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800 btn-shine"
                  >
                    Pesan sekarang
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CarouselControls targetId="layanan-scroll" />
      </div>
    </div>
  );
}
