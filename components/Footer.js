export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {year} Havenly — Designed for calm, built with care.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://havenly.vercel.app/privacy"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Privacy
          </a>
          <a
            href="https://havenly.vercel.app/about"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="mailto:hello@havenly.app"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
