'use client'

import { useEffect, useRef, useState } from 'react'

type FadeInProps = {
  children: React.ReactNode
  className?: string
}

export default function FadeIn({ children, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-on-view ${isVisible ? 'is-visible' : ''} ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}
