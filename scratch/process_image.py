import cv2
import numpy as np
import os
from PIL import Image, ImageEnhance, ImageFilter

def process_and_enhance_morph():
    src_path = r"C:\Users\sreenanda\.gemini\antigravity-ide\brain\3849314a-0d60-4e84-bf2a-f0daf828e263\media__1785764133949.jpg"
    dest_path = r"c:\Users\sreenanda\Desktop\hshg\public\images\pages\about_composite.png"
    
    if not os.path.exists(src_path):
        print(f"Source image not found: {src_path}")
        return
        
    print(f"Loading source image: {src_path}...")
    # Load using OpenCV
    cv_img = cv2.imread(src_path)
    h, w, c = cv_img.shape
    
    # 1. Generate Content Mask using Thresholding
    gray = cv2.cvtColor(cv_img, cv2.COLOR_BGR2GRAY)
    # Background is around 252-255, so threshold at 251 to capture all content
    _, binary = cv2.threshold(gray, 251, 255, cv2.THRESH_BINARY_INV)
    
    # 2. Close gaps inside the content (e.g. white truck/van/building) using morphological closing
    kernel_size = 80
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (kernel_size, kernel_size))
    closed_mask = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)
    
    # 3. Soften/feather the mask edges using a slight Gaussian blur
    # This prevents aliasing and creates smooth transitions.
    feathered_mask = cv2.GaussianBlur(closed_mask, (5, 5), 0)
    
    # Convert OpenCV image to PIL Image (BGR to RGB) for high-quality enhancements
    rgb_img = cv2.cvtColor(cv_img, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(rgb_img)
    
    # 4. Enhance Image Quality
    print("Enhancing contrast (1.04x)...")
    contrast_enhancer = ImageEnhance.Contrast(pil_img)
    pil_img = contrast_enhancer.enhance(1.04)
    
    print("Enhancing brightness (1.02x)...")
    brightness_enhancer = ImageEnhance.Brightness(pil_img)
    pil_img = brightness_enhancer.enhance(1.02)
    
    print("Enhancing sharpness/clarity (UnsharpMask)...")
    # Unsharp mask parameters: radius=1.5, percent=140, threshold=2
    pil_img = pil_img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=140, threshold=2))
    
    # Convert back to numpy to assemble the RGBA channels
    img_data = np.array(pil_img)
    
    # Assemble RGBA
    rgba_data = np.zeros((h, w, 4), dtype=np.uint8)
    rgba_data[:, :, :3] = img_data
    rgba_data[:, :, 3] = feathered_mask
    
    # Save the processed image as a transparent PNG
    final_img = Image.fromarray(rgba_data)
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    final_img.save(dest_path, "PNG", optimize=True)
    print(f"Successfully processed image and saved to {dest_path}!")
    print(f"Final file size: {os.path.getsize(dest_path)} bytes")

if __name__ == '__main__':
    process_and_enhance_morph()
