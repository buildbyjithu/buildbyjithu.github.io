# Deploy Your Portfolio to jithendra.github.io

## Step 1: Download Your Portfolio Files

1. Download all files from this Replit project
2. Create a new folder on your computer called `portfolio`
3. Extract all files to this folder

## Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Repository name: `jithendra.github.io` (exactly this name)
4. Make it Public
5. Don't initialize with README
6. Click "Create repository"

## Step 3: Prepare Files for Deployment

Since your portfolio is a frontend-only site for GitHub Pages, you need to:

1. Create a new folder called `github-deployment`
2. Copy these files to `github-deployment`:
   - All files from `client/src/` folder
   - The `client/index.html` file (rename it to just `index.html`)
   - Copy `tailwind.config.ts` and `postcss.config.js`
   - Copy `package.json` (we'll modify it)

## Step 4: Create Simplified package.json

Create this `package.json` in your `github-deployment` folder:

```json
{
  "name": "jithendra-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "wouter": "^3.3.5",
    "@tanstack/react-query": "^5.59.20",
    "lucide-react": "^0.454.0",
    "date-fns": "^4.1.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "class-variance-authority": "^0.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

## Step 5: Create vite.config.ts

Create this `vite.config.ts` in your `github-deployment` folder:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

## Step 6: Update index.html

Make sure your `index.html` has the correct script reference:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jithendranath Gupta Yenduri - Software Architect Portfolio</title>
    <!-- Your existing meta tags -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 7: Deploy to GitHub

1. Open terminal/command prompt in your `github-deployment` folder
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/jithendra/jithendra.github.io.git
git push -u origin main
```

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Click "Configure" next to "Static HTML"
6. Replace the workflow content with:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
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
        id: deployment
        uses: actions/deploy-pages@v4
```

## Your Portfolio Will Be Live At:
https://jithendra.github.io

The deployment typically takes 2-5 minutes after pushing to GitHub.