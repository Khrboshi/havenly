"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/rooms", label: "Spaces" },
    { href: "/unpack", label: "Reflect" },
    { href: "/history", label: "History" },
    { href: "/progress", label: "Progress" },
    { href: "/premium", label: "Premium" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-white/70 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Havenly logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-semibold text-slate-800">Havenly</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-slate-600 text-sm sm:text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition-colors ${
                router.pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim background */}
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Bottom sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-gradient-to-b from-blue-100 via-white to-slate-100 shadow-2xl border-t border-slate-300 p-5 pb-[max(env(safe-area-inset-bottom),1.5rem)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            >
              {/* Header Row */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-800">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-600 hover:text-blue-600"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex flex-col space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${
                      router.pathname === link.href
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-8 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} Havenly — Reflect. Breathe. Grow.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
