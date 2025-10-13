// Simple script to upload hero image to Supabase Storage
// Usage: node scripts/upload-hero-image.js <path-to-image>

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read environment variables from .env.local file
function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('Error: .env.local file not found');
    console.error('Please create a .env.local file with your Supabase credentials');
    process.exit(1);
  }
  
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
  
  return envVars;
}

const envVars = loadEnvFile();
const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing Supabase environment variables');
  console.error('Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadHeroImage(imagePath) {
  try {
    console.log('📤 Starting image upload...');
    
    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      console.error(`Error: File not found: ${imagePath}`);
      process.exit(1);
    }

    // Read the file
    const fileBuffer = fs.readFileSync(imagePath);
    const fileName = 'hero-food-image.jpg';
    
    console.log(`📁 Uploading: ${imagePath}`);
    console.log(`📝 File name: ${fileName}`);
    console.log(`📊 File size: ${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB`);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('menu-images')
      .upload(fileName, fileBuffer, {
        cacheControl: '3600',
        upsert: true, // Overwrite if exists
        contentType: 'image/jpeg'
      });

    if (error) {
      console.error('❌ Upload failed:', error.message);
      process.exit(1);
    }

    console.log('✅ Upload successful!');

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('menu-images')
      .getPublicUrl(data.path);

    console.log('\n🎉 Hero image uploaded successfully!');
    console.log(`📸 Public URL: ${publicUrl}\n`);
    console.log('💡 Update your Hero.tsx component to use this URL:');
    console.log(`   backgroundImage: 'url(${publicUrl})'`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Get image path from command line arguments
const imagePath = process.argv[2];

if (!imagePath) {
  console.log('Usage: node scripts/upload-hero-image.js <path-to-image>');
  console.log('\nExample:');
  console.log('  node scripts/upload-hero-image.js ./public/hero-food-image.jpg');
  process.exit(1);
}

uploadHeroImage(imagePath);

