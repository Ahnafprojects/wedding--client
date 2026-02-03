import Image from 'next/image'
import FadeIn from './FadeIn'

const photos = [
  { src: '/IMG_0912.JPG', alt: 'Momen pernikahan 1', rotate: false },
  { src: '/IMG_2765.JPG', alt: 'Momen pernikahan 2', rotate: false },
  { src: '/IMG_2771.JPG', alt: 'Momen pernikahan 3', rotate: false },
  { src: '/IMG_2775.JPG', alt: 'Momen pernikahan 4', rotate: false },
]

export default function PhotoGallery() {
  return (
    <section className="section-container">
      <FadeIn>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Our Moments</p>
          <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Momen Kami</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.src} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.05] ${photo.rotate ? 'rotate-90' : ''}`}
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
