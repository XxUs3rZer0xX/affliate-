import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ background: '#12121A', borderBottom: '1px solid #2A2A3D' }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: '#F5C842', fontFamily: 'Georgia, serif' }}>
          🎰 Us3rZer0 Casino
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/casinos" className="text-gray-300 hover:text-yellow-400 transition-colors">Top Casinos</Link>
          <Link href="/bonuses" className="text-gray-300 hover:text-yellow-400 transition-colors">Bonuses</Link>
          <Link href="/sweepstakes" className="text-gray-300 hover:text-yellow-400 transition-colors">Sweepstakes</Link>
          <Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 text-2xl">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
          <Link href="/" className="text-gray-300">Home</Link>
          <Link href="/casinos" className="text-gray-300">Top Casinos</Link>
          <Link href="/bonuses" className="text-gray-300">Bonuses</Link>
          <Link href="/sweepstakes" className="text-gray-300">Sweepstakes</Link>
          <Link href="/blog" className="text-gray-300">Blog</Link>
        </div>
      )}
    </nav>
  )
}
