import Image from "next/image";
import logo from "@/asstes/logo2.png";
import hero1 from "@/asstes/1.jpeg";
import LayananTabsCarousel from "@/components/LayananTabsCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import PricingSection from "@/components/PricingSection";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const phone = "6285701100111";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Halo! Saya mau tanya soal cetak banner/MMT/pin."
  )}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header / Navbar */}
      <Navbar wa={wa} />

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden px-6 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:py-28 lg:px-8 scroll-mt-32">
        <div className="gradient-mesh" />
        <div className="dots-overlay" />
        <div className="mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">
              Terpercaya - Cepat - Hasil Tajam
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">Cetak Cepat, Hasil Keren</span>
              <br />Harga Masuk Akal.
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
              Banner, MMT, dan Pin Gantungan Kunci untuk bisnis, event, dan komunitas. Konsultasi desain gratis, produksi gesit, pengantaran fleksibel.
            </p>
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-4 gap-y-3 lg:justify-start">
              <a
                href="#layanan"
                className="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 w-full sm:w-auto text-center"
              >
                Lihat Layanan
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md ring-1 ring-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white w-full sm:w-auto text-center"
              >
                Konsultasi Gratis
              </a>
            </div>
            {/* Sederhanakan di mobile: sembunyikan marquee */}
            <div className="mt-6 hidden sm:block marquee">
              <div className="marquee-track">
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">Banner</span>
                <span className="rounded-full bg-sky-600/90 px-3 py-1 text-xs font-semibold text-white">MMT</span>
                <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white">X-Banner</span>
                <span className="rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white">Backlight</span>
                <span className="rounded-full bg-cyan-600/90 px-3 py-1 text-xs font-semibold text-white">Sticker</span>
                <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white">Pin</span>
                <span className="rounded-full bg-fuchsia-600/90 px-3 py-1 text-xs font-semibold text-white">Acrylic</span>
                <span className="rounded-full bg-rose-600/90 px-3 py-1 text-xs font-semibold text-white">Poster</span>
              </div>
              <div className="marquee-track" aria-hidden>
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">Banner</span>
                <span className="rounded-full bg-sky-600/90 px-3 py-1 text-xs font-semibold text-white">MMT</span>
                <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white">X-Banner</span>
                <span className="rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white">Backlight</span>
                <span className="rounded-full bg-cyan-600/90 px-3 py-1 text-xs font-semibold text-white">Sticker</span>
                <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white">Pin</span>
                <span className="rounded-full bg-fuchsia-600/90 px-3 py-1 text-xs font-semibold text-white">Acrylic</span>
                <span className="rounded-full bg-rose-600/90 px-3 py-1 text-xs font-semibold text-white">Poster</span>
              </div>
            </div>
          </div>
          {/* Sederhanakan di mobile: sembunyikan gambar hero */}
          <div className="hidden lg:block relative mt-6 lg:mt-0 max-w-2xl mx-auto lg:mx-0">
            <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-200 p-4 shadow-sm">
              <Image src={hero1} width={hero1.width} height={hero1.height} alt="Galery 1" className="w-full h-auto rounded-xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="relative overflow-hidden mt-12 sm:mt-16 lg:mt-20 px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-sky-50 scroll-mt-32">
        {/* Subtle background ornaments for visual interest */}
        <div className="ornament orb orb-sky float-10s" style={{ left: -40, top: -20, width: 180, height: 180 }} aria-hidden />
        <div className="ornament orb orb-violet float-12s" style={{ right: -50, bottom: -30, width: 220, height: 220 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">Layanan</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Layanan Kami</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></span>
            <p className="mt-3 text-gray-600">Pilih kebutuhanmu. Semuanya bisa custom sesuai brief.</p>
          </div>
          <div className="mt-6">
            <LayananTabsCarousel />
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-white scroll-mt-32">
        <div className="ornament orb orb-blue float-6s" style={{ left: -60, top: -40, width: 160, height: 160 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200">Portofolio</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Contoh Hasil Cetak</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-sky-600"></span>
            <p className="mt-3 text-gray-600">Dokumentasi beberapa pekerjaan kami: banner, MMT, dan merchandise.</p>
          </div>
          <div className="mt-6">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      {/* Harga */}
      <section id="harga" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-gradient-to-b from-indigo-50 to-white scroll-mt-32">
        <div className="ornament orb orb-violet float-10s" style={{ right: -70, top: -30, width: 180, height: 180 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">Harga</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Harga Transparan & Fleksibel</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></span>
            <p className="mt-3 text-gray-600">Mulai dari harga dasar. Untuk ukuran/bahan khusus, silakan chat.</p>
          </div>
          <div className="mt-6">
            <PricingSection />
          </div>
          <div className="mt-8">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 btn-shine">
              Minta Penawaran Sekarang
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Proses Kerja */}
      <section id="proses" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-white scroll-mt-32">
        <div className="ornament orb orb-sky float-12s" style={{ left: -50, top: -20, width: 170, height: 170 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">Proses</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Proses Kerja Kami</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></span>
            <p className="mt-3 text-gray-600">Ringkas dan jelas dari konsultasi hingga pengantaran.</p>
          </div>
          <div className="mt-6">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-indigo-50 scroll-mt-32">
        <div className="ornament orb orb-blue float-10s" style={{ right: -60, bottom: -40, width: 190, height: 190 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200">FAQ</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Pertanyaan yang Sering Diajukan</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-sky-600"></span>
            <p className="mt-3 text-gray-600">Informasi dasar mengenai file, waktu, bahan, dan pengiriman.</p>
          </div>
          <div className="mt-6">
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-white scroll-mt-32">
        <div className="ornament orb orb-blue float-6s" style={{ left: -60, top: -20, width: 160, height: 160 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200">Testimoni</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Apa Kata Pelanggan</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-rose-400 to-indigo-500"></span>
            <p className="mt-3 text-gray-600">Beberapa pengalaman dari pelanggan kami.</p>
          </div>
          <div className="mt-6">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Kontak & Lokasi */}
      <section id="kontak" className="relative overflow-hidden px-6 py-16 lg:px-8 bg-gradient-to-b from-indigo-50 to-white scroll-mt-32">
        <div className="ornament orb orb-sky float-10s" style={{ right: -70, bottom: -40, width: 190, height: 190 }} aria-hidden />
        <div className="mx-auto max-w-6xl">
          <div className="relative max-w-2xl mx-auto text-center lg:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">Kontak</span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">Kontak & Lokasi</h2>
            <span className="mt-2 block h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"></span>
            <p className="mt-3 text-gray-600">Siap membantu via WhatsApp, telepon, atau datang langsung.</p>
          </div>
          <div className="mt-6">
            <ContactSection />
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
            <p className="mt-2 text-sm">Nomor HP: <a href="tel:085701100111" className="underline hover:text-white">0857-0110-0111</a></p>
            <p className="mt-1 text-sm">WhatsApp: <a href={wa} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Chat sekarang</a></p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Social Media</h4>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13 2v8.3c0 2.14-1.73 3.87-3.87 3.87-1.02 0-1.95-.39-2.65-1.03v3.23a5.52 5.52 0 0 0 3.02.88c3.05 0 5.52-2.47 5.52-5.52V11a7.5 7.5 0 0 0 4.98 1.83V9.6a4.9 4.9 0 0 1-3.06-1.06A4.9 4.9 0 0 1 15.9 5H13Z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
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
