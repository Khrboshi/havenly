// pages/encourage.js
import { useState } from "react";

const reminders = [
  "You’ve made it this far. That counts.",
  "Small steps are still steps.",
  "It’s okay to rest for a while.",
  "You’re allowed to be imperfect and still whole."
];

export default function Encourage(){
  const [i, setI] = useState(0);
  const next = () => setI((i+1)%reminders.length);
  return (
    <div style={wrap}>
      <h1 style={title}>Encourage</h1>
      <div style={card}>
        <p style={{ fontSize: "1.05rem", color: "#222" }}>{reminders[i]}</p>
        <div style={{ marginTop: 18 }}>
          <button onClick={next} style={btn}>Another</button>
          <a href="/rooms" style={link}>Back</a>
        </div>
      </div>
    </div>
  );
}

const wrap = { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 };
const title = { fontWeight: 400, marginBottom: 12 };
const card = { background: "#fff", padding: 20, borderRadius: 12, maxWidth: 560, width: "100%", textAlign: "center", boxShadow: "0 8px 24px rgba(20,20,20,0.05)" };
const btn = { marginRight: 12, padding: "10px 18px", borderRadius: 8, border: "1px solid #111", background: "#fff", cursor: "pointer" };
const link = { color: "#444", textDecoration: "underline" };
