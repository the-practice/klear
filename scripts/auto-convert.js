#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const tempFiles = ['step-1b-source.jpg', 'step-1b-source.jpeg', 'step-1b-source.png'];
const outputPath = path.join(publicDir, 'step-1b.avif');

async function convertImage(sourcePath) {
  console.log(`\n🔄 Converting ${path.basename(sourcePath)} to AVIF...`);
  
  try {
    await sharp(sourcePath)
      .avif({ 
        quality: 80,
        effort: 6,
        chromaSubsampling: '4:4:4'
      })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log('✅ Conversion successful!');
    console.log(`   Output: ${outputPath}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
    
    // Optionally delete source
    console.log(`\n💡 You can now delete: ${sourcePath}`);
    
    return true;
  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Looking for source image in public folder...\n');
  console.log('   Supported names:');
  tempFiles.forEach(name => console.log(`     - ${name}`));
  
  // Check for existing source files
  for (const filename of tempFiles) {
    const sourcePath = path.join(publicDir, filename);
    if (fs.existsSync(sourcePath)) {
      console.log(`\n✓ Found: ${filename}`);
      const success = await convertImage(sourcePath);
      if (success) {
        process.exit(0);
      } else {
        process.exit(1);
      }
    }
  }
  
  console.log('\n❌ No source image found!');
  console.log('\n📋 To use this script:');
  console.log('   1. Save your image to public/ with one of these names:');
  tempFiles.forEach(name => console.log(`      - ${name}`));
  console.log('   2. Run this script again: node scripts/auto-convert.js');
  console.log('\n💡 Tip: You can drag & drop the image into the public folder');
  
  process.exit(1);
}

main();
