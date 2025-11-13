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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-in Drawer */}
            <motion.div
              className="fixed right-0 top-0 w-4/5 h-full bg-gradient-to-b from-blue-50 via-white to-slate-50 shadow-2xl z-50 flex flex-col p-6 rounded-l-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-slate-800">
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
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                      router.pathname === link.href
                        ? "bg-blue-100 text-blue-700 shadow-inner border border-blue-200"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom Footer / Close */}
              <div className="mt-auto pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} Havenly
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
