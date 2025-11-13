"use client";
import clsx from "clsx";

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 scale-tap";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-slate-600 hover:text-primary",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
