/* eslint-disable @next/next/no-img-element */
"use client";
import { createCheckout } from "@/lib/createCheckout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArtworkData, CustomerInfo } from "@/types";

function StripeButton({
  setFormErrors,
  formErrors,
  customerInfo,
  cart,
  acceptedTerms,
}: {
  setFormErrors: Function;
  formErrors: any;
  customerInfo: CustomerInfo;
  acceptedTerms: boolean;
  cart: any;
}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [malwareError, setMalwareError] = useState("");
  const [isFormError, setIsFormError] = useState(false);
  const cartItems = cart?.map((item: ArtworkData) => {
    return {
      productName: item.title,
      price: item.price,
      category: item.category,
      slug: item.slug,
      currency: "pln",
    };
  });
  const validateCustomerInfo = (customerInfo: CustomerInfo) => {
    const requiredFields = [
      "firstName",
      "lastName",
      "city",
      "postalCode",
      "street",
      "phoneNumber",
      "houseNumber",
    ];
    let hasError = false;

    const newFormErrors = { ...formErrors };
    requiredFields.forEach((field) => {
      if (!customerInfo[field as keyof CustomerInfo]?.length) {
        newFormErrors[field] = "Proszę uzupełnić to pole";
        hasError = true;
        setLoading(false);
      } else {
        delete newFormErrors[field];
      }
    });

    setFormErrors(newFormErrors);
    if (acceptedTerms === false) {
      hasError = true;
      setLoading(false);
      setFormErrors({
        ...formErrors,
        acceptedTerms: "Proszę zaakceptować regulamin",
      });
    }
    setTimeout(() => {
      setFormErrors();
      setIsFormError(false);
    }, 3500);
    setIsFormError(hasError);

    if (hasError) {
      setLoading(false);
      return true;
    } else {
      return false;
    }
  };
  const sendCheckoutRequest = () => {
    setLoading(true);
    const isError = validateCustomerInfo(customerInfo);
    if (!isError) {
      createCheckout(cartItems, customerInfo).then((data) => {
        if (data.error) {
          setMalwareError(data.error);
        } else {
          router.replace(`${data.url}`);
        }
      });
    }
  };
  return (
    <>
      <button
        className={`bg-[#312E81] hover:bg-[#23215e] text-white font-bold py-2 px-4 rounded h-max flex flex-row items-center justify-center disabled:bg-blue-300 disabled:text-zinc-700  disabled:cursor-not-allowed ${
          (malwareError || isFormError) && "!bg-red-500 !text-white"
        }`}
        disabled={isLoading || malwareError !== ""}
        onClick={sendCheckoutRequest}
      >
        {isLoading && (
          <div className="bg-white w-max h-8 rounded-md flex flex-row items-center justify-center px-2 font-bold">
            <img
              className="h-6 w-6"
              src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
              alt=""
            />
          </div>
        )}{" "}
        {!isLoading && !malwareError && !isFormError && "Przejdź do płatności"}
        {malwareError && malwareError}
        {isFormError && "Spróbuj ponownie"}
      </button>
    </>
  );
}

export default StripeButton;
