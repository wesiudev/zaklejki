import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addProduct, storage } from "@/firebase";
const randomId = require("random-id");

export default function ProductInputs({ image }: { image: any }) {
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
  function upload() {
    setLoading(true);
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    uploadBytes(imageRef, image).then(() =>
      getDownloadURL(imageRef).then((url) => {
        addProduct({
          title: input.title,
          categories: input.categories,
          image_source: url,
        }).then(() => {
          setUploaded(true);
          setLoading(false);
        });
      })
    );
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
        onClick={upload}
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
