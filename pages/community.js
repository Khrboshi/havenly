import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Community(){
  // placeholder public feed — no user data collection here
  const samples = [
    "A 2-line note: Today I paused and that helped.",
    "Tiny: I noticed the coffee tasted better this morning.",
    "I let one thing go today and slept better."
  ]

  return (
    <>
      <Header/>
      <main className="container community">
        <h2>Community</h2>
        <p className="muted">A few anonymous moments shared by early members.</p>
        <div className="feed">
          {samples.map((s,i)=>(<div className="feed-item" key={i}>{s}</div>))}
        </div>
        <p className="muted">When you’re ready, you can share anonymously from your session.</p>
        <div className="row">
          <Link href="/rooms"><a className="btn-ghost">Back to spaces</a></Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
