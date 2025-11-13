export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Havenly — A quiet space for mindful reflection — every day.</p>
        <p className="mt-2">Built with Next.js & Tailwind CSS · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
