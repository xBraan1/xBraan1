# Cloudflare Deployment Troubleshooting

## Common Issues & Solutions

### Issue 1: Build Fails with "Module not found"

**Symptom:**
```
Error: Could not resolve "./components/SomeComponent"
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

### Issue 2: Deployment Succeeds but Site Shows 404

**Symptom:**
- Deployment completes successfully
- Visiting the site shows 404 error

**Solution:**
1. Check that `_redirects` file exists in `dist/` folder
2. Verify content is exactly: `/* /index.html 200`
3. Rebuild and redeploy:
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=xbraan1
   ```

---

### Issue 3: Assets Not Loading (CSS/JS 404)

**Symptom:**
- Page loads but styling is broken
- Console shows 404 errors for CSS/JS files

**Solution:**
1. Check `dist/index.html` has correct asset paths
2. Verify `dist/assets/` folder contains the files
3. Check Vite config has correct base URL:
   ```javascript
   // vite.config.js
   export default defineConfig({
     base: '/',  // Should be '/' for root deployment
     // ...
   })
   ```

---

### Issue 4: SPA Routing Not Working

**Symptom:**
- Homepage works
- Other pages show 404 on refresh

**Solution:**
1. Verify `_redirects` file in `dist/`:
   ```
   /* /index.html 200
   ```
2. Check file has no extra whitespace or BOM
3. Rebuild and redeploy

---

### Issue 5: Wrangler Authentication Failed

**Symptom:**
```
Error: Authentication failed
```

**Solution:**
```bash
# Logout and login again
wrangler logout
wrangler login

# Or use API token
wrangler pages deploy dist --project-name=xbraan1
```

---

### Issue 6: Build Output Directory Not Found

**Symptom:**
```
Error: Build output directory "dist" does not exist
```

**Solution:**
1. Run build first:
   ```bash
   npm run build
   ```
2. Verify `dist/` folder exists
3. Check `wrangler.toml` has correct path:
   ```toml
   pages_build_output_dir = "dist"
   ```

---

### Issue 7: Environment Variables Not Working

**Symptom:**
- Variables defined in Cloudflare Dashboard not accessible
- `import.meta.env.VITE_*` returns undefined

**Solution:**
1. Variables must start with `VITE_` to be exposed to client
2. Rebuild after adding variables:
   ```bash
   npm run build
   ```
3. Check variable names in Cloudflare Dashboard
4. Redeploy with new variables

---

### Issue 8: CORS Errors

**Symptom:**
```
Access to fetch at '...' has been blocked by CORS policy
```

**Solution:**
1. Check `_headers` file in `dist/`
2. Verify CORS headers are set correctly:
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: GET, POST, OPTIONS
   Access-Control-Allow-Headers: Content-Type
   ```

---

### Issue 9: Service Worker Not Registering

**Symptom:**
- Console shows service worker registration failed
- Offline functionality not working

**Solution:**
1. Check `sw.js` exists in `dist/` folder
2. Verify HTTPS is enabled (required for service workers)
3. Check browser console for specific error
4. Clear browser cache and reload

---

### Issue 10: Slow Initial Load

**Symptom:**
- First page load takes too long
- Large bundle size

**Solution:**
1. Enable Cloudflare optimizations:
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - HTTP/3
   - Early Hints

2. Check bundle size:
   ```bash
   npm run build
   ls -lh dist/assets/
   ```

3. Consider code splitting for better performance

---

## Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` completes without errors
- [ ] `dist/` folder is created
- [ ] `dist/index.html` exists
- [ ] `dist/assets/` contains JS and CSS files
- [ ] `dist/_redirects` exists with correct content
- [ ] `dist/_headers` exists with security headers
- [ ] `wrangler.toml` is configured correctly
- [ ] All environment variables are set
- [ ] Custom domain DNS is configured (if using)

---

## Quick Fix Commands

### Clean and Rebuild
```bash
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Redeploy
```bash
npm run build
wrangler pages deploy dist --project-name=xbraan1
```

### Check Build Output
```bash
ls -la dist/
ls -la dist/assets/
cat dist/_redirects
cat dist/_headers
```

### Verify Wrangler
```bash
wrangler --version
wrangler whoami
```

---

## Cloudflare Dashboard Settings

### Build Settings
| Setting | Value |
|---------|-------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `18` or `20` |
| Root directory | `/` (empty) |

### Performance Settings
- ✅ Auto Minify: HTML, CSS, JS
- ✅ Brotli compression
- ✅ HTTP/3 (QUIC)
- ✅ Early Hints
- ✅ Always Online

### Security Settings
- ✅ SSL/TLS: Full (Strict)
- ✅ Always Use HTTPS
- ✅ Automatic HTTPS Rewrites
- ✅ Opportunistic Encryption

---

## Getting Help

If issues persist:

1. **Check Build Logs**
   - Cloudflare Dashboard → Your Project → Builds
   - Review error messages

2. **Check Browser Console**
   - Open DevTools (F12)
   - Check Console and Network tabs

3. **Verify Configuration**
   - Review `wrangler.toml`
   - Check `_redirects` and `_headers`
   - Verify environment variables

4. **Cloudflare Support**
   - [Cloudflare Documentation](https://developers.cloudflare.com/pages/)
   - [Cloudflare Community](https://community.cloudflare.com/)
   - [Cloudflare Support](https://support.cloudflare.com/)

---

## Common Error Messages

### "No matching route found"
- **Cause:** Missing or incorrect `_redirects` file
- **Fix:** Ensure `dist/_redirects` contains `/* /index.html 200`

### "Asset not found"
- **Cause:** Build didn't complete or assets missing
- **Fix:** Rebuild and verify `dist/assets/` folder

### "Authentication required"
- **Cause:** Not logged into Wrangler
- **Fix:** Run `wrangler login`

### "Project not found"
- **Cause:** Project name mismatch
- **Fix:** Use correct project name in deploy command

### "Build failed"
- **Cause:** Code errors or missing dependencies
- **Fix:** Run `npm install` and check for TypeScript errors

---

## Performance Optimization

### Enable Cloudflare Features
1. Go to Cloudflare Dashboard
2. Select your domain
3. Speed → Optimization
4. Enable:
   - Auto Minify
   - Brotli
   - HTTP/3
   - Early Hints
   - 0-RTT Connection Resumption

### Cache Settings
1. Go to Caching → Configuration
2. Set Cache Level: Standard
3. Enable: Always Online
4. Set Browser Cache TTL: 1 month

### Image Optimization
1. Go to Speed → Image Optimization
2. Enable:
   - Polish (Lossless or Lossy)
   - WebP conversion
   - Auto Minify

---

## Monitoring After Deployment

### Check Site Status
```bash
curl -I https://xbraan1.pages.dev
```

### Monitor Performance
- Cloudflare Dashboard → Analytics
- Check Page Load Time
- Monitor Bandwidth Usage
- Review Request Count

### Error Tracking
- Cloudflare Dashboard → Logs
- Check for 4xx/5xx errors
- Monitor build failures
- Review security events

---

## Rollback Procedure

If deployment has issues:

1. **Quick Rollback**
   - Cloudflare Dashboard → Your Project
   - Deployments → Previous deployment
   - Click "Rollback"

2. **Manual Rollback**
   ```bash
   # Deploy previous build
   wrangler pages deploy dist-previous --project-name=xbraan1
   ```

3. **Git Rollback**
   ```bash
   git revert HEAD
   npm run build
   wrangler pages deploy dist --project-name=xbraan1
   ```

---

## Contact Support

If you need help:

1. **Check Documentation**
   - [CLOUDFLARE_DEPLOYMENT_GUIDE.md](./CLOUDFLARE_DEPLOYMENT_GUIDE.md)
   - [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

2. **Community Support**
   - [Cloudflare Community](https://community.cloudflare.com/)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudflare-pages)

3. **Direct Support**
   - Cloudflare Dashboard → Support
   - Create a ticket with build logs

---

## Summary

Most deployment issues can be resolved by:
1. ✅ Running `npm run build` successfully
2. ✅ Verifying `dist/` folder contents
3. ✅ Checking `_redirects` file format
4. ✅ Ensuring wrangler is authenticated
5. ✅ Using correct deployment command

If issues persist, check the build logs and browser console for specific error messages.
