import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FONTS_DIR = join(process.cwd(), "src/shared/assets/fonts");

const FONTS = [
  { name: "Doto", file: "Doto-Bold.woff", weight: 700 },
  { name: "Geist", file: "Geist-Regular.ttf", weight: 400 },
  { name: "Geist", file: "Geist-Medium.ttf", weight: 500 },
  { name: "Geist Mono", file: "GeistMono-Regular.ttf", weight: 400 },
] as const;

/** The site's fonts in the shape `ImageResponse` takes. */
export const loadOgFonts = () =>
  Promise.all(
    FONTS.map(async ({ name, file, weight }) => ({
      name,
      weight,
      style: "normal" as const,
      data: await readFile(join(FONTS_DIR, file)),
    })),
  );
