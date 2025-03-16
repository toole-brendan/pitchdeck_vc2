#!/bin/bash

# Using the current ETag from the distribution
ETAG="E1RYSL3E63XDT5"
echo "Using ETag: $ETAG"

# Update the CloudFront distribution
echo "Updating CloudFront distribution..."
aws cloudfront update-distribution \
  --id E3T7VX6HV95Q5O \
  --distribution-config file://updated-cloudfront-config.json \
  --if-match $ETAG \
  --profile default

echo "CloudFront update submitted. It may take 15-30 minutes to fully propagate."
echo "You can check the status with: aws cloudfront get-distribution --id E3T7VX6HV95Q5O"

# Create a CloudFront invalidation to refresh the cache after updating
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation \
  --distribution-id E3T7VX6HV95Q5O \
  --paths "/*" \
  --profile default

echo "Done! Your CloudFront distribution is now set up with the correct structure." 