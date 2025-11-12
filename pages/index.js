"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import OnboardingModal from "@/components/OnboardingModal";
import ReferralBanner from "@/components/ReferralBanner";
import UpgradeBanner from "@/components/UpgradeBanner";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem("onboardingCompleted");
      if (!done) setShowOnboard(true);
    }
  }, []);

  const finishOnboard = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
  };

  return (
    <>
      <Head>
        <title>Havenly — Mindful Reflections</title>
        <meta
          name="description"
          content="Havenly helps you slow down, reflect, and rediscover calm through guided prompts and daily reflections — private, secure, and beautifully simple."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70 -z-10" />

        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
          A Quiet Space for <span className="text-blue-600">Mindful Reflection</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Havenly helps you slow down, reflect, and rediscover calm through guided prompts and daily reflections — private, secure, and beautifully simple.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/rooms"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            Start My Reflection
          </Link>
          <Link
            href="/premium"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition"
          >
            Explore Premium
          </Link>
        </div>

        <div className="mt-16 text-slate-500 text-sm">
          No sign-ups. No distractions. Just space to breathe.
        </div>
      </section>

      {/* Optional banners below hero */}
      <ReferralBanner />
      <UpgradeBanner />

      {/* Onboarding modal */}
      {showOnboard && <OnboardingModal onFinish={finishOnboard} />}
    </>
  );
}
