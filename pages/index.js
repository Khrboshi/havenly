import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home(){
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleJoin(e){
    e?.preventDefault()
    // placeholder: replace with your email-list endpoint if needed
    setEmail('')
    setJoined(true)
    setTimeout(()=>setJoined(false), 3000)
  }

  return (
    <>
      <Head>
        <title>Havenly — A quiet space to reflect</title>
        <meta name="description" content="Havenly is a private, minimal reflection space. Free for early members."/>
        <meta property="og:title" content="Havenly — A quiet space to reflect"/>
        <meta property="og:description" content="Take a moment. No accounts. No tracking. Just small reflections."/>
      </Head>

      <Header/>
      <main className="container hero">
        <div className="hero-inner">
          <h1>Find your quiet, one reflection at a time.</h1>
          <p className="lede">Havenly is a private corner for short daily reflections. Free while we grow together.</p>

          <div className="cta-row">
            <Link href="/reflect"><a className="btn-primary large">Start a quick reflection</a></Link>
            <Link href="/rooms"><a className="btn-ghost">Choose a space</a></Link>
          </div>

          <section className="feature">
            <h3>How it works</h3>
            <div className="steps">
              <div><strong>Pause</strong><p>Take a small moment to notice.</p></div>
              <div><strong>Reflect</strong><p>Answer a gentle prompt.</p></div>
              <div><strong>Return</strong><p>Come back tomorrow — no pressure.</p></div>
            </div>
            <p className="muted">Havenly is private by design. Your reflections stay with you unless you choose to save them locally.</p>
          </section>

          <section className="join">
            <h4>Join the early circle</h4>
            <p className="muted">Get product updates and early-access invites. We won't spam — replace this with your mailing list handler.</p>
            <form onSubmit={handleJoin} className="join-form">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="micro-input" />
              <button className="btn-primary" type="submit" disabled={!email.trim()}>Join (free)</button>
            </form>
            {joined && <div className="micro-thanks">Thanks — you’re on the list.</div>}
          </section>

        </div>
      </main>
      <Footer/>
    </>
  )
}
