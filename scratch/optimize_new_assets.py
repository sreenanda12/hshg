from PIL import Image
import os

def optimize_image(src_path, dest_path, max_width=1920, quality=85):
    try:
        print(f"Optimizing {src_path} -> {dest_path}...")
        img = Image.open(src_path)
        
        # Convert RGBA to RGB if saving as JPG
        if dest_path.endswith('.jpg') and img.mode in ('RGBA', 'LA'):
            img = img.convert('RGB')
            
        # Resize if width exceeds max_width
        width, height = img.size
        if width > max_width:
            new_height = int(height * (max_width / width))
            print(f"Resizing from {width}x{height} to {max_width}x{new_height}")
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
        # Save based on file format
        if dest_path.endswith('.png'):
            # Save as optimized PNG
            img.save(dest_path, 'PNG', optimize=True)
        else:
            # Save as optimized JPG
            img.save(dest_path, 'JPEG', quality=quality, optimize=True)
            
        print(f"Done! New size: {os.path.getsize(dest_path)} bytes")
    except Exception as e:
        print(f"Error: {e}")

# 1. Convert and optimize Contact Us
optimize_image('public/images/pages/contact_us.jpg', 'public/images/pages/contact_us.png', max_width=1200)

# 2. Optimize Logistics & Supply Chain
optimize_image('Logistics & Supply Chain.png', 'public/images/pages/logistics_&_supply_chain.png', max_width=1920)
