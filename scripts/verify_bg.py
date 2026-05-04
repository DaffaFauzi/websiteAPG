from PIL import Image

logos = ['bpr.png','caraka.png','dwp.png','lps.png','pln.png','proteksi.png','sipbro.png']
for name in logos:
    img = Image.open(f'public/images/{name}').convert('RGBA')
    pixels = img.load()
    w, h = img.size
    corners = [pixels[0,0], pixels[w-1,0], pixels[0,h-1], pixels[w-1,h-1]]
    alphas = [c[3] for c in corners]
    transparent = all(a == 0 for a in alphas)
    status = "TRANSPARENT" if transparent else "STILL HAS BG"
    print(f"{name}: corners={alphas} -> {status}")
