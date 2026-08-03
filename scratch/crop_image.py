from PIL import Image
import numpy as np
import os

def crop_and_maximize():
    img_path = r"public/images/pages/about_composite.png"
    if not os.path.exists(img_path):
        print("Image does not exist!")
        return
        
    with Image.open(img_path) as img:
        arr = np.array(img)
        alpha = arr[:, :, 3]
        
        non_zero = np.where(alpha > 0)
        if len(non_zero[0]) > 0:
            ymin, ymax = np.min(non_zero[0]), np.max(non_zero[0])
            xmin, xmax = np.min(non_zero[1]), np.max(non_zero[1])
            
            # Let's add a small padding of 5 pixels (clamped to image boundaries) to prevent edge cutoffs
            h, w = alpha.shape
            padding = 5
            ymin = max(0, ymin - padding)
            ymax = min(h - 1, ymax + padding)
            xmin = max(0, xmin - padding)
            xmax = min(w - 1, xmax + padding)
            
            print(f"Original size: {w}x{h}")
            print(f"Cropped box: [{xmin}:{xmax}, {ymin}:{ymax}]")
            
            cropped_arr = arr[ymin:ymax+1, xmin:xmax+1]
            cropped_img = Image.fromarray(cropped_arr)
            cropped_img.save(img_path, "PNG", optimize=True)
            
            new_w, new_h = cropped_img.size
            print(f"Successfully cropped! New size: {new_w}x{new_h}")
            print(f"New file size: {os.path.getsize(img_path)} bytes")
        else:
            print("Image is fully transparent, nothing to crop.")

if __name__ == '__main__':
    crop_and_maximize()
