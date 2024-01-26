"use client";
import { getPolishCurrency } from "@/getPolishCurrency";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import CheckoutSummary from "./checkout/CheckoutSummary";
import StripeButton from "./checkout/StripeButton";
import Link from "next/link";
export type CustomerInfo = {
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  street: string;
  houseNumber?: string;
  phoneNumber: string;
};
export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [otherQuantity, setOtherQuantity] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  function getPrice() {
    if (quantity === 1 && otherQuantity === 0) {
      return 15;
    } else if (quantity === 5 && otherQuantity === 0) {
      return 50;
    } else if (quantity === 10 && otherQuantity === 0) {
      return 70;
    } else if (otherQuantity >= 10) {
      return otherQuantity * 7;
    } else {
      return 0;
    }
  }
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
  return (
    <>
      <div className="z-50 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-max h-[80vh] overflow-y-scroll bg-white shadow-lg shadow-black rounded-xl">
        <div className="bg-[#312E81] rounded-xl w-full h-max py-24 flex flex-col text-white">
          <CheckoutSummary
            setCheckoutOpen={setCheckoutOpen}
            price={getPrice()}
          />{" "}
          <div className="flex flex-col justify-center">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6"
            >
              <div className="flex flex-col">
                <h2 className="text-xl mb-3 ">Dane do wysyłki</h2>
                <label
                  htmlFor="city"
                  className="mb-2 text-sm flex flex-row items-center"
                >
                  Miasto{" "}
                  {formErrors?.city && (
                    <div className="text-red-500 ml-2 opacity-70">
                      {" "}
                      - Uzupełnij dane
                    </div>
                  )}
                </label>
                <input
                  value={customerInfo.city}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="city"
                  name="city"
                  className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                  required
                />

                <label
                  htmlFor="postalCode"
                  className="mb-2 text-sm flex flex-row items-center"
                >
                  Kod pocztowy{" "}
                  {formErrors?.postalCode && (
                    <div className="text-red-500 ml-2 opacity-70">
                      {" "}
                      - Uzupełnij dane
                    </div>
                  )}
                </label>
                <input
                  value={customerInfo.postalCode}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                  required
                />

                <label
                  htmlFor="street"
                  className="mb-2 text-sm flex flex-row items-center"
                >
                  Ulica{" "}
                  {formErrors?.street && (
                    <div className="text-red-500 ml-2 opacity-70">
                      {" "}
                      - Uzupełnij dane
                    </div>
                  )}
                </label>
                <input
                  value={customerInfo.street}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="street"
                  name="street"
                  className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                  required
                />

                <label
                  htmlFor="houseNumber"
                  className="mb-2 text-sm flex flex-row items-center"
                >
                  Numer domu{" "}
                  {formErrors?.houseNumber && (
                    <div className="text-red-500 ml-2 opacity-70">
                      {" "}
                      - Uzupełnij dane
                    </div>
                  )}
                </label>
                <input
                  value={customerInfo.houseNumber}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                  required
                />
              </div>
              <div className="">
                <div className="flex flex-col">
                  <h2 className="text-xl mb-3 ">Dane kontaktowe</h2>

                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm flex flex-row items-center"
                  >
                    Imię{" "}
                    {formErrors?.firstName && (
                      <div className="text-red-500 ml-2 opacity-70">
                        {" "}
                        - Uzupełnij dane
                      </div>
                    )}
                  </label>
                  <input
                    value={customerInfo.firstName}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="mb-2 text-sm flex flex-row items-center"
                  >
                    Nazwisko{" "}
                    {formErrors?.lastName && (
                      <div className="text-red-500 ml-2 opacity-70">
                        {" "}
                        - Uzupełnij dane
                      </div>
                    )}
                  </label>
                  <input
                    value={customerInfo.lastName}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 text-sm flex flex-row items-center"
                  >
                    Numer Telefonu{" "}
                    {formErrors?.phoneNumber && (
                      <div className="text-red-500 ml-2 opacity-70">
                        {" "}
                        - Uzupełnij dane
                      </div>
                    )}
                  </label>
                  <input
                    value={customerInfo.phoneNumber}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border border-gray-400 rounded-md px-2 py-1 mb-4"
                    required
                  />
                </div>
              </div>
            </form>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={customerInfo.acceptedTerms}
                  onChange={() =>
                    setCustomerInfo({
                      ...customerInfo,
                      acceptedTerms: !customerInfo.acceptedTerms,
                    })
                  }
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <div className="ml-2 flex flex-row items-center flex-wrap">
                  Kupując akceptuję{" "}
                  <Link
                    target="_blank"
                    href="https://policies.google.com/terms?hl=en-US"
                    className="text-blue-400 ml-1"
                  >
                    regulamin sklepu
                  </Link>
                  .{" "}
                  {formErrors?.acceptedTerms && (
                    <div className="text-red-500 ml-3 opacity-70">
                      {" "}
                      Prosimy zaakceptować regulamin
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
          <StripeButton
            customerInfo={customerInfo}
            formErrors={formErrors}
            price={quantity}
            acceptedTerms={customerInfo.acceptedTerms}
            setFormErrors={setFormErrors}
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold xl:text-5xl 2xl:text-6xl pt-3 pb-12 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        Naklejki ozdobne wodoodporne
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-3 aspect-square h-max sticky top-12">
            <Image
              src="/putin-water-proof.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
            <Image
              src="/close-up-toilet-putin-2.png"
              width={1024}
              height={1024}
              alt=""
              className="h-full w-auto aspect-square rounded-3xl"
            />
            <Image
              src="/close-up-toilet-putin.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
            <Image
              src="/putin-inside-toilet.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
          </div>
        </div>
        <div className="md:p-6 lg:p-8 xl:p-10 2xl:p-12 !pt-0 flex-col">
          <div className="my-3">
            <p>
              Ozdobne naklejki wodoodporne to doskonały sposób, aby nadać swoim
              przedmiotom osobisty i unikalny charakter. Nasze naklejki są nie
              tylko estetyczne, ale również odporne na wodę, co sprawia, że są
              idealne do ozdabiania laptopów, butelek, telefonów czy innych
              przedmiotów codziennego użytku.
            </p>
          </div>
          <span className="text-5xl">Wybierz ilość</span>

          <div className="grid grid-cols-3 mt-6 mb-3   gap-3">
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(1);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 1 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              1
            </button>
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(5);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 5 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              5
            </button>
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(10);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 10 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              10
            </button>
            <input
              type="number"
              min={10}
              value={otherQuantity === 0 ? "Podaj ilość" : otherQuantity}
              onChange={(e: any) => setOtherQuantity(e.target.value)}
              className="placeholder:text-gray-300 px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold "
              placeholder="Inna ilość..."
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold h-12 mt-4">
              {getPolishCurrency(getPrice())}
            </span>
            <span className="text-gray-500">
              Darmowa dostawa dla zamówień powyżej 50zł
            </span>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <button className="mr-3 mt-6 px-4 py-2 rounded-3xl duration-300 text-zinc-500 w-full md:w-max font-bold">
                Utwórz własną
              </button>
              <button
                onClick={() => setCheckoutOpen(true)}
                className="mt-6 px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-full md:w-max font-bold"
              >
                Zamów z dostawą
              </button>
            </div>
          </div>
          <div className="flex mt-12 flex-col">
            <h2 className="text-5xl font-bold">Cechy produktu:</h2>
            <ul>
              <li className="flex flex-col items-start mt-6">
                <div className="flex flex-row">
                  {" "}
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Wodoodporne</strong>
                </div>
                Naklejki są wykonane z wysokiej jakości materiałów, które
                zapewniają ochronę przed wilgocią i wodą. Możesz śmiało używać
                ozdobionych nimi przedmiotów nawet w deszczowe dni.
              </li>
              <li className="flex flex-col items-start mt-3">
                <div className="flex flex-row">
                  {" "}
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Estetyczny design</strong>
                </div>
                Oferujemy różnorodne wzory i kształty, które pozwolą Ci
                dopasować naklejkę do Twojego stylu. Od abstrakcyjnych motywów
                po urocze ilustracje – mamy wszystko, co potrzebne do stworzenia
                unikalnej aranżacji.
              </li>
              <li className="flex flex-col items-start mt-3">
                <div className="flex flex-row">
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Łatwe aplikowanie</strong>
                </div>
                Naklejki są łatwe do nakładania i usuwania, nie pozostawiając
                śladów ani uszkodzeń. Dzięki temu możesz zmieniać ich położenie
                i tworzyć nowe kompozycje wedle własnego uznania.
              </li>
            </ul>

            <h2 className="text-5xl font-bold mt-6">Darmowa dostawa</h2>
            <p className="mt-3">
              Zamówienia powyżej 50 złotych kwalifikują się do darmowej dostawy,
              co sprawia, że zdobienie swoich przedmiotów staje się jeszcze
              bardziej korzystne.
            </p>
            <h2 className="text-5xl font-bold mt-6">
              Własna naklejka wedle uznania{" "}
            </h2>
            <p className="mt-3">
              Oferujemy również możliwość stworzenia własnej, spersonalizowanej
              naklejki. Wystarczy przesłać nam swój projekt, a my dostarczymy Ci
              unikatową naklejkę, która idealnie odzwierciedli Twój indywidualny
              styl. Pozwól swojej kreatywności rozkwitać i nadaj swoim
              przedmiotom niepowtarzalny charakter dzięki naszym ozdobnym
              naklejkom wodoodpornym. Zamów już teraz i spraw, by codzienność
              była pełna kolorów i wyrazistych wzorów!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
