import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <Image
        src="/IMG_2767.JPG"
        alt="Foto pernikahan Bima dan Rara"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-raleway text-xs uppercase tracking-[0.4em] text-soft-gray">
          Dengan hormat, Anda diundang
        </p>
        <h1 className="font-playfair text-5xl font-semibold text-dark-charcoal sm:text-6xl md:text-7xl">
          Bima <span className="text-soft-gold">✦</span> Rara
        </h1>
        <p className="mt-4 font-raleway text-base uppercase tracking-[0.3em] text-soft-gray">
          8 Februari 2026
        </p>
        <Link href="/invitation" className="btn-primary mt-10">
          Lihat Undangan
        </Link>
        <div className="absolute bottom-8 flex flex-col items-center text-soft-gray">
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <span className="animate-bounce text-2xl">⌄</span>
        </div>
      </div>
    </section>
  )
}
