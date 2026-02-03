type InvitationCardProps = {
  title: string
  day: string
  date: string
  place: string
  note?: string
}

export default function InvitationCard({ title, day, date, place, note }: InvitationCardProps) {
  return (
    <div className="card-elegant text-center">
      <div className="text-soft-gold">✦</div>
      <h3 className="mt-4 font-playfair text-2xl font-semibold text-dark-charcoal">{title}</h3>
      <div className="mt-3 h-px w-16 bg-soft-gold/60 mx-auto" />
      <div className="mt-6 space-y-2 text-sm text-soft-gray">
        <p>
          <span className="font-semibold text-dark-charcoal">Hari</span> : {day}
        </p>
        <p>
          <span className="font-semibold text-dark-charcoal">Tanggal</span> : {date}
        </p>
        <p>
          <span className="font-semibold text-dark-charcoal">Tempat</span> : {place}
        </p>
        {note ? <p className="text-xs text-soft-gray">{note}</p> : null}
      </div>
    </div>
  )
}
