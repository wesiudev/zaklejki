import Image from "next/image";
import Link from "next/link";
import { FaImage } from "react-icons/fa";

export default function FirstUserInteraction({
  emptyRows,
  loading,
  handleImageUpload,
}: {
  emptyRows: any;
  loading: any;
  handleImageUpload: any;
}) {
  return (
    <>
      <div className={`h-full`}>
        {emptyRows[0] === "" && (
          <>
            {loading !== 0 ? (
              <>
                <input
                  onChange={(e: any) => handleImageUpload(e.target.files[0], 0)}
                  type="file"
                  accept="image/*"
                  id="imgInput"
                  className="hidden"
                />
                <label
                  htmlFor="imgInput"
                  className="py-12 h-full w-full hover:underline flex-col bg-gray-500 bg-opacity-60 hover:bg-opacity-40 duration-300 flex items-center justify-center text-white cursor-pointer"
                >
                  <FaImage className="h-12 w-12 mb-3" />
                  Kliknij{" "}
                  <div className="w-full h-full absolute left-[50%] -translate-x-[50%]"></div>
                  by dodać
                </label>
              </>
            ) : (
              <Image
                width={24}
                height={24}
                className="h-6 w-6"
                src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
                alt=""
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
