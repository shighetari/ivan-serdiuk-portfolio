export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  highlights?: string[];
  tags?: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  graduation: string;
};

export type Project = {
  name: string;
  tagline: string;
  date: string;
  links: SocialLink[];
  stack: string[];
  bullets: string[];
};

export type ResumeData = {
  name: string;
  headline: string;
  location: string;
  contact: {
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
  };
  summary: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: {
    programming: string[];
    tools: string[];
  };
  certifications: string[];
  languages: string[];
};
