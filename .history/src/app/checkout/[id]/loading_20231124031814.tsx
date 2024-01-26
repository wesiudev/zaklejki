/* eslint-disable @next/next/no-img-element */
export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[5000] font-sans italic font-light h-screen w-screen flex justify-center items-center bg-[#312E81] text-4xl text-black">
      <div className="flex flex-col items-center justify-center">
        {" "}
        <div className="bg-white w-36 h-36 mx-auto rounded-md flex flex-col items-center justify-center">
          <img
            className="h-24 w-24"
            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
            alt=""
          />
          <h2 className="text-sm font-bold mt-3">Przetwarzanie płatności</h2>
        </div>
      </div>
    </div>
  );
}
