import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home(){
  const [answer, setAnswer] = useState('')
  const [showThanks, setShowThanks] = useState(false)

  function handleSubmit(e){
    e?.preventDefault()
    // Privacy-first: nothing stored or sent. This is a micro experience.
    setAnswer('')
    setShowThanks(true)
    setTimeout(()=>setShowThanks(false), 2800)
  }

  return (
    <>
      <Header/>
      <main className="container hero">
        <div className="hero-inner">
          <h1>Find your quiet, one reflection at a time.</h1>
          <p className="lede">Havenly is a simple private space to pause, notice, and return to yourself. Free while we grow together.</p>

          <form onSubmit={handleSubmit} className="micro-form" aria-label="Try a quick reflection">
            <label className="sr">Try right now: What’s one word for how you feel?</label>
            <input
              value={answer}
              onChange={e=>setAnswer(e.target.value)}
              placeholder="One word… (e.g. tired, hopeful)"
              className="micro-input"
            />
            <div className="micro-actions">
              <button type="submit" className="btn-primary" disabled={!answer.trim()}>Reflect</button>
              <Link href="/reflect"><a className="btn-ghost">Full Check-In</a></Link>
            </div>
            {showThanks && <div className="micro-thanks">Thanks for checking in — small moments matter.</div>}
          </form>

          <div className="how">
            <h3>How it works</h3>
            <ol>
              <li><strong>Pause.</strong> Take a moment to notice.</li>
              <li><strong>Reflect.</strong> Answer a gentle prompt.</li>
              <li><strong>Return.</strong> Come back tomorrow—no accounts required.</li>
            </ol>
            <p className="small-note">Havenly is private. We don’t collect or sell your reflections.</p>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
