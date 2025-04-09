
#!/bin/bash

# Simple deployment script for GitHub Pages

# Exit on error
set -e

# Build the project
echo "Building project..."
npm run build

# Install gh-pages if not already installed
if ! npm list -g gh-pages > /dev/null 2>&1; then
  echo "Installing gh-pages..."
  npm install --save-dev gh-pages
fi

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete! Your site should be live soon at:"
echo "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
echo "Remember to replace YOUR-USERNAME and YOUR-REPO-NAME with your actual GitHub details."
echo "For embedding in Notion, use: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/embed"
