import os
from PIL import Image

image_path = r"C:\Users\sreenanda\.gemini\antigravity-ide\brain\3849314a-0d60-4e84-bf2a-f0daf828e263\media__1785764133949.jpg"
if os.path.exists(image_path):
    with Image.open(image_path) as img:
        print(f"Image format: {img.format}")
        print(f"Image size: {img.size}")
        print(f"Image mode: {img.mode}")
else:
    print(f"Image not found at {image_path}")
