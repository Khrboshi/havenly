export default function About() {
  return (
    <div style={container}>
      <h1 style={title}>About Havenly</h1>

      <p style={text}>
        There are moments when life becomes loud. Too many thoughts, too many
        expectations, too many versions of who we’re supposed to be. Havenly
        was created as a pause — a quiet room you can enter whenever you need
        to return to yourself.
      </p>

      <p style={text}>
        No accounts. No tracking. No judgment. Just a gentle space to notice
        what’s happening inside you, one small question at a time.
      </p>

      <p style={text}>
        You don’t have to have the right words. You don’t have to have answers.
        You just need to show up — as you are.
      </p>

      <p style={signature}>You’re welcome here.</p>
    </div>
  );
}

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "80px 24px",
  lineHeight: "1.6",
  textAlign: "center"
};

const title = {
  fontSize: "2.2rem",
  marginBottom: "2rem",
  fontWeight: 400
};

const text = {
  marginBottom: "1.6rem",
  fontSize: "1.05rem",
  color: "#444"
};

const signature = {
  marginTop: "3rem",
  fontSize: "1.1rem",
  color: "#111",
  fontStyle: "italic"
};
