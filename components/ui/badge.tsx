import * as React from "react";
import { cn } from "./cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles =
    variant === "secondary"
      ? "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"
      : "bg-indigo-600/10 text-indigo-700 dark:text-indigo-300";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        styles,
        className
      )}
      {...props}
    />
  );
}
