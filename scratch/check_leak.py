from PIL import Image
import numpy as np

img_path = r"c:\Users\sreenanda\Desktop\hshg\public\images\pages\about_composite.png"
with Image.open(img_path) as img:
    arr = np.array(img)
    h, w, c = arr.shape
    print(f"Image dimensions: {w}x{h}, Channels: {c}")
    
    # Let's check some specific known areas of content
    # For example, the blue badge in the bottom left
    # Let's check the bottom-left area, say y around 600-750, x around 150-500
    # Let's see if the alpha channel is 0 (transparent) or 255 (opaque) in these regions.
    
    # Let's count how many pixels are transparent in different sectors of the image:
    # Divide image into 3x3 grid and print transparency percentage in each cell
    grid_h = h // 3
    grid_w = w // 3
    for row in range(3):
        for col in range(3):
            sub_arr = arr[row*grid_h:(row+1)*grid_h, col*grid_w:(col+1)*grid_w, 3]
            total = sub_arr.size
            transparent = np.sum(sub_arr == 0)
            opaque = np.sum(sub_arr == 255)
            trans_pct = (transparent / total) * 100
            print(f"Grid sector ({row},{col}): {trans_pct:.2f}% transparent, {opaque} opaque pixels")
            
    # Let's check if the center of the image (which has the truck and logo) is mostly opaque
    center_area = arr[h//4:3*h//4, w//4:3*w//4, 3]
    center_trans_pct = (np.sum(center_area == 0) / center_area.size) * 100
    print(f"Center area transparency: {center_trans_pct:.2f}%")
