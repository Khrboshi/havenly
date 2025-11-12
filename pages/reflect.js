import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const prompts = [
  "How are you feeling right now?",
  "What is taking up space in your mind?",
  "What is one small thing that might help today?"
]

export default function Reflect(){
  const [index,setIndex] = useState(0)
  const [text,setText] = useState('')
  const [notes,setNotes] = useState([])

  function next(){
    if(!text.trim()) return
    setNotes(prev=>[...prev, text.trim()])
    setText('')
    setIndex(i=>i+1)
  }

  function restart(){
    setIndex(0); setText(''); setNotes([])
  }

  if(index >= prompts.length){
    return (
      <>
        <Header/>
        <main className="container reflect-end">
          <h2>You're done — thank you for being here.</h2>
          <div className="result-card">
            {notes.map((n,i)=>(<p key={i}>• {n}</p>))}
          </div>
          <p className="muted">This reflection is private and was not saved.</p>
          <div className="row">
            <Link href="/rooms"><a className="btn-ghost">Back to Spaces</a></Link>
            <button className="btn-primary" onClick={restart}>Do another</button>
          </div>
        </main>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Header/>
      <main className="container reflect">
        <h2>{prompts[index]}</h2>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write what comes up…"/>
        <div className="row">
          <button className="btn-primary" onClick={next} disabled={!text.trim()}>Continue</button>
          <Link href="/rooms"><a className="btn-ghost">Choose a different space</a></Link>
        </div>
        <p className="muted">Your words stay with you — we do not store them.</p>
      </main>
      <Footer/>
    </>
  )
}
