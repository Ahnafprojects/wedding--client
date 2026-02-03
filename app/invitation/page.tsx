import Image from 'next/image'
import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'
import InvitationCard from '@/components/InvitationCard'
import ParentsSection from '@/components/ParentsSection'
import PhotoGallery from '@/components/PhotoGallery'
import LocationMap from '@/components/LocationMap'
import FadeIn from '@/components/FadeIn'

export default function InvitationPage() {
  return (
    <main className="bg-off-white">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image
          src="/IMG_2767.JPG"
          alt="Foto pernikahan Bima dan Rara"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">The Wedding Of</p>
          <h1 className="mt-4 font-playfair text-4xl text-dark-charcoal sm:text-5xl md:text-6xl">
            Bima <span className="text-soft-gold">✦</span> Rara
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-soft-gray">Minggu, 8 Februari 2026</p>
          <div className="mt-10">
            <Link href="/rsvp" className="btn-primary">
              RSVP Sekarang
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Countdown</p>
            <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">
              Menuju Hari Bahagia
            </h2>
            <p className="mt-3 text-sm text-soft-gray">
              Minggu, 8 Februari 2026 · Hotel Surya, Pare
            </p>
          </div>
          <div className="mt-10">
            <CountdownTimer />
          </div>
        </FadeIn>
      </section>

      <ParentsSection />

      <section className="section-container">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Events</p>
            <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">
              Rangkaian Acara
            </h2>
            <div className="elegant-divider">✦</div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <InvitationCard
              title="Akad Nikah"
              day="Minggu"
              date="8 Februari 2026"
              place="Hotel Surya, Pare"
              note="FPI (Fiqh Pernikahan Islami)"
            />
            <InvitationCard
              title="Resepsi"
              day="Kamis"
              date="12 Februari 2026"
              place="Rumah Pak Dogles (Eko Juwanto) · Dsn. Sidomulyo, Desa Medowo, Kec. Kandangan, Kab. Kediri"
            />
          </div>
        </FadeIn>
      </section>

      <section className="section-container">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Bride & Groom</p>
              <h2 className="font-playfair text-3xl text-dark-charcoal sm:text-4xl">
                Sebuah kisah cinta yang kami rayakan bersama Anda
              </h2>
              <p className="text-sm leading-relaxed text-soft-gray">
                Dari Kediri hingga Pare, kami melangkah dengan doa dan restu orang tua. Terima kasih sudah
                menjadi bagian dari perjalanan ini dan hadir untuk merayakan hari bahagia kami.
              </p>
              <Link href="/rsvp" className="btn-outline">
                Konfirmasi Kehadiran
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
              <Image
                src="/IMG_2760.JPG"
                alt="Foto pasangan Bima dan Rara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </FadeIn>
      </section>

      <PhotoGallery />

      <LocationMap />

      <section className="section-container">
        <FadeIn>
          <div className="rounded-3xl bg-white/80 p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h2 className="font-playfair text-3xl text-dark-charcoal sm:text-4xl">Kami Menantikan Kehadiran Anda</h2>
            <p className="mt-4 text-sm text-soft-gray">
              Silakan konfirmasi kehadiran Anda agar kami dapat menyiapkan hari yang sempurna.
            </p>
            <Link href="/rsvp" className="btn-primary mt-8">
              Isi RSVP
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
