import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <>
      <Header/>
      <main className="container about">
        <h2>About Havenly</h2>
        <p>Havenly is a simple, private space to check in with yourself. No accounts. No tracking. Just short prompts to help you notice what matters.</p>
        <p className="muted">We’re in early access — free while we grow. If you care about privacy and calm, you’re in the right place.</p>
      </main>
      <Footer/>
    </>
  )
}
