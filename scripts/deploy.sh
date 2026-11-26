#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch as the shahiqimam GitHub account.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
TOKEN="$(gh auth token --user shahiqimam)"
cd dist
git init -q -b gh-pages
git add -A
git -c user.name="Shahiq Imam" -c user.email="shahiqimam@gmail.com" commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -c credential.helper= -c "credential.helper=!f(){ echo username=shahiqimam; echo password=$TOKEN; }; f" \
  push -f https://github.com/shahiqimam/shahiqimam.github.io.git gh-pages
rm -rf .git
echo "Deployed → https://shahiqimam.github.io"
