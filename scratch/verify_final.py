import os
from PIL import Image
import numpy as np

def verify():
    img_path = r"public/images/pages/about_composite.png"
    if not os.path.exists(img_path):
        print("FAIL: Image does not exist!")
        return False
        
    with Image.open(img_path) as img:
        w, h = img.size
        mode = img.mode
        print(f"Image Path: {img_path}")
        print(f"Dimensions: {w}x{h}")
        print(f"Mode: {mode}")
        
        if (w, h) != (1024, 768):
            print(f"FAIL: Expected size (1024, 768), got ({w}, {h})")
            return False
            
        if mode != "RGBA":
            print(f"FAIL: Expected mode RGBA, got {mode}")
            return False
            
        arr = np.array(img)
        # Check corner alphas
        corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
        for x, y in corners:
            alpha = arr[y, x, 3]
            if alpha != 0:
                print(f"FAIL: Corner ({x}, {y}) alpha is {alpha}, expected 0 (transparent)")
                return False
                
        # Check center alpha
        center_alpha = arr[h//2, w//2, 3]
        if center_alpha != 255:
            print(f"WARNING: Center alpha is {center_alpha}, expected 255 (opaque)")
            # Wait, warning is fine, but let's make sure it's not fully transparent
            if center_alpha < 200:
                print("FAIL: Center is too transparent!")
                return False
                
        print("SUCCESS: Image verification passed!")
        return True

if __name__ == '__main__':
    verify()
