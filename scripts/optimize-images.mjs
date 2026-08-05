import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const assets = [
  {
    input: "client/public/images/backgrounds/background-site-creme.png",
    output: "client/public/images/backgrounds/background-site-creme.webp",
    resize: { width: 1536 },
    options: { quality: 80 },
  },
  {
    input: "client/public/images/backgrounds/background-menu-botanico-creme.png",
    output: "client/public/images/backgrounds/background-menu-botanico-creme.webp",
    resize: { width: 1568 },
    options: { quality: 82 },
  },
  {
    input: "client/public/images/hero/hero-cafeteria-raizes.png",
    output: "client/public/images/hero/hero-cafeteria-raizes.webp",
    resize: { width: 1774 },
    options: { quality: 84 },
  },
  {
    input: "client/public/images/branding/logo-raizes.png",
    output: "client/public/images/branding/logo-raizes.webp",
    resize: { width: 480 },
    options: { quality: 92, alphaQuality: 92 },
  },
  ...[
    "espresso-da-casa",
    "cappuccino-tradicional",
    "cafe-com-leite",
    "macchiato-classico",
    "cafe-coado",
    "cafe-gelado",
    "pao-de-queijo",
    "bolo-de-milho",
    "broa-de-milho",
    "bolo-de-chocolate",
    "biscoito-de-polvilho",
    "croissant",
  ].map(name => ({
    input: `client/public/images/menu/${name}.png`,
    output: `client/public/images/menu/${name}.webp`,
    resize: { width: 960, height: 960 },
    options: { quality: 82 },
  })),
];

async function optimizeAsset(asset) {
  const source = path.join(rootDir, asset.input);
  const target = path.join(rootDir, asset.output);

  await sharp(source)
    .rotate()
    .resize({
      ...asset.resize,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      effort: 6,
      ...asset.options,
    })
    .toFile(target);
}

async function main() {
  await Promise.all(assets.map(optimizeAsset));
  console.log(`Optimized ${assets.length} assets to WebP.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
