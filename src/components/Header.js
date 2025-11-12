export default function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#111', color: '#fff' }}>
      <h1>AI Innovation Hub</h1>
      <nav>
        <a href="/" style={{ marginRight: '15px' }}>Home</a>
        <a href="/about" style={{ marginRight: '15px' }}>About</a>
        <a href="/community" style={{ marginRight: '15px' }}>Community</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
}
