import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy(){
  return (
    <>
      <Header/>
      <main className="container about">
        <h2>Privacy</h2>
        <p>Havenly keeps your reflections private by default. We do not store or sell personal reflections unless you explicitly opt-in (future feature). For now, sessions are client-only and transient.</p>
      </main>
      <Footer/>
    </>
  )
}
