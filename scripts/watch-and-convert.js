#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const watchFiles = [
  'step-1b-source.jpg',
  'step-1b-source.jpeg', 
  'step-1b-source.png',
  'step-1b.jpg',
  'step-1b.jpeg',
  'step-1b.png'
];
const outputPath = path.join(publicDir, 'step-1b.avif');

console.log('👀 Watching for image in public folder...');
console.log('   Looking for:');
watchFiles.forEach(f => console.log(`     - ${f}`));
console.log('\n💡 Save the image to public/ folder and it will auto-convert!\n');

let isConverting = false;
let checkCount = 0;

async function tryConvert() {
  if (isConverting) return;
  
  checkCount++;
  if (checkCount % 10 === 0) {
    process.stdout.write('.');
  }
  
  for (const filename of watchFiles) {
    const sourcePath = path.join(publicDir, filename);
    
    if (fs.existsSync(sourcePath)) {
      const stats = fs.statSync(sourcePath);
      
      // Check if it's an actual image file (should be at least 1KB)
      if (stats.size < 1000) {
        continue;
      }
      
      isConverting = true;
      console.log(`\n\n✓ Found: ${filename} (${(stats.size / 1024).toFixed(2)} KB)`);
      console.log('🔄 Converting to AVIF...');
      
      try {
        await sharp(sourcePath)
          .avif({ 
            quality: 80,
            effort: 6,
            chromaSubsampling: '4:4:4'
          })
          .toFile(outputPath);
        
        const outputStats = fs.statSync(outputPath);
        console.log('\n✅ SUCCESS! Image converted!');
        console.log(`   Input:  ${sourcePath}`);
        console.log(`   Output: ${outputPath}`);
        console.log(`   Size:   ${(outputStats.size / 1024).toFixed(2)} KB`);
        console.log('\n🎉 All done! The image is ready to use.');
        console.log(`💡 You can delete the source: ${sourcePath}`);
        
        process.exit(0);
      } catch (error) {
        console.error('\n❌ Conversion failed:', error.message);
        console.log('   Make sure the file is a valid image format (JPG, PNG, etc.)');
        isConverting = false;
      }
    }
  }
}

// Check immediately
tryConvert();

// Then check every second
const interval = setInterval(tryConvert, 1000);

// Timeout after 5 minutes
setTimeout(() => {
  console.log('\n\n⏱️  Timeout after 5 minutes. No image found.');
  console.log('   Run this script again when you\'re ready.');
  clearInterval(interval);
  process.exit(1);
}, 5 * 60 * 1000);

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Stopped watching.');
  clearInterval(interval);
  process.exit(0);
});
