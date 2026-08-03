from PIL import Image
import numpy as np

img_path = r"public/images/pages/about_composite.png"
with Image.open(img_path) as img:
    arr = np.array(img)
    alpha = arr[:, :, 3]
    
    # Find coordinates of non-zero alpha pixels
    non_zero = np.where(alpha > 0)
    if len(non_zero[0]) > 0:
        ymin, ymax = np.min(non_zero[0]), np.max(non_zero[0])
        xmin, xmax = np.min(non_zero[1]), np.max(non_zero[1])
        print(f"Content bounding box: x in [{xmin}, {xmax}], y in [{ymin}, {ymax}]")
        print(f"Content width: {xmax - xmin + 1}, height: {ymax - ymin + 1}")
        print(f"Margins - Top: {ymin}, Bottom: {768 - 1 - ymax}, Left: {xmin}, Right: {1024 - 1 - xmax}")
    else:
        print("Image is completely transparent!")
