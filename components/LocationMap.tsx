import FadeIn from './FadeIn'
import { MapPin, Clock } from 'lucide-react'

const locations = [
  {
    title: 'Akad Nikah',
    venue: 'Hotel Surya, Pare',
    address: 'Hotel Surya, Pare, Kediri',
    time: '08:00 WIB',
    mapLink: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare&output=embed',
    directions: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare',
  },
  {
    title: 'Resepsi',
    venue: 'Rumah Pak Dogles (Eko Juwanto)',
    address: 'Dsn. Sidomulyo, Desa Medowo, Kec. Kandangan, Kab. Kediri',
    time: '11:00 - Selesai',
    mapLink: 'https://www.google.com/maps?q=Dsn.%20Sidomulyo%20Desa%20Medowo%20Kandangan%20Kediri&output=embed',
    directions: 'https://www.google.com/maps?q=Dsn.%20Sidomulyo%20Desa%20Medowo%20Kandangan%20Kediri',
  },
]

export default function LocationMap() {
  return (
    <section className="section-container bg-off-white">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Location</p>
          <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Lokasi Acara</h2>
          <p className="mt-3 text-sm text-soft-gray">Sabtu, 14 Februari 2026</p>
          <div className="elegant-divider">✦</div>
        </div>
        
        <div className="mx-auto max-w-4xl space-y-6">
          {locations.map((location, index) => (
            <div 
              key={location.title} 
              className="group rounded-2xl border border-soft-gold/20 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                {/* Info Section */}
                <div className="space-y-3">
                  <div>
                    <span className="inline-block rounded-full bg-soft-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-soft-gold">
                      {location.title}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl text-dark-charcoal sm:text-2xl">
                    {location.venue}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-soft-gold flex-shrink-0 mt-1" />
                      <p className="text-sm text-soft-gray leading-relaxed">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-soft-gold flex-shrink-0" />
                      <p className="text-sm text-soft-gray">{location.time}</p>
                    </div>
                  </div>
                </div>

                {/* Button Section */}
                <div className="flex items-center md:items-start">
                  <a
                    href={location.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline whitespace-nowrap"
                  >
                    Buka Map
                  </a>
                </div>
              </div>
              
              {/* Expandable Map */}
              <div className="mt-4 overflow-hidden rounded-xl">
                <iframe
                  title={`Peta ${location.title}`}
                  src={location.mapLink}
                  className="h-48 w-full border-0 opacity-90 transition-opacity hover:opacity-100"
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
