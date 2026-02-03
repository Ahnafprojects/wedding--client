'use client'

import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'

interface RSVPData {
  id: string
  name: string
  willAttend: boolean
  message: string | null
  createdAt: string
}

export default function RSVPList() {
  const [rsvps, setRsvps] = useState<RSVPData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/rsvp')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRsvps(data.data)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching RSVPs:', error)
        setLoading(false)
      })
  }, [])

  const attendingGuests = rsvps.filter((rsvp) => rsvp.willAttend)
  const notAttendingGuests = rsvps.filter((rsvp) => !rsvp.willAttend)

  return (
    <section className="section-container bg-gradient-to-b from-off-white to-white">
      <FadeIn>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">RSVP</p>
            <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">
              Kami Menantikan Kehadiran Anda
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-soft-gray max-w-2xl mx-auto">
              Silakan konfirmasi kehadiran Anda agar kami dapat menyiapkan hari yang sempurna.
            </p>
            <div className="mt-6 flex justify-center gap-8 text-center">
              <div>
                <p className="font-playfair text-4xl text-soft-gold">{attendingGuests.length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-soft-gray">Hadir</p>
              </div>
              <div className="h-12 w-px bg-soft-gold/30"></div>
              <div>
                <p className="font-playfair text-4xl text-soft-gray">{notAttendingGuests.length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-soft-gray">Tidak Hadir</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="mt-10 text-center text-soft-gray">Memuat data...</div>
          ) : rsvps.length === 0 ? (
            <div className="mt-10 text-center text-soft-gray">Belum ada konfirmasi kehadiran</div>
          ) : (
            <div className="mt-10 max-h-[600px] overflow-y-auto space-y-4 px-2 scrollbar-thin scrollbar-thumb-soft-gold/30 scrollbar-track-transparent">
              {rsvps.map((rsvp) => (
                <div
                  key={rsvp.id}
                  className="rounded-2xl border border-soft-gold/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-raleway text-base font-semibold text-dark-charcoal">
                          {rsvp.name}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            rsvp.willAttend
                              ? 'bg-soft-gold/10 text-soft-gold'
                              : 'bg-gray-100 text-soft-gray'
                          }`}
                        >
                          {rsvp.willAttend ? 'Hadir' : 'Tidak Hadir'}
                        </span>
                      </div>
                      {rsvp.message && (
                        <p className="mt-3 text-sm leading-relaxed text-soft-gray">
                          {rsvp.message}
                        </p>
                      )}
                    </div>
                    <time className="text-xs text-soft-gray">
                      {new Date(rsvp.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  )
}
