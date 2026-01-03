import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { CertificationsSection } from "@/components/sections/certifications";
import { LanguagesSection } from "@/components/sections/languages";
import { ContactSection } from "@/components/sections/contact";

export const metadata = {
  title: "Home",
  description: "Portfolio and resume for Ivan Serdiuk.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="pb-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection />
      </Container>
    </>
  );
}
