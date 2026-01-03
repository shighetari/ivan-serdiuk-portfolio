import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur">
          <h3 className="text-sm font-semibold text-foreground">Programming</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {RESUME.skills.programming.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur">
          <h3 className="text-sm font-semibold text-foreground">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {RESUME.skills.tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
