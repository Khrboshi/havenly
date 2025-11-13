"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect system color scheme
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { href: "/rooms", label: "Spaces" },
    { href: "/unpack", label: "Reflect" },
    { href: "/history", label: "History" },
    { href: "/progress", label: "Progress" },
    { href: "/premium", label: "Premium" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "bg-slate-900/80 border-slate-700"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
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
          <span
            className={`text-lg font-semibold transition-colors ${
              isDark ? "text-slate-100" : "text-slate-800"
            }`}
          >
            Havenly
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isDark
                  ? "text-slate-200 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md transition-colors"
        >
          {menuOpen ? (
            <X
              size={24}
              className={`${
                isDark ? "text-slate-200" : "text-slate-700"
              } transition-transform`}
            />
          ) : (
            <Menu
              size={24}
              className={`${
                isDark ? "text-slate-200" : "text-slate-700"
              } transition-transform`}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden animate-slide-in border-t ${
            isDark
              ? "bg-slate-900/95 border-slate-700 text-slate-100"
              : "bg-white/95 border-slate-200 text-slate-800"
          }`}
        >
          <nav className="flex flex-col text-center space-y-2 py-6 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-lg rounded-full font-medium transition-all ${
                  isDark
                    ? "hover:bg-slate-800 hover:text-blue-400"
                    : "hover:bg-blue-50 hover:text-blue-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
