// pages/reset.js
import { useState, useEffect } from "react";

export default function Reset() {
  const [phase, setPhase] = useState("start"); // start | breathing | done
  useEffect(() => {
    let t;
    if (phase === "breathing") {
      // cycle 4 breaths (inhale 4s, hold 2s, exhale 6s) -> 4 cycles (~48s)
      let cycles = 0;
      t = setInterval(() => {
        cycles++;
        if (cycles >= 4) {
          clearInterval(t);
          setPhase("done");
        }
      }, 12000); // one full breath cycle ~12s
    }
    return () => clearInterval(t);
  }, [phase]);

  return (
    <div style={wrap}>
      <h1 style={title}>Reset</h1>
      <p style={sub}>A 1-minute breathing pause. Quiet, private. No accounts.</p>

      {phase === "start" && (
        <>
          <div style={card}>
            <p style={{ marginBottom: 12 }}>
              Find a comfortable seat. Softly close your eyes if that feels okay.
            </p>
            <button style={cta} onClick={() => setPhase("breathing")}>Begin</button>
          </div>
        </>
      )}

      {phase === "breathing" && (
        <>
          <div style={breathArea}>
            <div className="breath-circle" style={circle}></div>
            <p style={{ marginTop: 18, color: "#555" }}>Breathe with the circle. Inhale — hold — exhale.</p>
          </div>
          <style jsx>{`
            .breath-circle {
              width: 160px;
              height: 160px;
              border-radius: 50%;
              background: radial-gradient(circle at 30% 30%, #fff, #f3f3f3);
              box-shadow: 0 8px 24px rgba(30,30,30,0.06);
              transition: transform 4s ease-in-out;
              transform: scale(1);
            }
            .breath-grow {
              transform: scale(1.25);
            }
          `}</style>
          <BreathingAnimation />
        </>
      )}

      {phase === "done" && (
        <>
          <div style={card}>
            <p style={{ marginBottom: 12 }}>Nice. Take one more gentle breath. You did something small for yourself.</p>
            <a href="/rooms" style={link}>Back to Spaces</a>
          </div>
        </>
      )}
    </div>
  );
}

// simple component toggling the CSS class to animate breathing
function BreathingAnimation() {
  useEffect(() => {
    const el = document.querySelector(".breath-circle");
    if (!el) return;
    // Inhale (grow) for 4s, hold 2s, exhale (shrink) for 6s -> repeat
    let running = true;
    const cycle = async () => {
      while (running) {
        el.classList.add("breath-grow"); // inhale (4s)
        await sleep(4000);
        // hold (2s)
        await sleep(2000);
        el.classList.remove("breath-grow"); // exhale (6s)
        await sleep(6000);
      }
    };
    cycle();
    return () => { running = false; };
  }, []);
  return null;
}

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

const wrap = { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" };
const title = { fontSize: "1.6rem", marginBottom: 8, fontWeight: 400 };
const sub = { color: "#666", marginBottom: 18 };
const card = { background: "#fff", padding: 18, borderRadius: 12, maxWidth: 520, textAlign: "center", boxShadow: "0 6px 18px rgba(20,20,20,0.04)" };
const cta = { padding: "10px 18px", borderRadius: 10, border: "1px solid #111", background: "#fff", cursor: "pointer" };
const link = { color: "#444", textDecoration: "underline" };
const breathArea = { display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 };
const circle = {};
