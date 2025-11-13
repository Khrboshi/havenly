"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StreakTracker() {
  const [streak, setStreak] = useState(0);
  const [lastReflection, setLastReflection] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load reflections
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    if (reflections.length === 0) return;

    // Get last reflection date
    const sorted = reflections
      .map((r) => new Date(r.date))
      .sort((a, b) => b - a);

    const today = new Date();
    const lastDate = sorted[0];
    setLastReflection(lastDate);

    // Calculate streak
    let count = 1;
    for (let i = 1; i < sorted.length; i++) {
      const diff = Math.abs(sorted[i] - sorted[i - 1]);
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      if (diffDays === 1) count++;
      else break;
    }

    // Handle today’s streak update
    const diffFromToday = Math.floor(
      (today - lastDate) / (1000 * 60 * 60 * 24)
    );

    if (diffFromToday === 0) {
      setStreak(count);
    } else if (diffFromToday === 1) {
      // Continue streak if journaling today
      setStreak(count + 1);
      setShowCelebration(true);
    } else {
      setStreak(1);
    }
  }, []);

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => setShowCelebration(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showCelebration]);

  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6 text-center relative overflow-hidden">
      <h2 className="text-xl font-semibold text-slate-800 mb-2">Your Streak</h2>
      <p className="text-5xl font-bold text-blue-600 mb-2">{streak} 🔥</p>
      <p className="text-slate-500 text-sm">
        {lastReflection
          ? `Last reflection: ${new Date(lastReflection).toLocaleDateString()}`
          : "Start journaling to begin your streak."}
      </p>

      {showCelebration && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-blue-100/60 flex items-center justify-center text-2xl font-semibold text-blue-700 rounded-2xl"
        >
          🎉 Keep it up! Streak extended!
        </motion.div>
      )}
    </div>
  );
}
