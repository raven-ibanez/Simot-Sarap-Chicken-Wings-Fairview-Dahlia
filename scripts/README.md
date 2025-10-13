# Upload Hero Image Script

This script allows you to upload a hero image to your Supabase Storage for use in the hero section of your website.

## Prerequisites

1. Make sure you have a `.env.local` file in your project root with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Ensure you have the `@supabase/supabase-js` package installed (already included in package.json)

## Usage

### Method 1: Using the Upload Script

1. Save your hero image (e.g., `hero-food-image.jpg`) to the `public` folder
2. Run the upload script:
   ```bash
   node scripts/upload-hero-image.js public/hero-food-image.jpg
   ```

3. The script will:
   - Upload the image to Supabase Storage
   - Display the public URL
   - The Hero component is already configured to use this URL

### Method 2: Using the Admin Dashboard

1. Navigate to your admin dashboard (usually at `/admin`)
2. Go to the menu items section
3. Use the image upload feature to upload your image
4. Copy the image URL
5. Update the Hero component with the new URL

## Image Requirements

- **Format**: JPEG, PNG, WebP, or GIF
- **Size**: Maximum 5MB
- **Recommended dimensions**: 1920x1080px or similar wide format for hero backgrounds

## Troubleshooting

### Error: "File not found"
- Make sure the path to your image is correct
- Use relative paths from the project root

### Error: "Missing Supabase environment variables"
- Check that your `.env.local` file exists and contains the correct credentials
- Make sure there are no extra spaces or quotes around the values

### Error: "Upload failed"
- Check your Supabase Storage bucket permissions
- Ensure the 'menu-images' bucket exists and is publicly accessible
- Verify your Supabase credentials are correct

## Notes

- The uploaded image will be named `hero-food-image.jpg` in your Supabase Storage
- If an image with this name already exists, it will be overwritten
- The Hero component is already configured to use the uploaded image URL

