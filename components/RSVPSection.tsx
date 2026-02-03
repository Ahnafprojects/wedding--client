'use client'

import { useState, useEffect } from 'react'
import FadeIn from './FadeIn'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface RSVPData {
  id: string
  name: string
  willAttend: boolean
  message: string | null
  createdAt: string
}

export default function RSVPSection() {
  const [rsvps, setRsvps] = useState<RSVPData[]>([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState<'all' | 'hadir' | 'tidak-hadir'>('all')
  const itemsPerPage = 10

  const fetchRSVPs = () => {
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
  }

  useEffect(() => {
    fetchRSVPs()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      willAttend: formData.get('willAttend') === 'yes',
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        // Refresh data RSVP
        fetchRSVPs()
        // Reset form after 2 seconds
        setTimeout(() => {
          setSubmitted(false)
          ;(event.target as HTMLFormElement).reset()
        }, 2000)
      } else {
        alert('Gagal mengirim RSVP. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setFormLoading(false)
    }
  }

  const attendingGuests = rsvps.filter((rsvp) => rsvp.willAttend)
  const notAttendingGuests = rsvps.filter((rsvp) => !rsvp.willAttend)

  // Filter data based on selected filter
  const filteredRsvps = 
    filter === 'hadir' ? attendingGuests :
    filter === 'tidak-hadir' ? notAttendingGuests :
    rsvps

  // Pagination logic
  const totalPages = Math.ceil(filteredRsvps.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentRSVPs = filteredRsvps.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleFilterChange = (newFilter: 'all' | 'hadir' | 'tidak-hadir') => {
    setFilter(newFilter)
    setCurrentPage(1) // Reset ke halaman pertama saat filter berubah
  }

  return (
    <section id="rsvp" className="section-container bg-gradient-to-b from-off-white to-white scroll-mt-20">
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
          </div>

          {/* RSVP Form */}
          <div className="mt-10 rounded-3xl border border-soft-gold/30 bg-white/90 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
            {submitted ? (
              <p className="text-center font-raleway text-base text-dark-charcoal">
                Terima kasih! Kami menantikan kehadiran Anda ✦
              </p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm text-soft-gray" htmlFor="name">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm focus:border-rose-gold focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-gray" htmlFor="willAttend">
                    Konfirmasi Kehadiran
                  </label>
                  <select
                    id="willAttend"
                    name="willAttend"
                    className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm focus:border-rose-gold focus:outline-none"
                    required
                  >
                    <option value="">Pilih...</option>
                    <option value="yes">Hadir</option>
                    <option value="no">Tidak Hadir</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-gray" htmlFor="message">
                    Pesan & Ucapan (Opsional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-rose-gold focus:outline-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={formLoading}
                >
                  {formLoading ? 'Mengirim...' : 'Kirim RSVP'}
                </button>
              </form>
            )}
          </div>

          {/* Guest Counter */}
          <div className="mt-12 flex justify-center gap-8 text-center">
            <button
              onClick={() => handleFilterChange('hadir')}
              className={`transition-all ${
                filter === 'hadir' ? 'scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <p className={`font-playfair text-4xl ${
                filter === 'hadir' ? 'text-soft-gold' : 'text-soft-gold/70'
              }`}>
                {attendingGuests.length}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-soft-gray">Hadir</p>
            </button>
            
            <div className="h-12 w-px bg-soft-gold/30"></div>
            
            <button
              onClick={() => handleFilterChange('tidak-hadir')}
              className={`transition-all ${
                filter === 'tidak-hadir' ? 'scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <p className={`font-playfair text-4xl ${
                filter === 'tidak-hadir' ? 'text-soft-gray' : 'text-soft-gray/50'
              }`}>
                {notAttendingGuests.length}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-soft-gray">Tidak Hadir</p>
            </button>
            
            <div className="h-12 w-px bg-soft-gold/30"></div>
            
            <button
              onClick={() => handleFilterChange('all')}
              className={`transition-all ${
                filter === 'all' ? 'scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <p className={`font-playfair text-4xl ${
                filter === 'all' ? 'text-rose-gold' : 'text-rose-gold/50'
              }`}>
                {rsvps.length}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-soft-gray">Semua</p>
            </button>
          </div>

          {/* Guest List */}
          {loading ? (
            <div className="mt-10 text-center text-soft-gray">Memuat data...</div>
          ) : filteredRsvps.length === 0 ? (
            <div className="mt-10 text-center text-soft-gray">
              {filter === 'all' ? 'Belum ada konfirmasi kehadiran' : 'Tidak ada data'}
            </div>
          ) : (
            <>
              <div className="mt-10 max-h-[600px] overflow-y-auto space-y-4 px-2 scrollbar-thin scrollbar-thumb-soft-gold/30 scrollbar-track-transparent">
                {currentRSVPs.map((rsvp) => (
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
                      <time className="text-xs text-soft-gray whitespace-nowrap">
                        {new Date(rsvp.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}{' '}
                        {new Date(rsvp.createdAt).toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </time>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-soft-gold/10 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5 text-soft-gray" />
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`h-10 w-10 rounded-full text-sm font-medium transition-all ${
                          currentPage === pageNum
                            ? 'bg-soft-gold text-white'
                            : 'bg-white text-soft-gray hover:bg-soft-gold/10 border border-soft-gold/20'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-soft-gold/10 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5 text-soft-gray" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </FadeIn>
    </section>
  )
}
