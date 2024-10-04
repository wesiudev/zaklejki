"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ProductInputs from "./ProductInputs";

const ImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const handleImageChange = (e: any) => {
    const files = e.target.files;
    // Filter out non-image files if needed
    const imageFiles = Array.from(files).filter((file: any) =>
      file.type.startsWith("image/")
    );
    setSelectedImages([...selectedImages, ...imageFiles]);
  };

  return (
    <div className="h-full w-full p-6 bg-[#222430]">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="text-white"
      />

      {selectedImages.length > 0 && (
        <div>
          <h2 className="text-white font-bold text-3xl my-4">
            Selected Images:
          </h2>
          <div className="h-[25vh] w-full grid grid-cols-1 2xl:grid-cols-2 gap-6">
            {selectedImages.map((image, index) => (
              <div
                key={index}
                className="h-full bg-gray-500 rounded-xl p-6 flex flex-row items-center"
              >
                <Image
                  width={250}
                  height={250}
                  src={URL.createObjectURL(image)}
                  alt={`Selected Image ${index}`}
                  className="h-[150px] w-auto rounded-xl"
                />
                <ProductInputs image={image} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
