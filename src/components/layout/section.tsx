import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-12", className)}>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-border/70 sm:inline-flex" />
        {description ? (
          <p className="text-sm text-muted-foreground sm:mt-0">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
