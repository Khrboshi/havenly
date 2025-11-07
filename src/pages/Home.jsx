import "../styles/global.css";

export default function Home() {
  return (
    <div className="home-wrap">
      <header className="nav">
        <img src="/assets/logo/logo.png" alt="Havenly Logo" className="logo" />
        <span className="brand">Havenly</span>
      </header>

      <main className="hero">
        <h1>A quiet place to check in with yourself.</h1>
        <p>
          No judgment. No tracking. Just a moment that belongs only to you.
        </p>

        <a className="cta" href="/checkin">Begin Check-In</a>
      </main>
    </div>
  );
}
