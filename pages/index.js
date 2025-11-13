"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import OnboardingModal from "@/components/OnboardingModal";
import ReferralBanner from "@/components/ReferralBanner";
import UpgradeBanner from "@/components/UpgradeBanner";
import DailyPrompt from "@/components/DailyPrompt";
import { logEvent } from "@/utils/analytics"; // ✅ NEW analytics import

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  useEffect(() => {
    // ✅ Track homepage view
    logEvent("home_page_view");

    if (typeof window !== "undefined") {
      const done = localStorage.getItem("onboardingCompleted");
      if (!done) setShowOnboard(true);
    }
  }, []);

  const finishOnboard = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
    logEvent("onboarding_completed");
  };

  return (
    <>
      <Head>
        <title>Havenly — A quiet space for mindful reflection — every day</title>
        <meta
          name="description"
          content="Havenly helps you slow down, reflect, and rediscover calm through guided prompts and daily reflections — private, secure, and beautifully simple."
        />
      </Head>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70 -z-10" />

        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
          A Quiet Space for{" "}
          <span className="text-blue-600">Mindful Reflection</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Slow down. Breathe. Write. Havenly helps you build calm through simple,
          private journaling — your space to reconnect with yourself every day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/rooms"
            onClick={() => logEvent("start_reflection_click")}
            className="btn-primary"
          >
            Start My Reflection
          </Link>

          <Link
            href="/premium"
            onClick={() => logEvent("explore_premium_click")}
            className="btn-secondary"
          >
            Explore Premium
          </Link>
        </div>

        <div className="mt-16 text-slate-500 text-sm">
          No sign-ups. No distractions. Just space to breathe.
        </div>
      </motion.section>

      {/* ✅ Daily prompt below hero */}
      <DailyPrompt />

      {/* BANNERS + MODAL */}
      <ReferralBanner />
      <UpgradeBanner />
      {showOnboard && <OnboardingModal onFinish={finishOnboard} />}
    </>
  );
}
