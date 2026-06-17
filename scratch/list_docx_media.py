import zipfile

doc = zipfile.ZipFile(r"c:\Users\sreenanda\Desktop\hshg\Web Site Info 2026.docx")
for name in doc.namelist():
    if 'media' in name:
         print(name, doc.getinfo(name).file_size)
