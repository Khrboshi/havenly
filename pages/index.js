export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      color: "#222",
      fontFamily: "sans-serif",
      padding: "0 20px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "400",
        marginBottom: "1rem"
      }}>
        A quiet space to return to yourself.
      </h1>

      <p style={{
        fontSize: "1.1rem",
        maxWidth: "420px",
        marginBottom: "2.5rem",
        lineHeight: "1.6",
        color: "#555"
      }}>
        Havenly is a private reflection space. No accounts. No feeds. 
        Just you, your thoughts, and a gentle check-in.
      </p>

      <a href="/reflect" style={{
        padding: "12px 28px",
        borderRadius: "8px",
        border: "1px solid #222",
        textDecoration: "none",
        color: "#222",
        fontSize: "1rem",
        transition: "background 0.2s"
      }}
        onMouseOver={(e) => { e.target.style.background = "#f5f5f5"; }}
        onMouseOut={(e) => { e.target.style.background = "transparent"; }}
      >
        Begin
      </a>
    </div>
  );
}
