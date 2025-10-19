export default function ProcessSteps() {
  const steps = [
    {
      title: "Konsultasi",
      desc: "Ceritakan kebutuhan dan tujuan cetak.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h6" />
          <path d="M21 3v6m3-3h-6" />
        </svg>
      ),
    },
    {
      title: "Kirim Brief/Desain",
      desc: "Kirim file atau minta bantu setting.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
        </svg>
      ),
    },
    {
      title: "Produksi",
      desc: "Cetak dengan bahan & setting optimal.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 9 2.09V2a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0A1.65 1.65 0 0 0 21.91 11H22a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      ),
    },
    {
      title: "Quality Check",
      desc: "Cek warna & finishing sebelum serah.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      title: "Kirim/Ambil",
      desc: "Pengantaran fleksibel atau ambil ditempat.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 7h13v10H3z" />
          <path d="M16 12h5l-2-3h-3z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      ),
    },
  ];

  const wa = `https://wa.me/6285701100111?text=${encodeURIComponent(
    "Halo! Saya mau konsultasi dan tanya proses cetak."
  )}`;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {steps.map((s, idx) => (
          <div key={s.title} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm hover:shadow-lg transition">
            <div className="relative h-full rounded-2xl bg-white/90 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-sky-700">Langkah {idx + 1}</div>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 btn-shine"
        >
          Konsultasi Cepat via WhatsApp
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

