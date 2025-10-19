import CarouselControls from "@/components/CarouselControls";

type Testi = {
  id: string;
  name: string;
  role?: string;
  msg: string;
  rating?: number; // 1-5
};

const TESTIMONIALS: Testi[] = [
  {
    id: "t1",
    name: "Rina",
    role: "Event Organizer",
    msg: "Banner cepat selesai dan warnanya tajam. Admin responsif banget, terima kasih!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Budi",
    role: "UMKM Kuliner",
    msg: "Cetak stiker vinyl rapi, bahan tebal. Proses order jelas dan tepat waktu.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Maya",
    role: "Komunitas Kampus",
    msg: "Pin gantungan lucu, cocok untuk merchandise event. Recommended!",
    rating: 4,
  },
  {
    id: "t4",
    name: "Arif",
    role: "Toko Retail",
    msg: "MMT indoor‑outdoor kuat dan hasilnya bersih. Harga masuk akal.",
    rating: 5,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${n} bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <div className="relative mt-4 layanan-carousel">
      <div id="testi-scroll" className="flex gap-6 overflow-x-auto overflow-y-visible pt-2 pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing px-4 lg:px-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="snap-start shrink-0 min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="relative rounded-2xl bg-white/90 p-6 backdrop-blur">
              {typeof t.rating === "number" && <Stars n={t.rating} />}
              <p className="mt-3 text-sm text-gray-700">“{t.msg}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow text-xs font-bold">
                  {t.name.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  {t.role && <div className="text-xs text-gray-500">{t.role}</div>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CarouselControls targetId="testi-scroll" />
    </div>
  );
}

