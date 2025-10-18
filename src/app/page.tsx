export default function Home() {
  const phone = "6285701100111";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Halo! Saya mau tanya soal cetak banner/MMT/pin."
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 ring-1 ring-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#home" className="inline-flex items-center gap-2" aria-label="Beranda">
            <Image src={logo} alt="Printing" priority className="h-12 w-auto sm:h-14" />
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#layanan" className="hover:text-gray-900">Layanan</a>
            <a href="#harga" className="hover:text-gray-900">Harga</a>
            <a href="#proses" className="hover:text-gray-900">Proses</a>
            <a href="#testimoni" className="hover:text-gray-900">Testimoni</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800"
          >
            Chat WA
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:py-28 lg:px-8 scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-200 to-blue-200 opacity-60" />
        <div className="absolute -top-24 -left-20 -z-10 h-72 w-72 rounded-full bg-sky-300/50 blur-3xl" />
        <div className="absolute -bottom-16 -right-10 -z-10 h-80 w-80 rounded-full bg-blue-400/40 blur-3xl" />

        <div className="mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">
              Terpercaya • Cepat • Hasil Tajam
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                Cetak Cepat, Hasil Keren
              </span>
              <br />
              Harga Masuk Akal.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Banner, MMT, dan Pin Gantungan Kunci untuk bisnis, event, dan komunitas.
              Konsultasi desain gratis, produksi gesit, pengantaran fleksibel.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">Warna tajam</span>
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">Same day*</span>
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">Bisa bantu desain</span>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-4 lg:justify-start">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Chat WhatsApp
              </a>
              <a href="#layanan" className="text-sm font-semibold text-gray-900">
                Lihat Layanan <span aria-hidden>→</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-700 lg:justify-start">
              <div className="flex items-center text-amber-500">
                {/* stars */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"/></svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"/></svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"/></svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"/></svg>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"/></svg>
              </div>
              <span className="text-gray-700">4.9/5 dari 500+ pelanggan</span>
            </div>
          </div>

          {/* Right: visual mockups */}
          <div className="relative hidden min-h-[380px] lg:block">
            {/* floating blob */}
            <div className="absolute -top-6 -right-4 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
            {/* card 1 */}
            <div className="absolute left-0 top-8 w-[75%] rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-lg">
              <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                <img
                  src="https://picsum.photos/seed/hero-banner/800/400"
                  alt="Mockup banner promo (placeholder)"
                  className="mb-3 h-32 w-full rounded-lg object-cover ring-1 ring-black/5"
                  loading="lazy"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Banner Promo</p>
                    <p className="text-xs text-gray-600">Full color • Vinyl</p>
                  </div>
                  <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">Best Seller</span>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="absolute right-0 top-40 w-[70%] rotate-3 rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-lg">
              <div className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                <img
                  src="https://picsum.photos/seed/hero-backdrop/700/350"
                  alt="Mockup backdrop MMT (placeholder)"
                  className="mb-3 h-24 w-full rounded-lg object-cover ring-1 ring-black/5"
                  loading="lazy"
                />
                <p className="text-sm font-semibold">MMT Backdrop</p>
                <p className="text-xs text-gray-600">Indoor/Outdoor • Tajam</p>
              </div>
            </div>
            {/* card 3 circle pin */}
            <div className="absolute left-10 bottom-2 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 p-[2px] shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white/90 backdrop-blur">
                <span className="text-2xl" aria-hidden>🔑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section
        id="layanan"
        className="relative px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-sky-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Layanan Kami</h2>
          <p className="mt-3 text-center text-gray-600">
            Pilih kebutuhanmu. Semuanya bisa custom sesuai brief.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Banner & Spanduk */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative rounded-2xl bg-white/85 p-6 backdrop-blur">
                <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">Popular</span>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow">
                    <span aria-hidden>🖼️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Banner & Spanduk</h3>
                    <p className="text-xs text-gray-500">Mulai Rp25.000</p>
                  </div>
                </div>
                <img
                  src="https://picsum.photos/seed/banner-print/600/300"
                  alt="Contoh banner dan spanduk (placeholder)"
                  className="mt-4 h-24 w-full rounded-xl object-cover ring-1 ring-black/5"
                  loading="lazy"
                />
                <p className="mt-3 text-sm text-gray-600">
                  Bahan tebal, warna tajam, cocok untuk promo event, toko, dan kampus.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Vinyl</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Eyelets</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Full color</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800">Pesan</a>
                  <a href="#harga" className="text-xs font-semibold text-gray-700 hover:text-gray-900">Lihat harga →</a>
                </div>
              </div>
            </div>

            {/* MMT */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative rounded-2xl bg-white/85 p-6 backdrop-blur">
                <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">Best Value</span>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow">
                    <span aria-hidden>📜</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">MMT / Indoor-Outdoor</h3>
                    <p className="text-xs text-gray-500">Mulai Rp30.000/m²</p>
                  </div>
                </div>
                <img
                  src="https://picsum.photos/seed/mmt-print/600/300"
                  alt="Contoh cetak MMT dan poster (placeholder)"
                  className="mt-4 h-24 w-full rounded-xl object-cover ring-1 ring-black/5"
                  loading="lazy"
                />
                <p className="mt-3 text-sm text-gray-600">Cetak MMT kualitas tinggi untuk backdrop, booth, dan signage.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Indoor/Outdoor</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Tahan cuaca</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">High-res</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800">Pesan</a>
                  <a href="#harga" className="text-xs font-semibold text-gray-700 hover:text-gray-900">Lihat harga →</a>
                </div>
              </div>
            </div>

            {/* Pin Gantungan Kunci */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 to-blue-400/50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative rounded-2xl bg-white/85 p-6 backdrop-blur">
                <span className="absolute right-3 top-3 rounded-full bg-sky-100 px-2 py-1 text-[10px] font-semibold text-sky-700 ring-1 ring-sky-200">Custom</span>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white ring-2 ring-white/60 shadow">
                    <span aria-hidden>🔑</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Pin Gantungan Kunci</h3>
                    <p className="text-xs text-gray-500">Mulai Rp10.000</p>
                  </div>
                </div>
                <img
                  src="https://picsum.photos/seed/pin-keychain/600/300"
                  alt="Contoh pin gantungan kunci (placeholder)"
                  className="mt-4 h-24 w-full rounded-xl object-cover ring-1 ring-black/5"
                  loading="lazy"
                />
                <p className="mt-3 text-sm text-gray-600">Merchandise lucu dan personal—pas untuk komunitas, brand, dan gift.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Cetak custom</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Banyak varian</span>
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">Warna cerah</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800">Pesan</a>
                  <a href="#harga" className="text-xs font-semibold text-gray-700 hover:text-gray-900">Lihat harga →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harga */}
      <section id="harga" className="px-6 py-16 lg:px-8 bg-gradient-to-b from-sky-50 to-white scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Harga Mulai</h2>
          <p className="mt-3 text-center text-gray-600">
            Estimasi awal—hubungi kami untuk ukuran & finishing spesifik.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
              <h3 className="font-semibold">Banner</h3>
              <div className="mt-3 rounded-xl bg-sky-50/80 p-4 text-center ring-1 ring-sky-200">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Rp25.000</span>
                  <span className="text-sm font-semibold text-gray-600">/pcs</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Vinyl, cetak full color.</p>
              </div>
            </div>
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
              <h3 className="font-semibold">MMT</h3>
              <div className="mt-3 rounded-xl bg-sky-50/80 p-4 text-center ring-1 ring-sky-200">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Rp30.000</span>
                  <span className="text-sm font-semibold text-gray-600">/m2</span>
                </div>
              </div>
              <p className="mt-1 text-3xl font-bold">Rp30.000<span className="text-base font-medium text-gray-500">/m²</span></p>
              <p className="mt-2 text-sm text-gray-600">Indoor/outdoor, warna tajam.</p>
              </div>
            </div>
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
              <h3 className="font-semibold">Pin Gantungan Kunci</h3>
              <div className="mt-3 rounded-xl bg-sky-50/80 p-4 text-center ring-1 ring-sky-200">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Rp10.000</span>
                  <span className="text-sm font-semibold text-gray-600">/pcs</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Minimum order fleksibel.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Konsultasi & Penawaran Cepat
            </a>
          </div>
        </div>
      </section>

      {/* Proses */}
      <section id="proses" className="px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-sky-50 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Proses Order</h2>
          {/* Desktop/tablet: arrows between steps */}
          <div className="mt-8 hidden items-stretch gap-6 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Step 1 */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6 h-full">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">1</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 1</div>
                <h3 className="font-semibold">Brief & Konsultasi</h3>
                <p className="mt-1 text-sm text-gray-600">Kirim ukuran, materi, dan deadline via WA.</p>
              </div>
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h12"/>
                <path d="M13 6l6 6-6 6"/>
              </svg>
            </div>
            {/* Step 2 */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6 h-full">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">2</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 2</div>
                <h3 className="font-semibold">Desain & Approve</h3>
                <p className="mt-1 text-sm text-gray-600">Kami kirim proof, kamu cek dan OK.</p>
              </div>
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h12"/>
                <path d="M13 6l6 6-6 6"/>
              </svg>
            </div>
            {/* Step 3 */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6 h-full">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">3</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 3</div>
                <h3 className="font-semibold">Produksi & Selesai</h3>
                <p className="mt-1 text-sm text-gray-600">Cetak cepat, ambil/antar sesuai kesepakatan.</p>
              </div>
            </div>
          </div>

          {/* Mobile: vertical flow with down arrows */}
          <div className="mt-8 space-y-3 sm:hidden">
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">1</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 1</div>
                <h3 className="font-semibold">Brief & Konsultasi</h3>
                <p className="mt-1 text-sm text-gray-600">Kirim ukuran, materi, dan deadline via WA.</p>
              </div>
            </div>
            <div className="flex justify-center py-1">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v12"/>
                <path d="M6 13l6 6 6-6"/>
              </svg>
            </div>
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">2</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 2</div>
                <h3 className="font-semibold">Desain & Approve</h3>
                <p className="mt-1 text-sm text-gray-600">Kami kirim proof, kamu cek dan OK.</p>
              </div>
            </div>
            <div className="flex justify-center py-1">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v12"/>
                <path d="M6 13l6 6 6-6"/>
              </svg>
            </div>
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40">
              <div className="rounded-xl bg-white/80 backdrop-blur p-6">
                <span className="absolute -top-3 -left-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow">3</span>
                <div className="mb-2 text-sm font-semibold text-gray-500">Langkah 3</div>
                <h3 className="font-semibold">Produksi & Selesai</h3>
                <p className="mt-1 text-sm text-gray-600">Cetak cepat, ambil/antar sesuai kesepakatan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="px-6 py-16 lg:px-8 bg-gradient-to-r from-white to-sky-50 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Apa Kata Mereka</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
              <p className="text-sm text-gray-800">“Warnanya tajam, hasilnya rapi banget. Order dadakan juga selesai tepat waktu!”</p>
              <p className="mt-3 text-xs font-semibold text-gray-600">— Sinta, Event Organizer</p>
              </div>
            </div>
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-blue-400/40 shadow-sm">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-6">
              <p className="text-sm text-gray-800">“Pin custom buat komunitas kami kece! Respon admin cepat.”</p>
              <p className="mt-3 text-xs font-semibold text-gray-600">— Dimas, Komunitas Kampus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri (placeholder) */}
      <section className="px-6 py-16 lg:px-8 bg-sky-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Galeri</h2>
          <p className="mt-3 text-center text-gray-600">Beberapa contoh hasil cetak.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <img src="https://picsum.photos/seed/gallery-banner/600/450" alt="Hasil cetak banner (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
            <img src="https://picsum.photos/seed/gallery-poster/600/450" alt="Poster cetak (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
            <img src="https://picsum.photos/seed/gallery-signage/600/450" alt="Signage toko (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
            <img src="https://picsum.photos/seed/gallery-pin/600/450" alt="Pin gantungan kunci (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
            <img src="https://picsum.photos/seed/gallery-backdrop/600/450" alt="Backdrop event (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
            <img src="https://picsum.photos/seed/gallery-largeformat/600/450" alt="Large format printing (placeholder)" className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-gray-200" loading="lazy" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 lg:px-8 bg-gradient-to-b from-sky-50 to-indigo-50 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Pertanyaan Umum</h2>
          <div className="mt-6 space-y-3">
            <details className="group rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-4 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-gray-900">
                Berapa lama proses cetak?
                <span className="text-gray-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">Tergantung antrian & spesifikasi. Umumnya 1–3 hari kerja.</p>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-4 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-gray-900">
                Bisa bantu desain?
                <span className="text-gray-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">Bisa. Konsultasi ringan gratis, desain full dikenakan biaya terjangkau.</p>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-4 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-gray-900">
                Pengiriman bagaimana?
                <span className="text-gray-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-gray-600">Ambil sendiri atau kirim kurir sesuai kesepakatan.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-10 text-center text-white">
          <h3 className="text-2xl font-semibold">Siap cetak sekarang?</h3>
          <p className="mt-2 text-gray-300">Klik tombol di bawah untuk chat.</p>
          <div className="mt-6">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-8 bg-gradient-to-br from-sky-700 to-blue-800 text-gray-100">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <a href="#home" aria-label="Beranda" className="inline-flex items-center gap-2">
              <Image src={logo} alt="Printing" className="h-20 w-auto sm:h-24" />
            </a>
            <h4 className="mt-4 text-sm font-semibold text-white">Alamat</h4>
            <p className="mt-2 text-sm">Jl. Raya Sendangmulyo, Sendangmulyo, Kec. Tembalang, Kota Semarang, Jawa Tengah</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Kontak</h4>
            <p className="mt-2 text-sm">
              Nomor HP: <a href="tel:0812732891" className="underline hover:text-white">0857-0110-0111</a>
            </p>
            <p className="mt-1 text-sm">
              WhatsApp: <a href={wa} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Chat sekarang</a>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Social Media</h4>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M14 3v3.4a6.5 6.5 0 0 0 3.5 1.1V11a6 6 0 0 1-3.5-1.1V14.5A3.5 3.5 0 1 1 11 11V6h3z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M13 10h2.5l.5-3H13V6.5A1.5 1.5 0 0 1 14.5 5H16V2h-1.5A4.5 4.5 0 0 0 10 6.5V7H8v3h2v9h3v-9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-8 border-t border-white/10 pt-6 text-xs text-gray-200 text-center">
          <p>© {new Date().getFullYear()} Printing • Buka Senin–Sabtu, 09.00–18.00</p>
        </div>
      </footer>
    </main>
  );
}
import Image from "next/image";
import logo from "@/asstes/logo2.png";
