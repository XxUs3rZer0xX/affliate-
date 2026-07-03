import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CasinoCard from '../components/CasinoCard'
import { casinos } from '../data/casinos'

export default function Casinos() {
  return (
    <>
      <Head>
        <title>Best Sweepstakes Casinos 2026 | Full Reviews | Us3rZer0</title>
        <meta name="description" content="Compare all top US sweepstakes casinos. Read expert reviews, compare bonuses, and find the best slots for your state." />
      </Head>
      <Navbar />
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-3 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Best Sweepstakes Casinos 2026
          </h1>
          <p className="text-gray-400 text-center mb-10">All ranked. All reviewed. Updated monthly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
