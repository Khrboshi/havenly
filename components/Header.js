"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/rooms", label: "Spaces" },
    { href: "/unpack", label: "Reflect" },
    { href: "/history", label: "History" },
    { href: "/progress", label: "Progress" },
    { href: "/community", label: "Community" },
    { href: "/premium", label: "Premium" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700"
          : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Havenly logo"
            width={36}
            height={36}
            priority
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Havenly
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6 text-slate-800 dark:text-slate-100" />
          ) : (
            <Menu className="w-6 h-6 text-slate-800 dark:text-slate-100" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-lg z-40 md:hidden"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-xl font-medium hover:text-blue-400 transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setOpen(false)}
              className="btn-secondary mt-8 text-white border-white hover:bg-white hover:text-slate-900"
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
