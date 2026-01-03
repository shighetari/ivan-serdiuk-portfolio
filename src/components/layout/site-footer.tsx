import Link from "next/link";
import { Container } from "@/components/layout/container";
import { RESUME } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {RESUME.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={RESUME.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={RESUME.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${RESUME.contact.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
