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
  const cart = useAppSelector((state: any) => state.shop.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (cart?.length) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    fetchCoupon();
  }, [promotion, couponId]);
  const { beforeDiscount, finalPrice, message } = getFinalPrice(
    promotion,
    cart
  );
  console.log(getPolishCurrency(finalPrice));

  return (
    <div className="flex flex-col justify-center w-full h-full bg-indigo-600 rounded-3xl p-4 py-12">
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
          {!cart?.length && (
            <>
              <FaShoppingCart className="text-7xl text-gray-200 mt-12" />
              <p className="text-gray-100 mt-5 text-center">
                Twój koszyk jest pusty...
              </p>
            </>
          )}
          {cart?.length && (
            <>
              <h2 className="mb-3 px-6 sm:px-36 lg:px-24 text-base text-[#A5B4FC]">
                Do zapłaty
              </h2>
              <span className="line-through text-[30px] xl:text-[38px]  font-bold text-white px-6 sm:px-36 lg:px-24">
                {finalPrice >= 100
                  ? getPolishCurrency(finalPrice)
                  : getPolishCurrency(finalPrice + 10)}
              </span>
              <div className="mt-4 px-6 sm:px-36 lg:px-24">
                <p className="text-xl font-bold text-white">Wczytano:</p>
                <p className="text-white flex flex-row items-center">
                  {listOfPrizes[promotion]?.title} (
                  <span className="text-green-500 font-bold">
                    -{getPolishCurrency(beforeDiscount - finalPrice)}
                  </span>
                  )
                </p>
              </div>
              <div className="grid grid-cols-1 mt-16 text-white w-full px-6 sm:px-36 lg:px-24">
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
                            href={`/sklep-z-naklejkami/${
                              item.categories[0]
                            }/${polishToEnglish(item.title)}`}
                            className="text-lg font-bold "
                          >
                            {removeNumbersFromString(item.title)}
                          </Link>
                          {item.quantity}x{" "}
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
              <div className="px-6 sm:px-36 lg:px-24 text-white">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Wysyłka</p>
                  <p className="text-lg font-bold">
                    {finalPrice >= 100 && "Darmowa"}
                    {finalPrice < 100 && getPolishCurrency(10)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Do zapłaty</p>
                  <p className="text-lg font-bold">
                    {finalPrice < 100
                      ? getPolishCurrency(finalPrice + 10)
                      : getPolishCurrency(finalPrice)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
              </div>
              <div className="px-6 sm:px-36 lg:px-24 mt-6">
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
                  price={finalPrice}
                  cart={cart}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
