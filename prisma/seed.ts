import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const dummyNames = [
  'Ahmad Fauzi', 'Siti Nurhaliza', 'Budi Santoso', 'Dewi Lestari', 'Rizky Ramadhan',
  'Aisyah Putri', 'Dimas Prakoso', 'Fitri Handayani', 'Eko Prasetyo', 'Maya Sari',
  'Hendra Wijaya', 'Nurul Hidayah', 'Agus Setiawan', 'Ratna Wulandari', 'Yoga Aditya',
  'Indah Permata', 'Bayu Kurniawan', 'Lina Marlina', 'Rudi Hartono', 'Sri Wahyuni',
  'Arief Rahman', 'Diah Ayu', 'Ferry Gunawan', 'Nia Ramadhani', 'Hadi Susanto',
  'Putri Amelia', 'Irfan Hakim', 'Sari Dewi', 'Tono Suryono', 'Wulan Guritno',
  'Joko Widodo', 'Mega Wati', 'Bambang Pamungkas', 'Retno Marsudi', 'Fajar Maulana',
  'Rina Anggraini', 'Yudi Latif', 'Tika Bisono', 'Andi Wijaya', 'Devi Permatasari',
  'Rahmat Hidayat', 'Laila Sari', 'Bambang Sugiarto', 'Intan Nuraini', 'Fikri Abdullah',
  'Cantika Putri', 'Galih Pratama', 'Nadya Hutagalung', 'Irwan Mussry', 'Sandra Dewi'
]

const dummyMessages = [
  'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
  'Barakallahu laka wa baraka alaika wa jamaa bainakuma fi khair',
  'Semoga Allah SWT senantiasa memberkahi pernikahan kalian berdua. Aamiin.',
  'Selamat menikah! Semoga langgeng sampai kakek nenek.',
  'Turut berbahagia atas pernikahan kalian. Semoga bahagia selalu!',
  'Selamat ya! Semoga diberi keturunan yang soleh dan solehah.',
  'Congratulations! Wishing you a lifetime of love and happiness.',
  'Selamat menempuh hidup baru. Semoga menjadi pasangan yang saling melengkapi.',
  'Bahagia selalu untuk kalian berdua! ❤️',
  'Semoga pernikahan kalian dipenuhi cinta dan keberkahan.',
  null, null, null, null, null // Beberapa tanpa pesan
]

async function main() {
  console.log('🌱 Mulai seeding database...')

  // Hapus data lama jika ada
  await prisma.rSVP.deleteMany()
  console.log('✅ Data lama dihapus')

  // Generate 50 data dummy
  const rsvpData = dummyNames.map((name, index) => ({
    name,
    willAttend: Math.random() > 0.3, // 70% hadir, 30% tidak hadir
    message: dummyMessages[Math.floor(Math.random() * dummyMessages.length)],
    createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000) // Random dalam 7 hari terakhir
  }))

  // Insert data ke database
  for (const data of rsvpData) {
    await prisma.rSVP.create({ data })
  }

  console.log(`✅ Berhasil menambahkan ${rsvpData.length} data RSVP dummy`)

  const total = await prisma.rSVP.count()
  const hadir = await prisma.rSVP.count({ where: { willAttend: true } })
  const tidakHadir = await prisma.rSVP.count({ where: { willAttend: false } })

  console.log(`📊 Total: ${total} | Hadir: ${hadir} | Tidak Hadir: ${tidakHadir}`)
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
