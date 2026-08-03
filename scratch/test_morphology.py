import cv2
import numpy as np

src_path = r"C:\Users\sreenanda\Desktop\hshg\public\images\pages\about_composite.png"
# Load the image we saved previously (which is 1024x768 with transparent background where floodfill ran)
# Wait, let's load the original uploaded image to get a clean start!
orig_path = r"C:\Users\sreenanda\.gemini\antigravity-ide\brain\3849314a-0d60-4e84-bf2a-f0daf828e263\media__1785764133949.jpg"
cv_img = cv2.imread(orig_path)
h, w, c = cv_img.shape

# Threshold to find non-white pixels (where at least one channel is <= 250)
gray = cv2.cvtColor(cv_img, cv2.COLOR_BGR2GRAY)
_, binary = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV)

# Perform morphological closing to merge elements and fill the interior (like the white truck)
# We use a large rectangular or elliptical kernel
kernel_size = 80
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (kernel_size, kernel_size))
closed = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)

# Let's check how many transparent pixels are in the center of 'closed' mask now
center_area = closed[h//4:3*h//4, w//4:3*w//4]
center_trans_pct = (np.sum(center_area == 0) / center_area.size) * 100
print(f"Closed mask center background percentage: {center_trans_pct:.2f}% (should be close to 0%)")

# Save a visualization of the closed mask
cv2.imwrite(r"c:\Users\sreenanda\Desktop\hshg\scratch\closed_mask.png", closed)
print("Saved closed mask to scratch/closed_mask.png")
