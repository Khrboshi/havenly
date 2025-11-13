export default function Card({ title, children, footer, className = "" }) {
  return (
    <div
      className={`card ${className}`}
      role="region"
      aria-label={title || "Card"}
    >
      {title && <h2 className="card-header">{title}</h2>}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
