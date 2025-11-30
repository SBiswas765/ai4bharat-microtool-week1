import React from "react";

export default function PaletteGrid({ palette = [], onCopy }) {
  if (!palette || palette.length === 0) {
    return <div className="text-sm text-gray-500">No colors yet — upload an image.</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-3">
      {palette.map((hex) => (
        <div key={hex} className="rounded overflow-hidden border">
          <div
            className="h-24 flex items-end"
            style={{ background: hex }}
            aria-hidden="true"
          />
          <div className="p-2 flex items-center justify-between text-xs">
            <span className="font-mono">{hex}</span>
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(hex)}
                className="px-2 py-1 border rounded text-xs bg-white hover:bg-gray-100"
              >
                Copy
              </button>
              <a
                className="px-2 py-1 border rounded text-xs bg-white hover:bg-gray-100"
                href={`https://www.color-hex.com/color/${hex.replace("#", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                Info
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
