import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { RESUME } from "@/data/resume";

export function LanguagesSection() {
  return (
    <Section id="languages" title="Languages">
      <div className="flex flex-wrap gap-2">
        {RESUME.languages.map((language) => (
          <Badge key={language} variant="outline">
            {language}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
