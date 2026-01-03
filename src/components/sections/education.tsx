import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {RESUME.education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur"
          >
            <h3 className="text-base font-semibold text-foreground">{item.school}</h3>
            <p className="text-sm text-muted-foreground">{item.degree}</p>
            <p className="text-sm text-muted-foreground">
              {item.location} · {item.graduation}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
