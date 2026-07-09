import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const bonuses = [
  { casino: 'Stake.us', emoji: '🔥', bonus: '260,000 Gold Coins + 55 Stake Cash + 5% Rakeback', link: 'https://stake.us/?c=us3rzer0', expires: 'No expiry' },
  { casino: 'McLuck Casino', emoji: '🍀', bonus: '57,500 Gold Coins + 27.5 FREE Sweeps Coins', link: 'https://mcluck.com/', expires: 'No expiry' },
  { casino: 'WOW Vegas', emoji: '🌟', bonus: '1.5M WOW Coins + 35 FREE Sweeps Coins', link: 'https://www.wowvegas.com/', expires: 'No expiry' },
  { casino: 'Pulsz Casino', emoji: '⚡', bonus: '32.3 FREE Sweeps Coins on Sign Up', link: 'https://www.pulsz.com/', expires: 'Limited time' },
  { casino: 'Fortune Coins', emoji: '🪙', bonus: '360,000 Fortune Coins + 1,000 FREE Sweeps Coins', link: 'https://fortunecoins.com/', expires: 'No expiry' },
  { casino: 'High 5 Casino', emoji: '✋', bonus: '250 Game Coins + 5 FREE Sweeps Coins + 600 Diamonds', link: 'https://www.high5casino.com/', expires: 'No expiry' },
]

export default function Bonuses() {
  return (
    <>
      <Head>
        <title>No Deposit Casino Bonuses July 2026 | USS Zer0</title>
        <meta name="description" content="Exclusive no deposit bonuses for US sweepstakes casinos. Claim free Sweep Coins." />
      </Head>
      <Navbar />
      <section style={{ padding: '56px 16px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ background: '#FFCC00', borderRadius: '20px', padding: '6px 20px', fontFamily: 'Antonio, sans-serif', fontSize: '13px', letterSpacing: '0.2em', color: '#050810', fontWeight: 700 }}>
              TRANSMISSIONS
            </div>
            <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, #FFCC00, transparent)' }} />
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#99CCFF', letterSpacing: '0.15em' }}>
              UPDATED STARDATE 2026.186
            </div>
          </div>

          <h1 style={{ fontFamily: 'Antonio, sans-serif', fontSize: '36px', letterSpacing: '0.1em', color: '#E8F4FF', marginBottom: '8px', textTransform: 'uppercase' }}>
            No Deposit Bonus Codes
          </h1>
          <p style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '14px', color: '#99CCFF', marginBottom: '32px' }}>
            All bonuses free to claim. No purchase necessary. Available in most US states.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bonuses.map((b, i) => {
              const colors = ['#FF9900','#33CCFF','#FFCC00','#FF6666','#CC99FF','#FF9900']
              const accent = colors[i % colors.length]
              return (
                <div key={i} style={{ background: '#0A0F1E', border: '1px solid #1A2A4A', borderLeft: `4px solid ${accent}`, borderRadius: '0 8px 8px 0', padding: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '28px' }}>{b.emoji}</span>
                        <div>
                          <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '15px', letterSpacing: '0.1em', color: '#E8F4FF', textTransform: 'uppercase' }}>{b.casino}</div>
                          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', color: '#1A2A4A', letterSpacing: '0.1em', marginTop: '2px' }}>EXPIRES: {b.expires}</div>
                        </div>
                      </div>
                      <a href={b.link} target="_blank" rel="noopener noreferrer" className="btn-lcars" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>
                        ENGAGE
                      </a>
                    </div>
                    <div style={{ background: '#050810', border: `1px solid ${accent}30`, borderRadius: '4px', padding: '10px 12px' }}>
                      <div style={{ fontFamily: 'Antonio, sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: accent, marginBottom: '4px' }}>INCOMING BONUS OFFER</div>
                      <div style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '13px', color: '#E8F4FF', fontWeight: 600 }}>{b.bonus}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
