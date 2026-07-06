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
        <title>USS Zer0 — Best US Sweepstakes Casinos 2026</title>
        <meta name="description" content="Find the best sweepstakes casinos in the USA. Free Sweep Coins, no deposit bonuses, win real cash prizes. Legal in 45+ states." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      {/* HERO — LCARS style */}
      <section className="lcars-hero" style={{ background: 'linear-gradient(180deg, #0A0F1E 0%, #050810 100%)', padding: '64px 16px 48px' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>

          {/* LCARS top chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ background: '#FF9900', borderRadius: '40px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '28px' }}>🎰</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: '4px', background: 'linear-gradient(90deg, #FF9900, #FFCC00, #99CCFF, transparent)', borderRadius: '2px', marginBottom: '6px' }} />
              <div style={{ height: '2px', background: 'linear-gradient(90deg, #CC99FF, #33CCFF, transparent)', borderRadius: '1px' }} />
            </div>
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#FF9900', letterSpacing: '0.15em', textAlign: 'right', lineHeight: 1.8 }}>
              <div>STARDATE 2026.186</div>
              <div style={{ color: '#33CCFF' }}>SECTOR: 45 US STATES</div>
            </div>
          </div>

          {/* Main headline */}
          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', color: '#33CCFF', letterSpacing: '0.3em', marginBottom: '12px' }}>
            ◈ INCOMING TRANSMISSION FROM STARFLEET GAMING COMMAND ◈
          </div>
          <h1 style={{ fontFamily: 'Antonio, sans-serif', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1.1, marginBottom: '20px', textTransform: 'uppercase' }}>
            <span style={{ color: '#FF9900' }}>BEST SWEEPSTAKES</span><br />
            <span style={{ color: '#E8F4FF' }}>CASINOS IN THE</span><br />
            <span style={{ color: '#33CCFF' }}>UNITED STATES 2026</span>
          </h1>
          <p style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '16px', color: '#99CCFF', maxWidth: '600px', lineHeight: 1.7, marginBottom: '32px' }}>
            Play real casino slots for free. Win real prizes. No purchase necessary. 100% legal in most US states. Engage.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/casinos" className="btn-lcars">VIEW DATABASE →</Link>
            <Link href="/bonuses" className="btn-lcars btn-lcars-blue">BONUS TRANSMISSIONS</Link>
          </div>
        </div>
      </section>

      {/* Status readouts */}
      <section style={{ background: '#0A0F1E', borderTop: '1px solid #1A2A4A', borderBottom: '1px solid #1A2A4A', padding: '16px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="md:grid-cols-4">
          {[
            { label: 'LEGAL STATUS', value: '✓ AUTHORIZED', color: '#33CCFF' },
            { label: 'COST OF ENTRY', value: 'NO PURCHASE', color: '#FF9900' },
            { label: 'PRIZE TYPE', value: 'REAL CASH', color: '#FFCC00' },
            { label: 'SECTORS ACTIVE', value: '45+ STATES', color: '#CC99FF' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#050810', border: '1px solid #1A2A4A', borderRadius: '4px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', color: '#1A2A4A', letterSpacing: '0.2em', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '14px', letterSpacing: '0.1em', color: item.color }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Casino Grid */}
      <section style={{ padding: '48px 16px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ background: '#FF9900', borderRadius: '20px', padding: '6px 20px', fontFamily: 'Antonio, sans-serif', fontSize: '13px', letterSpacing: '0.2em', color: '#050810', fontWeight: 700 }}>
              DATABASE
            </div>
            <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, #FF9900, transparent)' }} />
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#99CCFF', letterSpacing: '0.15em' }}>
              TOP RATED VESSELS
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {casinos.map((casino) => <CasinoCard key={casino.id} casino={casino} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#0A0F1E', borderTop: '1px solid #1A2A4A', padding: '48px 16px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ background: '#33CCFF', borderRadius: '20px', padding: '6px 20px', fontFamily: 'Antonio, sans-serif', fontSize: '13px', letterSpacing: '0.2em', color: '#050810', fontWeight: 700 }}>
              MISSION BRIEFING
            </div>
            <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, #33CCFF, transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { step: '01', title: 'ENLIST', desc: 'Create a free account. No credit card required. Your complimentary Sweep Coins are credited immediately upon registration.' },
              { step: '02', title: 'ENGAGE', desc: 'Use Gold Coins for exploration or Sweeps Coins for prize-eligible play. Access 1,000+ casino slots from top providers.' },
              { step: '03', title: 'REDEEM', desc: 'Convert your Sweeps Coins to real cash via PayPal or bank transfer. Most missions complete within 24-72 hours.' },
            ].map((s) => (
              <div key={s.step} style={{ background: '#050810', border: '1px solid #1A2A4A', borderLeft: '4px solid #33CCFF', borderRadius: '0 8px 8px 0', padding: '20px' }}>
                <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#33CCFF', letterSpacing: '0.2em', marginBottom: '8px' }}>STEP {s.step}</div>
                <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '18px', letterSpacing: '0.15em', color: '#E8F4FF', marginBottom: '8px' }}>{s.title}</div>
                <p style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '13px', color: '#99CCFF', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus alert */}
      <section style={{ padding: '48px 16px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', background: '#0A0F1E', border: '1px solid #CC99FF', borderLeft: '4px solid #CC99FF', borderRadius: '0 12px 12px 0', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#CC99FF', letterSpacing: '0.3em', marginBottom: '12px' }}>
            ◈ PRIORITY ONE TRANSMISSION ◈
          </div>
          <h2 style={{ fontFamily: 'Antonio, sans-serif', fontSize: '28px', letterSpacing: '0.12em', color: '#E8F4FF', marginBottom: '12px' }}>
            BONUS CODES — JULY 2026
          </h2>
          <p style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '14px', color: '#99CCFF', marginBottom: '24px' }}>
            Claim exclusive free Sweep Coins from our partner vessels. Updated weekly.
          </p>
          <Link href="/bonuses" className="btn-lcars">ACCESS TRANSMISSIONS →</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
