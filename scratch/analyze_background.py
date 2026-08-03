from PIL import Image
import numpy as np

image_path = r"C:\Users\sreenanda\.gemini\antigravity-ide\brain\3849314a-0d60-4e84-bf2a-f0daf828e263\media__1785764133949.jpg"
with Image.open(image_path) as img:
    arr = np.array(img)
    # Check shape
    h, w, c = arr.shape
    print(f"Dimensions: {w}x{h}, Channels: {c}")
    
    # Check unique colors in the border (top row, bottom row, left col, right col)
    top_row = arr[0, :, :]
    bottom_row = arr[-1, :, :]
    left_col = arr[:, 0, :]
    right_col = arr[:, -1, :]
    
    borders = np.vstack([top_row, bottom_row, left_col, right_col])
    print(f"Border pixel min values (R, G, B): {borders.min(axis=0)}")
    print(f"Border pixel max values (R, G, B): {borders.max(axis=0)}")
    print(f"Border pixel mean values (R, G, B): {borders.mean(axis=0)}")
    
    # Count how many pixels are not exactly (255, 255, 255) in the entire image
    total_pixels = w * h
    exact_white = np.sum((arr[:, :, 0] == 255) & (arr[:, :, 1] == 255) & (arr[:, :, 2] == 255))
    print(f"Exact white pixels: {exact_white} out of {total_pixels} ({exact_white/total_pixels*100:.2f}%)")
    
    # Check pixels close to white (e.g. > 240 for all channels)
    near_white = np.sum((arr[:, :, 0] > 240) & (arr[:, :, 1] > 240) & (arr[:, :, 2] > 240))
    print(f"Near white pixels (>240): {near_white} ({near_white/total_pixels*100:.2f}%)")
    
    # Check pixels that are not near white
    non_white = total_pixels - near_white
    print(f"Non-white pixels (<=240 in at least one channel): {non_white} ({non_white/total_pixels*100:.2f}%)")
