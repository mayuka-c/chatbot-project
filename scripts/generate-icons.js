/*
  Generate PNG favicon sizes from public/favicon.svg using Sharp.
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, '../public/favicon.svg');
const OUT_DIR = path.resolve(__dirname, '../public');

const sizes = [16, 32, 180]; // 180 for apple-touch-icon

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error('Missing public/favicon.svg');
    process.exit(1);
  }

  await Promise.all(
    sizes.map(async (size) => {
      const outPath = path.join(
        OUT_DIR,
        size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`
      );
      await sharp(SRC)
        .resize(size, size, { fit: 'contain' })
        .png({ compressionLevel: 9 })
        .toFile(outPath);
      console.log('Wrote', outPath);
    })
  );
})();
