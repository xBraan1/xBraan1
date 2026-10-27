# Cloudflare Deployment Guide

## Quick Deploy Methods

### Method 1: Git Integration (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/xbraan1.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages"
   - Click "Create application"
   - Select "Pages"
   - Choose "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node.js version**: `18` or higher
   - Click "Save and Deploy"

### Method 2: Direct Upload

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages"
   - Click "Create application"
   - Select "Pages"
   - Choose "Upload assets"
   - Drag and drop the entire `dist` folder
   - Click "Deploy site"

### Method 3: Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=xbraan1
   ```

## Configuration Files

### wrangler.toml
The `wrangler.toml` file is already configured with:
- Project name: `xbraan1`
- Build output: `dist`
- SPA routing redirects

### _redirects
The `public/_redirects` file handles SPA routing:
```
/*    /index.html   200
```

### _headers
The `public/_headers` file sets security headers for all routes.

## Build Settings for Cloudflare

When setting up in Cloudflare Dashboard, use these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `18` or `20` |
| **Root directory** | `/` (leave empty) |

## Environment Variables

If you need environment variables, add them in Cloudflare Dashboard:
- Go to your Pages project
- Settings → Environment variables
- Add variables like:
  - `VITE_PUBLIC_URL` = `https://xbraan1.pages.dev`

## Custom Domain

To add a custom domain:
1. Go to your Pages project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `xbraan1.com`)
5. Follow the DNS configuration instructions

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Run type check
npm run typecheck
```

### Deployment Fails

**Error: No build output**
- Verify `npm run build` creates a `dist` folder
- Check that `dist/index.html` exists
- Ensure build output directory is set to `dist`

**Error: SPA routing not working**
- Verify `_redirects` file exists in `dist/`
- Check that `_redirects` contains: `/*    /index.html   200`

**Error: Assets not loading**
- Check that asset paths in `dist/index.html` are correct
- Verify `dist/assets/` folder contains JS and CSS files
- Ensure base URL is set correctly in `vite.config.js`

### Performance Issues

**Slow initial load**
- Enable Cloudflare's Auto Minify
- Enable Brotli compression
- Use Cloudflare's CDN (enabled by default)

**Large bundle size**
- Current size: ~145 KB gzipped
- Consider code splitting for better performance
- Lazy load images and components

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] SPA routing works (refresh on any page)
- [ ] Dark mode toggle works
- [ ] Cookie consent banner appears
- [ ] All images load correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive design works
- [ ] Foldable device support works
- [ ] Service worker registers
- [ ] Offline page works
- [ ] Security headers are applied

## Monitoring

After deployment, monitor:
- **Analytics**: Cloudflare Web Analytics
- **Performance**: Cloudflare Page Speed
- **Errors**: Cloudflare Logs
- **Uptime**: Cloudflare Status

## Support

If you encounter issues:
1. Check Cloudflare build logs
2. Review browser console for errors
3. Verify all configuration files
4. Check the troubleshooting section above
5. Contact Cloudflare support if needed

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deploying)
