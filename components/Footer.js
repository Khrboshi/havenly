"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  // Detect system dark mode preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/premium", label: "Premium" },
  ];

  return (
    <footer
      className={`border-t backdrop-blur-sm transition-colors duration-500 ${
        isDark
          ? "bg-slate-900/90 border-slate-700 text-slate-300"
          : "bg-white/90 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-6">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:underline ${
                isDark ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`mx-auto w-24 h-px ${
            isDark ? "bg-slate-700" : "bg-slate-200"
          }`}
        />

        {/* Branding */}
        <p
          className={`text-sm transition-colors ${
            isDark ? "text-slate-500" : "text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} <span className="font-semibold">Havenly</span>.  
          All reflections are yours — private, safe, and calm.
        </p>

        {/* Social / placeholder for future expansion */}
        <div className="flex justify-center gap-5 pt-4">
          <Link
            href="https://twitter.com/havenlyapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={`transition-transform hover:scale-110 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.633 7.997c.013.177.013.354.013.531 0 5.393-4.106 11.617-11.617 11.617-2.31 0-4.461-.675-6.273-1.844.322.038.63.051.964.051a8.187 8.187 0 0 0 5.078-1.75 4.1 4.1 0 0 1-3.831-2.847c.253.038.506.063.773.063.366 0 .733-.05 1.073-.139a4.09 4.09 0 0 1-3.283-4.014v-.051c.544.303 1.17.493 1.835.519a4.08 4.08 0 0 1-1.827-3.409c0-.747.19-1.431.532-2.028a11.623 11.623 0 0 0 8.44 4.283 4.619 4.619 0 0 1-.101-.938A4.086 4.086 0 0 1 16.14 5c1.178 0 2.24.493 2.987 1.289a8.062 8.062 0 0 0 2.594-.987 4.08 4.08 0 0 1-1.797 2.257 8.17 8.17 0 0 0 2.36-.63 8.763 8.763 0 0 1-2.651 2.068z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
