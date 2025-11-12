"use client";
import Head from "next/head";
import { useState } from "react";

export default function Unpack() {
  const prompts = [
    "What moment stood out to you today?",
    "What did you learn or notice about yourself?",
    "What would you like to release before tomorrow?",
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleChange = (e) => {
    const copy = [...answers];
    copy[step] = e.target.value;
    setAnswers(copy);
  };

  const next = () => {
    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      // Save reflection locally
      const entry = {
        text: answers.join("\n\n"),
        date: new Date().toISOString(),
      };
      const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
      localStorage.setItem("reflections", JSON.stringify([...stored, entry]));
      alert("Reflection saved locally. Great work!");
      // Optionally reset after saving
      setStep(0);
      setAnswers([]);
    }
  };

  return (
    <>
      <Head>
        <title>Unpack — Havenly</title>
        <meta
          name="description"
          content="Guided reflection prompts to help you process your thoughts and emotions privately."
        />
      </Head>

      <main className="max-w-xl mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Unpack Your Day
        </h1>
        <p className="text-slate-600 mb-4 text-center">{prompts[step]}</p>

        <textarea
          value={answers[step] || ""}
          onChange={handleChange}
          className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none min-h-[140px]"
          placeholder="Write your thoughts here..."
        />

        <div className="text-right mt-6">
          <button
            onClick={next}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-sm transition"
          >
            {step === prompts.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </main>
    </>
  );
}
