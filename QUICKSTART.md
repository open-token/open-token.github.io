# OpenToken Website - Quick Start Guide

Fast track to get the website deployed in 10 minutes.

## ⚡ Prerequisites

- GitHub account with access to `open-token` organization
- Domain `open-token.org` registered and accessible
- Git installed locally

## 🚀 5-Minute Deployment

### Step 1: Create GitHub Repository (1 min)

1. Go to: https://github.com/organizations/open-token/repositories/new
2. Repository name: `open-token.github.io`
3. Public repository
4. **Don't** initialize with README
5. Click **Create repository**

### Step 2: Push Code (2 min)

```bash
cd ~/open-token-website

# Initialize and push
git init
git add .
git commit -m "Initial commit: OpenToken website"
git branch -M main
git remote add origin https://github.com/open-token/open-token.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (1 min)

1. Go to repository → **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Wait 2-3 minutes for deployment to complete
4. Check **Actions** tab for progress

### Step 4: Configure DNS (1 min to configure, 1-48h to propagate)

**At your domain registrar:**

Add these A records for `open-token.org`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add CNAME for `www`:
```
www → open-token.github.io
```

### Step 5: Add Custom Domain (30 seconds)

1. Repository Settings → Pages
2. Custom domain: `open-token.org`
3. Click **Save**
4. Wait for DNS check ✓
5. Enable **Enforce HTTPS**

---

## ✅ Done!

Your site is now live at:
- https://open-token.github.io (immediately)
- https://open-token.org (after DNS propagation)

## 🔍 Verify Deployment

```bash
# Check if site is live
curl -I https://open-token.github.io

# Check DNS propagation
dig open-token.org

# Check WWW subdomain
dig www.open-token.org
```

## 📋 Post-Deployment Checklist

- [ ] Visit https://open-token.github.io
- [ ] Verify all sections load
- [ ] Test video playback
- [ ] Test audio players
- [ ] Check mobile responsive
- [ ] Test download buttons
- [ ] Verify all links work
- [ ] Check from different browsers
- [ ] Wait for DNS propagation
- [ ] Test custom domain
- [ ] Verify HTTPS certificate

## 🐛 Quick Troubleshooting

**Deployment Failed?**
- Check Actions tab for error logs
- Verify `next.config.js` has `output: 'export'`
- Rebuild locally: `npm run build`

**404 Error?**
- Ensure GitHub Pages is enabled
- Check CNAME file exists in `public/`
- Verify workflow completed successfully

**Media Not Playing?**
- Check browser console for errors
- Verify media files exist in `out/media/`
- Try different browser

**DNS Not Working?**
- Verify A records are correct
- Use https://dnschecker.org to check propagation
- Wait up to 48 hours

## 📚 Full Documentation

For detailed information, see:

- **README.md** - Complete setup guide
- **DEPLOYMENT.md** - Step-by-step deployment
- **MEDIA_INTEGRATION.md** - Media file details
- **TESTING.md** - Testing procedures
- **PROJECT_SUMMARY.md** - Project overview

## 🆘 Need Help?

- Open an issue: https://github.com/open-token/open-token.github.io/issues
- Check Actions logs for build errors
- Review GitHub Pages docs: https://docs.github.com/en/pages

---

**That's it!** You should have a fully functional OpenToken website deployed in under 10 minutes (plus DNS propagation time).
