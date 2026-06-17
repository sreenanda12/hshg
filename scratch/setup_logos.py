import shutil
import os

src_hshg_logo = r"c:\Users\sreenanda\Desktop\hshg\scratch\extracted_New HSHG Logo_p1_1.png"
src_maeda_en = r"c:\Users\sreenanda\Desktop\hshg\HSHG WEBSITE\Brands Logos\Logo Final En-01.png"
src_maeda_ar = r"c:\Users\sreenanda\Desktop\hshg\HSHG WEBSITE\Brands Logos\Logo Final Ar-01.png"

dest_logo = r"c:\Users\sreenanda\Desktop\hshg\public\images\logo.png"
dest_logo_en = r"c:\Users\sreenanda\Desktop\hshg\public\images\logo_final_en_01.png"
dest_logo_ar = r"c:\Users\sreenanda\Desktop\hshg\public\images\logo_final_ar_01.png"

dest_maeda_en = r"c:\Users\sreenanda\Desktop\hshg\public\images\maeda_logo_en.png"
dest_maeda_ar = r"c:\Users\sreenanda\Desktop\hshg\public\images\maeda_logo_ar.png"

def safe_copy(src, dest):
    if not os.path.exists(src):
        print(f"Source file not found: {src}")
        return False
    try:
        shutil.copy2(src, dest)
        print(f"Copied {src} -> {dest}")
        return True
    except Exception as e:
        print(f"Error copying {src} -> {dest}: {e}")
        return False

# Overwrite logo.png, logo_final_en_01.png, logo_final_ar_01.png with official HSHG Logo
safe_copy(src_hshg_logo, dest_logo)
safe_copy(src_hshg_logo, dest_logo_en)
safe_copy(src_hshg_logo, dest_logo_ar)

# Copy Maeda brand logos to dedicated paths
safe_copy(src_maeda_en, dest_maeda_en)
safe_copy(src_maeda_ar, dest_maeda_ar)
