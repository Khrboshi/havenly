import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const lines = [
  "You’ve made it this far. That matters.",
  "Small steps are still steps.",
  "Rest is productive. Give yourself permission.",
  "You are allowed to be imperfect and still whole."
]

export default function Encourage(){
  const [i,setI] = useState(0)
  return (
    <>
      <Header/>
      <main className="container encourage">
        <h2>Encourage</h2>
        <div className="result-card">
          <p>{lines[i]}</p>
        </div>
        <div className="row">
          <button className="btn-primary" onClick={()=> setI((i+1)%lines.length)}>Another</button>
          <Link href="/rooms"><a className="btn-ghost">Back</a></Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
