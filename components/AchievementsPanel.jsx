// /components/AchievementsPanel.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Flame, Feather, BookOpen, Sparkles } from "lucide-react";

export default function AchievementsPanel() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    const total = reflections.length;
    const totalWords = reflections.reduce(
      (sum, r) => sum + r.text.split(/\s+/).length,
      0
    );
    const streak = parseInt(localStorage.getItem("streakCount") || "0");

    const achieved = [];

    // Streak achievements
    if (streak >= 3)
      achieved.push({
        icon: <Flame className="text-orange-500" />,
        title: "Consistency Seed",
        desc: "3-day reflection streak — you’re growing steady roots.",
      });
    if (streak >= 7)
      achieved.push({
        icon: <Sparkles className="text-amber-400" />,
        title: "Momentum Flow",
        desc: "7-day streak — calm is becoming a habit.",
      });

    // Reflection count
    if (total >= 10)
      achieved.push({
        icon: <BookOpen className="text-blue-500" />,
        title: "Grounded Observer",
        desc: "10 reflections — you’re learning your own rhythm.",
      });
    if (total >= 25)
      achieved.push({
        icon: <Star className="text-yellow-400" />,
        title: "Inner Cartographer",
        desc: "25 reflections — you’re mapping your inner landscape.",
      });

    // Word count
    if (totalWords >= 1000)
      achieved.push({
        icon: <Feather className="text-indigo-500" />,
        title: "Voice of Calm",
        desc: "1 000 words of reflection — your voice is grounding.",
      });

    setAchievements(achieved);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100 text-center">
        Your Achievements
      </h2>

      {achievements.length === 0 ? (
        <p className="text-center text-slate-500">
          Keep reflecting — your milestones will bloom soon.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="card flex flex-col items-center text-center p-6 hover:shadow-glow"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                {a.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {a.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
