"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { logEvent } from "@/utils/analytics";
import StreakTracker from "@/components/StreakTracker";
import HabitBuilder from "@/components/HabitBuilder";

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
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
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
          content="See your mindfulness progress: reflection frequency, journaling streaks, and average word count."
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-2">
                  Total Reflections
                </h2>
                <p className="text-4xl font-bold text-blue-600">{stats.total}</p>
              </div>

              <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-2">
                  This Month
                </h2>
                <p className="text-4xl font-bold text-blue-600">
                  {stats.thisMonth}
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-2">
                  Average Words
                </h2>
                <p className="text-4xl font-bold text-blue-600">
                  {stats.avgWords}
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur border border-slate-200 shadow-sm rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-2">
                  Activity Period
                </h2>
                <p className="text-slate-600">
                  {new Date(stats.firstDate).toLocaleDateString()} –{" "}
                  {new Date(stats.lastDate).toLocaleDateString()}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12 space-y-4"
            >
              <p className="text-slate-600">
                Keep nurturing your calm. Every reflection counts toward greater
                awareness.
              </p>
              <Link href="/unpack" className="btn-primary inline-block">
                Write a New Reflection
              </Link>
            </motion.div>

            {/* ✅ Combined streak + habit challenge section */}
            <div className="mt-16 max-w-md mx-auto space-y-8">
              <StreakTracker />
              <HabitBuilder />
            </div>
          </>
        )}
      </motion.main>
    </>
  );
}
