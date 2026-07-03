import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0F', borderTop: '1px solid #2A2A3D' }} className="mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-yellow-400 font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>🎰 Us3rZer0 Casino</h3>
            <p className="text-gray-500 text-sm">Your #1 guide to US sweepstakes casinos. Honest reviews, exclusive bonuses, and the latest no deposit codes.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Top Casinos</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/casinos/chumba" className="hover:text-yellow-400">Chumba Casino</Link></li>
              <li><Link href="/casinos/luckyland" className="hover:text-yellow-400">LuckyLand Slots</Link></li>
              <li><Link href="/casinos/global-poker" className="hover:text-yellow-400">Global Poker</Link></li>
              <li><Link href="/casinos/pulsz" className="hover:text-yellow-400">Pulsz Casino</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/bonuses" className="hover:text-yellow-400">No Deposit Bonuses</Link></li>
              <li><Link href="/sweepstakes" className="hover:text-yellow-400">How Sweepstakes Work</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400">Casino Blog</Link></li>
              <li><Link href="/states" className="hover:text-yellow-400">By State</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/disclaimer" className="hover:text-yellow-400">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
              <li><Link href="/responsible" className="hover:text-yellow-400">Responsible Gaming</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2A2A3D' }} className="pt-6 text-center text-xs text-gray-600">
          <p className="mb-2">⚠️ This site contains affiliate links. We may earn a commission at no cost to you. 18+ only. Sweepstakes casinos are available in most US states. Play responsibly.</p>
          <p>© {new Date().getFullYear()} Us3rZer0 Casino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
