"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function AchievementCelebration({ streak, total }) {
  const [show, setShow] = useState(false);
  const [achievement, setAchievement] = useState(null);

  // 🎯 Define milestones
  const milestones = [
    { type: "reflections", count: 3, text: "You’ve written 3 reflections — that’s the start of a great habit!", icon: <Sparkles className="text-yellow-400 w-10 h-10" /> },
    { type: "reflections", count: 7, text: "7 reflections! You’re building momentum toward mindfulness.", icon: <Trophy className="text-orange-400 w-10 h-10" /> },
    { type: "streak", count: 3, text: "3-day streak — your consistency is inspiring!", icon: <Flame className="text-red-500 w-10 h-10" /> },
    { type: "streak", count: 7, text: "🔥 A full week of calm — 7-day streak achieved!", icon: <Flame className="text-red-400 w-10 h-10" /> },
  ];

  useEffect(() => {
    // Check milestones and display one if reached
    for (const m of milestones) {
      if ((m.type === "reflections" && total === m.count) ||
          (m.type === "streak" && streak === m.count)) {
        setAchievement(m);
        setShow(true);
        localStorage.setItem(`badge_${m.type}_${m.count}`, "true");
        break;
      }
    }
  }, [streak, total]);

  if (!show || !achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="achievement"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShow(false)}></div>

        <motion.div
          className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg border border-slate-200 dark:border-slate-700 space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
        >
          <div className="flex justify-center">{achievement.icon}</div>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Milestone Unlocked!</h2>
          <p className="text-slate-600 dark:text-slate-300">{achievement.text}</p>
          <button
            onClick={() => setShow(false)}
            className="btn-primary mt-2 w-full"
          >
            Keep Going
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
