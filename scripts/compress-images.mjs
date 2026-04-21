/**
 * Image compression script using Sharp (bundled with Next.js).
 * Compresses PNG images in public/images/ to reduce file sizes.
 * Run with: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '../public/images');
const QUALITY = 85; // PNG compression quality (0-100)

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const fileName = basename(filePath);
  const backupPath = filePath + '.bak';
  const originalSize = statSync(filePath).size;

  // Rename original as backup
  renameSync(filePath, backupPath);

  try {
    if (ext === '.png') {
      await sharp(backupPath)
        .png({ quality: QUALITY, compressionLevel: 9, effort: 10 })
        .toFile(filePath);
    } else {
      await sharp(backupPath)
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath);
    }

    const newSize = statSync(filePath).size;
    const saving = ((1 - newSize / originalSize) * 100).toFixed(1);

    // Remove backup
    renameSync(backupPath, backupPath); // keep backup
    
    return {
      file: fileName,
      before: originalSize,
      after: newSize,
      saving: parseFloat(saving),
    };
  } catch (err) {
    // Restore original on error
    renameSync(backupPath, filePath);
    throw err;
  }
}

async function main() {
  console.log('\n🔧 APG Image Compression Script\n');
  console.log(`📁 Input directory: ${INPUT_DIR}\n`);

  const files = readdirSync(INPUT_DIR)
    .filter(f => ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()))
    .map(f => join(INPUT_DIR, f));

  if (files.length === 0) {
    console.log('❌ No images found.');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const file of files) {
    try {
      process.stdout.write(`⏳ Compressing ${basename(file)}...`);
      const result = await compressImage(file);
      if (result) {
        totalBefore += result.before;
        totalAfter += result.after;
        results.push(result);
        console.log(` ✅ ${formatBytes(result.before)} → ${formatBytes(result.after)} (-${result.saving}%)`);
      }
    } catch (err) {
      console.log(` ❌ Error: ${err.message}`);
    }
  }

  console.log('\n' + '─'.repeat(60));
  console.log('📊 Summary:');
  console.log(`   Before: ${formatBytes(totalBefore)}`);
  console.log(`   After:  ${formatBytes(totalAfter)}`);
  console.log(`   Saved:  ${formatBytes(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
  console.log('─'.repeat(60));
  console.log('\n✨ Done! Backup files (.bak) are kept next to originals.');
  console.log('   Run: del public\\images\\*.bak to remove backups.\n');
}

main().catch(console.error);
