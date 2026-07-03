import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CasinoCard from '../components/CasinoCard'
import { casinos } from '../data/casinos'

export default function Home() {
  return (
    <>
      <Head>
        <title>Best US Sweepstakes Casinos 2026 | No Purchase Needed | Us3rZer0</title>
        <meta name="description" content="Find the best sweepstakes casinos in the USA. Claim free Sweep Coins, no deposit bonuses, and win real cash prizes. Legal in 45+ states." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, #1A1A28 0%, #0A0A0F 100%)' }} className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-4 block">🇺🇸 Legal in 45+ US States</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.2 }}>
            The Best <span className="gold-gradient">Sweepstakes Casinos</span><br />in America — 2026
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Play real casino slots for free. Win real prizes. No purchase necessary, no gambling license required. 100% legal in most US states.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/casinos" className="btn-gold text-center">View Top Casinos →</Link>
            <Link href="/bonuses" className="text-center py-3 px-6 rounded-md font-semibold"
              style={{ background: '#2A2A3D', color: '#E8E8F0' }}>
              No Deposit Bonuses
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-6 px-4" style={{ background: '#12121A', borderBottom: '1px solid #2A2A3D' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: '✅', label: '100% Legal', sub: 'No gambling license needed' },
            { icon: '🎁', label: 'Free to Play', sub: 'No purchase necessary' },
            { icon: '💵', label: 'Real Prizes', sub: 'Redeem for cash & gift cards' },
            { icon: '🔒', label: '45+ States', sub: 'Widest US coverage' },
          ].map((b, i) => (
            <div key={i} className="py-3">
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="text-white font-semibold text-sm">{b.label}</div>
              <div className="text-gray-500 text-xs">{b.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP CASINOS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              🏆 Top Rated Sweepstakes Casinos
            </h2>
            <p className="text-gray-400">Ranked by bonus value, game selection, and payout speed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4" style={{ background: '#12121A' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Georgia, serif' }}>
            How Sweepstakes Casinos Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Sign Up Free', desc: 'Create an account in minutes. No credit card required. You get free coins just for joining.' },
              { step: '02', title: 'Play Slots', desc: 'Use Gold Coins (fun play) or Sweeps Coins (redeemable). Spin slots from top providers.' },
              { step: '03', title: 'Win Real Prizes', desc: 'Redeem your Sweeps Coins for cash via PayPal, bank transfer, or gift cards.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl p-6" style={{ background: '#1A1A28', border: '1px solid #2A2A3D' }}>
                <div className="text-yellow-400 font-bold text-sm mb-3">{s.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS ALERT */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center rounded-2xl p-8"
          style={{ background: 'linear-gradient(135deg, #1A1A28 0%, #2A1A3D 100%)', border: '1px solid #6C3FC9' }}>
          <div className="text-3xl mb-3">🎁</div>
          <h2 className="text-2xl font-bold text-white mb-3">No Deposit Bonus Codes — July 2026</h2>
          <p className="text-gray-400 mb-6">Claim exclusive free Sweep Coins from our partner casinos. Updated weekly.</p>
          <Link href="/bonuses" className="btn-gold">See All Bonus Codes →</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
