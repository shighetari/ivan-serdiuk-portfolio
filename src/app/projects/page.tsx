import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RESUME } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "Expanded project portfolio for Ivan Serdiuk.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Case studies and technical highlights.
        </p>
      </div>
      <div className="space-y-6">
        {RESUME.projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl border border-border/60 bg-card p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h2>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
                <p className="text-xs text-muted-foreground">{project.date}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
