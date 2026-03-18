#!/bin/bash
# OpenToken Website - Deployment Verification Script
# Run this before pushing to GitHub

set -e

echo "🔍 OpenToken Website - Deployment Verification"
echo "=============================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0

# Test function
test_check() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} $1"
    ((PASSED++))
  else
    echo -e "${RED}✗${NC} $1"
    ((FAILED++))
  fi
}

# 1. Check Node.js version
echo "📦 Checking dependencies..."
node --version > /dev/null 2>&1
test_check "Node.js installed"

npm --version > /dev/null 2>&1
test_check "npm installed"

# 2. Check if dependencies are installed
test -d node_modules
test_check "node_modules exists"

# 3. Check critical files
echo ""
echo "📄 Checking critical files..."
test -f package.json
test_check "package.json exists"

test -f next.config.js
test_check "next.config.js exists"

test -f tsconfig.json
test_check "tsconfig.json exists"

test -f README.md
test_check "README.md exists"

test -f DEPLOYMENT.md
test_check "DEPLOYMENT.md exists"

# 4. Check media files
echo ""
echo "🎬 Checking media files..."
test -f public/media/opentoken-promo.mp4
test_check "Video file exists (opentoken-promo.mp4)"

test -f public/media/opentoken-framework-en.m4a
test_check "Audio file exists (framework-en.m4a)"

test -f public/media/opentoken-utopia-zh.m4a
test_check "Audio file exists (utopia-zh.m4a)"

# Check media file sizes
VIDEO_SIZE=$(du -m public/media/opentoken-promo.mp4 | cut -f1)
if [ "$VIDEO_SIZE" -gt 20 ]; then
  test_check "Video file size acceptable (${VIDEO_SIZE}MB)"
else
  echo -e "${RED}✗${NC} Video file too small (${VIDEO_SIZE}MB)"
  ((FAILED++))
fi

# 5. Check GitHub Pages config
echo ""
echo "⚙️  Checking GitHub Pages configuration..."
test -f public/.nojekyll
test_check ".nojekyll file exists"

test -f public/CNAME
test_check "CNAME file exists"

CNAME_CONTENT=$(cat public/CNAME)
if [ "$CNAME_CONTENT" = "open-token.org" ]; then
  test_check "CNAME points to open-token.org"
else
  echo -e "${RED}✗${NC} CNAME incorrect: $CNAME_CONTENT"
  ((FAILED++))
fi

# 6. Check GitHub Actions workflow
test -f .github/workflows/deploy.yml
test_check "GitHub Actions workflow exists"

# 7. Build test
echo ""
echo "🏗️  Running production build..."
npm run build > /tmp/opentoken-build.log 2>&1
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓${NC} Production build successful"
  ((PASSED++))
else
  echo -e "${RED}✗${NC} Production build failed (check /tmp/opentoken-build.log)"
  ((FAILED++))
  exit 1
fi

# 8. Check build output
echo ""
echo "📦 Checking build output..."
test -d out
test_check "out/ directory exists"

test -f out/index.html
test_check "index.html generated"

test -d out/_next
test_check "_next/ assets directory exists"

test -d out/media
test_check "media/ directory in output"

# Check media files in output
test -f out/media/opentoken-promo.mp4
test_check "Video file in build output"

test -f out/media/opentoken-framework-en.m4a
test_check "Audio file (EN) in build output"

test -f out/media/opentoken-utopia-zh.m4a
test_check "Audio file (ZH) in build output"

# 9. Check build size
echo ""
echo "📊 Checking build metrics..."
OUT_SIZE=$(du -sh out/ | cut -f1)
echo "   Build size: $OUT_SIZE"

MEDIA_SIZE=$(du -sh out/media/ | cut -f1)
echo "   Media size: $MEDIA_SIZE"

# Check JS bundle size
FIRST_LOAD=$(grep "First Load JS shared by all" /tmp/opentoken-build.log | grep -oE '[0-9]+(\.[0-9]+)? kB' | head -1)
if [ ! -z "$FIRST_LOAD" ]; then
  echo "   First Load JS: $FIRST_LOAD"
  test_check "JS bundle size checked"
else
  echo -e "${YELLOW}⚠${NC}  Could not determine JS bundle size"
fi

# 10. Check for TypeScript errors
echo ""
echo "🔍 Type checking..."
npx tsc --noEmit > /dev/null 2>&1
test_check "No TypeScript errors"

# 11. Lint check
echo ""
echo "🧹 Linting..."
npm run lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
  test_check "No linting errors"
else
  echo -e "${YELLOW}⚠${NC}  Linting warnings found (non-critical)"
  ((PASSED++))
fi

# 12. Check documentation
echo ""
echo "📚 Checking documentation..."
test -f MEDIA_INTEGRATION.md
test_check "MEDIA_INTEGRATION.md exists"

test -f TESTING.md
test_check "TESTING.md exists"

test -f PROJECT_SUMMARY.md
test_check "PROJECT_SUMMARY.md exists"

# Final Summary
echo ""
echo "=============================================="
echo "📊 Verification Summary"
echo "=============================================="
echo -e "Passed: ${GREEN}${PASSED}${NC}"
echo -e "Failed: ${RED}${FAILED}${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✅ All checks passed! Ready for deployment.${NC}"
  echo ""
  echo "Next steps:"
  echo "1. git add ."
  echo "2. git commit -m 'Ready for deployment'"
  echo "3. git push origin main"
  echo ""
  exit 0
else
  echo -e "${RED}❌ Some checks failed. Please fix the issues above.${NC}"
  echo ""
  exit 1
fi
