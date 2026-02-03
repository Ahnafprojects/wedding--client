import Image from 'next/image'
import RSVPForm from '@/components/RSVPForm'

export default function RSVPPage() {
  return (
    <main className="bg-off-white">
      <section className="relative min-h-[50vh] w-full overflow-hidden">
        <Image
          src="/IMG_2767.JPG"
          alt="Detail foto pernikahan Bima dan Rara"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">RSVP</p>
          <h1 className="mt-4 font-playfair text-4xl text-dark-charcoal sm:text-5xl">Konfirmasi Kehadiran</h1>
          <p className="mt-4 text-sm text-soft-gray">
            Minggu, 8 Februari 2026 · Bima &amp; Rara
          </p>
        </div>
      </section>
      <RSVPForm />
    </main>
  )
}
