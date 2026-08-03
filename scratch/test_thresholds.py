import cv2
import numpy as np

src_path = r"C:\Users\sreenanda\.gemini\antigravity-ide\brain\3849314a-0d60-4e84-bf2a-f0daf828e263\media__1785764133949.jpg"
cv_img = cv2.imread(src_path)
h, w, c = cv_img.shape

corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]

for th in [2, 4, 6, 8, 10]:
    flood_mask = np.zeros((h + 2, w + 2), dtype=np.uint8)
    for corner in corners:
        cv2.floodFill(
            cv_img, 
            flood_mask, 
            corner, 
            newVal=255, 
            loDiff=(th, th, th), 
            upDiff=(th, th, th), 
            flags=4 | cv2.FLOODFILL_MASK_ONLY
        )
    bg_mask = flood_mask[1:-1, 1:-1]
    bg_pixel_count = np.sum(bg_mask == 1)
    
    # Check if center is transparent
    center_area = bg_mask[h//4:3*h//4, w//4:3*w//4]
    center_trans_pct = (np.sum(center_area == 1) / center_area.size) * 100
    
    print(f"Threshold {th}: BG pixels = {bg_pixel_count} ({bg_pixel_count / (w*h) * 100:.2f}%), Center trans = {center_trans_pct:.2f}%")
