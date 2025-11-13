import React from "react";
import clsx from "clsx";

export default function Skeleton({
  className = "",
  variant = "rounded",
  width = "100%",
  height = "1rem",
}) {
  return (
    <div
      className={clsx(
        "animate-pulse bg-slate-200 dark:bg-slate-700",
        variant === "circle" && "rounded-full",
        variant === "rounded" && "rounded-lg",
        className
      )}
      style={{ width, height }}
    />
  );
}
