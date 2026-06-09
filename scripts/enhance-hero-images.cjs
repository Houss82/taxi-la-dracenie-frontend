#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "../public");
const targets = [
  path.join(publicDir, "hero-taxi-lamparo-dracenie.jpg"),
  path.join(publicDir, "taxi-chd-draguignan-conventionne.jpg"),
  path.join(publicDir, "taxi-transport-medical-dracenie-chd.jpg"),
  ...fs
    .readdirSync(path.join(publicDir, "heroes"))
    .map((f) => path.join(publicDir, "heroes", f)),
];

async function enhance(file) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) return;
  const ext = path.extname(file).toLowerCase();
  const tmp = `${file}.enhanced`;

  let pipeline = sharp(file)
    .rotate()
    .modulate({ brightness: 1.14, saturation: 1.1 })
    .sharpen({ sigma: 0.65, m1: 0.5, m2: 0.35 });

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 8, quality: 95 });
  } else {
    pipeline = pipeline.jpeg({ quality: 93, mozjpeg: true });
  }

  await pipeline.toFile(tmp);
  fs.renameSync(tmp, file);
  console.log("✓", path.relative(publicDir, file));
}

(async () => {
  for (const file of targets) {
    if (fs.existsSync(file)) {
      await enhance(file);
    }
  }
})();
