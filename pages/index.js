// pages/index.js
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="home-wrap">
      <header className="nav">
        <img src="/assets/logo/logo.png" alt="Havenly Logo" className="logo" />
        <span className="brand">Havenly</span>
      </header>

      <main className="hero">
        <h1>A quiet place to return to yourself.</h1>
        <p>No accounts. No tracking. Just a moment that belongs only to you.</p>
        <a className="cta" href="/rooms">Select a space</a>
      </main>
    </div>
  );
}
