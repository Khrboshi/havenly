"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import StreakTracker from "@/components/StreakTracker";
import HabitBuilder from "@/components/HabitBuilder";
import MoodTrendChart from "@/components/MoodTrendChart";

export default function Progress() {
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    avgWords: 0,
    firstDate: null,
    lastDate: null,
    streak: 0,
  });

  // ✅ Auto-update whenever localStorage changes
  const computeStats = () => {
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    if (reflections.length === 0) return;

    const now = new Date();
    const thisMonth = reflections.filter((r) => {
      const d = new Date(r.date);
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    });

    const totalWords = reflections.reduce(
      (sum, r) => sum + r.text.split(/\s+/).length,
      0
    );
    const avgWords = (totalWords / reflections.length).toFixed(0);

    const sorted = [...reflections].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // ✅ Compute reflection streak
    const streak = calculateStreak(sorted);

    setStats({
      total: reflections.length,
      thisMonth: thisMonth.length,
      avgWords,
      firstDate: sorted[0].date,
      lastDate: sorted[sorted.length - 1].date,
      streak,
    });
  };

  // ✅ Run once and whenever tab regains focus
  useEffect(() => {
    computeStats();
    window.addEventListener("focus", computeStats);
    return () => window.removeEventListener("focus", computeStats);
  }, []);

  // ✅ Helper: count consecutive daily reflections
  const calculateStreak = (reflections) => {
    let streak = 1;
    for (let i = reflections.length - 2; i >= 0; i--) {
      const a = new Date(reflections[i + 1].date);
      const b = new Date(reflections[i].date);
      const diffDays = Math.floor((a - b) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) streak++;
      else break;
    }
    return streak;
  };

  return (
    <>
      <Head>
        <title>Progress Snapshot — Havenly</title>
        <meta
          name="description"
          content="Track your reflection streaks, writing habits, and mindfulness journey in real time."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto py-16 px-6"
      >
        <h1 className="text-4xl font-semibold mb-10 text-center text-slate-800 dark:text-slate-100">
          Your Reflection Journey
        </h1>

        {stats.total === 0 ? (
          <div className="text-center text-slate-500 dark:text-slate-400 space-y-4">
            <p>No reflections yet to summarize.</p>
            <Link href="/reflect" className="btn-primary inline-block mt-2">
              Start Writing
            </Link>
          </div>
        ) : (
          <>
            {/* ✅ Stat Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                { label: "Total Reflections", value: stats.total },
                { label: "This Month", value: stats.thisMonth },
                { label: "Avg Words", value: stats.avgWords },
                { label: "Current Streak", value: `${stats.streak} 🔥` },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card hover:shadow-glow transition-all"
                >
                  <h2 className="text-lg font-semibold mb-1">{stat.label}</h2>
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* ✅ Charts and Reinforcement */}
            <div className="mt-12 space-y-10">
              <div className="max-w-md mx-auto">
                <StreakTracker streak={stats.streak} />
              </div>
              <div className="max-w-md mx-auto">
                <HabitBuilder />
              </div>
              <div className="max-w-xl mx-auto">
                <MoodTrendChart />
              </div>
            </div>

            {/* ✅ Motivational footer */}
            <div className="text-center mt-12 space-y-3">
              <p className="text-slate-600 dark:text-slate-300">
                Every reflection brings you closer to calm and clarity.
              </p>
              <Link href="/reflect" className="btn-primary inline-block">
                Write Another Reflection
              </Link>
            </div>
          </>
        )}
      </motion.main>
    </>
  );
}
