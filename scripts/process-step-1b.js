#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function process() {
  const sourcePath = path.join(__dirname, '..', 'public', 'step-1b-source.jpg');
  const outputPath = path.join(__dirname, '..', 'public', 'step-1b.avif');
  
  const metadata = await sharp(sourcePath).metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height);
  
  // Crop to square (center crop) and resize to 800x800
  const size = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - size) / 2);
  const top = Math.floor((metadata.height - size) / 2);
  
  await sharp(sourcePath)
    .extract({ left, top, width: size, height: size })
    .resize(800, 800, { fit: 'cover' })
    .avif({ quality: 80, effort: 6, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);
  
  const stats = fs.statSync(outputPath);
  console.log('✅ Cropped to square, resized to 800x800, and converted to AVIF');
  console.log('Final size:', (stats.size / 1024).toFixed(2), 'KB');
}

process().catch(console.error);
