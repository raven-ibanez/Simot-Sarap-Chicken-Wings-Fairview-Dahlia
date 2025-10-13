/*
  # Add SIMOT SARAP Menu Items
  
  This migration adds all menu items for SIMOT SARAP Chicken Wings
  including categories and menu items with the chicken logo.
*/

-- Insert SIMOT SARAP categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('japchae-meal', 'Japchae Meal', '🍜', 1, true),
  ('dream-meal', 'Dream Meal', '✨', 2, true),
  ('family-meal', 'Family Meal', '👨‍👩‍👧‍👦', 3, true),
  ('chicken-meal', 'Chicken Meal', '🍗', 4, true),
  ('party-platters', 'Party Platters', '🎉', 5, true),
  ('ala-carte', 'Ala Carte', '🍽️', 6, true),
  ('side-dish', 'Side Dish', '🥗', 7, true),
  ('salad', 'Salad', '🥙', 8, true),
  ('yang-chow', 'Yang Chow', '🍚', 9, true),
  ('breakfast', 'Breakfast', '🌅', 10, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

-- Update site settings for SIMOT SARAP
UPDATE site_settings SET value = 'SIMOT SARAP' WHERE id = 'site_name';
UPDATE site_settings SET value = '/logo.jpg' WHERE id = 'site_logo';
UPDATE site_settings SET value = 'SIMOT SARAP - Chicken Wings & More' WHERE id = 'site_description';

-- ============================================
-- JAPCHAE MEAL
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Poppers Japchae (J1)', 'Crispy chicken poppers served with our signature Japchae noodles', 169.00, 'japchae-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Fillet Japchae (J2)', 'Tender chicken fillet with our signature Japchae noodles', 164.00, 'japchae-meal', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Wings Japchae (J3)', 'Delicious chicken wings with our signature Japchae noodles', 159.00, 'japchae-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Drumstick Japchae (J4)', 'Juicy drumstick with our signature Japchae noodles', 159.00, 'japchae-meal', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- DREAM MEAL
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Meal A', 'Poppers, Japchae, Chicken Skin, and Rice - The perfect combo!', 209.00, 'dream-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Meal B', 'Chicken Wings, Chicken Skin, Japchae, and Rice - A dream come true!', 209.00, 'dream-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- FAMILY MEAL
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Family Meal F1', '6pc Drumstick Bucket with 3 Rice, 3 Sandwich, and 3 Juice Drinks - Perfect for the whole family!', 849.00, 'family-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Family Meal F2', '6pc Drumstick Bucket with 3 Rice, 3 Japchae, and 3 Juice Drinks - Family feast!', 849.00, 'family-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- CHICKEN MEAL
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Poppers Meal (C1)', 'Crispy chicken poppers with rice and drink', 130.00, 'chicken-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Chix Fillet Meal (C2)', 'Tender chicken fillet with rice and drink', 114.00, 'chicken-meal', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Wings Meal (C3)', 'Delicious chicken wings with rice and drink', 109.00, 'chicken-meal', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Drumstick Meal (C4)', 'Juicy drumstick with rice and drink', 109.00, 'chicken-meal', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Sotanghon (C5)', 'Special sotanghon noodles with chicken', 119.00, 'chicken-meal', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- PARTY PLATTERS
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('18-PC Chicken Wings', 'Perfect for parties! 18 pieces of our signature chicken wings', 699.00, 'party-platters', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Chicken Poppers Platter', 'Large platter of crispy chicken poppers - great for sharing!', 849.00, 'party-platters', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Japchae Platter', 'Generous serving of our signature Japchae noodles', 998.00, 'party-platters', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- ALA CARTE
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Poppers (Small)', 'Crispy chicken poppers - small size', 119.00, 'ala-carte', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Poppers (Large)', 'Crispy chicken poppers - large size', 209.00, 'ala-carte', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('6-PC Wings', '6 pieces of our signature chicken wings', 249.00, 'ala-carte', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('4-PC Fillet', '4 pieces of tender chicken fillet', 199.00, 'ala-carte', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('3-PC Drumstick', '3 pieces of juicy drumstick', 249.00, 'ala-carte', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- SIDE DISH
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Chicken Skin', 'Crispy chicken skin - perfectly seasoned', 69.00, 'side-dish', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Onion Rings', 'Crispy golden onion rings', 87.00, 'side-dish', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Japchae (Small)', 'Our signature Japchae noodles - small serving', 109.00, 'side-dish', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Japchae (Large)', 'Our signature Japchae noodles - large serving', 309.00, 'side-dish', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Chicken Sandwich', 'Delicious chicken sandwich', 99.00, 'side-dish', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- SALAD
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Chicken Caesar Salad', 'Fresh Caesar salad topped with grilled chicken', 149.00, 'salad', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- YANG CHOW
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Yang Chow Plain', 'Classic fried rice - plain', 109.00, 'yang-chow', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true),
  ('Yang Chow with Toppings', 'Fried rice with dumpling, shrimp, and shanghai', 149.00, 'yang-chow', true, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- BREAKFAST
-- ============================================

INSERT INTO menu_items (name, description, base_price, category, popular, image_url, available) VALUES
  ('Glazed Hotdog', 'Delicious glazed hotdog - perfect for breakfast!', 89.00, 'breakfast', false, 'https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg', true);

-- ============================================
-- Add available column if it doesn't exist
-- ============================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'available'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN available boolean DEFAULT true;
  END IF;
END $$;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);
CREATE INDEX IF NOT EXISTS idx_menu_items_available ON menu_items(available);
CREATE INDEX IF NOT EXISTS idx_menu_items_popular ON menu_items(popular);

