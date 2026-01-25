#!/usr/bin/env python3
"""
Image Converter for Step 1b
Converts the source image to AVIF format using pillow-avif-plugin
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
    import pillow_avif  # type: ignore
except ImportError:
    print("❌ Required packages not installed!")
    print("   Run: pip install pillow pillow-avif-plugin")
    sys.exit(1)

def convert_to_avif():
    print("🚀 Converting Step 1b image to AVIF...\n")
    
    # Setup paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    public_dir = project_root / "public"
    source_path = public_dir / "step-1b-source.jpg"
    output_path = public_dir / "step-1b.avif"
    
    # Check if source exists
    if not source_path.exists():
        print("❌ Source image not found!")
        print(f"   Please save the image as: {source_path}")
        print("   Then run this script again.")
        sys.exit(1)
    
    print(f"✓ Source image found: {source_path}")
    print("🔄 Converting to AVIF format...")
    
    try:
        # Open and convert
        with Image.open(source_path) as img:
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save as AVIF
            img.save(output_path, 'AVIF', quality=80, speed=6)
        
        # Get file size
        size_kb = output_path.stat().st_size / 1024
        
        print("✅ Image converted successfully!")
        print(f"   Output: {output_path}")
        print(f"   Size: {size_kb:.2f} KB")
        print("\n📝 Next steps:")
        print("   1. The image is ready to use!")
        print("   2. You can delete the source file if you want:")
        print(f"      rm {source_path}")
        
    except Exception as e:
        print(f"❌ Error converting image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    convert_to_avif()
