# HandReceipt Pitch Deck Deployment Guide

This guide provides detailed instructions for deploying the HandReceipt Pitch Deck application to AWS S3 and CloudFront.

## Deployment Architecture

The HandReceipt Pitch Deck is deployed with the following structure:

- **S3 Bucket**: `www.handreceipt.com`
- **Path**: `/pitch/`
- **CloudFront Distribution ID**: `E3T7VX6HV95Q5O`

## Prerequisites

- AWS CLI configured with appropriate permissions
- Node.js and npm installed
- Access to the S3 bucket and CloudFront distribution

## Deployment Steps

### 1. Build the Application

```bash
# Install dependencies if needed
npm install

# Build the project
npm run build
```

This creates the following structure:
- `dist/public/` - Contains the client-side application
- `dist/index.js` - Server-side application file

### 2. Prepare Files for Deployment

```bash
# Create a directory for deployment files
mkdir -p dist_deploy

# Copy the built files to the deployment directory
cp -r dist/public/* dist_deploy/
```

### 3. Fix Asset Paths (CRITICAL)

This step is absolutely critical for the application to work properly. The asset paths in the HTML files must be updated to use the `/pitch/` prefix:

```bash
# Fix asset paths in index.html
sed -i '' 's|src="/assets/|src="/pitch/assets/|g' dist_deploy/index.html
sed -i '' 's|href="/assets/|href="/pitch/assets/|g' dist_deploy/index.html

# Verify the fix was applied
grep -E "link|script" dist_deploy/index.html
# Should show paths like "/pitch/assets/index-XXXXX.js" and "/pitch/assets/index-XXXXX.css"
```

Without this step, the application will fail with 404 errors because the browser will look for assets in the wrong location.

### 4. Deploy to S3

The deployment uses different commands for different file types to ensure correct content types and cache settings:

#### a. Deploy JavaScript Files

```bash
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript"
```

#### b. Deploy CSS Files

```bash
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*" \
  --include "*.css" \
  --content-type "text/css"
```

#### c. Deploy HTML Files

```bash
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "no-cache" \
  --exclude "*" \
  --include "*.html" \
  --content-type "text/html"
```

#### d. Deploy Other Static Assets

```bash
aws s3 sync dist_deploy/ s3://www.handreceipt.com/pitch/ \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "*.html" \
  --exclude "*.js" \
  --exclude "*.css"
```

#### e. Deploy Server-Side JavaScript

```bash
aws s3 cp dist/index.js s3://www.handreceipt.com/pitch/index.js \
  --cache-control "max-age=31536000,public" \
  --content-type "application/javascript"
```

### 5. Invalidate CloudFront Cache

For thorough invalidation, specify multiple paths:

```bash
aws cloudfront create-invalidation \
  --distribution-id E3T7VX6HV95Q5O \
  --paths "/pitch/*" "/pitch/index.html" "/pitch/assets/*"
```

### 6. Verify Deployment

```bash
# Check HTTP status
curl -s -o /dev/null -w "%{http_code}\n" https://handreceipt.com/pitch/

# Should return 200 (after CloudFront propagation)
```

## Important Notes

1. **Asset References**: This is the MOST critical aspect of deployment. All assets in the HTML files MUST use the correct path format:
   - In development: `/assets/...`
   - In production: `/pitch/assets/...`
   
   This is handled by the `sed` commands in step 3, but should be verified before every deployment.
   
2. **CloudFront Configuration**: The CloudFront distribution is configured with:
   - Custom error response for 404 errors to return `/index.html`
   - Cache behavior for `/pitch/*` pointing to the S3 origin

3. **Cache Settings**:
   - HTML files: `no-cache` to ensure the latest content is always served
   - JS/CSS/Assets: `max-age=31536000,public` (1 year) for better performance

## Using the Deploy Script

A deployment script (`deploy.sh`) automates these steps, including the critical asset path fixing. To use it:

```bash
./deploy.sh
```

If you need to modify permissions:

```bash
chmod +x deploy.sh
```

The script includes validation steps to verify that:
1. Asset paths have been correctly updated
2. The deployment is accessible after completion

## Troubleshooting

### 404 Errors

If you're getting 404 errors after deployment:

1. **Check asset paths in the HTML files** - This is the most common issue:
   ```bash
   aws s3 cp s3://www.handreceipt.com/pitch/index.html -
   ```
   Look for asset references like:
   ```html
   <script src="/pitch/assets/index-XXX.js"></script>
   <link href="/pitch/assets/index-XXX.css">
   ```
   If they use `/assets/` instead of `/pitch/assets/`, fix them as described above.

2. **Verify CloudFront invalidation completed** - Invalidations take time to propagate:
   ```bash
   aws cloudfront get-invalidation --distribution-id E3T7VX6HV95Q5O --id [INVALIDATION_ID]
   ```

3. **Check CloudFront Error Response Settings** - Ensure it's configured correctly:
   ```bash
   aws cloudfront get-distribution --id E3T7VX6HV95Q5O | grep -A 20 "CustomErrorResponses"
   ```

### Content Type Issues

If assets aren't loading correctly:

```bash
# Check content type of a file
aws s3api head-object --bucket www.handreceipt.com --key pitch/assets/file.js

# Fix content type if needed
aws s3 cp s3://www.handreceipt.com/pitch/assets/file.js s3://www.handreceipt.com/pitch/assets/file.js \
  --content-type "application/javascript" \
  --metadata-directive REPLACE
```

### CloudFront Caching

CloudFront invalidations may take 5-15 minutes to propagate fully. If changes aren't visible after invalidation:

1. Check if objects have updated in S3
2. Wait for CloudFront propagation to complete
3. Try a hard refresh in your browser (Ctrl+F5 or Cmd+Shift+R)

### Asset Path Issues

If your assets fail to load due to path issues:

```bash
# Fix asset paths if needed
sed -i '' 's|src="/assets/|src="/pitch/assets/|g' index.html
sed -i '' 's|href="/assets/|href="/pitch/assets/|g' index.html
aws s3 cp index.html s3://www.handreceipt.com/pitch/index.html --content-type "text/html" --cache-control "no-cache"
```

## Common Mistakes to Avoid

1. **Incorrect Asset Paths**: ALWAYS ensure asset paths use the `/pitch/assets/` prefix in production
2. **Missing Content Types**: Set proper content types for all files
3. **Not Invalidating Cache**: Always invalidate CloudFront cache after deploying
4. **Insufficient Invalidation**: Specify multiple paths in invalidation to ensure complete cache clearing

## Deployment Structure Verification

After deployment, verify the correct structure:

```bash
# List files in the pitch directory
aws s3 ls s3://www.handreceipt.com/pitch/

# Should show:
# - index.html (the main app HTML)
# - index.js (server-side code)
# - assets/ (directory with JS, CSS, images)

# Check that the HTML file has the correct asset paths
aws s3 cp s3://www.handreceipt.com/pitch/index.html - | grep -E 'src="|href="'
```

## Accessing the Deployed Application

After deployment, the application will be available at:
- https://handreceipt.com/pitch/
