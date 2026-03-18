# OpenToken Website Deployment Guide

Complete step-by-step guide to deploy the OpenToken website to GitHub Pages with a custom domain.

## 📋 Prerequisites

- [ ] GitHub account with access to the `open-token` organization
- [ ] Domain `open-token.org` purchased and accessible
- [ ] Node.js 18+ installed locally
- [ ] Git installed and configured

## 🚀 Deployment Steps

### Step 1: Verify Local Build

Before deploying, ensure everything works locally:

```bash
cd ~/open-token-website

# Install dependencies
npm install

# Build the site
npm run build

# Test the build locally
npx serve out
```

Visit `http://localhost:3000` and verify all sections work correctly.

### Step 2: Create GitHub Repository

1. Go to https://github.com/organizations/open-token/repositories/new
2. Repository name: `open-token.github.io` (for organization pages) or `website`
3. Description: "Official website for OpenToken - Democratizing AI Access"
4. Set to **Public**
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push Code to GitHub

```bash
cd ~/open-token-website

# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/open-token/open-token.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: OpenToken website"

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
4. The GitHub Actions workflow will automatically run

### Step 5: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run for "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, visit: `https://open-token.github.io`

### Step 6: Configure Custom Domain

#### A. In GitHub Repository

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `open-token.org`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)

#### B. Configure DNS Records

Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

**For Apex Domain (open-token.org):**

| Type | Name | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | 3600 |
| A    | @    | 185.199.109.153    | 3600 |
| A    | @    | 185.199.110.153    | 3600 |
| A    | @    | 185.199.111.153    | 3600 |

**For WWW Subdomain (www.open-token.org):**

| Type  | Name | Value                     | TTL  |
|-------|------|---------------------------|------|
| CNAME | www  | open-token.github.io      | 3600 |

**Important Notes:**
- Remove any existing A or CNAME records for `@` and `www`
- TTL can be 300-3600 seconds (lower = faster propagation)
- Save all changes

#### C. Wait for DNS Propagation

DNS changes can take 1-48 hours to propagate. Check status:

```bash
# Check apex domain
dig open-token.org +short

# Check www subdomain
dig www.open-token.org +short

# Or use online tools:
# https://www.whatsmydns.net/#A/open-token.org
```

Expected results:
- `open-token.org` → Should return the four GitHub IPs
- `www.open-token.org` → Should return `open-token.github.io`

#### D. Enable HTTPS

1. Go back to repository Settings → Pages
2. Once DNS is verified, check **"Enforce HTTPS"**
3. GitHub will automatically provision an SSL certificate

**Note:** This may take 10-20 minutes after DNS propagation.

### Step 7: Verify Final Setup

Test all URLs:
- ✅ https://open-token.org
- ✅ https://www.open-token.org  
- ✅ https://open-token.github.io (should redirect to custom domain)

## 🔄 Making Updates

### Automatic Deployment

Every push to the `main` branch automatically triggers deployment:

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push origin main
```

The GitHub Actions workflow will:
1. Build the site
2. Deploy to GitHub Pages
3. Update live site (usually within 2-3 minutes)

### Manual Deployment

If you need to manually trigger deployment:

1. Go to repository → Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## 🐛 Troubleshooting

### Issue: Deployment Fails

**Solution:**
1. Check the Actions tab for error logs
2. Verify `next.config.js` has `output: 'export'`
3. Ensure all dependencies are in `package.json`
4. Try building locally first: `npm run build`

### Issue: 404 Error on Custom Domain

**Solution:**
1. Verify CNAME file exists in `public/` directory with content: `open-token.org`
2. Check DNS propagation: `dig open-token.org`
3. Ensure custom domain is set in GitHub Pages settings
4. Wait up to 48 hours for DNS to fully propagate

### Issue: Blank Page After Deployment

**Solution:**
1. Check browser console for errors
2. Verify `basePath` in `next.config.js` is correct or commented out
3. Ensure `images.unoptimized: true` is set in `next.config.js`
4. Clear browser cache and reload

### Issue: CSS Not Loading

**Solution:**
1. Check if `.nojekyll` file exists in `public/` directory
2. Verify build succeeded without errors
3. Check Network tab in browser DevTools for 404s
4. Ensure `output: 'export'` is in `next.config.js`

### Issue: DNS Not Propagating

**Solution:**
1. Use different DNS checker: https://dnschecker.org
2. Verify records are correct at your registrar
3. Try flushing local DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```
4. Wait longer (can take up to 48 hours)

### Issue: HTTPS Certificate Error

**Solution:**
1. Ensure DNS is fully propagated first
2. Disable and re-enable "Enforce HTTPS" in GitHub Pages settings
3. Wait 20-30 minutes for certificate provisioning
4. Contact GitHub Support if issue persists after 24 hours

## 📊 Monitoring

### Check Deployment Status

```bash
# View recent deployments
gh api repos/open-token/open-token.github.io/pages/builds --paginate

# Or visit:
# https://github.com/open-token/open-token.github.io/deployments
```

### Analytics Setup (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔐 Security

### Enable Branch Protection

1. Go to Settings → Branches
2. Add rule for `main` branch:
   - Require pull request reviews before merging
   - Require status checks to pass
   - Require branches to be up to date

### Dependabot Security Updates

1. Go to Settings → Security → Dependabot
2. Enable:
   - Dependabot alerts
   - Dependabot security updates
   - Dependabot version updates

## 📝 Maintenance Checklist

### Weekly
- [ ] Check GitHub Actions for failed deployments
- [ ] Review Dependabot alerts
- [ ] Test live site functionality

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review and update content
- [ ] Check analytics for errors/404s
- [ ] Test on different devices/browsers

### Quarterly
- [ ] Review and update provider information
- [ ] Update impact metrics
- [ ] Check for Next.js/framework updates
- [ ] Performance audit with Lighthouse

## 🆘 Getting Help

- **GitHub Issues**: https://github.com/open-token/open-token.github.io/issues
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: Join our discussions

## ✅ Deployment Checklist

Use this before going live:

- [ ] Local build successful (`npm run build`)
- [ ] All sections render correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive on all screen sizes
- [ ] Links all point to correct destinations
- [ ] Metadata and SEO tags correct
- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow successful
- [ ] Custom domain configured
- [ ] DNS records added and propagating
- [ ] HTTPS enabled and working
- [ ] All URLs (apex, www) working
- [ ] Site tested in multiple browsers
- [ ] Performance tested (Lighthouse >90)
- [ ] Accessibility tested (WCAG AA)

---

**Need help?** Open an issue or reach out to the team!
