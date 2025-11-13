"use client";

import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumNudge from "@/components/PremiumNudge";
import DailyReminder from "@/components/DailyReminder";
import PageLoader from "@/components/PageLoader";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setTimeout(() => setLoading(false), 300);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Header />

      {/* ✅ Show PageLoader when navigating */}
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

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
          <Component {...pageProps} />
          <PremiumNudge />
          <DailyReminder />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
