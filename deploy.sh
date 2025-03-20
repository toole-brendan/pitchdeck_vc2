#!/bin/bash

# Build the project
echo "🏗️ Building project..."
npm run build

# Upload to S3 with correct cache settings
echo "📤 Uploading to S3..."

# Create a directory to restructure files if needed
mkdir -p dist_deploy

# Copy the content of the public folder directly to the deploy folder 
cp -r dist/public/* dist_deploy/

# Ensure asset paths are correct for production
# Uncomment these lines if you need to fix paths in index.html
# echo "🔄 Fixing asset paths..."
# sed -i '' 's|src="/assets/|src="/pitch/assets/|g' dist_deploy/index.html
# sed -i '' 's|href="/assets/|href="/pitch/assets/|g' dist_deploy/index.html

# Upload JS files with long cache duration and correct content type
echo "📤 Uploading JavaScript files..."
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript"

# Upload CSS files with long cache duration and proper content type
echo "📤 Uploading CSS files..."
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*" \
  --include "*.css" \
  --content-type "text/css"

# Upload other static assets with long cache duration
echo "📤 Uploading static assets..."
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*.html" \
  --exclude "*.js" \
  --exclude "*.css"

# Upload HTML files with no-cache
echo "📤 Uploading HTML files..."
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "no-cache" \
  --exclude "*" \
  --include "*.html" \
  --content-type "text/html"

# Upload server file to root
echo "📤 Uploading server file..."
aws s3 cp dist/index.js s3://www.handreceipt.com/pitch/index.js \
  --cache-control "max-age=31536000,public" \
  --content-type "application/javascript"

# Clean up temporary directory
rm -rf dist_deploy

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E3T7VX6HV95Q5O \
  --paths "/pitch/*"

echo "✅ Deployment complete!"

echo "🔍 You can verify the deployment at https://handreceipt.com/pitch/"
echo "⏱️ CloudFront invalidation may take 5-15 minutes to fully propagate." 