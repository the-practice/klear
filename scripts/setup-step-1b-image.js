#!/usr/bin/env node

/**
 * Image Setup Script for Step 1b
 * 
 * This script will:
 * 1. Check if the source image exists
 * 2. Convert it to AVIF format
 * 3. Update the code to use the new image
 * 
 * Usage:
 *   1. Save the attached image as public/step-1b-source.jpg
 *   2. Run: node scripts/setup-step-1b-image.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function setupImage() {
  console.log('🚀 Setting up Step 1b image...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const sourcePath = path.join(publicDir, 'step-1b-source.jpg');
  const outputPath = path.join(publicDir, 'step-1b.avif');
  
  // Check if source image exists
  if (!fs.existsSync(sourcePath)) {
    console.error('❌ Source image not found!');
    console.error('   Please save the image you want to use as:');
    console.error(`   ${sourcePath}`);
    console.error('\n   Then run this script again.');
    process.exit(1);
  }
  
  try {
    console.log('✓ Source image found');
    console.log('🔄 Converting to AVIF format...');
    
    // Convert to AVIF
    await sharp(sourcePath)
      .avif({ 
        quality: 80,
        effort: 6,
        chromaSubsampling: '4:4:4'
      })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log('✅ Image converted successfully!');
    console.log(`   Output: ${outputPath}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
    
    console.log('\n📝 Next steps:');
    console.log('   1. The AVIF image is ready at: public/step-1b.avif');
    console.log('   2. Update the code to use the real image instead of the placeholder');
    console.log('   3. You can delete the source file: public/step-1b-source.jpg');
    
  } catch (error) {
    console.error('❌ Error converting image:', error.message);
    process.exit(1);
  }
}

setupImage();
