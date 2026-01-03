import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications">
      <Accordion
        type="single"
        collapsible
        className="rounded-2xl border border-border/60 bg-card/80 px-4 backdrop-blur"
      >
        <AccordionItem value="certs" className="border-none">
          <AccordionTrigger>View certifications</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {RESUME.certifications.map((cert) => (
                <li key={cert} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}
