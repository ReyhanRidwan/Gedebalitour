# Migrasi Gede Bali Trip ke Astro Framework

Rencana komprehensif untuk merekayasa ulang arsitektur website Gede Bali Trip dari React SPA ke Astro SSG (Static Site Generation) dengan komponen native `.astro` dan lightweight vanilla JavaScript untuk mencapai skor Google PageSpeed 95-100 serta Core Web Vitals optimal.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan arsitektur utama yang telah disepakati dari sesi klarifikasi:

- **Confirmed Decision 1 (Komponen & Runtime)**: Konversi penuh ke komponen native `.astro` dengan zero/minimal client runtime JavaScript (vanilla JS scoped pada modal, carousel slider, tab filter, dan WhatsApp checkout link generator). Tidak ada beban runtime React di client.
- **Confirmed Decision 2 (Struktur Routing)**: Rute statis multi-halaman Astro (`/`, `/tours`, `/rental`, `/about`, `/gallery`, `/why-us`, `/contact`) untuk pengindeksan SEO mesin pencari dan pemisahan beban transfer data per halaman.
- **Confirmed Decision 3 (Optimasi Aset Gambar)**: Memanfaatkan pipeline optimasi aset gambar dan format WebP modern untuk menjaga First Contentful Paint (FCP) di bawah 1 detik.
- **Decision Gate (Preservasi Desain & Fitur)**: Seluruh identitas visual kemewahan Bali (palet emas/obsidian, tipografi Playfair Display & Inter, foto aset petualangan, katalog tur, armada rental, ulasan klien, dan pemesanan WhatsApp langsung) dipertahankan 100%.

---

## 1. Overview & Core Concept

- **What It Does**: Website penyedia tur privat, petualangan alam terbuka (ATV, River Tubing, Mount Batur Jeep), dan persewaan kendaraan (mobil & motor) di Bali dengan supir berlisensi.
- **Target Audience**: Wisatawan domestik dan mancanegara yang mencari pengalaman liburan premium dan terpercaya di Bali dengan pemesanan instan tanpa hambatan melalui WhatsApp.
- **Key Value**: Loading super instan tanpa hydration overhead khas SPA besar, navigasi multi-halaman yang ramah SEO, dan form pemesanan instan yang langsung terhubung ke WhatsApp resmi Gede Bali Trip.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Beranda (`/`)**: Hero carousel imersif dengan tombol quick book, sorotan destinasi bento-grid, paket aktivitas petualangan (ATV, tubing, volcano jeep), ulasan wisatawan, dan footer navigasi.
2. **Katalog Tur (`/tours`)**: Filter interaktif berdasarkan kategori (Full Day, Half Day, Nusa Penida, Cultural), kartu spesifikasi tur lengkap dengan rute dan fasilitas inklusif.
3. **Rental Kendaraan (`/rental`)**: Pilihan mobil (Avanza, Innova, Brio) dan motor (NMAX, Scoopy) dengan transmisi, kapasitas, dan opsi self-drive vs with driver.
4. **Tentang Kami (`/about`) & Keunggulan (`/why-us`)**: Kredensial lokal supir Bali berlisensi, transparansi harga tanpa biaya tersembunyi, dan komitmen layanan bintang lima.
5. **Galeri Dokumentasi (`/gallery`)**: Grid visual foto petualangan autentik wisatawan di berbagai spot eksotis Bali.
6. **Kontak & Booking Modal**: Modal interaktif global yang dapat dibuka dari tombol mana saja, dengan auto-fill paket/kendaraan terpilih dan tombol checkout WhatsApp langsung.

### Visual Identity & Theme
- **Dominant Neutral Canvas**: Deep Obsidian Luxury Dark (`#121416` dan `#1a1e21`) memberikan kesan eksklusif dan ramah kontras malam.
- **Accent Palette**: Rich Warm Gold (`#b58d3d`, `#c5a75f`, `#f3edd9`) untuk aksen tombol, border halus, dan headline premium.
- **Typography Pairing**:
  - *Display / Headings*: `Playfair Display` (serif mewah dengan tracking seimbang).
  - *Body Prose*: `Inter` / `Plus Jakarta Sans` untuk keterbacaan tinggi.
  - *Data & Telemetry*: `JetBrains Mono` tabular figures untuk durasi dan label harga.
- **Zero-Pill Discipline**: Metadata durasi dan kapasitas disajikan dengan pemisah tipografi bersih (`·` atau `/`) tanpa tumpukan badge kapsul AI-slop.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Astro Native (.astro) vs React Islands**
  - *Chosen Approach*: Komponen native Astro murni dengan embedded scoped `<script>` untuk interaktivitas esensial.
  - *Why*: Menghilangkan ~150KB JavaScript bundle React 19 dari browser pengguna, memangkas Total Blocking Time (TBT) hingga 0ms.
  - *Alternatives Considered*: Menggunakan React Islands (`client:visible`). Ditolak demi memaksimalkan skor PageSpeed 100/100 sesuai preferensi pengguna.

- **Decision 2: Multi-Page Static Generation (SSG)**
  - *Chosen Approach*: Folder `src/pages/` dengan file `.astro` independen.
  - *Why*: Setiap halaman memiliki URL bersih (`/tours`, `/rental`, dll.), metadata OpenGraph & Twitter cards mandiri, dan hanya mengunduh HTML/CSS yang dibutuhkan untuk halaman tersebut.
  - *Alternatives Considered*: Single Page Application dengan tab dinamis. Ditolak karena SPA lebih buruk untuk indeks Google Search dan crawling media sosial.

- **Decision 3: Pemesanan Berbasis WhatsApp Direct Checkout**
  - *Chosen Approach*: Modal kalkulator pemesanan berbasis vanilla JS yang memformat teks pesan resmi dan membuka tautan `https://wa.me/...` secara aman.
  - *Why*: Model konversi tertinggi untuk bisnis tur lokal di Bali, tanpa friksi login akun.

---

## 4. Technical Architecture & Data Strategy

### System & Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Astro SSG Engine                                │
│                     (Node.js 22 / Port 3000)                           │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
      ┌────────────────────────────┼────────────────────────────┐
      ▼                            ▼                            ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Layouts & Meta  │     │ Static Data Core │     │   Public Assets  │
│ BaseLayout.astro │     │   src/data.ts    │     │ 20+ Bali Photos  │
│  SEO, Favicon,   │     │ Tours, Vehicles, │     │ WebP Optimized   │
│  Tailwind CSS    │     │ Reviews, Faqs    │     │ Fast Delivery    │
└─────────┬────────┘     └─────────┬────────┘     └──────────────────┘
          │                        │
          └───────────┬────────────┘
                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Static Pages (src/pages/)                       │
│  / (index)  ·  /tours  ·  /rental  ·  /about  ·  /gallery  ·  /contact │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       Native Astro Components                          │
│ Navbar · HeroCarousel · BentoDestinations · ActivityGrid · RentalCards │
│       SpecSheets · ReviewsMarquee · FaqAccordion · FooterBar           │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│              Lightweight Client Scripts (Vanilla JS < 5KB)             │
│   · Carousel Slide Transition (auto-rotate + dot triggers)             │
│   · Global Booking Modal (event dispatching + WhatsApp URL builder)    │
│   · Filter Tabs (category selection & instant DOM toggle)              │
└────────────────────────────────────────────────────────────────────────┘
```

### Component & Routing Mapping

1. **`src/layouts/BaseLayout.astro`**: Shell utama dengan `<head>`, SEO meta tags, Google Fonts (`Playfair Display`, `Inter`), Navbar, Footer, dan Booking Modal global.
2. **`src/pages/index.astro`**: Beranda lengkap yang memuat HeroSection, DestinationGrid, ActivitySection, ExperienceDetails, RentalSection, ReviewsSection, FaqSection.
3. **`src/pages/tours.astro`**: Katalog tur terperinci dengan filter kategori (Full Day, Half Day, Nusa Penida, Cultural), durasi, dan tombol "Pesan Sekarang".
4. **`src/pages/rental.astro`**: Halaman rental kendaraan lengkap (mobil transmisi matic/manual dan motor) dengan opsi Supir/Lepas Kunci.
5. **`src/pages/about.astro` & `/why-us.astro`**: Profil lokal, filosofi pelayanan keramahan Bali, dan garansi harga transparan.
6. **`src/pages/gallery.astro`**: Galeri grid visual foto petualangan Bali beresolusi tinggi.
7. **`src/pages/contact.astro`**: Informasi kontak lengkap, alamat, tombol panggilan langsung, dan peta lokasi.

### Dependency & Tooling Changes

- Menambahkan dependencies: `astro`, `@astrojs/tailwind`, `tailwindcss`, `@tailwindcss/vite` (atau integrasi Tailwind Astro).
- Menghapus ketergantungan runtime client yang berat: React runtime bundle untuk client dialihkan ke kompilasi statis HTML di server-build.
- Memperbarui `package.json` script:
  - `"dev": "astro dev --host 0.0.0.0 --port 3000"`
  - `"build": "astro build"`
  - `"preview": "astro preview --host 0.0.0.0 --port 3000"`
  - `"lint": "astro check || tsc --noEmit"`
