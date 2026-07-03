export default function CasinoCard({ casino }) {
  return (
    <div className="card-glow rounded-xl p-5 flex flex-col gap-3 transition-all"
      style={{ background: '#1A1A28', border: '1px solid #2A2A3D' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{casino.emoji}</div>
          <div>
            <h3 className="text-white font-bold text-lg">{casino.name}</h3>
            <div className="flex items-center gap-1">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className={i < casino.rating ? 'star' : 'text-gray-600'}>{s}</span>
              ))}
              <span className="text-gray-400 text-xs ml-1">({casino.reviews})</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {casino.isNew && <span className="badge-new">NEW</span>}
          {casino.isHot && <span className="badge-hot">🔥 HOT</span>}
        </div>
      </div>

      <div className="rounded-lg p-3" style={{ background: '#12121A' }}>
        <p className="text-yellow-400 font-bold text-sm">🎁 Welcome Bonus</p>
        <p className="text-white font-semibold mt-1">{casino.bonus}</p>
      </div>

      <ul className="text-sm text-gray-400 space-y-1">
        {casino.features.map((f, i) => <li key={i}>✅ {f}</li>)}
      </ul>

      <div className="flex gap-2 mt-1">
        <a href={casino.link} target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 text-center text-sm">
          Claim Bonus →
        </a>
        <a href={casino.reviewLink} className="flex-1 text-center text-sm py-3 rounded-md font-semibold transition-colors"
          style={{ background: '#2A2A3D', color: '#E8E8F0' }}>
          Read Review
        </a>
      </div>

      <p className="text-xs text-gray-600 text-center">18+ | T&Cs Apply | Sweepstakes only — no purchase necessary</p>
    </div>
  )
}
