from pypdf import PdfReader

reader = PdfReader("HanikLakhe_Resume.pdf")
texts = []
for i, page in enumerate(reader.pages, start=1):
    t = page.extract_text()
    texts.append(f"--- PAGE {i} ---\n" + (t or ""))

out = "\n\n".join(texts)
with open("resume_text.txt", "w", encoding="utf-8") as f:
    f.write(out)
print("WROTE resume_text.txt")
