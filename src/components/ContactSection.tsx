export default function ContactSection() {
  const phone = "0857-0110-0111";
  const wa = `https://wa.me/6285701100111?text=${encodeURIComponent(
    "Halo! Saya mau tanya ketersediaan dan harga."
  )}`;
  const maps = "https://www.google.com/maps?q=Sendangmulyo,+Tembalang,+Semarang";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm">
        <div className="rounded-2xl bg-white/90 p-6 backdrop-blur h-full">
          <h3 className="text-lg font-bold text-gray-900">Kontak</h3>
          <p className="mt-2 text-sm text-gray-700">Hubungi kami untuk konsultasi desain, penawaran, atau pemesanan.</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="w-28 text-gray-500">Telepon</dt>
              <dd><a href={`tel:${phone.replace(/\D/g, "")}`} className="underline hover:text-gray-900">{phone}</a></dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 text-gray-500">WhatsApp</dt>
              <dd><a href={wa} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Chat sekarang</a></dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 text-gray-500">Alamat</dt>
              <dd>Jl. Raya Sendangmulyo, Tembalang, Kota Semarang</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-28 text-gray-500">Jam Buka</dt>
              <dd>Senin–Sabtu, 09.00–18.00</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 btn-shine">
              Chat WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href={maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md ring-1 ring-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-white">
              Buka di Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white/80 shadow-sm">
        <iframe
          title="Lokasi di Google Maps"
          src="https://www.google.com/maps?q=Sendangmulyo,+Tembalang,+Semarang&output=embed"
          loading="lazy"
          className="w-full h-[320px] sm:h-[360px] md:h-[420px]"
        />
      </div>
    </div>
  );
}

