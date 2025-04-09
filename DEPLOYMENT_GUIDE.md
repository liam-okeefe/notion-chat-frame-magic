
# Simple Deployment Guide

This guide provides simplified instructions for deploying your chat widget to GitHub Pages and embedding it in Notion.

## Deploying to GitHub Pages

### Option 1: Using the GitHub Website (Easiest Method)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Create a new repository**
   - Go to https://github.com/new
   - Name your repository (e.g., "chat-widget")
   - Make it public
   - Click "Create repository"

3. **Upload your files**
   - On your new repository page, click "uploading an existing file"
   - Drag and drop all your project files or use the file selector
   - Commit the changes

4. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Choose the "Static HTML" workflow
   - Commit the workflow file
   - Wait for the deployment to complete (check Actions tab)

5. **Access your widget**
   - Your widget will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed.html`

### Option 2: Using Command Line

```bash
# One-time setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main

# Deploy
npm run build
npx gh-pages -d dist
```

## Embedding in Notion

1. In Notion:
   - Type `/embed` and select "Embed"
   - Paste your GitHub Pages URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed.html`
   - Adjust dimensions (width 100%, height 600px)
   - Click "Embed link"

2. That's it! Your chat widget should now be embedded in your Notion page.

## Need Help?

If you encounter any issues with deployment or embedding, you can:
- Check GitHub's documentation: https://docs.github.com/en/pages
- Look at the GitHub Actions logs for deployment errors
- Make sure your embed.html file is available in your repository
