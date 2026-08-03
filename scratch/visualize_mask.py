from PIL import Image
import numpy as np

img_path = r"c:\Users\sreenanda\Desktop\hshg\public\images\pages\about_composite.png"
out_path = r"c:\Users\sreenanda\Desktop\hshg\scratch\mask_visualization.png"

with Image.open(img_path) as img:
    arr = np.array(img)
    h, w, c = arr.shape
    
    # Create a copy
    vis = arr[:, :, :3].copy()
    
    # For any pixel where alpha is 0 (transparent), set it to bright red [255, 0, 0]
    # to see where transparency was applied.
    mask = arr[:, :, 3] == 0
    vis[mask] = [255, 0, 0]
    
    # Save the visualization
    vis_img = Image.fromarray(vis)
    vis_img.save(out_path)
    print(f"Saved mask visualization to {out_path}")
