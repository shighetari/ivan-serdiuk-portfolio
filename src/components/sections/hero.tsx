import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { RESUME } from "@/data/resume";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  const keyHighlights = [
    {
      label: "Location",
      value: RESUME.location,
    },
    {
      label: "Program",
      value: RESUME.education[0]?.degree ?? "M.S. Program",
    },
    {
      label: "Focus",
      value: RESUME.skills.programming.slice(0, 3).join(" · "),
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit uppercase tracking-[0.2em]">
              Portfolio · Resume
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {RESUME.name}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              <Balancer>{RESUME.headline}</Balancer>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg">
                <a href="/resume" className="group">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="ghost">
                  <a href={`mailto:${RESUME.contact.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={RESUME.contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={RESUME.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {keyHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto flex max-w-sm items-center justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-muted/40 via-transparent to-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/80 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/linkedin_photo.jpeg"
                alt="Portrait of Ivan Serdiuk, M.S. Computer Information Systems candidate"
                width={360}
                height={420}
                className="h-auto w-full rounded-[22px] object-cover"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 360px"
                quality={90}
                priority
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
