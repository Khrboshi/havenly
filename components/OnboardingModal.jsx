// /components/OnboardingModal.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Welcome to Havenly", text: "Let's help you create your first reflection." },
  { title: "Daily Reflections", text: "Answer a mindful question each day to track your growth." },
  { title: "Privacy First", text: "All data stays in your browser—nothing is uploaded." },
];

export default function OnboardingModal({ onFinish }) {
  const [index, setIndex] = useState(0);
  const next = () => (index < steps.length - 1 ? setIndex(index + 1) : onFinish());

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">{steps[index].title}</h2>
        <p className="mb-6">{steps[index].text}</p>
        <button
          onClick={next}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {index === steps.length - 1 ? "Start Exploring" : "Next"}
        </button>
      </div>
    </motion.div>
  );
}
