import zipfile
import xml.etree.ElementTree as ET
import os

def extract_all_text_runs(docx_path):
    if not os.path.exists(docx_path):
        return f"File does not exist: {docx_path}"
    try:
        doc = zipfile.ZipFile(docx_path)
        xml_content = doc.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        output_parts = []
        for elem in root.iter():
            if elem.tag.endswith('}t') and elem.text:
                output_parts.append(elem.text)
            elif elem.tag.endswith('}p'):
                output_parts.append('\n')
            elif elem.tag.endswith('}tab'):
                output_parts.append('\t')
            elif elem.tag.endswith('}tc'): # table cell
                output_parts.append(' | ')
            elif elem.tag.endswith('}tr'): # table row
                output_parts.append('\n')
                
        return "".join(output_parts)
    except Exception as e:
        return f"Error extracting {docx_path}: {e}"

files_to_extract = [
    r"c:\Users\sreenanda\Desktop\hshg\Web Site Info 2026.docx",
    r"c:\Users\sreenanda\Desktop\hshg\WEB SITE LAYOUT (1).docx",
    r"c:\Users\sreenanda\Desktop\hshg\hshg about us.docx"
]

for fp in files_to_extract:
    base = os.path.basename(fp)
    print(f"Extracting {base}...")
    txt = extract_all_text_runs(fp)
    out_path = os.path.join(r"c:\Users\sreenanda\Desktop\hshg\scratch", base.replace(".docx", "_extracted.txt"))
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(txt)
    print(f"Saved to {out_path}")
