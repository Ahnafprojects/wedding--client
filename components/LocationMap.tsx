import FadeIn from './FadeIn'

const locations = [
  {
    title: 'Akad Nikah',
    venue: 'Hotel Surya, Pare',
    address: 'Hotel Surya, Pare, Kediri',
    mapLink: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare&output=embed',
    directions: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare',
  },
  {
    title: 'Resepsi',
    venue: 'Rumah Pak Dogles (Eko Juwanto)',
    address: 'Dsn. Sidomulyo, Desa Medowo, Kec. Kandangan, Kab. Kediri',
    mapLink: 'https://www.google.com/maps?q=Dsn.%20Sidomulyo%20Desa%20Medowo%20Kandangan%20Kediri&output=embed',
    directions: 'https://www.google.com/maps?q=Dsn.%20Sidomulyo%20Desa%20Medowo%20Kandangan%20Kediri',
  },
]

export default function LocationMap() {
  return (
    <section className="section-container">
      <FadeIn>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Location</p>
          <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Lokasi Acara</h2>
          <div className="elegant-divider">✦</div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.title} className="overflow-hidden rounded-2xl border border-soft-gold/20 bg-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">{location.title}</p>
                <h3 className="mt-2 font-playfair text-2xl text-dark-charcoal">{location.venue}</h3>
                <p className="mt-3 text-sm text-soft-gray">{location.address}</p>
                <a
                  href={location.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-6"
                >
                  Get Directions
                </a>
              </div>
              <div className="relative h-64 w-full">
                <iframe
                  title={`Peta ${location.title}`}
                  src={location.mapLink}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
