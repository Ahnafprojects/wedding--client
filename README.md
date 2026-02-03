# 💍 Wedding Invitation Website

Undangan pernikahan digital yang elegan untuk Bima Putra Eka Wardana & Andhira Lia Wahyu Sadida.

## ✨ Fitur

- 🎨 **Desain Elegan** - UI modern dengan tema soft gold dan rose gold
- 📱 **Responsive** - Tampilan sempurna di semua perangkat (mobile, tablet, desktop)
- 🎵 **Background Music** - Musik latar yang dapat diputar/pause
- ⏱️ **Countdown Timer** - Hitung mundur menuju hari bahagia
- 📸 **Photo Gallery** - Galeri foto prewedding
- 📍 **Location Map** - Peta lokasi acara (terintegrasi Google Maps)
- 📝 **RSVP System** - Formulir konfirmasi kehadiran dengan database
- 💬 **Guest List** - Daftar tamu yang sudah konfirmasi dengan scroll smooth
- ⚡ **Fast Loading** - Optimasi Next.js untuk performa maksimal

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React, TypeScript, Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Animations**: Framer Motion, Custom CSS transitions
- **Font**: Playfair Display, Raleway (Google Fonts)

## 📦 Instalasi

```bash
# Clone repository
git clone <repository-url>
cd wedding-invitation

# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🔧 Environment Variables

Buat file `.env` di root project:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/wedding_db"
```

## 📁 Struktur Project

```
wedding-invitation/
├── app/                    # Next.js app directory
│   ├── api/rsvp/          # API endpoints untuk RSVP
│   ├── invitation/        # Halaman detail undangan
│   ├── rsvp/              # Halaman form RSVP
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── HeroSection.tsx    # Section hero dengan countdown
│   ├── RSVPForm.tsx       # Form konfirmasi kehadiran
│   ├── RSVPList.tsx       # Daftar tamu
│   ├── PhotoGallery.tsx   # Galeri foto
│   └── ...
├── lib/                   # Utilities & configs
│   └── prisma.ts          # Prisma client
├── prisma/                # Database schema
│   └── schema.prisma
└── public/                # Static assets (images, audio)
```

## 🚀 Deployment

### Build untuk production:

```bash
npm run build
npm start
```

### Deploy ke Vercel:

```bash
vercel
```

Atau connect repository ke Vercel dashboard untuk auto-deployment.

## 📝 Kustomisasi

### Ubah Data Mempelai

Edit file `app/page.tsx` dan `app/invitation/page.tsx`

### Ubah Warna Tema

Edit file `app/globals.css` di bagian `@theme`

### Ubah Background Music

Ganti file audio di folder `public/` dan update path di `components/BackgroundMusic.tsx`

## 📄 License

Personal project untuk keperluan undangan pernikahan.

---

Made with ❤️ for Bima & Rara
