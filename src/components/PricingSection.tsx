type Plan = {
  id: string;
  title: string;
  price: string;
  unit?: string;
  features: string[];
  highlight?: string;
};

const PLANS: Plan[] = [
  {
    id: "banner",
    title: "Banner & Spanduk",
    price: "Mulai Rp25.000",
    unit: "/pcs",
    features: ["Full color", "Vinyl tebal", "Lubang tali/eyelet"],
    highlight: "Popular",
  },
  {
    id: "mmt",
    title: "MMT / Backdrop",
    price: "Mulai Rp30.000",
    unit: "/m²",
    features: ["Indoor/Outdoor", "Tahan cuaca", "Warna tajam"],
    highlight: "Best Value",
  },
  {
    id: "pin",
    title: "Pin Gantungan Kunci",
    price: "Mulai Rp10.000",
    unit: "/pcs",
    features: ["Cetak custom", "Banyak varian", "Finishing rapi"],
  },
  {
    id: "poster",
    title: "Poster",
    price: "Mulai Rp20.000",
    unit: "/pcs",
    features: ["A3/A2/A1", "Full color", "Kertas tebal"],
    highlight: "Baru",
  },
  {
    id: "kartunama",
    title: "Kartu Nama",
    price: "Mulai Rp35.000",
    features: ["Art carton", "Laminasi doff/glossy", "Full color"],
    highlight: "Favorit",
  },
];

export default function PricingSection() {
  const waFor = (title: string) =>
    `https://wa.me/6285701100111?text=${encodeURIComponent(
      `Halo! Saya mau tanya harga ${title}.`
    )}`;

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PLANS.map((p) => (
        <div key={p.id} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm hover:shadow-lg transition">
          <div className="relative h-full rounded-2xl bg-white/90 p-6 backdrop-blur">
            {p.highlight && (
              <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">{p.highlight}</span>
            )}
            <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">{p.price}</span>
              {p.unit && <span className="text-xs text-gray-500">{p.unit}</span>}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] text-sky-600" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href={waFor(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 btn-shine"
              >
                Chat untuk harga custom
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
  );
}
