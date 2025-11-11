import Link from "next/link";

export default function Rooms() {
  return (
    <div style={container}>
      <h1 style={title}>Choose a space</h1>
      <p style={intro}>How are you arriving today?</p>

      <div style={grid}>

        <Link href="/reset" style={card}>
          <h2 style={cardTitle}>Reset</h2>
          <p style={cardText}>If things feel heavy or fast.</p>
        </Link>

        <Link href="/unpack" style={card}>
          <h2 style={cardTitle}>Unpack</h2>
          <p style={cardText}>If your mind is full and needs room.</p>
        </Link>

        <Link href="/encourage" style={card}>
          <h2 style={cardTitle}>Encourage</h2>
          <p style={cardText}>If you need a gentle reminder of your strength.</p>
        </Link>

      </div>
    </div>
  );
}

const container = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "80px 24px",
  textAlign: "center"
};

const title = { fontSize: "2rem", fontWeight: 400, marginBottom: "1rem" };
const intro = { marginBottom: "3rem", color: "#555" };

const grid = {
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "1fr",
};

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
