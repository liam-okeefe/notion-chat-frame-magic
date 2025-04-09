
# Deployment Guide: Embed Your Chat Widget in Notion

This guide provides step-by-step instructions on how to deploy your chat widget to GitHub Pages and embed it in Notion.

## GitHub Pages Deployment (Recommended)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name your repository (e.g., "notion-chat-widget")
   - Make it public
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Install the gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add these scripts to your package.json**
   Add these lines to the "scripts" section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

5. **Add homepage to package.json**
   Add this line at the top level of your package.json:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```

6. **Deploy your site**
   ```bash
   npm run deploy
   ```

7. **Configure GitHub Pages**
   - On GitHub, go to your repository
   - Click Settings > Pages
   - Under "Build and deployment", ensure the source is set to "Deploy from a branch"
   - Select the "gh-pages" branch and "/root" folder
   - Click Save

8. **Access your deployed chat widget**
   - Your widget will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed`
   - This is the URL you'll use for embedding in Notion

## Embedding in Notion

1. In Notion:
   - Type `/embed` and select "Embed"
   - Paste your GitHub Pages URL with `/embed` at the end
   - Adjust the dimensions (recommended: width 100%, height 600px)
   - Click "Embed link"

2. For the best experience:
   - Ensure the embed has sufficient height (minimum 500px)
   - For mobile compatibility, place the embed in a full-width column

## Troubleshooting

- **Widget not loading**: Ensure your GitHub Pages is properly published
- **CORS errors**: Check browser console for errors; GitHub Pages should allow embedding
- **Styling issues**: Try adjusting the iframe dimensions in Notion
- **Webhook errors**: Ensure your N8N webhook URL is correctly configured and accessible

For additional help, create an issue on your GitHub repository.
