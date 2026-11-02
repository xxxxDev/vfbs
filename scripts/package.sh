#!/bin/sh
# Packs the extension/ folder into a zip for a release or the Chrome Web Store.
set -e
version=$(sed -nE 's/.*"version": "([^"]+)".*/\1/p' extension/manifest.json)
mkdir -p dist
rm -f "dist/vfbs-$version.zip"
(cd extension && zip -qr "../dist/vfbs-$version.zip" . -x '.DS_Store' -x '*/.DS_Store')
zip -q "dist/vfbs-$version.zip" LICENSE BRAND.md
echo "dist/vfbs-$version.zip"
