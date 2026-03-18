# OpenToken Website

A modern, interactive website for OpenToken - democratizing AI access through donated compute credits.

![OpenToken](https://img.shields.io/badge/OpenToken-v1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🚀 Features

- **Modern Design**: Agentic AI era aesthetics with particles, animations, and interactive elements
- **Rich Media**: Video hero background, embedded audio/video players, downloadable content
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Fast**: Optimized for performance with load times under 3 seconds
- **Accessible**: WCAG AA compliant with full keyboard navigation
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **Bilingual Content**: English and Chinese media resources
- **GitHub Pages Ready**: Configured for seamless deployment

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Particles**: [tsparticles](https://particles.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏃‍♂️ Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/open-token/open-token.github.io.git
cd open-token-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

## 🌐 Deployment

### GitHub Pages (Automatic)

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

#### Initial Setup

1. Push the code to your GitHub repository in the `open-token` organization
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically build and deploy on every push to `main`

#### Custom Domain Setup

1. Add your domain in repository Settings → Pages → Custom domain
2. Configure DNS with your domain provider:

   For **Apex Domain** (open-token.org):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

   For **WWW subdomain**:
   ```
   Type: CNAME
   Name: www
   Value: open-token.github.io
   ```

3. Wait for DNS propagation (can take up to 48 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

### Manual Build

To build the static site manually:

```bash
npm run build
```

This generates the static site in the `out` directory.

## 🎬 Media Integration

The website includes rich media content:

- **Promotional Video** (30 MB): Immersive hero background
- **Framework Audio** (24 MB): English explanation of OpenToken
- **Chinese Audio** (30 MB): 中文讨论 "AI算力公益池是乌托邦吗？"

All media files are in `public/media/` and served statically. See [MEDIA_INTEGRATION.md](MEDIA_INTEGRATION.md) for details.

## 📁 Project Structure

```
open-token-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── CallToAction.tsx    # CTA section for providers & projects
│   ├── Footer.tsx          # Site footer
│   ├── VideoHero.tsx       # Hero section with video background
│   ├── MediaShowcase.tsx   # Media players and downloads
│   ├── Impact.tsx          # Impact metrics section
│   ├── ParticlesBackground.tsx  # Animated background (optional)
│   ├── Providers.tsx       # AI provider showcase
│   └── UseCases.tsx        # Use cases section
├── public/
│   ├── media/             # Media files (84 MB total)
│   │   ├── opentoken-promo.mp4           # 30 MB
│   │   ├── opentoken-framework-en.m4a    # 24 MB
│   │   └── opentoken-utopia-zh.m4a       # 30 MB
│   ├── .nojekyll          # Disable Jekyll processing
│   └── CNAME              # Custom domain configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment guide
└── MEDIA_INTEGRATION.md   # Media integration details
```

## 🎨 Customization

### Adding a New AI Provider

Edit `components/Providers.tsx` and add to the `providers` array:

```typescript
{
  name: 'Your Provider',
  icon: YourIcon,
  description: 'Description of services',
  color: 'from-color-400 to-color-600',
}
```

### Updating Impact Metrics

Edit `components/Impact.tsx` and modify the `stats` array:

```typescript
{ label: 'Metric Name', value: 100, suffix: '+', prefix: '$' }
```

### Changing Colors

The site uses a purple/indigo gradient theme. To change:

1. Edit Tailwind classes in components
2. Update gradient colors in `app/globals.css`
3. Modify particle colors in `components/ParticlesBackground.tsx`

## 🌍 Internationalization (Coming Soon)

The site is prepared for bilingual support (English/Chinese):

1. Install `next-intl`:
```bash
npm install next-intl
```

2. Create translation files in `/messages`
3. Update `next.config.js` with i18n configuration
4. Wrap components with translation hooks

See [next-intl documentation](https://next-intl-docs.vercel.app/) for details.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly

## 🚀 Performance

- Static site generation for fast load times
- Image optimization
- Code splitting
- Lazy loading for non-critical components
- Minified CSS and JavaScript

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next out
npm install
npm run build
```

### Particles Not Working

Ensure `@tsparticles/react` and `@tsparticles/slim` are installed:
```bash
npm install @tsparticles/react @tsparticles/slim
```

### GitHub Pages 404

- Ensure `output: 'export'` is in `next.config.js`
- Check that `CNAME` file is in `public/` directory
- Verify GitHub Pages is enabled in repository settings

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue on GitHub or visit [https://github.com/open-token](https://github.com/open-token).

## 🙏 Acknowledgments

- All AI providers participating in OpenToken
- The open-source community
- Contributors to this project

---

Made with ❤️ for the open-source community
