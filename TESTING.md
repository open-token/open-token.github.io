# Testing Guide

Comprehensive testing checklist for the OpenToken website.

## 🧪 Pre-Deployment Testing

### 1. Build Test

```bash
cd ~/open-token-website

# Clean build
rm -rf .next out node_modules/.cache

# Fresh install
npm install

# Build for production
npm run build

# Check for errors
echo $?  # Should output 0
```

**Expected Output:**
- ✓ Compiled successfully
- ✓ Linting and checking validity of types
- ✓ Generating static pages (5/5)
- No errors or warnings

### 2. Media Files Test

```bash
# Verify media files exist
ls -lh public/media/

# Should show:
# opentoken-promo.mp4 (30 MB)
# opentoken-framework-en.m4a (24 MB)
# opentoken-utopia-zh.m4a (30 MB)

# Verify in build output
ls -lh out/media/

# Should show same files copied to out/
```

### 3. Local Preview Test

```bash
# Serve the built site
npx serve out -p 3000

# Open in browser: http://localhost:3000
```

**Manual Checks:**
- [ ] Page loads without errors
- [ ] Video background plays in hero
- [ ] Video controls (play/pause, mute) work
- [ ] Scroll to Media section
- [ ] Video player works inline
- [ ] Audio players work (both English and Chinese)
- [ ] Download buttons function
- [ ] All sections load smoothly
- [ ] Animations are smooth (60fps)
- [ ] No console errors

### 4. Responsive Design Test

Test on different viewport sizes:

```bash
# Use browser DevTools responsive mode
# Or use:
npx playwright test --headed
```

**Viewports to Test:**
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667 - iPhone SE)
- [ ] Mobile (390x844 - iPhone 12)
- [ ] Mobile (360x640 - Android)

**Check:**
- Layout adapts properly
- Media players scale correctly
- Touch controls work on mobile
- Text remains readable
- No horizontal scroll

### 5. Browser Compatibility Test

Test in multiple browsers:

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Verify:**
- Video/audio playback works
- Animations smooth
- Hover effects work (desktop)
- Touch gestures work (mobile)

## 🎬 Media-Specific Tests

### Video Hero

**Desktop:**
1. Load homepage
2. Verify video background visible (dimmed)
3. Click Play button → video plays
4. Click Mute button → audio enabled
5. Verify controls float top-right
6. Check video loops continuously

**Mobile:**
1. Load on mobile device
2. Verify video loads (may be lower quality)
3. Tap Play button
4. Verify `playsInline` works (no fullscreen)
5. Check battery impact (shouldn't drain fast)

### Media Showcase

**Video Player:**
1. Scroll to Media section
2. Find "AI Access for All" video card
3. Click play on embedded player
4. Verify video loads and plays
5. Test fullscreen mode
6. Test download button

**Audio Players:**
1. Find "Framework" audio card (English)
2. Click play
3. Verify audio plays
4. Test volume control
5. Test scrubbing (seek)
6. Test download button
7. Repeat for Chinese audio

## 🚀 Performance Tests

### Lighthouse Audit

```bash
# Build first
npm run build

# Serve
npx serve out -p 3000

# Run Lighthouse (Chrome DevTools)
# Or use CLI:
npx lighthouse http://localhost:3000 --view
```

**Target Scores:**
- Performance: >85 (accounting for large media)
- Accessibility: >95
- Best Practices: >90
- SEO: >95

**Note:** Media files will impact performance score. Focus on:
- Time to First Byte (TTFB) <600ms
- First Contentful Paint (FCP) <2s
- Largest Contentful Paint (LCP) <2.5s
- Cumulative Layout Shift (CLS) <0.1

### Load Time Test

```bash
# Use curl to measure
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000

# Create curl-format.txt:
cat > curl-format.txt << 'EOF'
time_namelookup:  %{time_namelookup}s\n
time_connect:  %{time_connect}s\n
time_starttransfer:  %{time_starttransfer}s\n
time_total:  %{time_total}s\n
EOF
```

**Target:**
- HTML load: <500ms
- Total page load (without media): <2s
- Media starts loading: <3s

### Bundle Size Check

```bash
# Check JS bundle size
du -sh out/_next/static/chunks/*.js | sort -h

# Check total build size
du -sh out/
```

**Targets:**
- First Load JS: <150 KB
- Total build (with media): ~85 MB
- Total build (without media): <2 MB

## ♿ Accessibility Tests

### Keyboard Navigation

1. Load page
2. Press `Tab` repeatedly
3. Verify focus visible on all interactive elements
4. Press `Enter` on video controls
5. Navigate entire page with keyboard only

**Check:**
- [ ] All buttons reachable
- [ ] Focus indicators visible
- [ ] Logical tab order
- [ ] Modals closable with `Esc`
- [ ] Media players keyboard-accessible

### Screen Reader Test

**macOS (VoiceOver):**
```bash
# Enable VoiceOver: Cmd+F5
```

**Test:**
1. Navigate page with VoiceOver
2. Verify all sections announced
3. Check media player controls have labels
4. Verify heading hierarchy makes sense
5. Test image alt texts

**Windows (NVDA):**
Download and test with NVDA screen reader.

### Color Contrast

Use browser DevTools or online tools:
- https://webaim.org/resources/contrastchecker/

**Verify:**
- Text on backgrounds meets WCAG AA (4.5:1)
- Large text meets WCAG AA (3:1)
- UI components meet contrast requirements

## 🌐 Cross-Browser Media Tests

### MP4 Compatibility

Test video in:
- [ ] Chrome (H.264 support)
- [ ] Firefox (H.264 support)
- [ ] Safari (native H.264)
- [ ] Edge (H.264 support)

### M4A Compatibility

Test audio in:
- [ ] Chrome (AAC support)
- [ ] Firefox (AAC support)
- [ ] Safari (native AAC)
- [ ] Edge (AAC support)

### Fallback Handling

Test in browsers without codec support (rare):
- Verify fallback message displays
- Verify download still works

## 🔗 Link Validation

```bash
# Check all links
npx broken-link-checker http://localhost:3000

# Or manually:
# - Click every link
# - Verify GitHub links work
# - Check external provider links
# - Test anchor links (#providers, #media, etc.)
```

## 📱 Mobile-Specific Tests

### iOS Safari

1. Load on iPhone
2. Verify video doesn't autoplay (iOS restriction)
3. Test video controls work
4. Verify playsInline works
5. Check audio players
6. Test download on iOS (opens in new tab)

### Android Chrome

1. Load on Android
2. Test video playback
3. Check audio playback
4. Verify downloads work
5. Test responsive layout

### Low Bandwidth Test

Simulate slow connection:
1. Chrome DevTools → Network → Slow 3G
2. Reload page
3. Verify graceful loading
4. Check video buffers properly
5. Verify no timeouts

## 🐛 Known Issues & Edge Cases

### Large File Sizes

**Issue:** Media files total 84 MB
**Impact:** Slow initial load on slow connections
**Mitigation:** 
- `preload="metadata"` (only loads metadata)
- Progressive download (stream while play)
- No autoplay (user-initiated)

### iOS Video Restrictions

**Issue:** iOS won't autoplay unmuted video
**Solution:** Start muted (implemented)

### Mobile Data Usage

**Issue:** Large files on mobile data
**Workaround:** User must explicitly play

## ✅ Pre-Launch Checklist

- [ ] All builds succeed without errors
- [ ] Media files present and playable
- [ ] Responsive on all viewports
- [ ] Works in all major browsers
- [ ] Lighthouse scores acceptable
- [ ] No console errors
- [ ] No broken links
- [ ] Accessibility checks pass
- [ ] SEO metadata correct
- [ ] Mobile testing complete
- [ ] Performance acceptable
- [ ] Media downloads work
- [ ] GitHub links updated
- [ ] CNAME configured
- [ ] DNS records ready

## 🚨 Automated Testing (Future)

Consider adding:

```bash
# Install Playwright
npm install -D @playwright/test

# Create test file: tests/e2e.spec.ts
```

Example test:
```typescript
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('OpenToken');
});

test('video player works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const video = page.locator('video').first();
  await expect(video).toBeVisible();
});

test('media section exists', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('a[href="#media"]').click();
  await expect(page.locator('#media')).toBeVisible();
});
```

## 📊 Monitoring After Deploy

Post-deployment checks:

1. **GitHub Actions**
   - Verify deployment succeeded
   - Check for warnings/errors

2. **Live Site**
   - Visit https://open-token.org
   - Run full manual test suite
   - Check from different locations (VPN)

3. **Analytics** (if configured)
   - Monitor page load times
   - Check error rates
   - Track media engagement

4. **User Reports**
   - Watch for GitHub issues
   - Monitor feedback channels
   - Address bugs promptly

---

**Questions?** Open an issue or contact the team.
