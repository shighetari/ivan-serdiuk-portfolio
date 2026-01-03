import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-base text-muted-foreground">
        {RESUME.summary.map((item) => (
          <p key={item} className="leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </Section>
  );
}
