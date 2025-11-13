"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, RefreshCw } from "lucide-react";
import MotivationLayer from "@/components/MotivationLayer";
import AchievementCelebration from "@/components/AchievementCelebration";

export default function Reflect() {
  const prompts = [
    "What moment stood out to you today?",
    "What did you learn or notice about yourself?",
    "What would you like to release before tomorrow?",
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [reflectionSaved, setReflectionSaved] = useState(false);
  const [stats, setStats] = useState({ streak: 0, total: 0 });

  // ✅ Helper: calculate streak
  const calculateStreak = (reflections) => {
    if (reflections.length === 0) return 0;

    const sorted = [...reflections].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    let streak = 1;
    for (let i = sorted.length - 2; i >= 0; i--) {
      const a = new Date(sorted[i + 1].date);
      const b = new Date(sorted[i].date);
      const diffDays = Math.floor((a - b) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) streak++;
      else break;
    }
    return streak;
  };

  // ✅ Save reflection and update stats
  const saveReflection = () => {
    const entry = {
      text: answers.join("\n\n"),
      date: new Date().toISOString(),
    };

    const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
    const updated = [...stored, entry];
    localStorage.setItem("reflections", JSON.stringify(updated));

    localStorage.setItem("lastReflectionDate", entry.date);

    const total = updated.length;
    const streak = calculateStreak(updated);
    localStorage.setItem("totalReflections", total);
    localStorage.setItem("streakCount", streak);

    setStats({ streak, total });
    setCompleted(true);
    setReflectionSaved(true);

    // Hide MotivationLayer after 10s
    setTimeout(() => setReflectionSaved(false), 10000);
  };

  const handleChange = (e) => {
    const copy = [...answers];
    copy[step] = e.target.value;
    setAnswers(copy);
  };

  const next = () => {
    if (step < prompts.length - 1) setStep(step + 1);
    else saveReflection();
  };

  return (
    <>
      <Head>
        <title>Reflect — Havenly</title>
        <meta
          name="description"
          content="Reflect mindfully on your day — guided prompts that help you grow calm and clarity."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto py-16 px-6 text-center"
      >
        <h1 className="text-4xl font-semibold mb-8 text-slate-800 dark:text-slate-100">
          Daily Reflection
        </h1>

        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-200 mb-4">
                {prompts[step]}
              </p>

              <textarea
                value={answers[step] || ""}
                onChange={handleChange}
                placeholder="Write your thoughts here..."
                className="input min-h-[140px] mb-4"
              />

              <button onClick={next} className="btn-primary w-full">
                {step === prompts.length - 1 ? "Finish Reflection" : "Next"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="completed"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <CheckCircle className="text-green-500 w-16 h-16" />
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                Great work!
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-md">
                Your reflection has been saved. Each day brings a new step
                toward greater calm and awareness.
              </p>

              <div className="flex gap-4 mt-4">
                <a href="/progress" className="btn-secondary">
                  View Progress
                </a>
                <button
                  onClick={() => {
                    setCompleted(false);
                    setStep(0);
                    setAnswers([]);
                  }}
                  className="btn-primary flex items-center gap-2"
                >
                  <RefreshCw size={16} /> New Reflection
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-slate-500 text-sm mt-8">
          Your reflections stay private in your browser.
        </p>

        {/* ✅ Motivation + Celebration layers */}
        {reflectionSaved && <MotivationLayer />}
        {completed && (
          <AchievementCelebration
            streak={stats.streak}
            total={stats.total}
          />
        )}
      </motion.main>
    </>
  );
}
