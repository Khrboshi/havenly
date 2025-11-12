import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Premium(){
  return (
    <>
      <Header/>
      <main className="container premium">
        <h2>Havenly Pro — coming soon</h2>
        <p className="muted">We’re building deeper insights, audio reflections, and private history. Early members will receive lifetime discounts.</p>

        <div className="card">
          <h3>What Pro will include</h3>
          <ul>
            <li>Personal reflection summaries</li>
            <li>Guided audio sessions</li>
            <li>Exportable private notes</li>
          </ul>
          <p className="muted">No paywall today — this is an early-access product. Sign up for updates when you’re ready.</p>
          <div className="row">
            <Link href="/"><a className="btn-primary">Join early (free)</a></Link>
            <Link href="/rooms"><a className="btn-ghost">Back to spaces</a></Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
