"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Spaces", href: "/" },
  { label: "Reflect", href: "/reflect" },
  { label: "History", href: "/history" },
  { label: "Progress", href: "/progress" },
  { label: "Premium", href: "/premium" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Auto-close on route change
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
        >
          Havenly
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-200 ${
                router.pathname === href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-blue-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700 dark:text-slate-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-lg font-medium text-white md:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <motion.div
                key={href}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
              >
                <Link
                  href={href}
                  className={`block text-center ${
                    router.pathname === href
                      ? "text-blue-400 font-semibold underline underline-offset-4"
                      : "hover:text-blue-300"
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={() => setOpen(false)}
              className="mt-8 text-sm text-slate-300 hover:text-white underline underline-offset-2"
            >
              Close Menu
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
