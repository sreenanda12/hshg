import urllib.request
import urllib.error

try:
    url = "http://localhost:5174/"
    print(f"Requesting {url}...")
    response = urllib.request.urlopen(url, timeout=5)
    html = response.read().decode('utf-8')
    print("SUCCESS: Dev server responded!")
    print(f"HTML length: {len(html)}")
    print(f"Preview: {html[:500]}")
except urllib.error.URLError as e:
    print(f"URLError: {e}")
except Exception as e:
    print(f"Exception: {e}")
