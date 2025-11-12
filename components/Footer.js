export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-20">
      <div className="container text-center text-slate-500 text-sm space-y-2">
        <p>© {new Date().getFullYear()} Havenly — A quiet place to check in with yourself.</p>
        <p>
          <a
            href="https://github.com/Khrboshi/havenly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
