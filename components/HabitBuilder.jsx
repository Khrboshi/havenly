"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HabitBuilder() {
  const [dayCount, setDayCount] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    if (reflections.length === 0) return;

    const sorted = reflections
      .map((r) => new Date(r.date))
      .sort((a, b) => a - b);

    // Determine unique days with reflections
    const uniqueDays = new Set(
      sorted.map((d) => d.toISOString().split("T")[0])
    );
    const count = Math.min(uniqueDays.size, 7);
    setDayCount(count);

    if (count === 7) setShowCongrats(true);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6 text-center mt-12">
      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        7-Day Reflection Challenge
      </h2>
      <p className="text-slate-600 mb-4">
        Build your daily mindfulness habit — {7 - dayCount} day(s) to go!
      </p>

      {/* Progress ring */}
      <div className="relative mx-auto mb-4 w-32 h-32">
        <svg className="transform -rotate-90" width="128" height="128">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#e2e8f0"
            strokeWidth="12"
            fill="none"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="56"
            stroke="#3b82f6"
            strokeWidth="12"
            fill="none"
            strokeDasharray="351"
            strokeDashoffset={351 - (351 * dayCount) / 7}
            initial={{ strokeDashoffset: 351 }}
            animate={{ strokeDashoffset: 351 - (351 * dayCount) / 7 }}
            transition={{ duration: 0.8 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">
          {dayCount}/7
        </div>
      </div>

      <p className="text-slate-500 text-sm">
        Reflect daily for one week to unlock your first mindful badge.
      </p>

      {showCongrats && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 bg-blue-100 border border-blue-200 text-blue-800 p-4 rounded-xl"
        >
          🎉 Congratulations! You’ve completed your first mindful week!
        </motion.div>
      )}
    </div>
  );
}
