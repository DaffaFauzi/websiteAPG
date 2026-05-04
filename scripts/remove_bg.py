"""
Logo Background Removal Script
Removes white/near-white/very-light backgrounds from logo PNGs.
Uses corner-flood-fill approach — safe for logos on white backgrounds.
"""

from PIL import Image
import os
import shutil

# Directory containing logos
IMG_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

# Logos to process — only the ones with solid white/light backgrounds
LOGOS = [
    'bpr.png',
    'caraka.png',
    'dwp.png',
    'lps.png',
    'pln.png',
    'proteksi.png',
    'sipbro.png',
    # prada, pataka, qjamin are already mostly clean or have colored bg
]

def is_near_white(pixel, tolerance=30):
    """Check if an RGBA or RGB pixel is near-white."""
    r, g, b = pixel[0], pixel[1], pixel[2]
    return r >= (255 - tolerance) and g >= (255 - tolerance) and b >= (255 - tolerance)

def flood_fill_transparent(img, x, y, tolerance=30, visited=None):
    """BFS flood fill from (x,y), making near-white pixels transparent."""
    if visited is None:
        visited = set()
    
    width, height = img.size
    pixels = img.load()
    queue = [(x, y)]
    
    while queue:
        cx, cy = queue.pop()
        if (cx, cy) in visited:
            continue
        if cx < 0 or cx >= width or cy < 0 or cy >= height:
            continue
        
        pixel = pixels[cx, cy]
        if not is_near_white(pixel, tolerance):
            continue
        
        visited.add((cx, cy))
        # Make transparent
        pixels[cx, cy] = (pixel[0], pixel[1], pixel[2], 0)
        
        queue.extend([(cx+1, cy), (cx-1, cy), (cx, cy+1), (cx, cy-1)])
    
    return visited

def remove_background(filepath, tolerance=30):
    """Remove white background from logo via corner flood-fill."""
    img = Image.open(filepath).convert('RGBA')
    width, height = img.size
    
    # Flood fill from all 4 corners to capture surrounding whitespace
    corners = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    visited = set()
    for corner in corners:
        flood_fill_transparent(img, corner[0], corner[1], tolerance, visited)
    
    # Also fill along edges for logos with very close-cropped white bg
    edge_pixels = []
    for x in range(0, width, 5):
        edge_pixels.extend([(x, 0), (x, height-1)])
    for y in range(0, height, 5):
        edge_pixels.extend([(0, y), (width-1, y)])
    
    for ex, ey in edge_pixels:
        if (ex, ey) not in visited:
            flood_fill_transparent(img, ex, ey, tolerance, visited)
    
    return img

def process_all():
    print("=" * 60)
    print("APG Logo Background Removal — Starting...")
    print("=" * 60)
    
    results = []
    
    for filename in LOGOS:
        filepath = os.path.join(IMG_DIR, filename)
        
        if not os.path.exists(filepath):
            print(f"  [SKIP] {filename} - file not found")
            continue
        
        # Backup original
        backup_path = filepath + '.original.bak'
        if not os.path.exists(backup_path):
            shutil.copy2(filepath, backup_path)
            print(f"  [BACKUP] {filename}")
        
        # Process
        print(f"  [PROCESSING] {filename}...")
        result = remove_background(filepath, tolerance=35)
        result.save(filepath, 'PNG', optimize=True)
        
        size_before = os.path.getsize(backup_path)
        size_after = os.path.getsize(filepath)
        
        print(f"  [DONE] {filename} ({size_before//1024}KB -> {size_after//1024}KB)")
        results.append(filename)
    
    print()
    print("=" * 60)
    print(f"COMPLETE -- Processed {len(results)} logos:")
    for r in results:
        print(f"  * {r}")
    print("=" * 60)

if __name__ == '__main__':
    process_all()
