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
    text = get_docx_text(r"c:\Users\sreenanda\OneDrive\Attachments\Desktop\hshg\WEB SITE LAYOUT (1).docx")
    print(f"Total paragraphs: {len(text.splitlines())}")
    print("\n--- BEGIN CONTENT ---")
    print(text[:20000]) # print first 20k characters
    print("--- END CONTENT ---")
