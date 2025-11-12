import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Rooms(){
  return (
    <>
      <Header/>
      <main className="container rooms">
        <h2>Choose a space</h2>
        <p className="muted">Select the place that fits how you feel right now.</p>

        <div className="cards">
          <Link href="/reset"><a className="card">
            <h3>Reset</h3>
            <p>Short breathing pause to steady the body.</p>
          </a></Link>

          <Link href="/unpack"><a className="card">
            <h3>Unpack</h3>
            <p>Three prompts to gently clear what’s in your head.</p>
          </a></Link>

          <Link href="/encourage"><a className="card">
            <h3>Encourage</h3>
            <p>Small reminders and soft encouragements.</p>
          </a></Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
