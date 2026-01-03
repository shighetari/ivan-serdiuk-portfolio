"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { RESUME } from "@/data/resume";

export function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RESUME.contact.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Copy failed. Please use the email button instead.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || ""}`.trim());
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`.trim()
    );
    window.location.href = `mailto:${RESUME.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur">
          <h3 className="text-base font-semibold text-foreground">Say hello</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out for collaborations, internships, or research projects.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${RESUME.contact.email}`}>Email</a>
            </Button>
            <Button variant="outline" onClick={handleCopy}>
              Copy email
            </Button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur"
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell me about your project"
                required
              />
            </div>
          </div>
          <Button type="submit" className="mt-4 w-full">
            Send via email
          </Button>
        </form>
      </div>
    </section>
  );
}
