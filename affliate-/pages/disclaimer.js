import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Disclaimer() {
  return (
    <>
      <Head><title>Disclaimer | Us3rZer0 Casino</title></Head>
      <Navbar />
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold text-white mb-6">Disclaimer</h1>
          <div className="space-y-4 text-gray-400">
            <p><strong className="text-white">Affiliate Disclosure:</strong> Us3rZer0 Casino contains affiliate links. When you click a link and sign up or make a purchase, we may earn a commission at no additional cost to you. This helps us maintain the site and continue providing free content.</p>
            <p><strong className="text-white">No Gambling Endorsement:</strong> Sweepstakes casinos are not gambling under US federal law. However, they are entertainment products intended for adults 18 years of age and older.</p>
            <p><strong className="text-white">State Availability:</strong> Sweepstakes casino availability varies by state. It is your responsibility to verify that participation is legal in your jurisdiction before signing up.</p>
            <p><strong className="text-white">Accuracy:</strong> We strive to keep bonus codes, terms, and reviews accurate and up to date, but casino offers change frequently. Always verify current terms directly on the casino's website.</p>
            <p><strong className="text-white">Responsible Gaming:</strong> Play for entertainment only. Never spend more than you can afford. If you feel gaming is affecting your wellbeing, visit the <a href="https://www.ncpgambling.org" className="text-yellow-400">National Council on Problem Gambling</a> or call 1-800-522-4700.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
