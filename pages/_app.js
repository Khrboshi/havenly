"use client";

import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumNudge from "@/components/PremiumNudge";
import DailyNudge from "@/components/DailyNudge";
import PageLoader from "@/components/PageLoader";
import OnboardingFlow from "@/components/OnboardingFlow";
import { getAnalytics, logEvent } from "@/utils/analytics"; // ✅ Correct import

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // ✅ Initialize analytics + first load tracking
  useEffect(() => {
    getAnalytics(); // ✅ initialize correctly
    logEvent("app_loaded");
  }, []);

  // ✅ Track route transitions
  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      logEvent("route_change_start", { to: url });
    };
    const handleStop = (url) => {
      setTimeout(() => setLoading(false), 300);
      logEvent("route_change_complete", { to: url });
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // ✅ Onboarding for first-time users
  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeen) setShowOnboarding(true);
  }, []);

  // ✅ Ambient breathing background
  useEffect(() => {
    document.body.classList.add("flow-enabled");
    return () => document.body.classList.remove("flow-enabled");
  }, []);

  return (
    <>
      {/* Onboarding overlay */}
      {showOnboarding && (
        <OnboardingFlow
          onFinish={() => {
            setShowOnboarding(false);
            localStorage.setItem("hasSeenOnboarding", "true");
            logEvent("onboarding_completed");
          }}
        />
      )}

      <Header />

      {/* Route loader animation */}
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {/* Smooth route transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={router.asPath}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.45,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="min-h-screen flex flex-col justify-between"
        >
          {/* Dynamic content */}
          <Component {...pageProps} />

          {/* Engagement hooks */}
          <PremiumNudge onClick={() => logEvent("user_clicked_premium")} />
          <DailyNudge onComplete={() => logEvent("daily_nudge_completed")} />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
