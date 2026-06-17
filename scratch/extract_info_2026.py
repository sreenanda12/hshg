import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        doc = zipfile.ZipFile(path)
        xml_content = doc.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # Namespace mapping for WordprocessingML
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in root.findall('.//w:p', namespaces):
            texts = p.findall('.//w:t', namespaces)
            if texts:
                paragraphs.append(''.join([t.text for t in texts]))
        
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    text = get_docx_text(r"c:\Users\sreenanda\Desktop\hshg\Web Site Info 2026.docx")
    print(f"Total paragraphs: {len(text.splitlines())}")
    with open(r"c:\Users\sreenanda\Desktop\hshg\scratch\info_2026_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Extracted to scratch/info_2026_text.txt")
