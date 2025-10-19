const FAQS = [
  {
    q: "File apa yang terbaik untuk dicetak?",
    a: "PDF/AI/PSD dengan resolusi tinggi. Untuk large format, minimal 150–200 DPI pada ukuran final; mode warna CMYK, sertakan bleed 3–5 mm jika perlu potong.",
  },
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Tergantung jenis produk & antrian. Umumnya 1–2 hari kerja; tersedia opsi ekspres (same‑day) jika memungkinkan.",
  },
  {
    q: "Apakah ada minimal order?",
    a: "Tidak untuk sebagian besar produk. Beberapa item merch mungkin memiliki MOQ; chat kami untuk detailnya.",
  },
  {
    q: "Area pengiriman?",
    a: "Semarang & sekitar via kurir lokal/ojek online. Luar kota bisa dikirim ekspedisi sesuai permintaan.",
  },
  {
    q: "Bisa bantu desain atau revisi?",
    a: "Bisa. Kami bantu setting basic gratis; revisi kecil juga kami bantu. Untuk desain penuh, ada biaya terpisah.",
  },
  {
    q: "Pembayaran bagaimana?",
    a: "Transfer bank/e-wallet. DP atau full payment tergantung jenis pekerjaan.",
  },
];

export default function FAQSection() {
  return (
    <div className="space-y-5 sm:space-y-6 lg:space-y-7">
      {FAQS.map((f) => (
        <details key={f.q} className="group rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm open:shadow-md transition">
          <summary className="list-none select-none cursor-pointer rounded-2xl bg-white/90 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur ring-1 ring-black/5 text-sm font-semibold text-gray-900 flex items-center justify-between">
            <span>{f.q}</span>
            <svg className="transition-transform duration-200 group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="rounded-b-2xl bg-white/90 px-4 pt-3 pb-5 sm:px-5 sm:pt-4 sm:pb-6 text-sm leading-relaxed text-gray-700 ring-1 ring-black/5 -mt-1">
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}
