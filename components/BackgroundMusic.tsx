'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }

    // Auto-play saat user pertama kali interact dengan halaman
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            setHasInteracted(true)
          })
          .catch((error) => {
            console.log('Autoplay prevented:', error)
          })
      }
    }

    // Try to autoplay immediately
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        })
        .catch(() => {
          // If autoplay is blocked, wait for user interaction
          window.addEventListener('click', handleFirstInteraction)
          window.addEventListener('touchstart', handleFirstInteraction)
          window.addEventListener('scroll', handleFirstInteraction)
        })
    }

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/Nadin Amizah - Di Akhir Perang (Official Lyric Video) [ugk5pd9xgSw].mp3"
      />
      <div className="fixed bottom-8 right-8 z-50 flex gap-3">
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:bg-soft-gold hover:text-white"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:bg-soft-gold hover:text-white"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      </div>
    </>
  )
}
