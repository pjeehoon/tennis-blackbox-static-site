# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static WordPress export site for Tennis Blackbox - a sports line-call review application. The site has been converted from WordPress to static HTML for deployment on Cloudflare Pages.

## Development Commands

### Local Development Server
```bash
# Python (recommended)
python3 -m http.server 8080

# Node.js alternative
npm install -g serve
serve -l 8080
```

Access the site at `http://localhost:8080` (not file://)

### Deployment
- Push changes to GitHub
- Cloudflare Pages automatically deploys on commit

## Architecture

### Site Structure
- **Single-page site**: Only `index.html` exists as the main entry point
- **Multi-language**: English (en_US) and Korean (ko_KR) support via TranslatePress
- **Static assets**: All WordPress dynamic functionality has been removed
- **SEO optimized**: Includes sitemaps and robots.txt

### Key Directories
- `/wp-content/themes/astra/`: Theme assets (CSS/JS)
- `/wp-content/plugins/`: Plugin assets for TranslatePress and Ultimate Addons
- `/wp-content/uploads/`: Media files organized by year/month
- `/lang/`: Language configuration files

### Important Files
- `sitemaps.xml`: Main sitemap index (required for SEO)
- `robots.txt`: Search engine directives
- Various `*-sitemap1.xml` files: Category, page, and tag sitemaps

## Development Notes

### Limitations
- No server-side functionality (comments, forms, login)
- All content must be manually updated in HTML
- WordPress plugins are present only for their frontend assets

### SEO Requirements
When updating the site, ensure all sitemap files are current and included in the deployment. These files are critical for search engine indexing.