import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, willAttend, message } = body

    // Validasi data
    if (!name || typeof willAttend !== 'boolean') {
      return NextResponse.json(
        { error: 'Nama dan konfirmasi kehadiran wajib diisi' },
        { status: 400 }
      )
    }

    // Simpan ke database
    const rsvp = await prisma.rSVP.create({
      data: {
        name,
        willAttend,
        message: message || null,
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'RSVP berhasil disimpan',
        data: rsvp 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating RSVP:', error)
    return NextResponse.json(
      { error: 'Gagal menyimpan RSVP' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const rsvps = await prisma.rSVP.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ success: true, data: rsvps })
  } catch (error) {
    console.error('Error fetching RSVPs:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data RSVP' },
      { status: 500 }
    )
  }
}
