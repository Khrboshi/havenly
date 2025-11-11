import { useState } from "react";

const questions = [
  "How are you feeling right now?",
  "What's taking up space in your mind?",
  "If there was one thing you could let go of today, what would it be?",
  "What is one small thing you can do to support yourself in the next few hours?"
];

export default function Reflect() {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [reflection, setReflection] = useState([]);

  function handleNext() {
    setReflection([...reflection, answer]);
    setAnswer("");
    setStep(step + 1);
  }

  if (step >= questions.length) {
    return (
      <div style={container}>
        <h2>Your reflection</h2>
        <div style={noteBox}>
          {reflection.map((line, i) => (
            <p key={i} style={{ marginBottom: "1rem" }}>{line}</p>
          ))}
        </div>
        <p style={{ color: "#666", marginTop: "2rem" }}>
          This stays with you. It’s not stored anywhere.
        </p>
      </div>
    );
  }

  return (
    <div style={container}>
      <h2 style={{ marginBottom: "1.5rem", fontWeight: 400 }}>
        {questions[step]}
      </h2>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write what comes up, even if it's messy."
        style={textarea}
      />

      <button onClick={handleNext} style={button} disabled={!answer.trim()}>
        Continue
      </button>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 20px",
  textAlign: "center"
};

const textarea = {
  width: "100%",
  maxWidth: "420px",
  height: "140px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #bbb",
  resize: "none",
  fontSize: "1rem",
  marginBottom: "1.5rem"
};

const button = {
  padding: "12px 32px",
  borderRadius: "8px",
  border: "1px solid #111",
  background: "#fff",
  cursor: "pointer",
  fontSize: "1rem"
};

const noteBox = {
  background: "#fafafa",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "420px",
  textAlign: "left"
};
