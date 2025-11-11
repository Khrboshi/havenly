// pages/rooms.js
import Link from 'next/link';
import '../styles/globals.css';

export default function Rooms() {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "80px 24px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: 400 }}>Choose a space</h1>
      <p style={{ marginBottom: "3rem", color: "#555" }}>How are you arriving today?</p>

      <div style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "1fr",
      }}>
        <Link href="/reset"><a style={card}><h2 style={cardTitle}>Reset</h2><p style={cardText}>If things feel heavy or fast.</p></a></Link>
        <Link href="/unpack"><a style={card}><h2 style={cardTitle}>Unpack</h2><p style={cardText}>If your mind is full and needs room.</p></a></Link>
        <Link href="/encourage"><a style={card}><h2 style={cardTitle}>Encourage</h2><p style={cardText}>If you need a gentle reminder of your strength.</p></a></Link>
      </div>
    </div>
  );
}

const card = {
  padding: "24px",
  borderRadius: "12px",
  background: "#fff",
  border: "1px solid #ddd",
  textDecoration: "none",
  color: "#111",
  transition: "0.2s",
  cursor: "pointer"
};
const cardTitle = { marginBottom: "0.5rem", fontWeight: 500 };
const cardText = { color: "#555" };
