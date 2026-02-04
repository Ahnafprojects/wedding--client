'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

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
      } else {
        alert('Gagal mengirim RSVP. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-container">
      <FadeIn>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-soft-gray">RSVP</p>
            <h2 className="mt-4 font-playfair text-3xl text-dark-charcoal sm:text-4xl">Konfirmasi Kehadiran</h2>
            <p className="mt-3 text-sm text-soft-gray">
              Beri tahu kami kehadiran Anda agar kami dapat menyiapkan momen terbaik.
            </p>
          </div>
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 text-sm font-medium focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-gray" htmlFor="willAttend">
                    Konfirmasi Kehadiran
                  </label>
                  <div className="relative">
                    <select
                      id="willAttend"
                      name="willAttend"
                      className="w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 pr-12 text-sm font-medium text-dark-charcoal focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20 focus:outline-none cursor-pointer transition-all"
                      required
                    >
                      <option value="" className="text-gray-400">Pilih...</option>
                      <option value="yes">✓ Hadir</option>
                      <option value="no">✗ Tidak Hadir</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="h-5 w-5 text-soft-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-soft-gray" htmlFor="message">
                    Pesan & Ucapan (Opsional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 text-sm font-medium focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20 focus:outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Mengirim...' : 'Kirim RSVP'}
                </button>
              </form>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
