"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😊", label: "Calm" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😞", label: "Sad" },
  { emoji: "😤", label: "Stressed" },
];

export default function MoodTracker({ onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (mood) => {
    setSelected(mood);
    localStorage.setItem("todayMood", JSON.stringify({ ...mood, date: new Date().toISOString() }));
    if (onSelect) onSelect(mood);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        How are you feeling today?
      </h3>

      <div className="flex justify-center gap-4 flex-wrap">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => handleSelect(m)}
            className={`flex flex-col items-center p-3 rounded-2xl border transition ${
              selected?.label === m.label
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <span className="text-3xl">{m.emoji}</span>
            <span className="text-sm mt-1 text-slate-600">{m.label}</span>
          </button>
        ))}
      </div>

      {selected && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500 text-sm mt-4"
        >
          You’re feeling {selected.label.toLowerCase()} today. Take a moment to reflect.
        </motion.p>
      )}
    </motion.div>
  );
}
