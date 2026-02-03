import Image from 'next/image'
import FadeIn from './FadeIn'

export default function ParentsSection() {
  return (
    <section className="section-container">
      <FadeIn>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">With love</p>
          <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Mempelai</h2>
          <div className="elegant-divider">✦</div>
        </div>
        <div className="mx-auto mb-12 mt-8 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-w-2xl">
          <div className="relative aspect-[3/2]">
            <Image
              src="/IMG_2763.JPG"
              alt="Foto Bima dan Rara"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Putra dari</p>
            <p className="mt-4 font-playfair text-xl text-dark-charcoal">Eko Juwanto (Dogles)</p>
            <p className="text-soft-gray">&</p>
            <p className="font-playfair text-xl text-dark-charcoal">Sumakitdatin</p>
            <p className="mt-4 text-sm text-soft-gray">
              Dsn. Sidomulyo, Desa Medowo, Kec. Kandangan, Kab. Kediri
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Putri dari</p>
            <p className="mt-4 font-playfair text-xl text-dark-charcoal">Didik Santoso</p>
            <p className="text-soft-gray">&</p>
            <p className="font-playfair text-xl text-dark-charcoal">Ratih Wulansari</p>
            <p className="mt-4 text-sm text-soft-gray">Dsn. Biro, Desa Wonorejo, Kec. Puncu</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="font-playfair text-3xl text-dark-charcoal sm:text-4xl">Bima Putra Eka Wardana</p>
          <p className="my-3 text-soft-gold">&</p>
          <p className="font-playfair text-3xl text-dark-charcoal sm:text-4xl">Andhira Lia Wahyu Sadida</p>
        </div>
      </FadeIn>
    </section>
  )
}
