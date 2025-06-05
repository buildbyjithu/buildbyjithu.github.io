# Deploy Portfolio to GitHub Pages

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to GitHub and create a new repository named `jithendra.github.io`
2. Make sure the repository is public
3. Initialize with README if needed

### 2. Prepare Your Code
```bash
# Clone this project to your local machine
git clone <this-replit-url> portfolio
cd portfolio

# Remove Replit-specific files
rm -rf .replit replit.nix

# Create a basic index.html for GitHub Pages
cp client/index.html index.html
```

### 3. Build Static Files
```bash
# Install dependencies
npm install

# Build the static site
npm run build:client
```

### 4. Set Up Git Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial portfolio commit"

# Add GitHub remote
git remote add origin https://github.com/jithendra/jithendra.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Click Save

## Alternative: Manual Static Deployment

If you prefer manual deployment:

### 1. Create Static Build
```bash
# Build only the frontend
cd client
npm run build
```

### 2. Upload to GitHub
1. Create `jithendra.github.io` repository
2. Upload the contents of `client/dist` to the repository root
3. Enable GitHub Pages as described above

## Custom Domain (Optional)
To use a custom domain:
1. Add a CNAME file with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## Troubleshooting
- Ensure repository name is exactly `jithendra.github.io`
- Repository must be public for free GitHub Pages
- Changes may take a few minutes to appear
- Check Actions tab for deployment status

Your portfolio will be available at: https://jithendra.github.io