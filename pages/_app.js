import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumNudge from "@/components/PremiumNudge"; // ✅ new import

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="min-h-screen flex flex-col justify-between"
        >
          <Component {...pageProps} />
          {/* ✅ Global engagement nudge appears across the site */}
          <PremiumNudge />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
