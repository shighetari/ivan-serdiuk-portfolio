# Ivan Serdiuk — Portfolio/Resume Website (Next.js + Tailwind + shadcn/ui)
**Spec-Driven Development Guide (Mock Data / No External APIs)**

## 0) Purpose
Build a **production-ready, highly polished personal portfolio + resume website** for **Ivan Serdiuk** using:
- **Next.js (App Router)**
- **Tailwind CSS**
- **shadcn/ui** (Radix-based components)
- **Hard-coded mock data** (TypeScript modules) instead of API calls

This document is written so an AI agent can execute it end-to-end with minimal ambiguity.

---

## 1) Product Requirements

### 1.1 Goals
- Present Ivan’s background, experience, and projects in a modern, recruiter-friendly format.
- Provide a fast, accessible site with excellent SEO.
- Use static/mock content (no external fetching required).
- Be deployable to Vercel (or any Node hosting) as a production build.

### 1.2 Non-Goals
- No CMS, no database, no auth, no user accounts.
- No backend APIs for content.
- No server-side email sending (contact form must be client-only, e.g., `mailto:`).

### 1.3 Target Users
- Recruiters & hiring managers
- Engineers & collaborators
- Conference/hackathon peers

### 1.4 Key User Stories
- As a recruiter, I can quickly scan experience, skills, and projects.
- As an engineer, I can click through to GitHub/LinkedIn and see credible work.
- As a visitor on mobile, I can navigate sections easily and read content comfortably.
- As Ivan, I can update content by editing a single `src/data/resume.ts` file.

---

## 2) Success Criteria (Acceptance)
The project is “done” when all are true:
- ✅ Runs locally with `pnpm dev` and builds with `pnpm build`
- ✅ Passes lint and typecheck (`pnpm lint`, `pnpm typecheck`)
- ✅ Responsive: mobile → desktop layouts look intentional (no overflow, no jank)
- ✅ Accessibility: keyboard navigation works; visible focus; semantic headings
- ✅ SEO ready: metadata, sitemap, robots, OpenGraph/Twitter cards
- ✅ Pages render **purely from mock data** (no `fetch` for resume content)
- ✅ Deployed on Vercel with a production URL

---

## 3) Tech Stack & Libraries

### 3.1 Required
- Next.js + React + TypeScript
- Tailwind CSS
- shadcn/ui components
- next-themes (dark mode)
- lucide-react icons
- class-variance-authority + clsx + tailwind-merge
- tw-animate-css (shadcn animation utilities)

### 3.2 Recommended Enhancements
- **framer-motion** (micro-interactions + section reveal animations)
- **react-wrap-balancer** (prettier headline wrapping)
- **@vercel/analytics** (optional analytics)
- **Playwright** (end-to-end tests)
- **@axe-core/playwright** (optional a11y checks)

---

## 4) System Requirements & Tooling

### 4.1 Node & Package Manager
- Use **Node.js >= 20.9**.
- Prefer **pnpm** for reproducible installs.

### 4.2 Code Quality & Formatting
- ESLint (Next.js default)
- Prettier + `prettier-plugin-tailwindcss` (class sorting)
- TypeScript strict mode
- Optional: Biome (if you want combined formatter/linter)

### 4.3 Git Hygiene
- Small commits per milestone.
- Use conventional commits (optional): `feat:`, `fix:`, `chore:`, `docs:`

---

## 5) Information Architecture & Routes

### 5.1 Routes
- `/` — main portfolio landing page (single-page sections)
- `/resume` — ATS-friendly resume page (print-friendly)
- `/projects` — (optional) expanded project details + case studies
- `/_not-found` — custom 404

### 5.2 Section Structure (Home)
1. Hero (name, headline, CTA buttons)
2. About
3. Experience timeline
4. Projects
5. Skills
6. Education
7. Certifications
8. Languages
9. Contact

---

## 6) Visual & UX Spec

### 6.1 Aesthetic Direction
- Minimal, modern, “professional but not boring”
- Subtle gradients + soft borders
- Lots of whitespace
- Clear typographic hierarchy
- Consistent iconography (lucide)

### 6.2 Layout
- Max width: ~1100–1200px for reading comfort
- Sticky top nav on desktop; mobile uses Sheet/Drawer menu
- Section anchors with scrollspy highlight (optional)

### 6.3 Motion
- Keep motion subtle (fade/slide-in on section reveal)
- Respect `prefers-reduced-motion`

### 6.4 Dark Mode
- Default: system preference
- Toggle: light / dark / system

---

## 7) Data Model (Mock Data Only)

### 7.1 Principle
All resume/portfolio content must live in **static TS files** under `src/data/`.
No API calls. No CMS. No remote fetch for content.

### 7.2 Types (Example)
Create `src/data/types.ts`:

```ts
export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  start: string; // ISO-ish string, e.g. "2025-06"
  end: string;   // "2025-08" or "Present"
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
```

### 7.3 Canonical Mock Data for Ivan
Create `src/data/resume.ts`:

```ts
import type { ResumeData } from "./types";

export const RESUME: ResumeData = {
  name: "Ivan Serdiuk",
  headline:
    "M.S. Computer Information Systems candidate (NYU Courant) • Machine Learning • Python/SQL • Cloud Fundamentals",
  location: "New York, NY",
  contact: {
    email: "is2332@nyu.edu",
    phone: "929.366.7252",
    github: "https://github.com/IvanSerdiuk",
    linkedin: "https://www.linkedin.com/in/ivan-serdiuk/",
  },
  summary: [
    "M.S. Computer Information Systems candidate at NYU Courant Institute (expected June 2026).",
    "Machine learning experience across research and applied projects (PyTorch, scikit-learn, TensorFlow).",
    "Background building data pipelines, security-minded applications, and pragmatic solutions for transit use cases.",
  ],
  education: [
    {
      school: "NYU – Courant Institute",
      degree: "M.S. in Computer Information Systems",
      location: "New York, NY",
      graduation: "June 2026",
    },
    {
      school: "Baruch College",
      degree: "Bachelor of Business Administration",
      location: "New York, NY",
      graduation: "June 2024",
    },
  ],
  experience: [
    {
      company: "Google Summer of Code",
      companyUrl: "https://summerofcode.withgoogle.com/",
      role: "Machine Learning Research Intern",
      start: "2025-06",
      end: "2025-08",
      location: "Remote",
      bullets: [
        "Developed a supervised machine learning model in Python (PyTorch, scikit-learn) to predict potential planetary habitability using datasets from the NASA Exoplanet Archive.",
        "Engineered features such as orbital period, stellar flux, and atmospheric composition indicators, integrating astrophysical domain knowledge into the model pipeline.",
        "Implemented data preprocessing pipelines to improve dataset consistency.",
        "Optimized model performance through cross-validation, hyperparameter tuning, and ensemble methods, achieving ~85% classification accuracy.",
      ],
      tags: ["Python", "PyTorch", "scikit-learn", "ML Research"],
    },
    {
      company: "Accenture",
      role: "Computer Science Intern",
      start: "2023-06",
      end: "2023-07",
      location: "New York, NY",
      bullets: [
        "Investigated a technological area to improve the transit experience for riders in a North American transit system by developing an AI surveillance system with Python, PyTorch, and a MySQL database.",
        "Led the development of the database and data management system in collaboration with a team of five; proactively addressed project delays.",
        "Presented recommendations and advice to a group of 30 using PowerPoint.",
        "Met project milestones and deadlines within the stipulated timeframe.",
        "Received a rating of 4.5 out of 5 from team members for effective collaboration and contribution to group tasks.",
        "Successfully resolved 90% of project-related issues independently or with minimal supervision.",
      ],
      tags: ["Python", "PyTorch", "MySQL", "Team Leadership"],
    },
    {
      company: "Metropolitan Transportation Authority (MTA)",
      role: "Information Technology Intern",
      start: "2023-01",
      end: "2023-02",
      location: "New York, NY",
      bullets: [
        "Formulated strategic plans to identify patterns for early defect detection, boosting defect detection by 20%.",
        "Developed an application with online form submissions and picture uploads, boosting user engagement by 30% and reducing submission errors by 25%.",
        "Designed a secure user-server connection with SSL, achieving a 95% security audit score and zero breaches.",
        "Implemented two-factor authentication for safer logins and enhanced application security.",
        "Contributed to developing a POST API request for database updates, improving application efficiency.",
        "Led teams and implemented incentive plans, fostering continuous improvement and operational excellence.",
      ],
      tags: ["Security", "SSL", "2FA", "Web App"],
    },
  ],
  projects: [
    {
      name: "SpyBot",
      tagline: "AI-powered phishing and spam detector (HackNYU)",
      date: "2025-02",
      links: [
        { label: "Demo", href: "#" },
        { label: "Repo", href: "#" },
      ],
      stack: ["JavaScript", "Chrome Extension (Manifest V3)", "Python", "Flask", "TensorFlow", "GPT-4"],
      bullets: [
        "Built a Chrome extension for real-time phishing detection using JavaScript (Manifest V3) with a Python (Flask) backend and TensorFlow classification.",
        "Developed an LLM-based phishing text analysis module utilizing OpenAI GPT-4 to detect AI-generated phishing emails with a 98% accuracy rate.",
        "Implemented computer vision models to analyze logos, typography, and design inconsistencies to detect phishing attempts.",
      ],
    },
  ],
  skills: {
    programming: ["Python", "SQL", "JavaScript (Entry level)", "HTML/CSS", "AWS (Entry level)"],
    tools: ["Microsoft Office (Advanced)", "Microsoft Teams", "Google Workspace", "Zoom"],
  },
  certifications: [
    "Microsoft Azure Fundamentals",
    "AWS Cloud Practitioner Essentials",
    "Google Data Analytics",
    "DataCamp Joining Data in SQL",
    "DataCamp Introduction to SQL",
    "AWS Certified Cloud Practitioner",
  ],
  languages: ["Ukrainian (Native)", "English"],
};
```

> Note: Replace placeholder project links (`#`) with real URLs when available.

### 7.4 Data Validation (Recommended)
Add `zod` schemas to ensure your mock data stays consistent. Validate at build time in `src/data/validate.ts`.

---

## 8) Project Structure (Recommended)

Use `src/` for application code and keep config at root:

```
.
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  │  ├─ page.tsx
│  │  ├─ resume/
│  │  │  └─ page.tsx
│  │  ├─ projects/
│  │  │  └─ page.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  ├─ manifest.ts
│  │  ├─ opengraph-image.tsx
│  │  └─ not-found.tsx
│  ├─ components/
│  │  ├─ ui/                 # shadcn/ui components live here
│  │  ├─ layout/
│  │  ├─ sections/
│  │  └─ icons/
│  ├─ data/
│  │  ├─ resume.ts
│  │  ├─ types.ts
│  │  └─ validate.ts
│  ├─ lib/
│  │  ├─ utils.ts            # cn(), helpers
│  │  └─ seo.ts
│  └─ styles/
│     └─ print.css
├─ public/
│  ├─ resume.pdf
│  ├─ avatar.jpg
│  └─ favicon.ico
├─ .env.example
├─ package.json
└─ ...
```

---

## 9) UI Components & Page Specs

### 9.1 Layout Components
- `SiteHeader`
  - Contains logo/name, nav links, theme toggle, command palette trigger
- `SiteFooter`
  - Copyright
  - Social links
- `Section`
  - Consistent padding, anchors, heading styling
- `Container`
  - Standard max-width wrapper

### 9.2 Home Page Sections
#### Hero
- Must include:
  - Name: “Ivan Serdiuk”
  - Headline
  - Primary CTA: “Download Resume”
  - Secondary CTAs: GitHub, LinkedIn, Email
- Optional:
  - Short “status” pill (e.g., “Open to ML/Software internships” — only if confirmed)

#### About
- Render from `RESUME.summary`
- Use `prose` or a custom typography system

#### Experience
- Timeline component
- Each entry: company + role + dates + location + bullets + tags
- Expand/collapse (Accordion) for long bullet lists (mobile friendliness)

#### Projects
- Cards grid
- Each project opens a Dialog/Modal for expanded details
- Include stack chips (Badges)

#### Skills
- Grouped lists:
  - Programming
  - Tools
- Use badges and/or progress-style emphasis (but don’t invent proficiency)

#### Education
- Simple list with school, degree, location, graduation

#### Certifications
- List + optional icons
- Keep it compact (Accordion for mobile)

#### Languages
- Simple chips or list

#### Contact
- Buttons:
  - Email (mailto)
  - Copy email to clipboard (toast confirmation)
- Optional lightweight form:
  - Name, email, message (client-only validation)
  - Submit opens mail client using a formatted `mailto:` link

### 9.3 /resume Page
- Print-friendly styling
- One-column layout, ATS-readable
- Provide:
  - Download PDF button
  - Inline HTML resume layout generated from `RESUME`

---

## 10) Styling System

### 10.1 Tailwind
- Use Tailwind for layout and spacing.
- Prefer semantic component wrappers instead of repeating huge class strings.

### 10.2 shadcn/ui Conventions
- Install components into `src/components/ui`.
- Keep shadcn base design tokens with CSS variables.
- Use `cn()` helper (clsx + tailwind-merge) everywhere.

### 10.3 Typography
- Use `next/font` and set CSS variables for fonts:
  - Body: Inter
  - Headings: Sora (or Inter)
  - Mono: JetBrains Mono

### 10.4 Icons
- Use lucide icons consistently:
  - GitHub, LinkedIn, Mail, Download, ExternalLink, Moon/Sun

---

## 11) SEO & Metadata (Production Requirements)

### 11.1 Metadata
- Use Next.js Metadata API in `src/app/layout.tsx` and per-page overrides:
  - Title template: `Ivan Serdiuk — {Page}`
  - Description: concise, keyword-friendly
  - OpenGraph & Twitter cards
  - Canonical URLs

### 11.2 OpenGraph Image
- Add `src/app/opengraph-image.tsx` to generate a clean OG card with:
  - Name
  - Headline
  - Website URL

### 11.3 Sitemap & Robots
- Add:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- Include `NEXT_PUBLIC_SITE_URL` in `.env`.

### 11.4 PWA Manifest (Nice-to-have)
- Add `src/app/manifest.ts`
- Provide `name`, `short_name`, icons, theme color.

### 11.5 Structured Data (Nice-to-have)
- Add JSON-LD for Person:
  - name, url, sameAs (github/linkedin)
- Inject using `<script type="application/ld+json">`.

---

## 12) Performance Requirements
- Use `next/image` for local images (avatar, project images).
- Lazy-load below-the-fold images.
- Avoid heavy client-side JS:
  - Keep sections Server Components unless interactivity is required.
- Target Lighthouse:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95

---

## 13) Accessibility Requirements
- Keyboard navigable components (Tab/Shift+Tab, Enter/Space)
- Visible focus ring
- Semantic headings (`h1` once, then `h2`, `h3`)
- Use aria-labels for icon-only buttons
- Respect `prefers-reduced-motion`

---

## 14) Testing Strategy

### 14.1 E2E (Required)
Use Playwright:
- Home loads and has H1 with name
- Resume page renders
- Theme toggle works (basic smoke test)
- External links have `rel="noopener noreferrer"` (optional assert)

### 14.2 Optional a11y testing
- Use `@axe-core/playwright` to scan key pages

### 14.3 CI (Recommended)
GitHub Actions workflow:
- install
- lint
- typecheck
- build
- run Playwright tests

---

## 15) Deployment (Production)
- Deploy on Vercel:
  - Connect GitHub repo
  - Set `NEXT_PUBLIC_SITE_URL`
  - Ensure build passes
- Configure custom domain (optional)
- Add analytics (optional)

---

## 16) Step-by-Step Implementation Plan (Milestones)

### Milestone 1 — Scaffold
**Tasks**
- Create Next.js app with TypeScript, Tailwind, ESLint, App Router, `src/` directory, alias `@/*`
- Add `.env.example`
- Add `pnpm` scripts:
  - `dev`, `build`, `start`, `lint`, `typecheck`

**Acceptance**
- `pnpm dev` starts
- `pnpm build` succeeds

---

### Milestone 2 — shadcn/ui Setup
**Tasks**
- Run shadcn init
- Add components:
  - Button, Card, Badge, Separator, Tooltip, Dialog, Sheet, Tabs, Accordion, ScrollArea, Command
- Install next-themes and wire up `ThemeProvider`
- Add theme toggle in header

**Acceptance**
- Theme toggle works and persists
- shadcn components render correctly

---

### Milestone 3 — Data Layer
**Tasks**
- Implement `src/data/types.ts` + `src/data/resume.ts`
- Validate data with zod (recommended)
- Implement simple mapping functions (e.g., format dates)

**Acceptance**
- Site renders from `RESUME` object
- No `fetch()` calls for resume content

---

### Milestone 4 — Build Pages & Sections
**Tasks**
- Implement home page with sections and navigation
- Implement `/resume` with print-friendly layout
- Add “Download Resume” button pointing to `/resume.pdf`

**Acceptance**
- Content matches the mock data
- Mobile nav works (Sheet)
- Resume page is readable and printable

---

### Milestone 5 — Polish & Delight
**Tasks**
- Add command palette navigation (Command component + Cmd/Ctrl+K)
- Add subtle animations (framer-motion) respecting reduced motion
- Add “copy email” action + toast

**Acceptance**
- No layout shift or janky animation
- Keyboard shortcuts work

---

### Milestone 6 — SEO & Metadata
**Tasks**
- Add metadata in `layout.tsx`
- Add `opengraph-image.tsx`
- Add `sitemap.ts` and `robots.ts`
- Add `manifest.ts` (optional)

**Acceptance**
- `/sitemap.xml` and `/robots.txt` accessible
- OG image renders

---

### Milestone 7 — Testing + CI + Deploy
**Tasks**
- Add Playwright tests and run in CI
- Deploy to Vercel

**Acceptance**
- CI green
- Production deployment works

---

## 17) Production-Ready Checklist
- [ ] No console errors in prod build
- [ ] `pnpm build` and `pnpm lint` pass
- [ ] Responsive verified on mobile + desktop
- [ ] Accessibility spot check (keyboard + screen reader basics)
- [ ] Sitemap + robots present
- [ ] OG/Twitter preview good
- [ ] External links safe (`rel="noopener noreferrer"`)
- [ ] Resume downloadable and `/resume` printable
- [ ] Content easily editable in one file

---

## 18) Reference Commands (Agent Cheatsheet)

```bash
# create app (interactive)
pnpm create next-app@latest ivan-serdiuk-portfolio

# shadcn init
pnpm dlx shadcn@latest init

# add components (example)
pnpm dlx shadcn@latest add button card badge separator tooltip dialog sheet tabs accordion scroll-area command

# run dev
pnpm dev

# production build
pnpm build && pnpm start
```

---

## 19) References (Official Docs)
(Keep these handy for the AI agent; open as needed.)

```txt
Next.js App Router docs: https://nextjs.org/docs/app
create-next-app: https://nextjs.org/docs/app/api-reference/cli/create-next-app
Tailwind + Next.js guide: https://tailwindcss.com/docs/guides/nextjs
shadcn/ui install (Next.js): https://ui.shadcn.com/docs/installation/next
shadcn/ui components: https://ui.shadcn.com/docs/components
Dark mode (shadcn + next-themes): https://ui.shadcn.com/docs/dark-mode/next
Next.js Metadata API: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
Next.js sitemap file convention: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
Next.js robots file convention: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
Next.js opengraph-image: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
Next.js Image component: https://nextjs.org/docs/app/api-reference/components/image
Vercel Next.js deploy: https://vercel.com/docs/frameworks/full-stack/nextjs
Playwright intro: https://playwright.dev/docs/intro
Radix accessibility overview: https://www.radix-ui.com/primitives/docs/overview/accessibility
```

---

## 20) Resume Source
This site’s initial content is derived from Ivan Serdiuk’s resume (provided by the user). Replace or expand as Ivan updates his experience.
