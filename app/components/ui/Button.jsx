import Link from "next/link";

export default function Button({
  children,
  href,
  size = "default",
  variant = "default",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
    xl: "h-14 px-8 text-base sm:text-lg gap-2",
  };

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground hover:opacity-90",
    call: "bg-accent text-accent-foreground hover:bg-brand-hover shadow-md",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-md",
    secondary:
      "border-2 border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 shadow-sm",
    secondaryInverse:
      "border-2 border-white/45 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    reservation:
      "border-2 border-warm-dark text-warm-dark bg-warm/10 hover:bg-warm/20 hover:border-warm-dark backdrop-blur-sm",
    soft: "bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg",
    dark: "bg-zinc-900 text-white hover:bg-zinc-800",
  };

  const hasCustomBg = className.includes("bg-");
  const variantClass = hasCustomBg ? "" : variantClasses[variant];
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClass} ${className}`;

  if (href?.startsWith("tel:") || href?.startsWith("http")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
