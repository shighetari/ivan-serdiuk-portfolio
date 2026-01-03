import { z } from "zod";

const socialLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().url(),
});

const experienceSchema = z.object({
  company: z.string().min(1),
  companyUrl: z.string().url().optional(),
  role: z.string().min(1),
  start: z.string().min(1),
  end: z.string().min(1),
  location: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1),
  highlights: z.array(z.string().min(1)).optional(),
  tags: z.array(z.string().min(1)).optional(),
});

const educationSchema = z.object({
  school: z.string().min(1),
  degree: z.string().min(1),
  location: z.string().min(1),
  graduation: z.string().min(1),
});

const projectSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  date: z.string().min(1),
  links: z.array(socialLinkSchema),
  stack: z.array(z.string().min(1)).min(1),
  bullets: z.array(z.string().min(1)).min(1),
});

export const resumeSchema = z.object({
  name: z.string().min(1),
  headline: z.string().min(1),
  location: z.string().min(1),
  contact: z.object({
    email: z.string().email(),
    phone: z.string().optional(),
    github: z.string().url(),
    linkedin: z.string().url(),
  }),
  summary: z.array(z.string().min(1)).min(1),
  experience: z.array(experienceSchema).min(1),
  projects: z.array(projectSchema),
  education: z.array(educationSchema).min(1),
  skills: z.object({
    programming: z.array(z.string().min(1)).min(1),
    tools: z.array(z.string().min(1)).min(1),
  }),
  certifications: z.array(z.string().min(1)),
  languages: z.array(z.string().min(1)),
});

export const validateResume = <T>(data: T) => resumeSchema.parse(data);
