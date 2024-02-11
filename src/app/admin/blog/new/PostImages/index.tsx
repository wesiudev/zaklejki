"use client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "@/firebase";
import { FaCheck, FaExclamationCircle, FaPlusSquare } from "react-icons/fa";
var randomId = require("random-id");

import Image from "next/image";
import { FaImage } from "react-icons/fa";

export default function PostImages({
  input,
  setInput,
}: {
  input: any;
  setInput: Function;
}) {
  const [emptyRows, setEmptyRows] = useState<any[]>([
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
  ]);
  const [loading, setLoading] = useState(-1);
  const [altText, setAltText] = useState({ alt: "", idx: -1 });
  function handleImageUpload(img: File, idx: number) {
    setLoading(idx);
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    uploadBytes(imageRef, img).then(() =>
      getDownloadURL(imageRef).then((url) => {
        setAltText({ alt: "", idx: idx });
        setEmptyRows((prevEmptyRows) => {
          const newEmptyRows = [...prevEmptyRows];
          newEmptyRows[idx].src = url;
          return newEmptyRows;
        });
      })
    );
  }
  function updateAltText(idx: number) {
    setEmptyRows((prevEmptyRows) => {
      const newEmptyRows = [...prevEmptyRows];
      newEmptyRows[idx].alt = altText.alt;
      return newEmptyRows;
    });
    setAltText({ alt: "", idx: -1 });
  }
  const [clipboardContent, setClipboardContent] = useState("");
  function copyToClipboard(src: string, alt: string) {
    navigator.clipboard.writeText(`${src}`);
    setClipboardContent(src);
  }

  return (
    <div className="w-full my-12">
      {altText.idx !== -1 && (
        <div className="fixed z-[50] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] py-6 px-12 bg-slate-700 rounded-xl">
          Wpisz tekst alternatywny dla zdjęcia:
          <input
            placeholder="Wpisz tekst..."
            type="text"
            className="text-black border-2 border-[#393b44] rounded-md px-3 py-2 w-full mt-2 outline-none focus:border-green-300"
            value={altText.alt}
            onChange={(e) => {
              setAltText({ ...altText, alt: e.target.value });
            }}
          />
          <div className="flex flex-col w-full">
            <button
              className="px-4 py-2 bg-green-500 rounded-md text-white mt-2"
              onClick={() => updateAltText(altText.idx)}
            >
              Zatwierdź tekst
            </button>
            <button
              className="px-4 py-2 bg-transparent rounded-md text-gray-500 mt-3 hover:bg-slate-600"
              onClick={() => {
                setAltText({ alt: "", idx: -1 });
              }}
            >
              Wyjdź
            </button>
          </div>
        </div>
      )}
      <h1 className="text-base text-white font-light mb-2">Media postu </h1>
      <div className="grid grid-cols-4 gap-5 w-full">
        {emptyRows.map((item: any, idx: number) => (
          <div key={idx}>
            {item.src === "" ? (
              <>
                <input
                  placeholder="Wpisz tekst..."
                  id={`input${idx}`}
                  type="file"
                  accept="image/*"
                  onChange={(event: any) => {
                    handleImageUpload(event.target.files[0], idx);
                  }}
                  className="hidden"
                />
                <label htmlFor={`input${idx}`}>
                  <div className="aspect-square flex items-center justify-center bg-[#2F313C] border-2 border-transparent hover:border-[#525358] rounded-lg cursor-pointer">
                    {loading == idx ? (
                      <SpinningWheel />
                    ) : (
                      <FaImage className="text-5xl text-gray-400" />
                    )}
                  </div>
                </label>
              </>
            ) : (
              <div
                key={idx}
                className="relative border-2 border-[#393b44] hover:border-green-300 aspect-square rounded-lg cursor-pointer"
              >
                <div className="absolute -left-3 -top-3 w-max h-6">
                  <div className="group flex flex-row">
                    <button
                      onClick={() =>
                        setInput({ ...input, mainImage: item.src })
                      }
                      className="w-max h-max "
                    >
                      <FaPlusSquare className="text-white text-2xl bg-green-400 rounded-full block duration-200 relative z-[15]" />
                    </button>
                    <div className="w-max bg-white text-black font-light text-base opacity-0 group-hover:opacity-100 group-hover:block hidden duration-300 ml-3 p-3 rounded-md z-[20]">
                      {input.mainImage === item.src ? (
                        <div className="flex flex-row items-center">
                          <FaCheck className="text-green-400 mr-2" />
                          To jest zdjęcie główne postu.
                        </div>
                      ) : (
                        "Ustaw jako główne zdjęcie"
                      )}
                    </div>
                  </div>
                </div>

                {item.alt === "" && (
                  <div className="absolute -right-3 -top-3 w-6 h-6">
                    <div className="group flex flex-row">
                      <div className="">
                        <FaExclamationCircle className="text-white text-2xl bg-red-400 rounded-full block duration-200 relative z-[15]" />
                      </div>
                      <div className="bg-white text-black font-light text-base opacity-0 group-hover:opacity-100 group-hover:block hidden duration-300 ml-3 p-3 rounded-md z-[20]">
                        Brak tekstu alternatywnego
                      </div>
                    </div>
                  </div>
                )}
                <div className="group relative">
                  <Image
                    title="Kliknij aby skopiować obrazek do schowka"
                    onClick={() => {
                      copyToClipboard(item.src, item.alt);
                    }}
                    src={item.src}
                    alt={item.alt}
                    width={456}
                    height={456}
                    className="rounded-lg object-cover h-auto w-full aspect-square"
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-55px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "black",
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                    className="group-hover:block hidden"
                  >
                    {item.src === clipboardContent ? (
                      <div className="flex flex-row items-center text-white">
                        <FaCheck className="text-green-400 mr-2" />
                        Skopiowano pomyślnie!
                      </div>
                    ) : (
                      "Kliknij aby skopiować obrazek do schowka"
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

const SpinningWheel = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-6 w-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm3-5.291a7.962 7.962 0 01-3 2.647V24c3.042 0 5.824-1.135 7.938-3l-2.647-3.009zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-5-3.709A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
        ></path>
      </svg>
    </div>
  );
};
