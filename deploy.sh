
#!/bin/bash

# Simple deployment script for GitHub Pages

echo "Building project..."
npm run build

echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete! Your site should be live soon."
echo "For embedding in Notion, use: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed.html"
echo "(Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual GitHub details)"
