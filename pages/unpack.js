// pages/unpack.js
import { useState } from "react";

const prompts = [
  "Name one thing that keeps circling in your mind.",
  "What feeling sits under that thought?",
  "If you could speak to that feeling, what would you say?"
];

export default function Unpack() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [answers, setAnswers] = useState([]);

  const next = () => {
    setAnswers(a => [...a, text]);
    setText("");
    setStep(s => s + 1);
  };

  if (step >= prompts.length) {
    return (
      <div style={wrap}>
        <h1 style={title}>Unpack</h1>
        <div style={card}>
          <p style={{ color: "#444" }}>Your short notes:</p>
          <div style={{ marginTop: 12, textAlign: "left" }}>
            {answers.map((a,i)=>(<p key={i} style={{ marginBottom: 10 }}>{a}</p>))}
          </div>
          <p style={{ color: "#666", marginTop: 8 }}>This stays only in this session.</p>
          <a href="/rooms" style={link}>Back</a>
        </div>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <h1 style={title}>Unpack</h1>
      <div style={card}>
        <p style={{ marginBottom: 12 }}>{prompts[step]}</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write a few lines..." style={area} />
        <button onClick={next} style={btn} disabled={!text.trim()}>Continue</button>
      </div>
    </div>
  );
}

const wrap = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 };
const title = { fontWeight: 400, marginBottom: 12 };
const card = { background: "#fff", padding: 20, borderRadius: 12, maxWidth: 560, width: "100%", textAlign: "center", boxShadow: "0 8px 24px rgba(20,20,20,0.05)" };
const area = { width: "100%", minHeight: 120, padding: 12, borderRadius: 8, border: "1px solid #ddd", resize: "none" };
const btn = { marginTop: 12, padding: "10px 18px", borderRadius: 8, border: "1px solid #111", background: "#fff", cursor: "pointer" };
const link = { display: "inline-block", marginTop: 14, color: "#444", textDecoration: "underline" };
