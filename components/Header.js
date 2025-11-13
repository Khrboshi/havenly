"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const [openOverflow, setOpenOverflow] = useState(false);
  const router = useRouter();

  const mainLinks = [
    { href: "/rooms", label: "Spaces" },
    { href: "/unpack", label: "Reflect" },
    { href: "/history", label: "History" },
    { href: "/progress", label: "Progress" },
  ];

  const secondaryLinks = [
    { href: "/premium", label: "Premium" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
  ];

  const closeOverflow = () => setOpenOverflow(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Havenly logo" width={32} height={32} priority />
          <span className="text-xl font-semibold text-slate-800">Havenly</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {[...mainLinks, ...secondaryLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-slate-700 hover:text-blue-600 transition font-medium ${
                router.pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
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

      {/* Mobile bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-slate-200 md:hidden flex justify-around px-2 py-1 shadow-[0_-1px_6px_rgba(0,0,0,0.08)]">
        {mainLinks.map((link) => {
          const active = router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile overflow drawer for secondary links */}
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
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                        active
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
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
