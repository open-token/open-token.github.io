# Media Integration Guide

This document describes how media files are integrated into the OpenToken website.

## 📁 Media Files

All media files are located in `public/media/`:

| File | Type | Size | Language | Description |
|------|------|------|----------|-------------|
| `opentoken-promo.mp4` | Video | 30 MB | English | Main promotional video: "OpenToken: AI Access for All" |
| `opentoken-framework-en.m4a` | Audio | 24 MB | English | Detailed explanation of the Shared AI Credit Framework |
| `opentoken-utopia-zh.m4a` | Audio | 30 MB | 中文 | Chinese discussion: "OpenToken AI算力公益池是乌托邦吗？" |

## 🎬 Implementation

### VideoHero Component (`components/VideoHero.tsx`)

The hero section features the promotional video as an immersive background:

**Features:**
- Video background with gradient overlay
- Play/Pause controls
- Mute/Unmute controls
- Responsive design
- Smooth animations via Framer Motion
- Accessible controls with ARIA labels

**User Experience:**
- Video starts muted and paused
- Users can enable sound and play via floating controls (top-right)
- Video loops continuously when playing
- Minimal distraction with 50% opacity overlay

### MediaShowcase Component (`components/MediaShowcase.tsx`)

Dedicated section showcasing all media resources:

**Features:**
- Grid layout with individual media cards
- Embedded video player (HTML5 `<video>`)
- Embedded audio players (HTML5 `<audio>`)
- Download buttons for all media
- Language and file size indicators
- Responsive design
- Hover animations

**Structure:**
Each media card includes:
- Icon and type badge (Video/Audio)
- Language and file size metadata
- Title and description
- Embedded player
- Download button

## 🌐 User Flows

### Primary Flow

1. **Hero Section**: Users land on video hero with engaging background
2. **Media Section**: Scroll down to explore video and audio resources
3. **Interactive Players**: Play media inline without leaving the page
4. **Download Option**: Download any media for offline viewing/listening

### Bilingual Support

- **English**: Video + Framework audio
- **中文**: Utopia discussion audio
- Future: Add Chinese subtitles to video

## 🔧 Technical Details

### File Handling

Media files are served statically from `public/media/`:
```
public/
  media/
    opentoken-promo.mp4          (30 MB)
    opentoken-framework-en.m4a   (24 MB)
    opentoken-utopia-zh.m4a      (30 MB)
```

Next.js automatically serves these at URLs:
- `/media/opentoken-promo.mp4`
- `/media/opentoken-framework-en.m4a`
- `/media/opentoken-utopia-zh.m4a`

### Performance Considerations

**Large Files:**
- Total media size: ~84 MB
- Files are NOT bundled with JS/CSS
- Loaded on-demand (lazy loading)
- HTML5 `preload="metadata"` for fast player initialization

**Optimization:**
- Video compressed at web-optimized bitrate
- Audio in M4A format (efficient compression)
- Progressive download (stream while playing)
- No autoplay to save bandwidth

### Browser Compatibility

**Supported Formats:**
- MP4 (H.264 video): Universally supported
- M4A (AAC audio): Supported in all modern browsers

**Fallback:**
HTML5 `<video>` and `<audio>` tags include fallback text for unsupported browsers.

## 📱 Responsive Design

### Desktop (≥1024px)
- 2-column grid for media cards
- Large video player
- Full-size controls

### Tablet (768-1023px)
- 2-column grid maintained
- Scaled-down players
- Touch-friendly controls

### Mobile (<768px)
- Single column layout
- Full-width players
- Large tap targets for controls

## ♿ Accessibility

**WCAG AA Compliance:**
- Semantic HTML5 media elements
- ARIA labels on custom controls
- Keyboard navigation support
- High contrast controls
- Screen reader friendly

**Controls:**
- Play/Pause buttons clearly labeled
- Volume controls accessible
- Download links descriptive

## 🎨 Design Language

**Video Hero:**
- Dark immersive background
- White text with drop shadows for readability
- Gradient overlays (black/transparent)
- Floating glass-morphism controls

**Media Cards:**
- Gradient headers matching brand colors
- Clean white/dark-themed content areas
- Rounded corners (2xl)
- Shadow elevation on hover

## 🚀 Future Enhancements

### Planned Features

1. **Subtitles/Captions**
   - Add VTT subtitle files
   - Multi-language support
   - Toggle on/off

2. **Streaming Optimization**
   - Adaptive bitrate streaming (HLS/DASH)
   - Multiple quality options
   - CDN distribution

3. **Additional Content**
   - Case study videos
   - Provider testimonials
   - Tutorial series

4. **Interactive Features**
   - Video chapters/timestamps
   - Inline comments/discussions
   - Social sharing

5. **Analytics**
   - Track play rates
   - Monitor engagement
   - A/B test placements

## 🐛 Troubleshooting

### Video Not Playing

**Symptoms:** Black screen or "unsupported format" error

**Solutions:**
1. Verify MP4 file exists in `public/media/`
2. Check browser console for 404 errors
3. Ensure H.264 codec support
4. Try different browser
5. Check file permissions

### Audio Not Playing

**Symptoms:** Player shows but no sound

**Solutions:**
1. Verify M4A files exist
2. Check if browser supports AAC codec
3. Ensure device volume is up
4. Try unmuting the player
5. Check MIME type configuration

### Large Load Times

**Symptoms:** Slow page load, spinner forever

**Solutions:**
1. Verify file sizes reasonable (<50 MB)
2. Check network speed
3. Enable browser caching
4. Consider CDN distribution
5. Use `preload="metadata"` (already implemented)

### Mobile Issues

**Symptoms:** Video/audio not working on iOS/Android

**Solutions:**
1. iOS requires user interaction to play (implemented)
2. Use `playsInline` attribute (implemented)
3. Mute by default (implemented)
4. Check mobile data restrictions
5. Test in Safari/Chrome mobile

## 📊 Performance Metrics

**Target Metrics:**
- Initial page load: <3s (excluding media)
- Video start time: <2s
- Audio start time: <1s
- Smooth 60fps animations

**Monitoring:**
```bash
# Test with Lighthouse
npm run build
npx serve out
# Open Chrome DevTools → Lighthouse → Run audit
```

## 🔐 Security

**Considerations:**
- Media files publicly accessible (intended)
- No DRM required (open content)
- Direct download allowed (by design)
- HTTPS enforced in production

**Future:**
- Add watermarks for attribution
- Track download sources
- Implement rate limiting if needed

## 📝 Updating Media

### Adding New Files

1. Add file to `public/media/`
2. Update `components/MediaShowcase.tsx`:
   ```typescript
   {
     title: 'New Content',
     description: 'Description',
     type: 'video' | 'audio',
     icon: FiVideo | FiHeadphones,
     file: '/media/filename.ext',
     language: 'English',
     size: 'XX MB',
     color: 'from-color-to-color',
   }
   ```
3. Rebuild: `npm run build`
4. Test locally
5. Commit and push

### Replacing Files

1. Replace file in `public/media/` (keep same name)
2. Clear browser cache
3. Rebuild if needed
4. Verify playback

### Removing Files

1. Delete from `public/media/`
2. Remove entry from `MediaShowcase.tsx`
3. Rebuild
4. Update documentation

---

**Questions?** Open an issue on GitHub or contact the team.
