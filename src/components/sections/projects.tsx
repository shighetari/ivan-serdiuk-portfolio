import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Selected projects and hackathon work."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {RESUME.projects.map((project) => (
          <Dialog key={project.name}>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer border-border/60 bg-card/80 transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  <p className="text-xs text-muted-foreground">{project.date}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                    {project.stack.length > 4 ? (
                      <Badge variant="secondary">+{project.stack.length - 4}</Badge>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{project.name}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{project.tagline}</p>
              <p className="text-xs text-muted-foreground">{project.date}</p>
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
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button key={link.href} asChild variant="outline">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
}
