import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['/', 'HOME'], ['/casinos', 'DATABASES'], ['/bonuses', 'BONUSES'], ['/sweepstakes', 'BRIEFING'], ['/blog', 'LOGS']]

  return (
    <nav style={{ background: '#0A0F1E', borderBottom: '2px solid #FF9900' }} className="sticky top-0 z-50">
      {/* Top LCARS bar */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #FF9900 0%, #FFCC00 30%, #99CCFF 60%, #CC99FF 100%)' }} />
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo block */}
        <div className="flex items-center gap-3">
          <div style={{ background: '#FF9900', borderRadius: '20px 0 0 20px', padding: '6px 16px 6px 12px' }}>
            <span style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '18px', color: '#050810', letterSpacing: '0.15em' }}>
              Us3rZer0
            </span>
          </div>
          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#99CCFF', letterSpacing: '0.1em' }}>
            <div>CASINO AFFILIATE</div>
            <div style={{ color: '#FF9900' }}>STARDATE 2026.186</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(([href, label]) => (
            <Link key={href} href={href}
              style={{ fontFamily: 'Antonio, sans-serif', fontSize: '13px', letterSpacing: '0.15em', color: '#99CCFF', padding: '6px 14px', borderRadius: '3px', textDecoration: 'none', transition: 'all 0.2s' }}
              className="hover:text-yellow-300">
              {label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} style={{ color: '#FF9900', fontFamily: 'Antonio, sans-serif', letterSpacing: '0.1em', fontSize: '12px' }} className="md:hidden">
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid #1A2A4A', padding: '12px 16px' }} className="md:hidden flex flex-col gap-2">
          {links.map(([href, label]) => (
            <Link key={href} href={href} style={{ fontFamily: 'Antonio, sans-serif', fontSize: '13px', letterSpacing: '0.15em', color: '#99CCFF', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
