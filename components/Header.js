export default function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#111', color: '#fff' }}>
      <h1>Havenly</h1>
      <nav>
        <a href="/" style={{ marginRight: '15px' }}>Home</a>
        <a href="/about" style={{ marginRight: '15px' }}>About</a>
        <a href="/community" style={{ marginRight: '15px' }}>Community</a>
      </nav>
    </header>
  );
}
