import HeroSection from '@/components/HeroSection'
import FadeIn from '@/components/FadeIn'
import RSVPList from '@/components/RSVPList'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-off-white">
      <HeroSection />
      <section className="section-container">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">The Wedding</p>
              <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">
                Bima Putra Eka Wardana &amp; Andhira Lia Wahyu Sadida
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-soft-gray">
                Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami.
                Mari bersama merayakan cinta, doa, dan kebahagiaan dalam suasana yang hangat dan elegan.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/invitation" className="btn-primary">
                  Lihat Detail Undangan
                </Link>
                <Link href="/rsvp" className="btn-outline">
                  RSVP Sekarang
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
              <Image
                src="/IMG_2767.JPG"
                alt="Foto prewedding Bima dan Rara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/10" />
            </div>
          </div>
        </FadeIn>
      </section>
      <RSVPList />
    </main>
  )
}
