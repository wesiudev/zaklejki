"use client";
import Image from "next/image";
import { useState } from "react";
import { getPolishCurrency } from "@/lib/getPolishCurrency";
import { FaImage } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import { getPrice } from "@/lib/getStickerPrice";
import FirstUserInteraction from "./FirstUserInteraction";
export default function CreateOwnSticker() {
  const [currentImage, setCurrentImage] = useState(-1);
  const [quantity, setQuantity] = useState(0);
  const [emptyRows, setEmptyRows] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [loading, setLoading] = useState(-1);
  function handleImageUpload(img: File, idx: number) {
    setLoading(idx);
    setCurrentImage(idx);
    const id = uuidv4();
    const imageRef = ref(storage, `image-${id}`);
    uploadBytes(imageRef, img).then(() =>
      getDownloadURL(imageRef).then((url) => {
        setEmptyRows((prevEmptyRows) => {
          const newEmptyRows = [...prevEmptyRows];
          newEmptyRows[idx] = url;
          return newEmptyRows;
        });
      })
    );
  }
  return (
    <div className="">
      <div
        className={`bg-[#312E81] relative lg:rounded-3xl px-6 py-6 -mr-4 lg:mr-0 flex flex-col text-white w-full duration-500 mt-12`}
      >
        <div className="flex flex-row items-center justify-between mb-3">
          <h2 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Wczytaj zdjęcie
          </h2>
          <button className="bg-gray-400 bg-opacity-40 hover:bg-opacity-20 duration-300 rounded-md p-2">
            <IoCloseSharp className="text-4xl" />
          </button>
        </div>
        <p className="w-full mb-6 text-sm lg:text-base">
          Dodaj obrazek, a my z przyjemnością stworzymy dla Ciebie unikalną
          naklejkę, która będzie odzwierciedlać Twój osobisty styl i
          wyjątkowość. Proces jest prosty i przyjemny – wystarczy, że przeslesz
          nam wybrany przez siebie obrazek, a my zajmiemy się resztą!
        </p>
        <FirstUserInteraction
          emptyRows={emptyRows}
          handleImageUpload={handleImageUpload}
          loading={loading}
        />
        {emptyRows[0] !== "" && (
          <div className="flex flex-col-reverse md:flex-row">
            <div className="flex flex-col w-full md:w-[60%] md:pr-6 lg:pr-8 xl:pr-10">
              {emptyRows.map((item: any, idx: number) => (
                <>
                  {item !== "" && (
                    <Image
                      src={item}
                      width={1024}
                      height={1024}
                      alt=""
                      className={`rounded-xl ${
                        currentImage === idx ? "block" : "hidden"
                      }`}
                    />
                  )}
                </>
              ))}
              <span className="text-4xl md:text-3xl lg:text-4xl mt-4">
                Wybierz ilość
              </span>

              <div className="grid grid-cols-3 mt-6 mb-3 gap-3">
                <button
                  onClick={() => setQuantity(1)}
                  className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-indigo-700 hover:bg-opacity-70 duration-300 text-white font-bold ${
                    quantity === 1 && " !border-white bg-opacity-70"
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setQuantity(5)}
                  className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-indigo-700 hover:bg-opacity-70 duration-300 text-white font-bold ${
                    quantity === 5 && " !border-white bg-opacity-70"
                  }`}
                >
                  5
                </button>
                <button
                  onClick={() => setQuantity(10)}
                  className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-indigo-700 hover:bg-opacity-70 duration-300 text-white font-bold ${
                    quantity === 10 && " !border-white bg-opacity-70"
                  }`}
                >
                  10
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e: any) => setQuantity(e.target.value)}
                  className="placeholder:text-gray-300 px-4 w-full py-2 rounded-3xl bg-indigo-700 hover:bg-opacity-70 duration-300 text-white font-bold "
                  placeholder="Inna ilość..."
                />
              </div>
              <div className="flex flex-col">
                {/* <span className="text-3xl font-bold h-12 mt-4">
                  {getPolishCurrency(getPrice(quantity))}
                </span> */}
                <span className="text-gray-500">
                  Darmowa dostawa dla zamówień powyżej 50zł
                </span>
              </div>
            </div>
            <div className="h-max md:sticky top-24 aspect-square grid grid-cols-4 md:grid-cols-3 gap-3 w-full md:w-[40%]">
              {emptyRows.map((item: any, idx: number) => (
                <div className="h-max" key={idx}>
                  {item === "" && idx > 0 ? (
                    <>
                      <input
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
                            <Image
                              width={24}
                              height={24}
                              className="h-6 w-6"
                              src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
                              alt=""
                            />
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
                      <div
                        onClick={() => setCurrentImage(idx)}
                        className="group relative w-full h-full"
                      >
                        <div className="absolute group-hover:bg-white group-hover:bg-opacity-30 w-full h-full rounded-lg"></div>
                        <Image
                          src={item}
                          alt=""
                          width={256}
                          height={256}
                          className="bg-cover rounded-lg object-cover h-auto w-full aspect-square"
                        />
                        <div className="absolute left-2 bottom-2 bg-black bg-opacity-40 p-0.5 px-2 rounded-xl text-sm text-white">
                          Ilość: 0
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {emptyRows[0] !== "" && (
          <button className="fixed bottom-12 w-max right-12 rounded-3xl px-12 py-2 mt-3 bg-green-500 hover:bg-green-600 duration-300">
            Zamów (105.00zł)
          </button>
        )}
      </div>
    </div>
  );
}
