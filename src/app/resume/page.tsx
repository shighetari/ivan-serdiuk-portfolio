import { Download } from "lucide-react";
import { RESUME } from "@/data/resume";
import { formatDateRange } from "@/lib/format";
import "@/styles/print.css";

export const metadata = {
  title: "Resume",
  description: "ATS-friendly resume for Ivan Serdiuk.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-3xl font-semibold">{RESUME.name}</h1>
          <p className="text-sm text-muted-foreground">{RESUME.headline}</p>
          <p className="text-sm text-muted-foreground">{RESUME.location}</p>
        </div>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm"
          download
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>
      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold">Contact</h2>
          <div className="mt-2 text-sm text-muted-foreground">
            <p>{RESUME.location}</p>
            <p>{RESUME.contact.email}</p>
            <p>{RESUME.contact.phone}</p>
            <p>{RESUME.contact.github}</p>
            <p>{RESUME.contact.linkedin}</p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Summary</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {RESUME.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-3 space-y-4">
            {RESUME.experience.map((role) => (
              <div key={`${role.company}-${role.role}`}>
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-foreground">{role.company}</p>
                    <p className="text-muted-foreground">{role.role}</p>
                  </div>
                  <p className="text-muted-foreground">
                    {formatDateRange(role.start, role.end)} · {role.location}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="mt-3 space-y-4">
            {RESUME.projects.map((project) => (
              <div key={project.name}>
                <p className="text-sm font-medium text-foreground">
                  {project.name} — {project.tagline}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            {RESUME.education.map((item) => (
              <div key={item.school}>
                <p className="font-medium text-foreground">{item.school}</p>
                <p>
                  {item.degree} · {item.location} · {item.graduation}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Skills</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Programming: {RESUME.skills.programming.join(", ")}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tools: {RESUME.skills.tools.join(", ")}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Certifications</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {RESUME.certifications.join(", ")}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Languages</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {RESUME.languages.join(", ")}
          </p>
        </section>
      </div>
    </div>
  );
}
