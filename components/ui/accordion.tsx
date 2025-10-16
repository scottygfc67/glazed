"use client";

import * as React from "react";
import { cn } from "./cn";

// Super-light accordion built on <details>/<summary>

type RootProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single";
  collapsible?: boolean;
};

export function Accordion({ className, ...props }: RootProps) {
  return <div className={cn("w-full", className)} {...props} />;
}

export function AccordionItem({
  value, // ignored but kept for API parity
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value?: string }) {
  return (
    <details
      className={cn("group [&+details]:border-t border-black/10 dark:border-white/10", className)}
      {...(props as any)}
    >
      {children}
    </details>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={cn(
        "cursor-pointer select-none list-none px-4 sm:px-5 py-4 sm:py-5 font-medium flex items-center justify-between",
        "marker:content-none",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="ml-4 transition group-open:rotate-180">▾</span>
    </summary>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 sm:px-5 pb-5 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
