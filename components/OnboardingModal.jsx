"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Welcome to Havenly", text: "Let's help you start your reflection journey." },
  { title: "Daily Reflections", text: "Answer one question each day to track growth." },
  { title: "Private & Secure", text: "Everything stays safely in your browser." }
];

export default function OnboardingModal({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const next = () => {
    if (index < steps.length - 1) setIndex(index + 1);
    else onFinish();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onFinish}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{steps[index].title}</h2>
          <p className="text-text-muted mb-6">{steps[index].text}</p>
          <button
            onClick={next}
            className="btn-primary w-full"
          >
            {index === steps.length - 1 ? "Start Exploring" : "Next"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
