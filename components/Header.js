"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, MoreHorizontal, Home, PenLine, BookText, LineChart, Star, Users, Info, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const [openOverflow, setOpenOverflow] = useState(false);
  const router = useRouter();

  // Main quick-access navigation
  const mainLinks = [
    { href: "/rooms", label: "Spaces", icon: <Home size={18} /> },
    { href: "/unpack", label: "Reflect", icon: <PenLine size={18} /> },
    { href: "/history", label: "History", icon: <BookText size={18} /> },
    { href: "/progress", label: "Progress", icon: <LineChart size={18} /> },
  ];

  // Secondary navigation (less frequent actions)
  const secondaryLinks = [
    { href: "/premium", label: "Premium", icon: <Star size={18} /> },
    { href: "/community", label: "Community", icon: <Users size={18} /> },
    { href: "/about", label: "About", icon: <Info size={18} /> },
    { href: "/privacy", label: "Privacy", icon: <Shield size={18} /> },
  ];

  const closeOverflow = () => setOpenOverflow(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      {/* Desktop / Laptop Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Havenly logo" width={32} height={32} priority />
          <span className="text-xl font-semibold text-slate-800">Havenly</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {[...mainLinks, ...secondaryLinks].map((link) => {
            const active = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition font-medium ${
                  active ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile overflow trigger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setOpenOverflow(true)}
            aria-label="More menu"
            className="text-slate-700 hover:text-blue-600"
          >
            <MoreHorizontal size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav
        className="
          fixed bottom-0 left-0 right-0 
          bg-gradient-to-t from-white via-white/95 to-white/80
          border-t border-slate-200 
          md:hidden flex justify-around items-center
          shadow-[0_-2px_8px_rgba(0,0,0,0.05)]
          backdrop-blur
          py-1 sm:py-2
          pb-[max(env(safe-area-inset-bottom),0.65rem)]
        "
      >
        {mainLinks.map((link) => {
          const active = router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-sm scale-105"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Overflow Drawer for Secondary Links */}
      <AnimatePresence>
        {openOverflow && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-900/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOverflow}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 p-5 pb-[max(env(safe-area-inset-bottom),1.5rem)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-800">More</span>
                <button
                  onClick={closeOverflow}
                  className="text-slate-600 hover:text-blue-600"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {secondaryLinks.map((link) => {
                  const active = router.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeOverflow}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition ${
                        active
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
