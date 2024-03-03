"use client";
import { getPolishCurrency } from "@/lib/getPolishCurrency";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { removeNumbersFromString } from "@/lib/removeNumbersFromString";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import StripeButton from "./StripeButton";
import OrderForm from "@/components/Checkout/OrderForm";
import { getCouponById } from "@/firebase";
import { listOfPrizes } from "@/components/listOfPrizes";
import { setPromotion } from "@/redux/slices/shopSlice";
import { getFinalPrice } from "@/lib/getFinalPrice";

export default function CheckoutSummary() {
  const { couponId, promotion } = useAppSelector((state: any) => state.shop);
  const [isLoading, setLoading] = useState(true);
  const cart = useAppSelector((state: any) => state.shop.cart);
  const { beforeDiscount, finalPrice, message } = getFinalPrice(
    promotion,
    cart
  );
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    street: "",
    houseNumber: "",
    phoneNumber: "",
    acceptedTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    street: "",
    houseNumber: "",
    phoneNumber: "",
    acceptedTerms: "",
  });
  function handleChange(e: any) {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (cart?.length) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    if (!cart?.length) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [cart?.length]);

  useEffect(() => {
    const id = localStorage?.getItem("activeCoupon");
    async function fetchCoupon() {
      const coupon = await getCouponById(id).then((res) => {
        dispatch(setPromotion({ couponId: res.id, promotion: res.prizeId }));
        localStorage.setItem("activeCoupon", res.id);
      });
    }
    if (id) {
      fetchCoupon();
    } else {
      return;
    }
  }, [promotion, couponId]);

  return (
    <div
      className={`flex mt-24 lg:mt-0 flex-col justify-center w-full h-full ${
        cart?.length > 0 && "bg-indigo-600"
      } rounded-3xl p-4 lg:py-12`}
    >
      {isLoading ? (
        <div className="bg-white w-24 h-24 mx-auto rounded-md flex flex-col items-center justify-center">
          <Image
            width={120}
            height={120}
            className="h-12 w-12"
            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
            alt="Zaklejki Wczytywanie"
          />
        </div>
      ) : (
        <>
          {cart?.length === 0 && (
            <div className="w-full h-screen fixed left-0 top-0 flex items-center justify-center flex-col bg-indigo-100">
              <div
                style={{ boxShadow: "0px 0px 8px black" }}
                className=" rounded-full bg-indigo-600 aspect-square border-indigo-300 border-[600px] flex items-center justify-center flex-col p-6 lg:p-12 "
              >
                <FaShoppingCart className="text-7xl text-gray-200" />
                <p className="text-gray-100 mt-5 text-center w-full">
                  Twój koszyk jest pusty...
                </p>
              </div>
            </div>
          )}
          {cart?.length !== 0 && (
            <>
              <h2 className="mb-3 sm:px-6 lg:px-24 text-base text-[#A5B4FC]">
                Do zapłaty
              </h2>
              {promotion !== -1 && (
                <div className="flex flex-row items-center sm:px-6 lg:px-24">
                  {message === "Kod aktywny" && (
                    <span className="line-through text-[30px] xl:text-[38px]  font-bold text-gray-300">
                      {beforeDiscount >= 100
                        ? getPolishCurrency(beforeDiscount)
                        : getPolishCurrency(beforeDiscount + 10)}
                    </span>
                  )}
                  <span
                    className={`${
                      message === "Kod aktywny" && "ml-3"
                    } text-white text-[30px] xl:text-[38px] font-bold`}
                  >
                    {beforeDiscount >= 100
                      ? getPolishCurrency(finalPrice)
                      : getPolishCurrency(finalPrice + 10)}
                  </span>
                </div>
              )}
              {promotion === -1 && (
                <span className="text-[30px] xl:text-[38px] font-bold text-white sm:px-6 lg:px-24">
                  {finalPrice >= 100
                    ? getPolishCurrency(finalPrice)
                    : getPolishCurrency(finalPrice + 10)}
                </span>
              )}
              {promotion !== -1 && (
                <div className="mt-4 sm:px-6  lg:px-24">
                  <p className="text-xl font-bold text-white">{message}:</p>

                  <p className="text-white flex flex-row items-center">
                    {listOfPrizes[promotion]?.title}{" "}
                    {message === "Kod aktywny" && (
                      <span className="text-green-500 font-bold">
                        -{getPolishCurrency(beforeDiscount - finalPrice)}
                      </span>
                    )}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 mt-16 text-white w-full sm:px-6 lg:px-24">
                {cart?.map((item: any, i: any) => (
                  <div key={i}>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row w-full items-start justify-start h-full">
                        <div className="aspect-square h-[85px] w-[85px] rounded-lg overflow-hidden">
                          <Image
                            width={120}
                            height={120}
                            src={item?.image_source}
                            alt=""
                            className="w-full h-full object-cover my-auto"
                          />
                        </div>
                        <div className="pl-2 w-2/3">
                          <Link
                            href={`/sklep/${
                              item.categories[0]
                            }/${polishToEnglish(item.title)}`}
                            className="text-sm sm:text-lg font-bold "
                          >
                            {removeNumbersFromString(item.title)}
                          </Link>
                          <br />
                          {item.quantity}x{" "}
                          <span className="font-normal text-sm">
                            {item.paperType === "normal" && "Zwykła"}
                          </span>
                          <span className="font-normal text-sm">
                            {item.paperType === "silver" && "Srebrna"}
                          </span>
                          <span className="font-normal text-sm">
                            {item.paperType === "gold" && "Złota"}
                          </span>{" "}
                          <span className="font-normal text-sm">
                            {item.size === "small" && "Mała (6cm)"}
                          </span>
                          <span className="font-normal text-sm">
                            {item.size === "medium" && "Średnia (8cm)"}
                          </span>
                          <span className="font-normal text-sm">
                            {item.size === "large" && "Duża (14cm)"}
                          </span>
                        </div>
                      </div>
                      <div className="font-bold text-lg mt-1 w-max">
                        <div className="w-max">
                          {getPolishCurrency(item.price)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
                  </div>
                ))}
              </div>
              <div className="px-3 sm:px-6 lg:px-24 text-white">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Podsumowanie</p>
                  <p className="text-lg font-bold">
                    {getPolishCurrency(finalPrice)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
              </div>
              <div className="px-3 sm:px-6 lg:px-24 text-white">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Wysyłka</p>
                  <p className="text-lg font-bold">
                    {beforeDiscount + 10 >= 100 && "Darmowa"}
                    {beforeDiscount + 10 < 100 && getPolishCurrency(10)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Do zapłaty</p>
                  <p className="text-lg font-bold">
                    {beforeDiscount < 100
                      ? getPolishCurrency(finalPrice + 10)
                      : getPolishCurrency(finalPrice)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
              </div>
              <div className="px-3 sm:px-6 lg:px-24 mt-6">
                <OrderForm
                  customerInfo={customerInfo}
                  setCustomerInfo={setCustomerInfo}
                  handleChange={handleChange}
                  formErrors={formErrors}
                />
                <StripeButton
                  customerInfo={customerInfo}
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
                  acceptedTerms={customerInfo.acceptedTerms}
                  price={beforeDiscount >= 100 ? finalPrice + 10 : finalPrice}
                  cart={cart}
                  couponId={couponId}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
