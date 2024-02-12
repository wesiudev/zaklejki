"use client";
import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addArrayOfProducts, addProduct, storage } from "@/firebase";
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
const { Image } = require("image-js");
const randomId = require("random-id");
export default function ProductsInputs({ files }: { files: any[] }) {
  const [input, setInput] = useState({ categories: [], title: "" });
  const [categoryInput, setCategoryInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const addCategory = () => {
    setInput((prevInput: any) => ({
      ...prevInput,
      categories: [...prevInput.categories, categoryInput],
    }));
  };
  const handleCategoryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.includes(" ")) {
      setCategoryInput(value.replace(/\s/g, ""));
    } else {
      setCategoryInput(value);
    }
  };
  const removeCategory = (idx: number) => {
    const newCategories = [...input.categories];
    newCategories.splice(idx, 1);
    setInput({ ...input, categories: newCategories });
  };

  async function convert(source: any, type: any) {
    let image = await createImageBitmap(source);

    let canvas = new OffscreenCanvas(image.width, image.height);
    let context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);

    let result = await canvas.convertToBlob({ type });

    image.close();
    return result;
  }

  async function upload(
    files: any,
    input: any,
    setLoading: any,
    setUploaded: any
  ) {
    setLoading(true);

    // Create a local array of images with all data
    const localImagesArray: any = [];

    const uploadFile = async (file: any) => {
      const randId = `image-${randomId(20, "aA0")}`;
      const imageRef = ref(storage, randId);

      try {
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);

        // Convert file to buffer
        const fileBuffer: any = await readFileAsBuffer(file);

        // Resize image to 400px width
        const resizedImageBuffer = await resizeImage(fileBuffer);

        // Convert the resized image to .webp format
        const webpImageBlob = await convert(
          new Blob([resizedImageBuffer]),
          "image/webp"
        );

        // Upload the converted image
        const thumbnailRef = ref(storage, `${randId}-thumbnail.webp`);
        await uploadBytes(thumbnailRef, webpImageBlob);
        const thumbnailUrl = await getDownloadURL(thumbnailRef);

        // Prepare the image data
        const imageData = {
          title: input.title,
          categories: input.categories,
          image_source: url,
          thumbnail_source: thumbnailUrl,
        };

        localImagesArray.push(imageData);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    const resizeImage = async (buffer: ArrayBuffer) => {
      const image = await Image.load(buffer);
      const resizedImage = image.resize({ width: 400 });
      return resizedImage.toBuffer("image/png"); // Convert to PNG for resizing
    };

    // Function to read file as buffer
    const readFileAsBuffer = (file: any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          resolve(event.target.result);
        };
        reader.onerror = (error: any) => {
          reject(error);
        };
        reader.readAsArrayBuffer(file);
      });
    };

    // Iterate through each file and upload
    const uploadPromises = files.map(uploadFile);

    try {
      // Wait for all uploads to complete
      await Promise.all(uploadPromises);

      // Pass the local array to addArrayOfImages
      await addArrayOfProducts(localImagesArray);

      // Set state variables
      setUploaded(true);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading files:", error);
      setLoading(false);
    }
  }
  return (
    <div className="grid grid-cols-1 gap-3 ml-6">
      <input
        type="text"
        value={input.title}
        onChange={(e: any) => setInput({ ...input, title: e.target.value })}
        placeholder="Naklejka"
        className="p-2 rounded-md"
      />
      <div className="flex flex-row items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCategory();
            setCategoryInput("");
          }}
          className="flex flex-col w-full"
        >
          <div className="flex flex-row items-center">
            <div className="relative h-max w-max">
              <input
                placeholder="Kategoria"
                value={categoryInput}
                onChange={handleCategoryInputChange}
                className="!text-black p-2 rounded-md"
                type="text"
              />
            </div>
            <button
              value={categoryInput}
              type="submit"
              className="w-max bg-blue-500 hover:bg-blue-700 duration-200 text-white flex flex-row items-center justify-center outline-none ml-2 rounded-md p-2"
            >
              Dodaj
            </button>
          </div>

          <div className="flex flex-row items-center w-full">
            {input.categories.map((category: any, i: number) => (
              <>
                {category}
                <button onClick={() => removeCategory(i)} className="ml-3 mr-4">
                  <FaTrash />
                </button>
              </>
            ))}
          </div>
        </form>
      </div>
      <button
        onClick={() => upload(files, input, setLoading, setUploaded)}
        className={`flex flex-row items-center justify-center ${
          loading || uploaded ? "bg-gray-500" : "bg-green-500"
        } rounded-xl py-2 text-white text-center`}
      >
        {uploaded && <FaCheck className="mr-2 text-green-500 text-xl" />}
        {loading && "..."}
        Wrzuć
      </button>
    </div>
  );
}
