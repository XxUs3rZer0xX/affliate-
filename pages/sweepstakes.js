import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sweepstakes() {
  return (
    <>
      <Head>
        <title>How Do Sweepstakes Casinos Work? Legal US Guide 2026 | Us3rZer0</title>
        <meta name="description" content="Learn how sweepstakes casinos work in the USA. Legal in 45+ states, no gambling license needed, win real cash prizes with free Sweep Coins." />
      </Head>
      <Navbar />
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            How Do Sweepstakes Casinos Work?
          </h1>
          <p className="text-gray-400 text-lg mb-10">The complete guide to US-legal social casino gaming in 2026.</p>

          {[
            {
              title: '🏛️ The Legal Framework',
              content: `Sweepstakes casinos operate under US promotional sweepstakes law — the same legal framework used by companies like McDonald's Monopoly and Publisher's Clearing House. Because no purchase is necessary to participate, they are not classified as gambling under federal law. This makes them legal in approximately 45 US states.`
            },
            {
              title: '💰 The Dual Currency System',
              content: `All sweepstakes casinos use two types of virtual currency. Gold Coins (or equivalent) are for fun play only — they have no cash value. Sweeps Coins (or Sweepstakes Coins) can be redeemed for real prizes once you've met the wagering requirements. You receive both currencies on sign-up, daily logins, and through promotions.`
            },
            {
              title: '🎰 The Games',
              content: `Sweepstakes casinos offer real casino-style slots, table games, video poker, and sometimes live dealer games. The games look and play identically to real-money casino games — the only difference is the currency they run on.`
            },
            {
              title: '🏆 Winning Real Prizes',
              content: `When you win Sweeps Coins, you can redeem them for cash prizes via PayPal, bank transfer, or cryptocurrency. Most casinos pay out within 24–72 hours. Redemption minimums vary but are typically around $10–$25 worth of Sweeps Coins.`
            },
            {
              title: '🗺️ Which States Are Legal?',
              content: `Sweepstakes casinos are available in most US states. The states that restrict or prohibit them include Idaho, Nevada, Washington, Michigan (some sites), and a few others. California blocked dual-currency sweepstakes casinos effective January 2026 under AB 831. Always check the terms of each casino for your specific state.`
            },
          ].map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="mt-10 text-center">
            <Link href="/casinos" className="btn-gold">Browse Top Sweepstakes Casinos →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
