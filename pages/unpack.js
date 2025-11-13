"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import MoodTracker from "@/components/MoodTracker";
import { logEvent } from "@/utils/analytics";

export default function Unpack() {
  const prompts = [
    "What moment stood out to you today?",
    "What did you learn or notice about yourself?",
    "What would you like to release before tomorrow?",
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [mood, setMood] = useState(null);

  useEffect(() => {
    logEvent("unpack_page_view");
  }, []);

  const handleChange = (e) => {
    const copy = [...answers];
    copy[step] = e.target.value;
    setAnswers(copy);
  };

  const next = () => {
    logEvent("reflection_step", { step });

    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      const entry = {
        text: answers.join("\n\n"),
        date: new Date().toISOString(),
        mood: mood?.label || "Unknown",
      };

      const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
      localStorage.setItem("reflections", JSON.stringify([...stored, entry]));

      logEvent("reflection_saved", {
        words: entry.text.split(" ").length,
        mood: entry.mood,
      });

      alert("Reflection saved locally. Great work!");

      setStep(0);
      setAnswers([]);
      setMood(null);
    }
  };

  return (
    <>
      <Head>
        <title>Unpack — Havenly</title>
        <meta
          name="description"
          content="Reflect on your day with Havenly's mindful unpack feature — guided, private, and empowering."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto py-16 px-6"
      >
        <h1 className="text-4xl font-semibold mb-8 text-center text-slate-800">
          Unpack Your Day
        </h1>

        {/* ✅ MoodTracker appears first */}
        <MoodTracker onSelect={(m) => setMood(m)} />

        <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-6">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-slate-700 mb-4"
          >
            {prompts[step]}
          </motion.p>

          <textarea
            value={answers[step] || ""}
            onChange={handleChange}
            placeholder="Write your thoughts here..."
            className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none min-h-[140px] mb-4"
          />

          <div className="flex justify-end">
            <button onClick={next} className="btn-primary">
              {step === prompts.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Your reflections and moods are saved privately in your browser — only you can view them.
        </p>
      </motion.main>
    </>
  );
}
