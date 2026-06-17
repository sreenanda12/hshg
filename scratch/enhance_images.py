import os
import shutil
from PIL import Image, ImageEnhance

# Configuration
IMAGE_DIRS = [
    r"c:\Users\sreenanda\Desktop\hshg\public\images\pages",
    r"c:\Users\sreenanda\Desktop\hshg\public\images\products",
    r"c:\Users\sreenanda\Desktop\hshg\public\images"  # Root images directory for direct page/warehouse assets
]

BACKUP_DIR = r"c:\Users\sreenanda\Desktop\hshg\scratch\images_backup"

# Factors
SHARPNESS_FACTOR = 1.35   # > 1.0 increases sharpness
CONTRAST_FACTOR = 1.08    # > 1.0 increases contrast
SATURATION_FACTOR = 1.08  # > 1.0 increases color saturation
BRIGHTNESS_FACTOR = 1.03  # > 1.0 increases brightness slightly

def backup_and_enhance():
    # Ensure backup directory exists
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
        print(f"Created backup directory: {BACKUP_DIR}")

    for img_dir in IMAGE_DIRS:
        if not os.path.exists(img_dir):
            print(f"Directory does not exist: {img_dir}")
            continue

        print(f"\nProcessing directory: {img_dir}")
        for filename in os.listdir(img_dir):
            filepath = os.path.join(img_dir, filename)
            
            # Skip directories or subfolders
            if not os.path.isfile(filepath):
                continue
                
            # Filter image extensions
            ext = os.path.splitext(filename)[1].lower()
            if ext not in ['.png', '.jpg', '.jpeg']:
                continue
                
            # Skip specific non-page/product images (like tiny vector logos or index logos if needed, but let's enhance all page assets)
            if filename.startswith('.') or 'logo' in filename.lower() or filename == 'favicon.svg':
                # Skip logos to prevent modification of branding compliance
                print(f"Skipping branding asset: {filename}")
                continue

            print(f"Enhancing image: {filename}...")
            
            # 1. Create backup path preserving original folder name structure
            dir_name = os.path.basename(img_dir)
            target_backup_dir = os.path.join(BACKUP_DIR, dir_name)
            if not os.path.exists(target_backup_dir):
                os.makedirs(target_backup_dir)
                
            backup_path = os.path.join(target_backup_dir, filename)
            
            # Only backup if not already backed up
            if not os.path.exists(backup_path):
                shutil.copy2(filepath, backup_path)
                print(f"  Backed up to: {backup_path}")
            
            # 2. Process and enhance image in-place
            try:
                with Image.open(filepath) as img:
                    # Keep track of initial mode
                    mode = img.mode
                    
                    # Apply enhancements sequentially
                    # A. Contrast
                    enhancer = ImageEnhance.Contrast(img)
                    img = enhancer.enhance(CONTRAST_FACTOR)
                    
                    # B. Color (Saturation)
                    enhancer = ImageEnhance.Color(img)
                    img = enhancer.enhance(SATURATION_FACTOR)
                    
                    # C. Brightness
                    enhancer = ImageEnhance.Brightness(img)
                    img = enhancer.enhance(BRIGHTNESS_FACTOR)
                    
                    # D. Sharpness
                    enhancer = ImageEnhance.Sharpness(img)
                    img = enhancer.enhance(SHARPNESS_FACTOR)
                    
                    # Save back with optimization
                    if ext in ['.jpg', '.jpeg']:
                        if mode in ('RGBA', 'LA'):
                            img = img.convert('RGB')
                        img.save(filepath, 'JPEG', quality=90, optimize=True)
                    else:
                        img.save(filepath, 'PNG', optimize=True)
                        
                print(f"  Enhanced and saved in-place.")
            except Exception as e:
                print(f"  Failed to process {filename}: {e}")

if __name__ == "__main__":
    backup_and_enhance()
    print("\nEnhancement complete!")
