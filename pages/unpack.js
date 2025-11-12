import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const prompts = [
  "Name one thing that keeps circling in your mind.",
  "What feeling sits beneath that thought?",
  "If you could tell that feeling one small thing, what would it be?"
]

export default function Unpack(){
  const [i,setI] = useState(0)
  const [text,setText] = useState('')
  const [answers,setAnswers] = useState([])

  function next(){
    if(!text.trim()) return
    setAnswers(a=>[...a, text.trim()]); setText(''); setI(i+1)
  }

  if(i >= prompts.length){
    return (
      <>
        <Header/>
        <main className="container unpack">
          <h2>Unpack</h2>
          <div className="result-card">
            {answers.map((a,idx)=>(<p key={idx}>• {a}</p>))}
          </div>
          <p className="muted">This stays private to this session.</p>
          <div className="row">
            <Link href="/rooms"><a className="btn-ghost">Back</a></Link>
          </div>
        </main>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Header/>
      <main className="container unpack">
        <h2>{prompts[i]}</h2>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write a few lines..." />
        <div className="row">
          <button className="btn-primary" onClick={next} disabled={!text.trim()}>Continue</button>
          <Link href="/rooms"><a className="btn-ghost">Back to spaces</a></Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}
