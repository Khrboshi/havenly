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
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const links = [
    { href: "/rooms", label: "Spaces" },
    { href: "/community", label: "Community" },
    { href: "/history", label: "My Reflections" },
    { href: "/progress", label: "Progress" },
    { href: "/premium", label: "Premium" },
    { href: "/privacy", label: "Privacy" },
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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-in Drawer */}
            <motion.div
              className="fixed right-0 top-0 w-[78%] h-full bg-gradient-to-b from-blue-100 via-slate-50 to-blue-50 shadow-2xl z-50 flex flex-col p-5 rounded-l-3xl border-l border-slate-300"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-800">
                  Havenly Menu
                </span>
                <button
                  onClick={closeMenu}
                  className="text-slate-600 hover:text-blue-600"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-2.5 px-4 rounded-xl text-base font-medium transition-all shadow-sm ${
                      router.pathname === link.href
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 text-center text-slate-500 text-sm border-t border-slate-300">
                © {new Date().getFullYear()} Havenly — Reflect, Breathe, Grow.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
