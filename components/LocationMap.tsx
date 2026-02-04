'use client'

import FadeIn from './FadeIn'
import { MapPin, Clock, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const locations = [
  {
    title: 'Akad Nikah',
    date: 'Minggu, 8 Februari 2026',
    venue: 'Hotel Surya, Pare',
    address: 'Hotel Surya, Pare, Kediri',
    time: '08:00 WIB',
    mapLink: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare&output=embed',
    directions: 'https://www.google.com/maps?q=Hotel%20Surya%20Pare',
  },
  {
    title: 'Resepsi',
    date: 'Kamis, 12 Februari 2026',
    venue: 'Rumah Pak Dogles (Eko Juwanto)',
    address: 'Dsn. Sidomulyo, Desa Medowo, Kec. Kandangan, Kab. Kediri',
    time: '11:00 - Selesai',
    mapLink: 'https://www.google.com/maps?q=Dsn.+Sidomulyo,+Desa+Medowo,+Kec.+Kandangan,+Kab.+Kediri&output=embed',
    directions: 'https://maps.app.goo.gl/ueXqaodb42QQdKRK9',
  },
]

const bankAccounts = [
  {
    bank: 'BCA',
    accountNumber: '1401534798',
    accountName: 'Bima Putra Eka Wardana',
    color: 'from-blue-600 to-blue-800'
  },
  {
    bank: 'BCA',
    accountNumber: '1401534771',
    accountName: 'Andhira Lia Wahyu Sadida',
    color: 'from-blue-600 to-blue-800'
  }
]

export default function LocationMap() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="section-container bg-off-white">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">Location</p>
          <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Lokasi Acara</h2>
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
                  
                  <p className="text-sm font-medium text-soft-gold">{location.date}</p>
                  
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

        {/* Wedding Gift Section */}
        <div className="mx-auto max-w-4xl mt-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl text-dark-charcoal">Wedding Gift</h3>
            <p className="mt-2 text-sm text-soft-gray">Untuk yang berkenan mengirimkan doa dan hadiah</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {bankAccounts.map((account, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-xl min-h-[220px] group transition-transform hover:scale-[1.02] md:aspect-[1.586/1]">
                {/* Decorative Circles Background */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 pointer-events-none"></div>
                
                {/* Card Content Container */}
                <div className="relative z-10 h-full flex flex-col gap-4">
                  
                  {/* TOP: Chip & Bank Logo */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-9 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md border border-yellow-300/50 shadow-sm"></div>
                    <div className="text-white font-bold text-xl italic tracking-wider opacity-90">{account.bank}</div>
                  </div>
                  
                  {/* MIDDLE: Account Number (Centered) */}
                  <div className="flex flex-col justify-center py-1">
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-xl sm:text-2xl font-bold text-white tracking-[0.15em] drop-shadow-md flex-1">
                        {account.accountNumber}
                      </p>
                      <button
                        onClick={() => copyToClipboard(account.accountNumber, index)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all flex-shrink-0 active:scale-95"
                        title="Salin Nomor Rekening"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-5 w-5 text-green-300" />
                        ) : (
                          <Copy className="h-5 w-5 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* BOTTOM: Name Info */}
                  <div className="pt-1">
                  
                    <p className="text-white text-sm sm:text-base font-semibold uppercase tracking-[0.14em] leading-snug break-words">
                      {account.accountName}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
