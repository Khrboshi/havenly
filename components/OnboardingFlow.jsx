"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Welcome to Havenly 🌿",
    text: "Your calm space for daily mindfulness and reflection.",
  },
  {
    title: "Reflect & Grow",
    text: "Write one thought a day — track your emotional patterns and progress.",
  },
  {
    title: "Private & Secure",
    text: "Everything stays safely in your browser. No accounts. No tracking.",
  },
  {
    title: "Ready to Begin?",
    text: "Start your journey toward a calmer, more mindful you.",
  },
];

export default function OnboardingFlow({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Prevent background scroll while onboarding
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const next = () => {
    if (index < slides.length - 1) setIndex((i) => i + 1);
    else {
      localStorage.setItem("hasSeenOnboarding", "true");
      onFinish?.();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="max-w-md w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-8 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
            {slides[index].title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {slides[index].text}
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index
                    ? "bg-blue-600 dark:bg-blue-400 w-4"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={next}
            className="btn-primary w-full py-3 text-lg"
          >
            {index === slides.length - 1 ? "Start Exploring" : "Next"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
