from PIL import Image

# DWP specific check - look at corners and surrounding edge pixels
img = Image.open('public/images/dwp.png').convert('RGBA')
pixels = img.load()
w, h = img.size
print(f"Size: {w}x{h}")
# Check top-left area
for y in range(0, 5):
    row = [pixels[x, y] for x in range(0, min(5, w))]
    print(f"Row y={y}: {row}")
