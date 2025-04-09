
# Deployment Guide: Embed Your Chat Widget in Notion

This guide provides instructions on how to deploy your chat widget to GitHub Pages and embed it in Notion.

## Option 1: GitHub Pages Deployment

1. Create a GitHub repository for your project
   - Go to https://github.com/new
   - Name your repository and make it public
   - Click "Create repository"

2. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. Install the gh-pages package
   ```bash
   npm install --save-dev gh-pages
   ```

4. Add these scripts to your package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

5. Add homepage to package.json:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```

6. Deploy your site:
   ```bash
   npm run deploy
   ```

7. On GitHub, go to Settings > Pages and ensure your site is published from the gh-pages branch

## Option 2: Netlify Deployment

1. Create a Netlify account at https://www.netlify.com/
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

## Option 3: Vercel Deployment

1. Create a Vercel account at https://vercel.com/
2. Click "New Project"
3. Import your Git repository
4. Configure your project settings (defaults should work)
5. Click "Deploy"

## Embedding in Notion

1. After deploying, access your site's URL at:
   - GitHub Pages: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed`
   - Netlify: `https://your-site-name.netlify.app/embed`
   - Vercel: `https://your-project-name.vercel.app/embed`

2. In Notion:
   - Type `/embed` and select "Embed"
   - Paste your URL 
   - Adjust the dimensions as needed (recommended: width 100%, height 600px)
   - Click "Embed link"

Your chat widget should now be fully functional in your Notion page!

## Troubleshooting

If your iframe is not embedding correctly:
- Ensure your deployed site is using HTTPS
- Check for any content security policies blocking iframes
- Try accessing the URL directly to verify it works outside Notion
- Adjust iframe settings in Notion (width/height)

For more help, check out the GitHub repository or create an issue.
