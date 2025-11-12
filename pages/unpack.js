"use client";
import Head from "next/head";
import { useState } from "react";

export default function Unpack() {
  const prompts = [
    "What moment stood out to you today?",
    "What did you learn or notice about yourself?",
    "What would you like to release before tomorrow?"
  ];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const next = () => {
    if (step < prompts.length - 1) setStep(step + 1);
    else alert("Reflection saved locally. Great work!");
  };

  const handleChange = (e) => {
    const copy = [...answers];
    copy[step] = e.target.value;
    setAnswers(copy);
  };

  return (
    <>
      <Head>
        <title>Unpack — Havenly</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4 text-center">Unpack Your Day</h1>
      <div className="max-w-xl mx-auto">
        <p className="text-text-muted mb-4">{prompts[step]}</p>
        <textarea
          value={answers[step] || ""}
          onChange={handleChange}
          className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none min-h-[120px]"
          placeholder="Write your thoughts here..."
        />
        <div className="text-right mt-4">
          <button onClick={next} className="btn-primary">
            {step === prompts.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}
