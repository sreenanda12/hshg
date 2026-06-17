import os
import shutil
from PIL import Image, ImageEnhance

IMAGES = [
    ("c:\\Users\\sreenanda\\Desktop\\hshg\\scratch\\images_backup\\images\\koda.png", "c:\\Users\\sreenanda\\Desktop\\hshg\\public\\images\\koda.png"),
    ("c:\\Users\\sreenanda\\Desktop\\hshg\\scratch\\images_backup\\images\\sgf150_smart_vestiyer_kokusu_(2).png", "c:\\Users\\sreenanda\\Desktop\\hshg\\public\\images\\sgf150_smart_vestiyer_kokusu_(2).png"),
    ("c:\\Users\\sreenanda\\Desktop\\hshg\\scratch\\images_backup\\images\\titania.png", "c:\\Users\\sreenanda\\Desktop\\hshg\\public\\images\\titania.png")
]

# Factors
SHARPNESS_FACTOR = 1.35
CONTRAST_FACTOR = 1.08
SATURATION_FACTOR = 1.08
BRIGHTNESS_FACTOR = 1.03

def patch():
    for backup_path, target_path in IMAGES:
        if not os.path.exists(backup_path):
            print(f"Backup file not found: {backup_path}")
            continue

        print(f"Patching: {os.path.basename(target_path)}...")
        
        try:
            # 1. Restore the original un-enhanced image first
            shutil.copy2(backup_path, target_path)
            
            # 2. Open it and enhance it
            with Image.open(target_path) as img:
                # Convert P mode to RGBA
                if img.mode in ('P', '1'):
                    img = img.convert('RGBA')
                
                # Apply enhancements
                enhancer = ImageEnhance.Contrast(img)
                img = enhancer.enhance(CONTRAST_FACTOR)
                
                enhancer = ImageEnhance.Color(img)
                img = enhancer.enhance(SATURATION_FACTOR)
                
                enhancer = ImageEnhance.Brightness(img)
                img = enhancer.enhance(BRIGHTNESS_FACTOR)
                
                enhancer = ImageEnhance.Sharpness(img)
                img = enhancer.enhance(SHARPNESS_FACTOR)
                
                # Save optimized PNG
                img.save(target_path, 'PNG', optimize=True)
                
            print(f"  Successfully patched in-place.")
        except Exception as e:
            print(f"  Failed to patch {os.path.basename(target_path)}: {e}")

if __name__ == "__main__":
    patch()
