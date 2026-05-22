export default function Card({
  children,
  className = "",
  centered = true,
  ...props
}) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${centered ? "site-card" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
