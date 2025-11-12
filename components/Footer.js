export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-6 mt-16">
      <div className="container text-center text-text-muted text-sm">
        © {new Date().getFullYear()} Havenly — A quiet place to check in with yourself.
      </div>
    </footer>
  );
}
