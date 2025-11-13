// /components/Header.js
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/reflect", label: "Reflect" },
    { href: "/progress", label: "Progress" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`navbar transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/90 dark:bg-slate-900/80 shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo / brand */}
      <Link
        href="/"
        className="text-xl sm:text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
      >
        Havenly
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${
              router.pathname === link.href ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger button */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-slate-700 dark:text-slate-200 focus:outline-none"
      >
        <motion.div
          animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-current mb-[5px] rounded"
        />
        <motion.div
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-[2px] bg-current mb-[5px] rounded"
        />
        <motion.div
          animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-current rounded"
        />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-menu"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold ${
                  router.pathname === link.href ? "text-blue-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
