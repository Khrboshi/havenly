import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Reset(){
  const [running, setRunning] = useState(false)
  const [cycles, setCycles] = useState(0)

  useEffect(()=>{
    let id
    if(running){
      id = setInterval(()=> setCycles(c=>c+1), 4000) // small heartbeat to show progress
    }
    return ()=> clearInterval(id)
  },[running])

  return (
    <>
      <Header/>
      <main className="container reset">
        <h2>Reset</h2>
        <p className="muted">A short breathing pause. Find a comfortable seat.</p>

        <div className="reset-card">
          <div className={"circle " + (running ? "grow" : "")}></div>
          <div className="row">
            <button className="btn-primary" onClick={()=> setRunning(r=>!r)}>{running ? 'Stop' : 'Begin'}</button>
            <Link href="/rooms"><a className="btn-ghost">Back to spaces</a></Link>
          </div>
          <p className="muted">Cycles: {cycles}</p>
        </div>
      </main>
      <Footer/>
    </>
  )
}
