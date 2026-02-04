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
                    className="w-full appearance-none rounded-full border border-gray-200 bg-white px-4 py-3 pr-10 text-sm focus:border-rose-gold focus:outline-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3cpath%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3c%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
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
