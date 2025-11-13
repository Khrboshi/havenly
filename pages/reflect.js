import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import prompts from '../data/prompts.json'

export default function Reflect(){
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  const [saveLocal, setSaveLocal] = useState(false)

  useEffect(()=>{
    try{
      const savedOpt = localStorage.getItem('havenly_save_local')
      if(savedOpt === 'true') setSaveLocal(true)
      if(savedOpt === 'true'){
        const s = localStorage.getItem('havenly_last_session')
        if(s) setNotes(JSON.parse(s))
      }
    }catch(e){}
  },[])

  useEffect(()=>{
    try{
      if(saveLocal) localStorage.setItem('havenly_save_local','true')
      else localStorage.removeItem('havenly_save_local')
    }catch(e){}
  },[saveLocal])

  function next(){
    if(!text.trim()) return
    const newNotes = [...notes, text.trim()]
    setNotes(newNotes)
    setText('')
    setI(i+1)
    if(saveLocal){
      try{ localStorage.setItem('havenly_last_session', JSON.stringify(newNotes)) }catch(e){}
    }
  }

  function finish(){
    if(saveLocal){
      try{ localStorage.setItem('havenly_last_session', JSON.stringify(notes)) }catch(e){}
    }
    setI(prompts.length)
  }

  function restart(){
    setI(0); setText(''); setNotes([])
    try{ localStorage.removeItem('havenly_last_session') }catch(e){}
  }

  if(i >= prompts.length){
    return (
      <>
        <Head><title>Reflection • Havenly</title></Head>
        <Header/>
        <main className="container reflect-end">
          <h2>You're done — thank you for being here.</h2>
          <div className="result-card">
            {notes.map((n,idx)=>(<p key={idx}>• {n}</p>))}
          </div>
          <p className="muted">This reflection stayed on your device{saveLocal ? ' (saved locally)' : ''}.</p>
          <div className="row">
            <a href="/rooms" className="btn-ghost">Back to Spaces</a>
            <button className="btn-primary" onClick={restart}>Do another</button>
          </div>
        </main>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Head><title>Reflect • Havenly</title></Head>
      <Header/>
      <main className="container reflect">
        <h2>{prompts[i]}</h2>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write what comes up…" />
        <div className="row" style={{alignItems:'center'}}>
          <button className="btn-primary" onClick={next} disabled={!text.trim()}>Continue</button>
          <button className="btn-ghost" onClick={finish}>Finish</button>
          <label style={{marginLeft:12, color:'#666'}}><input type="checkbox" checked={saveLocal} onChange={e=>setSaveLocal(e.target.checked)} /> Save locally on this device</label>
        </div>
        <p className="muted">Your words are private — they stay on your device unless you choose to share or save them.</p>
      </main>
      <Footer/>
    </>
  )
}
