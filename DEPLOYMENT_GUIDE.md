
# Deployment Guide: Embed Your Chat Widget in Notion

This guide provides step-by-step instructions on how to deploy your chat widget to GitHub Pages and embed it in Notion.

## GitHub Pages Deployment (Recommended)

### Setting Up GitHub Repository

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup and follow the instructions

2. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name your repository (e.g., "notion-chat-widget")
   - Make it public
   - Click "Create repository"

3. **Push your code to GitHub** (from your local computer)
   ```bash
   # In your project directory, initialize git if not already done
   git init
   
   # Add all your files to git
   git add .
   
   # Commit your changes
   git commit -m "Initial commit"
   
   # Set the main branch
   git branch -M main
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   
   # Push your code to GitHub
   git push -u origin main
   ```
   Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.

### Deploying to GitHub Pages

4. **Install the gh-pages package** (already included in this project)
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Deploy your site**
   ```bash
   # Run the deploy script
   bash deploy.sh
   ```
   or
   ```bash
   npm run deploy
   # (if you've added the deploy script to package.json)
   ```

6. **Configure GitHub Pages**
   - On GitHub, go to your repository
   - Click Settings > Pages
   - Under "Build and deployment", ensure the source is set to "Deploy from a branch"
   - Select the "gh-pages" branch and "/root" folder
   - Click Save

7. **Access your deployed chat widget**
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
