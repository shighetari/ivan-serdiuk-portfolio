import Link from "next/link";
import {
  Download,
  Mail,
  Menu,
  ExternalLink,
  Github,
  Linkedin,
  User,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandMenu } from "@/components/layout/command-menu";
import { RESUME } from "@/data/resume";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-semibold text-foreground">
            {RESUME.name}
          </Link>
          <span className="hidden text-xs text-muted-foreground md:inline-block">
            {RESUME.location}
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground"
          >
            Resume
            <ExternalLink className="h-4 w-4" />
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <CommandMenu />
                </div>
              </TooltipTrigger>
              <TooltipContent>Command menu (Cmd/Ctrl + K)</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" className="hidden md:inline-flex">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download PDF resume</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <ThemeToggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>Theme</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="grid gap-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/resume">View Resume</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Sections
                  </p>
                  <div className="mt-3 grid gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-accent/60"
                      >
                        <span className="flex items-center gap-3">
                          {item.label === "About" ? (
                            <User className="h-4 w-4 text-muted-foreground" />
                          ) : item.label === "Experience" ? (
                            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
                          ) : item.label === "Projects" ? (
                            <FolderKanban className="h-4 w-4 text-muted-foreground" />
                          ) : item.label === "Education" ? (
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <span className="h-4 w-4 rounded-full bg-muted-foreground/30" />
                          )}
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Social
                  </p>
                  <div className="mt-3 grid gap-2">
                    <Link
                      href={RESUME.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-accent/60"
                    >
                      <span className="flex items-center gap-3">
                        <Github className="h-4 w-4 text-muted-foreground" />
                        GitHub
                      </span>
                    </Link>
                    <Link
                      href={RESUME.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-accent/60"
                    >
                      <span className="flex items-center gap-3">
                        <Linkedin className="h-4 w-4 text-muted-foreground" />
                        LinkedIn
                      </span>
                    </Link>
                    <Link
                      href={`mailto:${RESUME.contact.email}`}
                      className="rounded-xl border border-border/60 bg-card/80 px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-accent/60"
                    >
                      <span className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
