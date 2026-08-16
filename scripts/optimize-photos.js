// Prepares every photo in the side-quest galleries for the web: downscales
// it, re-encodes as compressed JPEG, and strips EXIF/GPS/ICC/XMP metadata
// (sharp only keeps metadata if you call .withMetadata(), which we don't).
//
// Photos straight off an iPhone are often "Adaptive HDR": a base image plus
// a gain map, tagged with a wide-gamut/HDR ICC profile. sharp's decoder
// (libvips) doesn't understand that gain map, so decoding one directly
// produces a flat, washed-out image — the colors aren't stripped by the
// resize/compress step, they're wrong from the moment sharp reads the file.
// macOS's `sips` does understand it (same ColorSync pipeline as Photos/
// Preview), so every photo is round-tripped through `sips` to a flattened,
// properly tone-mapped sRGB-ish JPEG first, and *that* is what sharp
// resizes and compresses. This step is macOS-only.
//
// .rotate() with no args bakes in the EXIF orientation tag as actual pixel
// rotation *before* that tag gets stripped — skipping this step would leave
// photos that were shot sideways (common on phones) permanently sideways
// once the orientation metadata is gone.
//
// Run after dropping new photos into src/assets/travel|running|sports|fun-eats,
// or via `npm run predeploy`, which runs it automatically.
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const sharp = require('sharp');

const repoPath = (...parts) => path.join(__dirname, '..', ...parts);

const PHOTO_DIRS = ['travel', 'running', 'sports', 'fun-eats'].map((dir) =>
  repoPath('src', 'assets', dir)
);

// Photos that live outside the gallery folders and so wouldn't otherwise be
// swept. The headshot is a real camera photo (unlike the logo assets beside
// it, which are vector/screenshot exports), so it carries the same EXIF the
// gallery photos do and needs the same strip. It's duplicated in public/ to
// serve as the favicon/apple-touch-icon, and both copies get cleaned.
const STANDALONE_PHOTOS = [
  repoPath('src', 'assets', 'headshot.jpg'),
  repoPath('public', 'headshot.jpg'),
];

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;
const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 82;

function assertSipsAvailable() {
  if (os.platform() !== 'darwin') {
    throw new Error('optimize-photos.js relies on macOS\'s `sips` for HDR-correct color decoding, so it only runs on macOS.');
  }
}

// True when a file already looks exactly like optimizeOne's own output, so
// re-running it would only re-encode an already-compressed JPEG. `predeploy`
// runs this script on every deploy, and JPEG is lossy on every pass, so
// without this guard each deploy would visibly degrade photos that were
// already finished. These are precisely optimizeOne's post-conditions:
// baseline JPEG, no EXIF/ICC/XMP left, and within the size cap.
async function isAlreadyOptimized(filePath) {
  if (path.extname(filePath).toLowerCase() !== '.jpg') return false;
  try {
    const meta = await sharp(filePath).metadata();
    return (
      meta.format === 'jpeg' &&
      !meta.exif &&
      !meta.icc &&
      !meta.xmp &&
      // orientation 1 (or absent) means no rotation is still pending
      (meta.orientation === undefined || meta.orientation === 1) &&
      (meta.width ?? 0) <= MAX_DIMENSION &&
      (meta.height ?? 0) <= MAX_DIMENSION
    );
  } catch {
    // Unreadable by sharp (e.g. an HDR gain-map file) — let the real
    // pipeline handle it rather than skipping it.
    return false;
  }
}

// Flattens HDR gain-map photos into a normal tone-mapped JPEG via
// ColorSync, in a scratch file that gets cleaned up by the caller.
function sipsFlatten(inputPath) {
  const tmpPath = path.join(os.tmpdir(), `optimize-photos-${crypto.randomBytes(6).toString('hex')}.jpg`);
  execFileSync('sips', ['-s', 'format', 'jpeg', inputPath, '--out', tmpPath], { stdio: 'ignore' });
  return tmpPath;
}

async function optimizeOne(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));
  const outPath = path.join(dir, `${base}.jpg`);

  const flattened = sipsFlatten(filePath);
  try {
    const buffer = await sharp(flattened)
      .rotate()
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
      .toColorspace('srgb')
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();

    await fs.promises.writeFile(outPath, buffer);
    if (outPath !== filePath) {
      await fs.promises.unlink(filePath);
    }
  } finally {
    fs.unlinkSync(flattened);
  }
  return outPath;
}

// Every image this script is responsible for: each gallery folder's
// contents plus the standalone photos listed above.
function collectPhotos() {
  const fromDirs = PHOTO_DIRS.flatMap((dir) => {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f))
      .map((f) => path.join(dir, f));
  });
  return [...fromDirs, ...STANDALONE_PHOTOS.filter((p) => fs.existsSync(p))];
}

async function main() {
  assertSipsAvailable();

  let count = 0;
  let skipped = 0;
  let beforeTotal = 0;
  let afterTotal = 0;

  for (const filePath of collectPhotos()) {
    if (await isAlreadyOptimized(filePath)) {
      skipped += 1;
      continue;
    }
    const before = fs.statSync(filePath).size;
    const outPath = await optimizeOne(filePath);
    const after = fs.statSync(outPath).size;
    beforeTotal += before;
    afterTotal += after;
    console.log(
      `${path.relative(process.cwd(), filePath)}: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`
    );
    count += 1;
  }

  const skippedNote = skipped > 0 ? ` ${skipped} already optimized, left untouched.` : '';

  if (count === 0 && skipped === 0) {
    console.log('No photos found yet, nothing to optimize.');
  } else if (count === 0) {
    console.log(`Nothing to do —${skippedNote}`);
  } else {
    console.log(
      `\nDone: ${count} photo(s) optimized. ${(beforeTotal / 1e6).toFixed(0)}MB -> ${(afterTotal / 1e6).toFixed(0)}MB total.${skippedNote}`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
