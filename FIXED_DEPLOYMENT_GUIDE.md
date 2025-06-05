# Fix Your Portfolio Deployment

## Problem
Your GitHub repository is showing a Jekyll site (README only) instead of your React portfolio.

## Solution Steps

### Step 1: Replace Repository Content
1. Go to https://github.com/buildbyjithu/buildbyjithu.github.io
2. Delete ALL existing files (including README.md)
3. Upload ONLY the contents of the `client` folder from this project:
   - Upload all files from `client/src/`
   - Upload `client/index.html`
   - Upload `client/package.json` (I just created a simplified one)
   - Upload `client/vite.config.ts` (I just created this)
   - Upload `tailwind.config.ts` and `postcss.config.js`

### Step 2: Configure GitHub Pages
1. Go to Settings → Pages
2. Source: GitHub Actions (not "Deploy from branch")
3. Create this workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### Step 3: Verify Structure
Your repository should look like:
```
buildbyjithu.github.io/
├── .github/workflows/deploy.yml
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/profile-photo.jpg
│   └── ...
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

## Why This Happens
GitHub Pages defaults to Jekyll for repositories with README.md files. By removing all files and uploading only your React app with GitHub Actions, it will deploy properly.

## Result
Your portfolio with your profile photo will be live at https://buildbyjithu.github.io