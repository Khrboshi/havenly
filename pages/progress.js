"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { logEvent } from "@/utils/analytics";
import StreakTracker from "@/components/StreakTracker";
import HabitBuilder from "@/components/HabitBuilder";
import MoodTrendChart from "@/components/MoodTrendChart"; // ✅ new import

export default function Progress() {
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    avgWords: 0,
    firstDate: null,
    lastDate: null,
  });

  useEffect(() => {
    logEvent("progress_page_view");

    if (typeof window === "undefined") return;
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");

    if (reflections.length === 0) return;

    const now = new Date();
    const thisMonth = reflections.filter((r) => {
      const d = new Date(r.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });

    const totalWords = reflections.reduce(
      (sum, r) => sum + r.text.split(" ").length,
      0
    );
    const avgWords = (totalWords / reflections.length).toFixed(0);

    const sorted = [...reflections].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setStats({
      total: reflections.length,
      thisMonth: thisMonth.length,
      avgWords,
      firstDate: sorted[0].date,
      lastDate: sorted[sorted.length - 1].date,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Progress Snapshot — Havenly</title>
        <meta
          name="description"
          content="See your mindfulness progress: reflection frequency, journaling streaks, mood trends, and average word count."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto py-16 px-6"
      >
        <h1 className="text-4xl font-semibold mb-10 text-center text-slate-800">
          Your Reflection Journey
        </h1>

        {stats.total === 0 ? (
          <div className="text-center text-slate-500 space-y-4">
            <p>No reflections yet to summarize.</p>
            <Link href="/unpack" className="btn-primary inline-block mt-2">
              Start Writing
            </Link>
          </div>
        ) : (
          <>
            {/* ✅ Summary cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <StatCard title="Total Reflections" value={stats.total} />
              <StatCard title="This Month" value={stats.thisMonth} />
              <StatCard title="Average Words" value={stats.avgWords} />
              <StatCard
                title="Activity Period"
                value={`${new Date(stats.firstDate).toLocaleDateString()} – ${new Date(
                  stats.lastDate
                ).toLocaleDateString()}`}
                textOnly
              />
            </motion.div>

            {/* ✅ Encouragement block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12 space-y-4"
            >
              <p className="text-slate-600">
                Keep nurturing your calm. Every reflection counts toward greater awareness.
              </p>
              <Link href="/unpack" className="btn-primary inline-block">
                Write a New Reflection
              </Link>
            </motion.div>

            {/* ✅ Progress visualizations */}
            <div className="mt-16 max-w-md mx-auto space-y-8">
              <StreakTracker />
              <HabitBuilder />
              <MoodTrendChart />
            </div>
          </>
        )}
      </motion.main>
    </>
  );
}

/* ✅ Small helper for clean, reusable stat cards */
function StatCard({ title, value, textOnly = false }) {
  return (
    <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-slate-700 mb-2">{title}</h2>
      <p
        className={`${
          textOnly
            ? "text-slate-600"
            : "text-4xl font-bold text-blue-600"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
