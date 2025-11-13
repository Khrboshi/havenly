"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import AchievementCelebration from "@/components/AchievementCelebration";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Progress() {
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    avgWords: 0,
    streak: 0,
  });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    if (reflections.length === 0) return;

    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    // This month’s reflections
    const monthRefs = reflections.filter((r) => {
      const d = new Date(r.date);
      return d.getMonth() === month && d.getFullYear() === year;
    });

    const totalWords = reflections.reduce(
      (sum, r) => sum + r.text.split(/\s+/).length,
      0
    );
    const avgWords = (totalWords / reflections.length).toFixed(0);

    // Streak calculation
    const streak = calculateStreak(reflections);

    // Weekly chart data
    const last7 = reflections.slice(-7).map((r) => ({
      date: new Date(r.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      words: r.text.split(/\s+/).length,
    }));

    setStats({
      total: reflections.length,
      thisMonth: monthRefs.length,
      avgWords,
      streak,
    });
    setChartData(last7);
  }, []);

  const calculateStreak = (reflections) => {
    if (reflections.length === 0) return 0;
    const sorted = [...reflections].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    let streak = 1;
    for (let i = sorted.length - 2; i >= 0; i--) {
      const diff =
        (new Date(sorted[i + 1].date) - new Date(sorted[i].date)) /
        (1000 * 60 * 60 * 24);
      if (diff === 1) streak++;
      else break;
    }
    return streak;
  };

  return (
    <>
      <Head>
        <title>Progress — Havenly</title>
        <meta
          name="description"
          content="Track your reflection streaks, writing habits, and personal calm journey."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-16 px-6"
      >
        <h1 className="text-4xl font-semibold text-center mb-10 text-slate-800 dark:text-slate-100">
          Your Journey So Far
        </h1>

        {stats.total === 0 ? (
          <div className="text-center text-slate-500">
            No reflections yet. Start today to begin your calm journey.
            <a href="/reflect" className="btn-primary mt-4 inline-block">
              Start Reflecting
            </a>
          </div>
        ) : (
          <>
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
            >
              {[
                { label: "Total Reflections", value: stats.total },
                { label: "This Month", value: stats.thisMonth },
                { label: "Avg. Words", value: stats.avgWords },
                { label: "Current Streak", value: `${stats.streak} 🔥` },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card text-center hover:shadow-glow transition"
                >
                  <h3 className="text-slate-600 dark:text-slate-300 mb-1">
                    {s.label}
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {s.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Weekly trend chart */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Writing Trend (Last 7 Days)
              </h2>
              {chartData.length > 1 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="date" tick={{ fill: "#94a3b8" }} />
                    <YAxis tick={{ fill: "#94a3b8" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                      labelStyle={{ color: "#475569" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="words"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-slate-500">Not enough data yet for trends.</p>
              )}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Every entry adds depth to your calm.
              </p>
              <a href="/reflect" className="btn-primary">
                Write a New Reflection
              </a>
            </div>
          </>
        )}
        {/* Celebration triggers */}
        <AchievementCelebration
          streak={stats.streak}
          total={stats.total}
        />
      </motion.main>
    </>
  );
}
