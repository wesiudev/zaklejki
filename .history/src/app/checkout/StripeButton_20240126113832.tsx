/* eslint-disable @next/next/no-img-element */
"use client";
import { createCheckout } from "@/lib/createCheckout";
import { useRouter } from "next/navigation";
import { useState } from "react";

function StripeButton({
  setFormErrors,
  formErrors,
  customerInfo,
  acceptedTerms,
  price,
}: {
  setFormErrors: Function;
  formErrors: any;
  customerInfo: any;
  acceptedTerms: boolean;
  price: number;
}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [malwareError, setMalwareError] = useState("");
  const [isFormError, setIsFormError] = useState(false);

  const validateCustomerInfo = (customerInfo: any) => {
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
      if (!customerInfo[field as keyof any]?.length) {
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
      createCheckout(
        {
          productName: "Wodoodporny Putin",
          price: price,
        },
        customerInfo
      ).then((data) => {
        console.log(data);
      }
    }
  };
  return (
    <>
      <button
        className={`bg-green-500 hover:bg-green-600 duration-300 text-white font-bold py-2 px-4 rounded h-max flex flex-row items-center justify-center disabled:bg-blue-300 disabled:text-zinc-700  disabled:cursor-not-allowed ${
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
