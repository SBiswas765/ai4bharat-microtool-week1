import React, { useRef } from "react";

export default function UploadDropzone({ onFile, loading }) {
  const inputRef = useRef(null);

  function handleChange(e) {
    const file = e.target.files?.[0];
    if (file) onFile(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) onFile(file);
  }

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer bg-gray-50"
      onClick={() => inputRef.current.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {loading ? (
        <span className="text-gray-600 text-sm">Processing image...</span>
      ) : (
        <span className="text-gray-700 text-sm">
          Click or drag-and-drop an image here
        </span>
      )}

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}

