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

# Ensure asset paths are correct for production - THIS IS CRITICAL
echo "🔄 Fixing asset paths..."
sed -i '' 's|src="/assets/|src="/pitch/assets/|g' dist_deploy/index.html
sed -i '' 's|href="/assets/|href="/pitch/assets/|g' dist_deploy/index.html

# Verify the asset paths were fixed correctly
echo "🔍 Verifying asset paths..."
if grep -q 'src="/pitch/assets/' dist_deploy/index.html && grep -q 'href="/pitch/assets/' dist_deploy/index.html; then
  echo "✅ Asset paths verified successfully."
else
  echo "❌ Asset paths could not be verified. Deployment aborted."
  exit 1
fi

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
  --paths "/pitch/*" "/pitch/index.html" "/pitch/assets/*"

echo "✅ Deployment complete!"

# Verify deployment was successful
echo "🔍 Verifying deployment..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://handreceipt.com/pitch/)
if [ "$HTTP_STATUS" -eq 200 ]; then
  echo "✅ Deployment verified successfully! Site is accessible at https://handreceipt.com/pitch/"
else
  echo "⚠️ Site returned HTTP status $HTTP_STATUS. This might indicate an issue with the deployment."
  echo "Please check manually at https://handreceipt.com/pitch/ after CloudFront propagation (5-15 minutes)."
fi

echo "⏱️ CloudFront invalidation may take 5-15 minutes to fully propagate." 