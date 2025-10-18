Gading Print — Landing Page

Landing page modern untuk Gading Print. Halaman ini bertujuan memberi informasi ringkas dan jelas kepada calon customer maupun customer lama tentang layanan yang tersedia (Banner, MMT, Pin Gantungan Kunci), harga mulai, alur pemesanan, testimoni, galeri, serta kontak WhatsApp untuk memudahkan pemesanan.

Tujuan
- Menjangkau pelanggan secara cepat dengan informasi penting yang mudah dipindai.
- Memperkuat kepercayaan melalui testimoni dan contoh hasil (galeri).
- Mempermudah konversi melalui tombol WhatsApp yang selalu terlihat (floating widget) dan CTA jelas.

Fitur Utama
- Hero eye‑catching dengan headline tegas, highlight gradien ocean, dan visual mockup.
- Layanan: 3 kartu (Banner, MMT, Pin) dengan badge, fitur singkat, preview gambar, dan tombol aksi.
- Harga: “harga mulai” ditampilkan besar dan menonjol agar mudah dipahami.
- Proses Order: alur 3 langkah dengan panah (desktop) dan panah vertikal (mobile).
- Testimoni: 2 kutipan singkat sebagai bukti sosial.
- Galeri: grid 6 gambar placeholder yang bisa diganti dengan hasil real.
- CTA akhir: ajakan chat WhatsApp.
- Floating WhatsApp button di kanan bawah seluruh halaman.
- Navigasi sticky ke setiap section (anchor + scroll halus).
- SEO metadata dasar (title, description, Open Graph).
- Desain responsif berbasis Tailwind CSS.

Stack Teknis
- Next.js 15 (App Router, TypeScript)
- React 19
- Tailwind CSS 4
- ESLint

Struktur Proyek (ringkas)
- `src/app/page.tsx` — Konten landing page utama (hero, layanan, harga, proses, testimoni, galeri, CTA, footer)
- `src/app/layout.tsx` — Layout root, metadata, dan mounting Floating WhatsApp
- `src/app/globals.css` — Style global + Tailwind
- `src/components/FloatingWhatsApp.tsx` — Tombol WhatsApp mengambang (kanan bawah)
- `src/asstes/logo2.png` — Logo Gading Print yang dipakai di header & footer

Menjalankan Secara Lokal
Prasyarat: Node.js 18.18+ atau 20+ (disarankan LTS), npm.

1) Masuk ke folder project
`cd landing-page`

2) Install dependencies (jika belum)
`npm install`

3) Jalankan mode pengembangan
`npm run dev`

   Akses: `http://localhost:3000`

4) Build untuk produksi
`npm run build`

5) Start server produksi (setelah build)
`npm run start`

Konfigurasi Penting
- Nomor WhatsApp: ganti nomor di `src/components/FloatingWhatsApp.tsx:7` dan di `src/app/page.tsx` (variabel `phone`).
- Logo: file berada di `src/asstes/logo2.png`. Ganti file ini jika ingin logo baru (nama path sama agar tidak mengubah kode).
- Warna brand: saat ini menggunakan kombinasi ocean (sky/blue). Anda bisa menyesuaikan utilitas Tailwind di className pada tiap section/kartu untuk warna brand khusus.
- Social media: update tautan di footer pada `src/app/page.tsx` bagian “Social Media”.

Catatan Gambar
Saat ini galeri dan preview menggunakan placeholder dari picsum.photos agar stabil. Untuk menampilkan portofolio nyata, unggah gambar ke folder `public/` lalu ganti `src` pada elemen `<img>` di `src/app/page.tsx`.

Deploy
- Rekomendasi: Vercel (mendukung Next.js secara native). Cukup import repository, atur Node versi (disarankan 20), lalu deploy.

Lisensi
Internal Gading Print — penggunaan sesuai kebutuhan perusahaan.
