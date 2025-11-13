// /components/OnboardingFlow.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Welcome to Havenly 🌿",
    text: "A quiet place to breathe, reflect, and grow. Let's help you start your mindful journey.",
  },
  {
    title: "Simple Reflections",
    text: "Write about your thoughts and feelings — privately, securely, and with gentle daily prompts.",
  },
  {
    title: "Your Calm Routine",
    text: "Each reflection strengthens focus and resilience. You’ll soon see your growth through progress charts.",
  },
];

export default function OnboardingFlow({ onFinish }) {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      localStorage.setItem("hasSeenOnboarding", "true");
      onFinish();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-md w-[90%] p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
            {steps[index].title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {steps[index].text}
          </p>

          {index === steps.length - 1 ? (
            <Link
              href="/reflect"
              onClick={nextStep}
              className="btn-primary w-full"
            >
              Begin My First Reflection
            </Link>
          ) : (
            <button
              onClick={nextStep}
              className="btn-primary w-full"
            >
              Continue
            </button>
          )}

          {/* Step indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-blue-600 dark:bg-blue-400 scale-110"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
