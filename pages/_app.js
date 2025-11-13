"use client";

import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumNudge from "@/components/PremiumNudge";
import DailyReminder from "@/components/DailyReminder";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Header />
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
