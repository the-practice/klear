const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToAvif() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'step-1b-source.jpg');
    const outputPath = path.join(__dirname, '..', 'public', 'step-1b.avif');
    
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Source image not found at:', inputPath);
      console.error('Please save the image as public/step-1b-source.jpg first.');
      process.exit(1);
    }
    
    console.log('🔄 Converting image...');
    await sharp(inputPath)
      .avif({ quality: 80, effort: 6 })
      .toFile(outputPath);
    
    console.log('✅ Image converted successfully!');
    console.log('   Output:', outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('❌ Error converting image:', error);
    process.exit(1);
  }
}

convertToAvif();
