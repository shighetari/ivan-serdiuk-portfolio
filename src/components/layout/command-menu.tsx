"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Github, Linkedin, Home, FolderOpen } from "lucide-react";
import { RESUME } from "@/data/resume";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    setIsMac(typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  const handleNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  const handleAnchor = (id: string) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="hidden h-9 w-56 items-center justify-between text-sm text-muted-foreground md:flex"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
      >
        <span>Search sections...</span>
        <span className="rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {isMac ? "Cmd" : "Ctrl"}
          +K
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Command menu</DialogTitle>
          </DialogHeader>
          <Command>
            <CommandInput placeholder="Jump to..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => handleNavigate("/")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </CommandItem>
                <CommandItem onSelect={() => handleNavigate("/resume")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </CommandItem>
                <CommandItem onSelect={() => handleNavigate("/projects")}
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Projects
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Sections">
                {sections.map((section) => (
                  <CommandItem
                    key={section.id}
                    onSelect={() => handleAnchor(section.id)}
                  >
                    {section.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Contact">
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    window.location.href = `mailto:${RESUME.contact.email}`;
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    window.open(RESUME.contact.github, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    window.open(RESUME.contact.linkedin, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
