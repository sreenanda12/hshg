import os
from pypdf import PdfReader

def extract_images_from_pdf(pdf_path, output_dir):
    if not os.path.exists(pdf_path):
        print(f"PDF does not exist: {pdf_path}")
        return
    
    os.makedirs(output_dir, exist_ok=True)
    print(f"Reading {pdf_path}...")
    reader = PdfReader(pdf_path)
    
    img_count = 0
    for page_num, page in enumerate(reader.pages):
        print(f"Processing page {page_num + 1}...")
        for img_idx, img_obj in enumerate(page.images):
            try:
                name = img_obj.name
                ext = os.path.splitext(name)[1] or ".png"
                out_name = f"extracted_{os.path.basename(pdf_path).replace('.pdf', '')}_p{page_num+1}_{img_idx+1}{ext}"
                out_path = os.path.join(output_dir, out_name)
                
                with open(out_path, "wb") as f:
                    f.write(img_obj.data)
                
                print(f"Extracted image: {out_name} ({len(img_obj.data)} bytes)")
                img_count += 1
            except Exception as e:
                print(f"Error extracting image {img_idx} on page {page_num}: {e}")
                
    print(f"Finished. Extracted {img_count} images.")

extract_images_from_pdf(r"c:\Users\sreenanda\Desktop\hshg\HSHG WEBSITE\HSHG LOGO\New HSHG Logo.pdf", r"c:\Users\sreenanda\Desktop\hshg\scratch")
extract_images_from_pdf(r"c:\Users\sreenanda\Desktop\hshg\Logo Packshot (HSHG).pdf", r"c:\Users\sreenanda\Desktop\hshg\scratch")
