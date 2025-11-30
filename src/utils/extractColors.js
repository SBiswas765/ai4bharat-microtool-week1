import ColorThief from "color-thief-browser";

/**
 * Extract dominant colors from a loaded HTMLImageElement.
 * @param {HTMLImageElement} imageElement - an already-loaded image element
 * @param {number} count - number of colors to extract (default 5)
 * @returns {string[]} - array of HEX color strings (e.g. ['#FFAA00', ...])
 */
export async function extractColorsFromImage(imageElement, count = 5) {
  // ColorThief works synchronously for the getPalette call,
  // but we keep this function async for future extensibility.
  const ct = new ColorThief();
  const paletteRGB = ct.getPalette(imageElement, count);

  // Convert [r,g,b] arrays to HEX strings
  const hexPalette = paletteRGB.map(([r, g, b]) => {
    const hex = "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
    return hex.toUpperCase();
  });

  return hexPalette;
}

