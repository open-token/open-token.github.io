# Chinese Version (中文版) Implementation

## Status: In Progress

### Completed
- ✅ Created `/zh` route structure (`app/zh/page.tsx`)
- ✅ Created `components/zh/` directory
- ✅ Implemented `VideoHeroZh.tsx` with Chinese translations
- ✅ Added language switcher to English version (links to `/zh`)
- ✅ Added language switcher to Chinese version (links back to `/`)

### Chinese Translations Applied
- **Hero Section:**
  - "AI Access for All" → "人人可用的 AI 算力"
  - "Empowering the open-source community..." → "通过领先 AI 提供商捐赠的算力额度，赋能开源社区。构建一个创新无界的未来。"
  - "An initiative of the AOSF" → "代理开源基金会的倡议"
  - "Watch & Listen" → "观看与聆听"
  - "Explore Providers" → "探索提供商"

### Remaining Components to Translate
1. **MediaShowcaseZh.tsx** - Media & Resources section
2. **ProvidersZh.tsx** - Provider cards (OpenAI, Anthropic, Google, etc.)
3. **UseCasesZh.tsx** - Use cases section
4. **ImpactZh.tsx** - Impact/vision section
5. **CallToActionZh.tsx** - Get involved section
6. **FooterZh.tsx** - Footer with links

### Key Translation Guidelines
- Keep English for:
  - Brand names (OpenAI, Anthropic, Google, Gemini, Claude, etc.)
  - Technical terms (GPU, ASIC, API, token, etc.)
  - OpenToken (brand name)
  - AOSF (Agentic Open Source Foundation - use Chinese: 代理开源基金会)
  
- Translate all:
  - UI text and buttons
  - Descriptions and explanations
  - Section headings
  - Call-to-action text

### Next Steps
1. Complete remaining component translations
2. Test build: `npm run build`
3. Verify routes work: `/` (English) and `/zh` (Chinese)
4. Deploy to GitHub Pages
5. Update DNS/routing if needed

### Access
- **English**: https://open-token.org/
- **Chinese**: https://open-token.org/zh/ (once completed)

### Notes
- Next.js 14 App Router structure
- Uses Framer Motion for animations
- Tailwind CSS for styling
- All media files shared between languages
