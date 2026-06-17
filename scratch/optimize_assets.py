import os
import shutil
from PIL import Image

def normalize_filename(name):
    # Convert spaces and dashes to underscores, convert to lowercase
    normalized = name.strip().lower()
    normalized = normalized.replace(" ", "_").replace("-", "_")
    # Clean double underscores
    while "__" in normalized:
        normalized = normalized.replace("__", "_")
    return normalized

def process_directory(src_dir, dest_dir):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        print(f"Created directory: {dest_dir}")
        
    print(f"\nProcessing directory: {src_dir} -> {dest_dir}")
    mapping = {}
    
    for filename in os.listdir(src_dir):
        src_path = os.path.join(src_dir, filename)
        if not os.path.isfile(src_path) or filename.startswith('.'):
            continue
            
        ext = os.path.splitext(filename)[1].lower()
        if ext not in ['.png', '.jpg', '.jpeg']:
            # Non-image files or PDFs, copy directly without optimization
            normalized_name = normalize_filename(filename)
            dest_path = os.path.join(dest_dir, normalized_name)
            shutil.copy2(src_path, dest_path)
            mapping[filename] = normalized_name
            print(f"Copied non-image: {filename} -> {normalized_name}")
            continue
            
        normalized_name = normalize_filename(filename)
        dest_path = os.path.join(dest_dir, normalized_name)
        
        try:
            with Image.open(src_path) as img:
                # Convert RGBA to RGB if saving as JPEG
                if ext in ['.jpg', '.jpeg'] and img.mode in ('RGBA', 'LA'):
                    img = img.convert('RGB')
                
                # Save optimized
                if ext in ['.jpg', '.jpeg']:
                    img.save(dest_path, optimize=True, quality=85)
                else: # PNG
                    # Keep RGBA mode for transparency, save optimized
                    img.save(dest_path, optimize=True)
                    
            mapping[filename] = normalized_name
            orig_size = os.path.getsize(src_path)
            opt_size = os.path.getsize(dest_path)
            saving = (orig_size - opt_size) / 1024
            print(f"Optimized: {filename} -> {normalized_name} (Saved {saving:.2f} KB)")
        except Exception as e:
            print(f"Failed to optimize {filename}, copying instead. Error: {e}")
            shutil.copy2(src_path, dest_path)
            mapping[filename] = normalized_name
            
    return mapping

if __name__ == '__main__':
    base_src = r"c:\Users\sreenanda\Desktop\hshg\HSHG WEBSITE"
    base_dest = r"c:\Users\sreenanda\Desktop\hshg\public\images"
    
    # 1. Process Brands Logos
    brands_map = process_directory(
        os.path.join(base_src, "Brands Logos"),
        base_dest
    )
    
    # 2. Process Pages
    pages_map = process_directory(
        os.path.join(base_src, "Pages"),
        os.path.join(base_dest, "pages")
    )
    
    # 3. Process Products
    products_map = process_directory(
        os.path.join(base_src, "Products"),
        os.path.join(base_dest, "products")
    )
    
    # Write mappings to a log file for reference
    with open(r"c:\Users\sreenanda\Desktop\hshg\scratch\asset_mapping_log.txt", "w", encoding="utf-8") as f:
        f.write("=== BRANDS LOGOS MAPPING ===\n")
        for k, v in sorted(brands_map.items()):
            f.write(f"'{k}': '/images/{v}',\n")
            
        f.write("\n=== PAGES IMAGES MAPPING ===\n")
        for k, v in sorted(pages_map.items()):
            f.write(f"'{k}': '/images/pages/{v}',\n")
            
        f.write("\n=== PRODUCTS IMAGES MAPPING ===\n")
        for k, v in sorted(products_map.items()):
            f.write(f"'{k}': '/images/products/{v}',\n")
            
    print("\nMapping log written to scratch/asset_mapping_log.txt")
