import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  { slug: 'best-sweepstakes-casinos-usa-2026', title: 'Best Sweepstakes Casinos in the USA — 2026 Rankings', date: 'July 1, 2026', category: 'Rankings', excerpt: 'We tested 20+ sweepstakes casinos so you don\'t have to. Here are the top picks for 2026 based on bonuses, game selection, and payout speed.' },
  { slug: 'how-to-win-real-money-sweepstakes-casino', title: 'How to Win Real Money at Sweepstakes Casinos', date: 'June 28, 2026', category: 'Strategy', excerpt: 'Yes, you can actually win real cash at sweepstakes casinos. Here\'s the step-by-step guide to maximizing your Sweep Coins and cashing out.' },
  { slug: 'chumba-vs-luckyland', title: 'Chumba Casino vs LuckyLand Slots: Which Is Better in 2026?', date: 'June 22, 2026', category: 'Comparison', excerpt: 'The two biggest names in US sweepstakes gaming go head-to-head. We compare bonuses, games, payouts, and more.' },
  { slug: 'no-deposit-bonus-codes-july-2026', title: 'No Deposit Sweepstakes Bonus Codes — July 2026', date: 'July 3, 2026', category: 'Bonuses', excerpt: 'All the latest no deposit bonus codes for sweepstakes casinos, updated for July 2026. Claim free Sweep Coins without spending a dime.' },
  { slug: 'sweepstakes-casino-legal-states-2026', title: 'Which States Allow Sweepstakes Casinos in 2026?', date: 'June 15, 2026', category: 'Legal', excerpt: 'The legal landscape for sweepstakes casinos changed in 2026. Here\'s a full state-by-state breakdown of where you can play.' },
  { slug: 'california-ab831-sweepstakes-casino', title: 'California AB 831: What It Means for Sweepstakes Casino Players', date: 'June 10, 2026', category: 'Legal', excerpt: 'California\'s AB 831 took effect January 1, 2026. Here\'s what it means if you\'re a player or operator in the Golden State.' },
]

const categoryColors = {
  Rankings: '#6C3FC9',
  Strategy: '#22C55E',
  Comparison: '#3B82F6',
  Bonuses: '#F5C842',
  Legal: '#EF4444',
}

export default function Blog() {
  return (
    <>
      <Head>
        <title>Sweepstakes Casino Blog 2026 | News, Tips & Bonus Codes | Us3rZer0</title>
        <meta name="description" content="The latest sweepstakes casino news, strategy guides, bonus codes, and legal updates for US players in 2026." />
      </Head>
      <Navbar />
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Casino Blog
          </h1>
          <p className="text-gray-400 text-center mb-10">News, tips, and bonus codes for US sweepstakes casino players</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="block rounded-xl p-5 card-glow"
                style={{ background: '#1A1A28', border: '1px solid #2A2A3D', textDecoration: 'none' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: categoryColors[post.category] + '30', color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                <h2 className="text-white font-bold text-lg mb-2 leading-snug">{post.title}</h2>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                <p className="text-yellow-400 text-sm mt-3 font-medium">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
