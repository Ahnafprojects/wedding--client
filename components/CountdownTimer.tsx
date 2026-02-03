'use client'

import { useEffect, useState } from 'react'

const targetDate = new Date('2026-02-08T00:00:00+07:00')

const getTimeLeft = () => {
  const total = targetDate.getTime() - new Date().getTime()
  const clamped = Math.max(total, 0)
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24))
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((clamped / (1000 * 60)) % 60)
  const seconds = Math.floor((clamped / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const items = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <div className="rounded-3xl border border-soft-gold/30 bg-white/90 px-6 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
      <p className="mb-8 text-center font-raleway text-xs uppercase tracking-[0.4em] text-soft-gray">
        Countdown to our day
      </p>
      <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="text-4xl font-semibold text-dark-charcoal sm:text-5xl">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-soft-gray">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
