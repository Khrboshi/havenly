import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Welcome to Havenly", text: "Let's help you create your first reflection." },
  { title: "Daily Reflections", text: "Answer a mindful question each day to track your growth." },
  { title: "Privacy First", text: "All data stays in your browser—nothing is uploaded." },
];

export default function OnboardingModal({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const next = () => (index < steps.length - 1 ? setIndex(index + 1) : onFinish());

  return (
    <AnimatePresence>
      <motion.div
        key="onboard"
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onFinish}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{steps[index].title}</h2>
          <p className="mb-6 text-gray-700">{steps[index].text}</p>
          <button
            onClick={next}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {index === steps.length - 1 ? "Start Exploring" : "Next"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
