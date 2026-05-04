from PIL import Image

# Check sipbro - was it the image or a UI frame?
img = Image.open('public/images/sipbro.png').convert('RGBA')
pixels = img.load()
w, h = img.size
print(f"Size: {w}x{h}")
# Check center-top and center-sides for bg remnant
check_pts = [
    ('top-center', w//2, 0),
    ('top-center+5', w//2, 5),
    ('left-center', 0, h//2),
    ('right-center', w-1, h//2),
    ('bottom-center', w//2, h-1),
]
for label, x, y in check_pts:
    p = pixels[x, y]
    print(f"  {label} ({x},{y}): RGBA={p} alpha={'TRANSPARENT' if p[3]==0 else 'OPAQUE'}")
