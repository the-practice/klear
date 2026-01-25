const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Base64 encoded image data
const imageData = 'iVBORw0KGgoAAAANSUhEUgAAAbAAAADYCAYAAACXio3cAAAgAElEQVR4Xu2dC7wdRXnA/zP7OPe+k5tz7807IXkQQgIBEwgvQVCQl1J8VCwVK7VasVq11FZrrbWttbW1Ptp...'; // This will be replaced

async function convertToAvif() {
  try {
    const inputPath = path.join(__dirname, 'public', 'step-1b-temp.jpg');
    const outputPath = path.join(__dirname, 'public', 'step-1b.avif');
    
    await sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(outputPath);
    
    console.log('Image converted successfully to:', outputPath);
    
    // Clean up temp file
    fs.unlinkSync(inputPath);
    
  } catch (error) {
    console.error('Error converting image:', error);
    process.exit(1);
  }
}

convertToAvif();
