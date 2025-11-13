"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import DailyPrompt from "@/components/DailyPrompt";
import OnboardingModal from "@/components/OnboardingModal";
import { logEvent } from "@/utils/analytics";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);
  const [hasReflected, setHasReflected] = useState(false);

  useEffect(() => {
    logEvent("home_page_view");
    const done = localStorage.getItem("onboardingCompleted");
    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");

    if (!done) setShowOnboard(true);
    if (reflections.length > 0) setHasReflected(true);
  }, []);

  const finishOnboard = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
    logEvent("onboarding_completed");
  };

  return (
    <>
      <Head>
        <title>Havenly — Reflect, Breathe, Grow</title>
        <meta
          name="description"
          content="Havenly helps you slow down, reflect, and rediscover calm through daily mindful writing and insights."
        />
      </Head>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 opacity-80 -z-10" />

        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
          A Quiet Space for{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Mindful Reflection
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Slow down. Breathe. Write. Havenly helps you find calm through gentle
          reflection — private, secure, and beautifully simple.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {hasReflected ? (
            <>
              <Link
                href="/reflect"
                onClick={() => logEvent("continue_reflection_click")}
                className="btn-primary"
              >
                Continue Reflection
              </Link>
              <Link
                href="/progress"
                onClick={() => logEvent("view_progress_click")}
                className="btn-secondary"
              >
                View My Journey
              </Link>
            </>
          ) : (
            <Link
              href="/reflect"
              onClick={() => logEvent("start_reflection_click")}
              className="btn-primary"
            >
              Start My First Reflection
            </Link>
          )}
        </div>

        <div className="mt-16 text-slate-500 dark:text-slate-400 text-sm">
          {hasReflected
            ? "Welcome back — every day is a chance to begin again."
            : "No sign-ups. No distractions. Just space to breathe."}
        </div>
      </motion.section>

      {/* Daily prompt (below hero) */}
      <DailyPrompt />

      {/* Onboarding modal */}
      {showOnboard && <OnboardingModal onFinish={finishOnboard} />}
    </>
  );
}
