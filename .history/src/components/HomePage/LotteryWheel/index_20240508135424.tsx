"use client";
import WheelComponent from "./Wheel";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaCircleCheck, FaGift } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Confetti from "react-confetti";
import { addCoupon, updateSession } from "@/firebase";
import { v4 as uuidv4 } from "uuid";
import { copyToClipboard } from "@/lib/copyToClipboard";
export default function LotteryWheel({
  listOfPrizes,
}: {
  listOfPrizes: any[];
}) {
  const [prizeListOpen, setPrizeListOpen] = useState(false);
  const [lotteryWheelOpen, setLotteryWheelOpen] = useState(false);
  const [lotteryMessage, setLotteryMessage] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponWindowOpen, setCouponWindowOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prize, setPrize] = useState({
    title: "",
    imgSrc: "",
    description: "",
  });
  const weelColors = () => {
    let arr: any[] = [];
    let colors = ["#EE4040", "#F0CF50", "#815CD1", "#f15be7", "#34A24F"];
    listOfPrizes.forEach((el) => {
      let color: any = colors.shift();
      arr.push(color);
      colors.push(color);
    });

    return arr;
  };
  const segColors = weelColors();
  const onFinished = async (winner: any) => {
    const sessionId = localStorage.getItem("sessionId");
    setPrize({
      title: winner.title,
      imgSrc: winner.imgSrc,
      description: winner.description,
    });
    const couponId = uuidv4();
    function generateCouponValue() {
      const firstPart = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      const secondPart = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
      return `${firstPart}-${secondPart}`;
    }
    const generatedCoupon = generateCouponValue();
    const couponObject = {
      id: couponId,
      value: generatedCoupon,
      used: false,
      prizeId: winner.id,
    };
    setCoupon(generatedCoupon);
    await addCoupon(couponObject);
    await updateSession(
      ["lastLotteryPrize", "lastSpin", "lastCoupon"],
      [winner.id, Date.now(), couponObject],
      sessionId
    );
  };
  return (
    <>
      <button
        onClick={() => setLotteryWheelOpen(!lotteryWheelOpen)}
        className="fixed z-[100] top-[62px] md:top-[70px] left-0 h-max w-full py-3 bg-indigo-600 text-white font-bold text-3xl xl:text-4xl"
      >
        <div className=" flex flex-row items-center justify-center mx-auto animate-pulse">
          <Image
            title="Sprawdź nasze wlepki"
            src="/lotteryWheel2.png"
            width={120}
            height={120}
            alt="Wlepki"
            className="h-8 md:h-12 w-auto"
          />
          <Image
            title="Sprawdź nasze nalepki"
            src="/lotterySign2.png"
            width={500}
            height={500}
            alt="Nalepki"
            className="h-5 md:h-8 w-auto mt-[5px] md:mt-2 mx-4"
          />
          <Image
            title="Sprawdź nasze wlepki"
            src="/lotteryWheel2.png"
            width={120}
            height={120}
            alt="Naklejki"
            className="h-8 md:h-12 w-auto"
          />
        </div>
      </button>
      {lotteryWheelOpen && (
        <button
          className="fixed right-12 top-12 z-[1500]"
          onClick={() => setLotteryWheelOpen(!lotteryWheelOpen)}
        >
          <div className="flex items-center justify-center rounded-full bg-white hover:bg-opacity-50 duration-300 w-12 h-12">
            <IoClose className="w-6 h-6 text-zinc-800" />
          </div>
        </button>
      )}
      {lotteryWheelOpen && (
        <div className="h-screen w-full fixed top-0 left-0 bg-black bg-opacity-85 z-[1000]">
          {prize.title !== "" && (
            <div className="fixed w-full h-full top-0 -left-1/2 translate-x-1/2">
              <Confetti width={1920} height={1019} />
            </div>
          )}
          <div className="overflow-x-hidden h-full md:py-12 overflow-y-scroll w-full flex flex-col items-center justify-center">
            <div className="sm:bg-white flex-col flex rounded-3xl p-6 md:p-6 justify-center -translate-x-[23%] sm:-translate-x-0">
              <div className="flex flex-row w-full justify-between mb-3 ">
                <h2 className="flex text-2xl font-bold flex-row items-center text-zinc-800">
                  Wylosuj promocję
                </h2>
                <button
                  onClick={() => setPrizeListOpen(!prizeListOpen)}
                  className={`${
                    prizeListOpen && "bg-indigo-600"
                  } group hover:bg-indigo-500 overflow-hidden hidden sm:flex duration-300 border border-indigo-600 text-white rounded-3xl flex-row items-center justify-between font-bold`}
                >
                  <div className="flex items-center justify-center bg-indigo-600 w-12 h-12">
                    <FaGift className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`${
                      prizeListOpen
                        ? "text-white"
                        : "group-hover:text-white text-zinc-800"
                    } px-4 duration-300 z-[1002] relative`}
                  >
                    Lista nagród
                  </span>
                </button>
              </div>
              <WheelComponent
                listOfPrizes={listOfPrizes}
                segColors={segColors}
                winningSegment={"13"}
                onFinished={(winner: any) => onFinished(winner)}
                primaryColor="gray"
                contrastColor="white"
                buttonText="Losuj"
                isOnlyOnce={true}
                setLotteryMessage={setLotteryMessage}
              />
              {lotteryMessage && (
                <div className="w-full left-0 hidden sm:block absolute bottom-0 bg-black bg-opacity-70 text-center text-base font-bold text-white p-2 px-4 rounded-b-3xl drop-shadow-md shadow-black">
                  {lotteryMessage}
                </div>
              )}

              <button
                onClick={() => setPrizeListOpen(!prizeListOpen)}
                className="z-[102] hover:bg-indigo-500 fixed bottom-5 right-1 flex sm:hidden duration-200 bg-indigo-600 text-white rounded-3xl flex-row items-center justify-between font-bold"
              >
                <div className="flex items-center justify-center rounded-l-3xl bg-white w-12 h-12">
                  <FaGift className="w-6 h-6 text-zinc-800" />
                </div>
                <span className="px-4">Lista nagród</span>
              </button>
            </div>
            {lotteryMessage && (
              <div className="w-full left-0 sm:hidden fixed top-1/2 -translate-y-1/2 py-5 bg-black bg-opacity-70 text-center text-base font-bold text-white p-2 px-4 drop-shadow-md shadow-black">
                {lotteryMessage}
              </div>
            )}
            {prize.title !== "" && (
              <div className="bg-white rounded-3xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-max w-[90%] sm:w-[400px] flex flex-col items-center justify-center font-coco z-[1500]">
                <h2 className="text-white bg-indigo-600 font-bold w-full rounded-t-3xl p-6 text-2xl text-center">
                  Twoja promocja
                </h2>
                <Image
                  width={333}
                  height={333}
                  src={prize.imgSrc}
                  alt={`Nagroda ${prize.title}`}
                  className="w-3/5 sm:w-[300px] my-3"
                />
                <p className="text-sm text-center text-gray-500 p-3 ">
                  {prize.description}
                </p>
                {!couponWindowOpen && (
                  <button
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setCouponWindowOpen(true);
                        setLoading(false);
                      }, 2000);
                    }}
                    disabled={couponWindowOpen || loading}
                    className={`bg-green-500 p-3 hover:bg-green-400 text-2xl flex items-center justify-center duration-200 w-full  text-white font-bold rounded-b-3xl`}
                  >
                    {!loading && !couponWindowOpen && "Odbierz"}
                    {loading && (
                      <div className="bg-white w-max h-8 rounded-md flex flex-row items-center justify-center px-2 font-bold">
                        <Image
                          width={24}
                          height={24}
                          className="h-6 w-6"
                          src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
                          alt=""
                        />
                      </div>
                    )}
                  </button>
                )}
                {couponWindowOpen && !loading && (
                  <button
                    onClick={() => copyToClipboard(coupon, setCopied)}
                    className="bg-green-500 p-3 hover:bg-green-400 text-2xl flex items-center justify-center duration-200 w-full  text-white font-bold rounded-b-3xl relative group"
                  >
                    {coupon}
                    <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 -top-16 w-max bg-zinc-800 text-white rounded-xl p-3 text-sm">
                      <div className="relative w-full h-full">
                        {!copied ? (
                          "Kliknij aby skopiować"
                        ) : (
                          <div className="flex flex-row items-center">
                            <FaCircleCheck className="mr-2" />
                            Skopiowano pomyślnie
                          </div>
                        )}
                        <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-zinc-800 -bottom-5 rotate-45"></div>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            )}
            {prizeListOpen && (
              <div className="z-[500] bg-white rounded-3xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-max w-max flex flex-col items-center justify-start font-coco">
                <h2 className="text-white bg-indigo-600 font-bold w-full rounded-t-3xl p-6 text-2xl text-center">
                  Pełna lista nagród
                </h2>
                <div className="flex flex-col w-full p-6">
                  {listOfPrizes.map((item: any, i: any) => (
                    <div
                      key={i}
                      className="flex flex-row items-center justify-between font-coco text-zinc-800 font-bold"
                    >
                      <FaStar className="text-xl -mt-[1px] text-yellow-500 animate-pulse" />
                      <span className="px-6">{item.title}</span>
                      <FaStar className="text-xl -mt-[1px] text-yellow-500 animate-pulse" />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setPrizeListOpen(false)}
                  className="bg-green-500 p-3 hover:bg-green-400 duration-200 w-full  text-white font-bold rounded-b-3xl"
                >
                  Zamknij
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
