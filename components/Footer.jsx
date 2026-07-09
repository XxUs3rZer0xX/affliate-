import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0F1E', borderTop: '2px solid #FF9900', marginTop: '80px' }}>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #CC99FF, #99CCFF, #FFCC00, #FF9900)' }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div style={{ background: '#FF9900', borderRadius: '20px 0 0 20px', padding: '6px 16px 6px 12px', display: 'inline-block', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '16px', color: '#050810', letterSpacing: '0.15em' }}>Us3rZer0</span>
            </div>
            <p style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', lineHeight: 1.8, letterSpacing: '0.05em' }}>
              YOUR GUIDE TO US SWEEPSTAKES CASINOS. HONEST REVIEWS. EXCLUSIVE BONUSES.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'Antonio, sans-serif', color: '#FF9900', letterSpacing: '0.15em', fontSize: '13px', marginBottom: '12px' }}>DATABASES</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[['/', 'Home'], ['/casinos', 'Top Casinos'], ['/bonuses', 'Bonus Codes'], ['/blog', 'Captain Logs']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', textDecoration: 'none', letterSpacing: '0.05em' }}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontFamily: 'Antonio, sans-serif', color: '#FF9900', letterSpacing: '0.15em', fontSize: '13px', marginBottom: '12px' }}>INTEL</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[['/sweepstakes', 'Mission Briefing'], ['/blog/legal-states-2026', 'Sector Map'], ['/blog/how-to-win-real-money', 'Tactical Guide']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', textDecoration: 'none', letterSpacing: '0.05em' }}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontFamily: 'Antonio, sans-serif', color: '#FF9900', letterSpacing: '0.15em', fontSize: '13px', marginBottom: '12px' }}>REGULATIONS</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[['/disclaimer', 'Disclaimer'], ['/responsible', 'Responsible Gaming']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', textDecoration: 'none', letterSpacing: '0.05em' }}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1A2A4A', paddingTop: '16px' }}>
          <p style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#1A2A4A', letterSpacing: '0.08em', textAlign: 'center' }}>
            THIS SITE CONTAINS AFFILIATE LINKS. COMMISSION EARNED AT NO COST TO YOU. 18+ ONLY. PLAY RESPONSIBLY. STARFLEET REGULATIONS APPLY.
          </p>
        </div>
      </div>
    </footer>
  )
}
