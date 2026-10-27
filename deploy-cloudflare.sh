#!/bin/bash

# xBraan1 Cloudflare Deployment Script
# This script automates the deployment process to Cloudflare Pages

set -e  # Exit on error

echo "🚀 xBraan1 Cloudflare Deployment"
echo "================================"
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found. Installing..."
    npm install -g wrangler
fi

# Check if logged in
echo "🔐 Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "Please login to Cloudflare:"
    wrangler login
fi

# Build the project
echo ""
echo "📦 Building project..."
npm run build

# Check if build succeeded
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist folder not found"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed: dist/index.html not found"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=xbraan1

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📍 Your site should be live at:"
echo "   https://xbraan1.pages.dev"
echo ""
echo "🔧 Next steps:"
echo "   1. Verify the site loads correctly"
echo "   2. Test all pages and features"
echo "   3. Add custom domain if needed"
echo "   4. Configure environment variables"
echo ""
echo "📖 For more info, see CLOUDFLARE_DEPLOYMENT_GUIDE.md"
