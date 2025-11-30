import React, { useState } from "react";
import UploadDropzone from "./components/UploadDropzone";
import PaletteGrid from "./components/PaletteGrid";
import { extractColorsFromImage } from "./utils/extractColors";
import { saveAs } from "file-saver";

export default function App() {
  const [imagePreview, setImagePreview] = useState(null);
  const [palette, setPalette] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleFile(file) {
    if (!file) return;
    setLoading(true);

    const imageURL = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageURL;

    img.onload = async () => {
      try {
        const colors = await extractColorsFromImage(img, 5);
        setPalette(colors);
        setImagePreview(imageURL);
      } catch (error) {
        alert("Could not extract colors. Try another image.");
      } finally {
        setLoading(false);
      }
    };
  }

  function copyHex(hex) {
    navigator.clipboard.writeText(hex);
    alert(`${hex} copied to clipboard`);
  }

  function exportPalettePNG() {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    const boxWidth = 500 / palette.length;

    palette.forEach((hex, i) => {
      ctx.fillStyle = hex;
      ctx.fillRect(i * boxWidth, 0, boxWidth, 100);
    });

    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, "palette.png");
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">

        <h1 className="text-xl font-semibold mb-3">Color Palette Picker</h1>
        <p className="text-sm text-gray-600 mb-4">
          Upload an image to extract its top 5 colors.
        </p>

        <UploadDropzone onFile={handleFile} loading={loading} />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="preview"
            className="mt-4 rounded-lg max-h-60"
          />
        )}

        <div className="mt-6">
          <PaletteGrid palette={palette} onCopy={copyHex} />
        </div>

        <button
          onClick={exportPalettePNG}
          disabled={palette.length === 0}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90 disabled:bg-gray-300"
        >
          Export Palette as PNG
        </button>
      </div>
    </div>
  );
}
