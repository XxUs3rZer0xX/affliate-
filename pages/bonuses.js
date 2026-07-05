import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const bonuses = [
  { casino: 'Chumba Casino', emoji: '🍒', bonus: '2 Million Gold Coins + 2 FREE Sweeps Coins', code: 'WELCOME2', link: 'https://www.chumbacasino.com/', expires: 'No expiry', type: 'Sign-up' },
  { casino: 'LuckyLand Slots', emoji: '🍀', bonus: '7,777 Gold Coins + 10 FREE Sweeps Coins', code: 'AUTO', link: 'https://www.luckylandslots.com/', expires: 'No expiry', type: 'Sign-up' },
  { casino: 'Pulsz Casino', emoji: '⚡', bonus: '32.3 FREE Sweeps Coins', code: 'AUTO', link: 'https://www.pulsz.com/', expires: 'Limited time', type: 'Sign-up' },
  { casino: 'WOW Vegas', emoji: '🌟', bonus: '1.5M Wow Coins + 30 FREE Sweeps Coins', code: 'AUTO', link: 'https://www.wowvegas.com/', expires: 'No expiry', type: 'Sign-up' },
  { casino: 'Global Poker', emoji: '♠️', bonus: '5,000 Gold Coins + 30 FREE Sweeps Coins', code: 'AUTO', link: 'https://www.globalpoker.com/', expires: 'No expiry', type: 'Sign-up' },
  { casino: 'High 5 Casino', emoji: '✋', bonus: '250 Game Coins + 5 FREE Sweeps Coins + 600 Diamonds', code: 'AUTO', link: 'https://www.high5casino.com/', expires: 'No expiry', type: 'Sign-up' },
]

export default function Bonuses() {
  return (
    <>
      <Head>
        <title>No Deposit Sweepstakes Casino Bonus Codes July 2026 | Us3rZer0</title>
        <meta name="description" content="Exclusive no deposit bonus codes for US sweepstakes casinos. Claim free Sweep Coins in July 2026 — no purchase necessary." />
      </Head>
      <Navbar />
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Updated July 2026</span>
            <h1 className="text-4xl font-bold text-white mt-2 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              🎁 No Deposit Bonus Codes
            </h1>
            <p className="text-gray-400">All bonuses are free to claim. No purchase necessary. Available in most US states.</p>
          </div>

          <div className="space-y-4">
            {bonuses.map((b, i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: '#1A1A28', border: '1px solid #2A2A3D' }}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="text-3xl">{b.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold">{b.casino}</h3>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ background: '#2A2A3D', color: '#9CA3AF' }}>{b.type}</span>
                    </div>
                    <p className="text-yellow-400 font-semibold text-sm">{b.bonus}</p>
                    <p className="text-gray-500 text-xs mt-1">Expires: {b.expires}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {b.code !== 'AUTO' && (
                      <div className="rounded px-3 py-1 text-sm font-mono font-bold" style={{ background: '#2A2A3D', color: '#F5C842' }}>
                        Code: {b.code}
                      </div>
                    )}
                    <a href={b.link} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm whitespace-nowrap">
                      Claim Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl p-6 text-sm text-gray-500" style={{ background: '#12121A', border: '1px solid #2A2A3D' }}>
            <p className="font-semibold text-gray-400 mb-2">📋 How to Claim Your Bonus</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the "Claim Now" button next to your chosen casino</li>
              <li>Sign up for a free account — no credit card needed</li>
              <li>Your bonus coins are credited automatically on registration</li>
              <li>Use Sweeps Coins on slots and table games</li>
              <li>Redeem winnings via PayPal or bank transfer</li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
