#!/bin/bash

echo "========================================"
echo "🔍 HandReceipt Pitch Deck Deployment Verification"
echo "========================================"

# Check S3 bucket contents
echo -e "\n📦 Checking S3 bucket contents..."
aws s3 ls s3://www.handreceipt.com/pitch/ --summarize

# Check HTML file and asset paths
echo -e "\n📄 Checking index.html content and paths..."
aws s3 cp s3://www.handreceipt.com/pitch/index.html - | grep -E 'src=|href=' | grep -v "data-vite-theme"

# Check CloudFront invalidation status
echo -e "\n☁️ Checking recent CloudFront invalidations..."
aws cloudfront list-invalidations --distribution-id E3T7VX6HV95Q5O --max-items 5

# Verify content types for key files
echo -e "\n🏷️ Verifying content types..."
echo "index.html content type:"
aws s3api head-object --bucket www.handreceipt.com --key pitch/index.html | grep "ContentType"

echo "JavaScript file content type:"
JS_FILE=$(aws s3 ls s3://www.handreceipt.com/pitch/assets/ | grep "\.js" | head -1 | awk '{print $4}')
if [ ! -z "$JS_FILE" ]; then
  aws s3api head-object --bucket www.handreceipt.com --key pitch/assets/$JS_FILE | grep "ContentType"
else
  echo "No JavaScript file found"
fi

echo "CSS file content type:"
CSS_FILE=$(aws s3 ls s3://www.handreceipt.com/pitch/assets/ | grep "\.css" | head -1 | awk '{print $4}')
if [ ! -z "$CSS_FILE" ]; then
  aws s3api head-object --bucket www.handreceipt.com --key pitch/assets/$CSS_FILE | grep "ContentType"
else
  echo "No CSS file found"
fi

echo -e "\n✅ Verification complete!"
echo "The pitch deck should be accessible at: https://handreceipt.com/pitch/"
echo "If it's not working, consult the troubleshooting section in DEPLOYMENT.md"
