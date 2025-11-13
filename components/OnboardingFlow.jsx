"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

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
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundEnabled) {
      audioRef.current.volume = 0.25;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [soundEnabled]);

  const next = () => {
    if (index < slides.length - 1) setIndex((i) => i + 1);
    else {
      localStorage.setItem("hasSeenOnboarding", "true");
      onFinish?.();
    }
  };

  const skip = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    onFinish?.();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* --- Animated Background --- */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 left-1/2 w-[120vw] h-[120vh] rounded-full bg-gradient-to-br from-blue-300 via-indigo-200 to-sky-300 dark:from-blue-800 dark:via-indigo-900 dark:to-slate-900 blur-[120px] opacity-40"
            animate={{
              scale: [1, 1.05, 1],
              x: ["-10%", "10%", "-10%"],
              y: ["0%", "5%", "0%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* --- Card --- */}
        <motion.div
          key={index}
          className="relative z-10 max-w-md w-[90%] bg-white/85 dark:bg-slate-800/85 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Skip */}
          <button
            onClick={skip}
            aria-label="Skip onboarding"
            className="absolute top-4 left-4 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
          >
            Skip
          </button>

          {/* Sound toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="absolute top-4 right-4 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition"
            aria-label="Toggle ambient sound"
          >
            {soundEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
          </button>

          <h2 className="text-3xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
            {slides[index].title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {slides[index].text}
          </p>

          {/* Slide indicators */}
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
            className="btn-primary w-full py-3 text-lg scale-tap"
          >
            {index === slides.length - 1 ? "Start Exploring" : "Next"}
          </button>

          <audio ref={audioRef} src="/sounds/ambient-loop.mp3" preload="auto" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
