# Step 1b Image Setup

## Quick Start

1. **Save the image**: Download/save the attached image to this location:
   ```
   public/step-1b-source.jpg
   ```

2. **Convert to AVIF**: Run the conversion script:
   ```bash
   node scripts/setup-step-1b-image.js
   ```

3. **Done!** The image will be converted to `public/step-1b.avif` and the code has been updated to use it.

## What Changed

- The ImagePlaceholder for step "1b" has been replaced with a real Next.js Image component
- The image is optimized in AVIF format for better performance
- Alt text has been added for accessibility

## Cleanup (Optional)

After conversion, you can delete the source file:
```bash
rm public/step-1b-source.jpg
```
