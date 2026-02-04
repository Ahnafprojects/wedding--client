import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google'
import BackgroundMusic from '@/components/BackgroundMusic'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bima & Rara Wedding',
  description: 'The Wedding of Bima Putra Eka Wardana & Andhira Lia Wahyu Sadida - Minggu, 8 Februari 2026',
  keywords: ['wedding', 'invitation', 'pernikahan', 'undangan'],
  openGraph: {
    title: 'Bima & Rara Wedding',
    description: 'The Wedding of Bima Putra Eka Wardana & Andhira Lia Wahyu Sadida - Minggu, 8 Februari 2026',
    images: [
      {
        url: '/IMG_2767.JPG',
        width: 1200,
        height: 630,
        alt: 'Bima & Rara Prewedding Photo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bima & Rara Wedding',
    description: 'The Wedding of Bima Putra Eka Wardana & Andhira Lia Wahyu Sadida - Minggu, 8 Februari 2026',
    images: ['/IMG_2767.JPG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="font-raleway antialiased">
        {children}
        <BackgroundMusic />
      </body>
    </html>
  )
}
