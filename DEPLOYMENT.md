# 🚀 Deployment Guide

> **Quick reference for deploying Ivan Serdiuk's portfolio to Vercel**

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

- [ ] ✅ Updated `src/data/resume.ts` with real content
- [ ] 📸 Added your profile photo: `public/avatar.jpg`
- [ ] 📄 Added your resume PDF: `public/Resume.pdf`
- [ ] 🔗 Updated project links (replace `example.com` placeholders)
- [ ] 🧪 Tested locally: `pnpm dev` and verified everything works
- [ ] 🔍 Ran quality checks: `pnpm lint` and `pnpm typecheck`
- [ ] 🏗️ Verified production build: `pnpm build`

---

## 🌟 Deploy to Vercel (Recommended)

Vercel is the **fastest and easiest** way to deploy Next.js applications. It's free for personal projects!

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. From the Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Find and select **`ivan-serdiuk-portfolio`** from your repositories
3. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js settings. Verify:

**Framework Preset:** Next.js ✅ (auto-detected)

**Build & Development Settings:**
- Build Command: `pnpm build` ✅
- Output Directory: `.next` ✅ (auto-detected)
- Install Command: `pnpm install` ✅

**Root Directory:** `./` ✅

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` | Production, Preview, Development |

> 💡 **Note:** You'll get the actual URL after the first deployment. You can update this later.

### Step 5: Deploy! 🎉

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. You'll get a live URL: `https://your-project.vercel.app`

### Step 6: Update Environment Variable

Now that you have your deployment URL:

1. Go to Project → **Settings** → **Environment Variables**
2. Edit `NEXT_PUBLIC_SITE_URL`
3. Replace with your actual Vercel URL: `https://your-project.vercel.app`
4. Click **"Save"**
5. Go to **Deployments** → Click **"..."** on the latest deployment → **"Redeploy"**

---

## 🎯 Custom Domain (Optional)

Want to use your own domain? (e.g., `ivanserdiuk.com`)

### Step 1: Buy a Domain

Purchase from:
- [Namecheap](https://www.namecheap.com) (recommended)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Step 2: Add Domain to Vercel

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain: `ivanserdiuk.com`
4. Click **"Add"**

### Step 3: Configure DNS

Vercel will give you DNS records to add. In your domain registrar:

**For root domain (`ivanserdiuk.com`):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain (`www.ivanserdiuk.com`):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Step 4: Wait for DNS Propagation

- Usually takes 5-30 minutes
- Can take up to 48 hours in rare cases
- Vercel will automatically provision an SSL certificate

### Step 5: Update Environment Variable

1. Go to Project → **Settings** → **Environment Variables**
2. Edit `NEXT_PUBLIC_SITE_URL`
3. Change to your custom domain: `https://ivanserdiuk.com`
4. **Save** and **Redeploy**

---

## 🔄 Continuous Deployment

Vercel automatically deploys your site whenever you push to GitHub!

### How It Works

1. **Push to `main` branch** → 🚀 Production deployment
2. **Push to `develop` branch** → 🔵 Preview deployment
3. **Open Pull Request** → 🎯 Preview deployment with unique URL

### Branch Configuration

In Vercel Dashboard → Project → **Settings** → **Git**:

- **Production Branch:** `main`
- **Automatic Deployments:** ✅ Enabled

### Deployment URL Pattern

- Production: `https://your-project.vercel.app`
- Preview (develop): `https://your-project-git-develop.vercel.app`
- Preview (PR): `https://your-project-git-feature-abc.vercel.app`

---

## 🔧 Post-Deployment Tasks

### 1. Update Social Links

Make sure your social media and email links are correct:
- LinkedIn profile
- GitHub profile
- Email address
- Phone number (if included)

### 2. Test Everything

Visit your live site and verify:
- ✅ Homepage loads correctly
- ✅ All sections display properly
- ✅ Resume page is accessible
- ✅ Projects page works
- ✅ Links open correctly
- ✅ Theme toggle works
- ✅ Mobile responsive
- ✅ Download resume PDF works

### 3. SEO Verification

Check these URLs work:
- `https://your-site.com/sitemap.xml` — Sitemap
- `https://your-site.com/robots.txt` — Robots file
- `https://your-site.com/manifest.json` — PWA manifest

### 4. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (use Vercel DNS or HTML tag method)
4. Submit your sitemap: `https://your-site.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 5. Share Your Portfolio!

Add your new URL to:
- 💼 LinkedIn profile (Website field)
- 🐙 GitHub profile (Website field)
- 📧 Email signature
- 📱 Social media bios
- 📄 Resume PDF

---

## 📊 Analytics (Optional)

### Vercel Analytics (Free)

1. In Vercel Dashboard → Your Project → **Analytics**
2. Click **"Enable"**
3. Get insights on page views, visitors, and performance

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to your site:

Create `src/app/analytics.tsx`:
```tsx
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  )
}
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from './analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🐛 Troubleshooting

### Build Failed

**Check build logs in Vercel:**
1. Go to **Deployments**
2. Click on the failed deployment
3. Check **Build Logs** for errors

**Common fixes:**
```bash
# Run locally to reproduce
pnpm build

# Fix TypeScript errors
pnpm typecheck

# Fix linting errors
pnpm lint
```

### Environment Variables Not Working

- Make sure you've set `NEXT_PUBLIC_SITE_URL`
- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- After updating env vars, **redeploy** your project

### Site Not Updating

- Check if deployment succeeded
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear browser cache
- Check if you pushed to the correct branch (`main`)

### Custom Domain Not Working

- Wait for DNS propagation (5-30 minutes)
- Verify DNS records are correct
- Check domain registrar settings
- Make sure domain is not already in use elsewhere

---

## 🔐 Security Best Practices

### Protect Sensitive Information

- ✅ Never commit `.env.local` (already in `.gitignore`)
- ✅ Don't hardcode API keys in code
- ✅ Use environment variables for secrets
- ✅ Review all content before deploying

### Branch Protection (Recommended)

On GitHub:
1. Go to Repository → **Settings** → **Branches**
2. Add rule for `main` branch
3. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

---

## 📞 Need Help?

**Vercel Support:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js Discord](https://nextjs.org/discord)

**ANBU Solutions:**
- 🌐 Website: [anbu.ai](https://anbu.ai)
- 🐙 GitHub: [@shighetari](https://github.com/shighetari)

---

## 🎊 Congratulations!

Your portfolio is now live! 🚀

Share it with:
- Recruiters and hiring managers
- Your professional network
- Friends and family
- Conference and hackathon organizers

**Next steps:**
- Keep your content updated regularly
- Add new projects as you build them
- Monitor analytics to see who's visiting
- Gather feedback and iterate

---

**Built with ❤️ by Francisco @ ANBU Solutions 🥷**
