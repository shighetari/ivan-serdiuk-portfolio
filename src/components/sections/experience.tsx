import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";
import { formatDateRange } from "@/lib/format";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {RESUME.experience.map((role) => (
          <div key={`${role.company}-${role.role}`} className="relative pl-8">
            <span className="absolute left-2 top-6 h-2 w-2 rounded-full bg-primary" />
            <span className="absolute left-3 top-0 h-full w-px bg-border/60" />
            <div className="relative rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.companyUrl ? (
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {role.company}
                      </a>
                    ) : (
                      role.company
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">{role.role}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatDateRange(role.start, role.end)} · {role.location}
                </div>
              </div>
              <div className="mt-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger>View highlights</AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {role.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
