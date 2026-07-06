export default function CasinoCard({ casino }) {
  const borderColors = { chumba: '#FF9900', mcluck: '#33CCFF', stake: '#CC99FF', wowvegas: '#FFCC00', pulsz: '#FF6666', fortunecoins: '#99CCFF', high5casino: '#FF9900' }
  const accent = borderColors[casino.id] || '#FF9900'

  return (
    <div className="lcars-card-hover" style={{ background: '#0A0F1E', border: '1px solid #1A2A4A', borderLeft: `4px solid ${accent}`, borderRadius: '0 8px 8px 0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '28px', lineHeight: 1 }}>{casino.emoji}</div>
          <div>
            <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '16px', letterSpacing: '0.12em', color: '#E8F4FF', textTransform: 'uppercase' }}>{casino.name}</div>
            <div style={{ display: 'flex', gap: '3px', marginTop: '3px', alignItems: 'center' }}>
              {[0,1,2,3,4].map(i => <span key={i} style={{ color: i < casino.rating ? '#FFCC00' : '#1A2A4A', fontSize: '12px' }}>★</span>)}
              <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#99CCFF', marginLeft: '6px', letterSpacing: '0.05em' }}>({casino.reviews})</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '4px', flexDirection: 'column', alignItems: 'flex-end' }}>
          {casino.isNew && <span className="badge-new">NEW</span>}
          {casino.isHot && <span className="badge-hot">HOT</span>}
        </div>
      </div>

      {/* LCARS scan bar */}
      <div style={{ height: '2px', background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Bonus panel */}
      <div style={{ background: '#050810', border: `1px solid ${accent}30`, borderRadius: '4px', padding: '10px 12px' }}>
        <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '10px', letterSpacing: '0.2em', color: accent, marginBottom: '4px' }}>INCOMING TRANSMISSION — BONUS OFFER</div>
        <div style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '13px', color: '#E8F4FF', fontWeight: 600 }}>{casino.bonus}</div>
      </div>

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {casino.features.map((f, i) => (
          <li key={i} style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', letterSpacing: '0.04em', display: 'flex', gap: '8px' }}>
            <span style={{ color: accent }}>›</span>{f}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
        <a href={casino.link} target="_blank" rel="noopener noreferrer" className="btn-lcars" style={{ flex: 1, textAlign: 'center', fontSize: '12px' }}>
          ENGAGE →
        </a>
        <a href={casino.reviewLink} style={{ flex: 1, textAlign: 'center', fontSize: '12px', fontFamily: 'Antonio, sans-serif', letterSpacing: '0.1em', color: '#99CCFF', padding: '10px 16px', border: '1px solid #1A2A4A', borderRadius: '20px', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s' }}>
          DATABASE
        </a>
      </div>

      <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#1A2A4A', textAlign: 'center', letterSpacing: '0.08em' }}>
        18+ ONLY › NO PURCHASE NECESSARY › REGULATIONS APPLY
      </div>
    </div>
  )
}
