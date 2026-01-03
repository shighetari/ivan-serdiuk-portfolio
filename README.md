# 🚀 Ivan Serdiuk — Portfolio & Resume Website

> **Built with love by [Francisco](https://github.com/shighetari) @ [ANBU Solutions](https://anbu.ai) 🥷**

Hey Ivan! 👋 This is your personal portfolio and resume website — a modern, production-ready web app built to showcase your amazing work, experience, and projects to recruiters, engineers, and collaborators.

This codebase is designed to be **super easy** for you to understand, run locally, customize, and deploy. Everything you need to know is right here!

---

## 🎯 What You're Getting

✨ **Modern Tech Stack:**
- ⚡️ **Next.js 16** (App Router) + React 19
- 🎨 **Tailwind CSS 4** — utility-first styling
- 🧩 **shadcn/ui** — beautiful, accessible components
- 🌗 **Dark Mode** — automatic theme switching
- 🎭 **Framer Motion** — smooth animations
- 📱 **Fully Responsive** — looks great on all devices
- ♿️ **Accessible** — keyboard navigation, screen reader friendly
- 🔍 **SEO Optimized** — sitemap, robots.txt, OpenGraph cards
- 🧪 **E2E Tests** — Playwright test suite included

📄 **Pages Included:**
- 🏠 **Home** (`/`) — Single-page portfolio with all sections
- 📋 **Resume** (`/resume`) — ATS-friendly, print-optimized
- 💼 **Projects** (`/projects`) — Expanded project showcase
- 🎨 **Custom 404** — Branded error page

🗂️ **Content Structure:**
All your data lives in **one file**: `src/data/resume.ts` — no databases, no APIs, just TypeScript. Update this file to change your content!

---

## 🏃‍♂️ Quick Start Guide

### Prerequisites

You'll need these installed on your machine:
- **Node.js** (v20.9 or higher) → [Download](https://nodejs.org/)
- **pnpm** (recommended) → Install: `npm install -g pnpm`

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/shighetari/ivan-serdiuk-portfolio.git
cd ivan-serdiuk-portfolio
```

### 2️⃣ Install Dependencies

```bash
pnpm install
```

> 💡 **Note:** You can also use `npm install` or `yarn install` if you prefer.

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your site URL:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> 🚀 **For production:** Change this to your Vercel URL (e.g., `https://ivan-serdiuk.vercel.app`)

### 4️⃣ Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — you should see your portfolio! 🎉

The page will **auto-reload** whenever you edit files.

---

## ✏️ How to Update Your Content

All your portfolio content is in **one place**: `src/data/resume.ts`

### Update Your Info

Open `src/data/resume.ts` and modify:

```typescript
export const RESUME: ResumeData = {
  name: "Ivan Serdiuk",           // ← Your name
  headline: "Your new headline",   // ← Your professional tagline
  location: "New York, NY",        // ← Your location
  contact: {
    email: "your@email.com",       // ← Your email
    phone: "123.456.7890",         // ← Your phone
    github: "https://github.com/YourUsername",
    linkedin: "https://linkedin.com/in/YourProfile",
  },
  // ... and more!
}
```

### Add/Edit Experience

```typescript
experience: [
  {
    company: "Company Name",
    companyUrl: "https://company.com",  // Optional
    role: "Your Role",
    start: "2025-06",                   // Format: YYYY-MM
    end: "Present",                     // Or: "2025-08"
    location: "City, State",
    bullets: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    tags: ["Python", "ML", "AWS"],      // Tech stack
  },
  // Add more experiences...
]
```

### Add/Edit Projects

```typescript
projects: [
  {
    name: "Project Name",
    tagline: "Brief description",
    date: "2025-02",
    links: [
      { label: "Demo", href: "https://demo.com" },
      { label: "GitHub", href: "https://github.com/..." },
    ],
    stack: ["JavaScript", "React", "TensorFlow"],
    bullets: [
      "What the project does",
      "Key features or achievements",
    ],
  },
  // Add more projects...
]
```

### Update Skills, Education, Certifications

Same file — just scroll down and edit the corresponding sections! 🎓

---

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | 🚀 Start development server (http://localhost:3000) |
| `pnpm build` | 🏗️ Build for production |
| `pnpm start` | ▶️ Start production server (run `build` first) |
| `pnpm lint` | 🔍 Check code quality with ESLint |
| `pnpm typecheck` | ✅ Verify TypeScript types |
| `pnpm test:e2e` | 🧪 Run Playwright end-to-end tests |

---

## 🎨 Customization Tips

### Change Colors & Theme

Edit `src/app/globals.css` — look for CSS variables:

```css
:root {
  --primary: 222 47% 11%;        /* Primary color */
  --accent: 210 40% 96%;         /* Accent color */
  /* ... and more */
}
```

### Add More Components

This project uses **shadcn/ui**. To add new components:

```bash
pnpm dlx shadcn@latest add <component-name>
```

Example:
```bash
pnpm dlx shadcn@latest add alert
```

### Modify Layout/Sections

- **Homepage sections**: `src/components/sections/`
- **Layout components**: `src/components/layout/`
- **UI components**: `src/components/ui/`

---

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js app — it's **free** for personal projects!

### Step 1: Push to GitHub (Already Done! ✅)

Your code is already on GitHub at: `https://github.com/shighetari/ivan-serdiuk-portfolio`

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import `ivan-serdiuk-portfolio`
5. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `pnpm build`
   - **Environment Variables**:
     - `NEXT_PUBLIC_SITE_URL` = `https://your-deployment-url.vercel.app`

6. Click **"Deploy"** 🎉

### Step 3: Update Your Site URL

After deployment, update your environment variable:

1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit `NEXT_PUBLIC_SITE_URL` to your actual Vercel URL
3. Redeploy

---

## 📂 Project Structure

```
ivan-serdiuk-portfolio/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── page.tsx            # Homepage (/)
│   │   ├── resume/             # Resume page (/resume)
│   │   ├── projects/           # Projects page (/projects)
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # SEO: Sitemap
│   │   ├── robots.ts           # SEO: robots.txt
│   │   └── manifest.ts         # PWA manifest
│   ├── components/
│   │   ├── sections/           # Homepage sections (Hero, About, etc.)
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── ui/                 # shadcn/ui components
│   │   └── motion/             # Animation components
│   ├── data/
│   │   ├── resume.ts           # 🎯 YOUR CONTENT IS HERE!
│   │   ├── types.ts            # TypeScript types
│   │   └── validate.ts         # Data validation (Zod)
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   ├── format.ts           # Date formatting
│   │   └── seo.ts              # SEO configuration
│   └── styles/
│       └── print.css           # Print-specific styles (resume)
├── public/                     # Static assets
│   ├── Resume.pdf              # 📄 Upload your actual resume PDF here!
│   ├── avatar.jpg              # 📸 Add your profile photo here!
│   └── ...                     # Other images/icons
├── tests/                      # Playwright E2E tests
├── .env.example                # Environment variables template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
└── README.md                   # You are here! 👋
```

---

## 🔧 Common Tasks

### Replace Placeholder Images

1. Add your **profile photo**: `public/avatar.jpg`
2. Add your **resume PDF**: `public/Resume.pdf`
3. Reference them in `src/data/resume.ts` or components

### Update Project Links

Currently, some project links are set to `example.com`:

1. Open `src/data/resume.ts`
2. Find the `projects` array
3. Update the `links` with real URLs:

```typescript
links: [
  { label: "Live Demo", href: "https://your-demo.com" },
  { label: "GitHub", href: "https://github.com/yourusername/repo" },
]
```

### Add a New Section

1. Create a new component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add it to the page layout

Example:
```tsx
import { YourNewSection } from "@/components/sections/your-new-section";

// In the page component:
<YourNewSection />
```

---

## 🧪 Testing

Run end-to-end tests with Playwright:

```bash
pnpm test:e2e
```

Tests verify:
- ✅ Homepage loads correctly
- ✅ Resume page is accessible
- ✅ Navigation works
- ✅ Theme toggle functions
- ✅ All sections render

---

## 🤝 Development Workflow

This repo uses a **two-branch workflow**:

- 🟢 **`main`** — Production-ready code (protected)
- 🔵 **`develop`** — Active development branch

### Making Changes

```bash
# 1. Switch to develop branch
git checkout develop

# 2. Create a feature branch (optional)
git checkout -b feature/my-new-feature

# 3. Make your changes...
# Edit files, test locally with `pnpm dev`

# 4. Commit your changes
git add .
git commit -m "feat: add new feature"

# 5. Push to GitHub
git push origin develop

# 6. Create a Pull Request (develop → main) on GitHub
```

---

## 🐛 Troubleshooting

### Port 3000 is already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- -p 3001
```

### `pnpm` command not found

```bash
# Install pnpm globally
npm install -g pnpm
```

### Build errors

```bash
# Clear Next.js cache and rebuild
rm -rf .next
pnpm build
```

### TypeScript errors

```bash
# Run type checking
pnpm typecheck
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 💌 Questions or Issues?

Reach out to **Francisco** at [ANBU Solutions](https://anbu.ai):
- 🌐 Website: [anbu.ai](https://anbu.ai)
- 💼 LinkedIn: Connect with Francisco
- 🐙 GitHub: [@shighetari](https://github.com/shighetari)

---

## 📝 License

This project was custom-built for Ivan Serdiuk. Feel free to customize and use it however you'd like!

---

**Made with ❤️ by Francisco @ ANBU Solutions 🥷**

> *"Code with purpose, deploy with confidence."*
