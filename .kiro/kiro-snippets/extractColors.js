// Kiro-generated snippet for color extraction
import ColorThief from "color-thief-browser";

export async function extractColorsFromImage(imageElement, count = 5) {
  const ct = new ColorThief();
  const palette = ct.getPalette(imageElement, count);

  return palette.map(([r, g, b]) => {
    const hex = "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
    return hex.toUpperCase();
  });
}
