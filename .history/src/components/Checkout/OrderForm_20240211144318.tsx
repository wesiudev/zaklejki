import Link from "next/link";

export default function OrderForm({
  formErrors,
  customerInfo,
  handleChange,
  setCustomerInfo,
}: {
  formErrors: any;
  customerInfo: any;
  handleChange: any;
  setCustomerInfo: any;
}) {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6"
      >
        <div className="flex flex-col">
          <h2 className="text-xl mb-3 text-white font-bold">Dane do wysyłki</h2>
          <label
            htmlFor="city"
            className="mb-2 text-sm flex flex-row items-center text-white"
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
            className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
            required
          />

          <label
            htmlFor="postalCode"
            className="mb-2 text-sm flex flex-row items-center text-white"
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
            className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
            required
          />

          <label
            htmlFor="street"
            className="mb-2 text-sm flex flex-row items-center text-white"
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
            className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
            required
          />

          <label
            htmlFor="houseNumber"
            className="mb-2 text-sm flex flex-row items-center text-white"
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
            className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
            required
          />
        </div>
        <div className="">
          <div className="flex flex-col">
            <h2 className="text-xl mb-3 text-white font-bold">
              Dane kontaktowe
            </h2>

            <label
              htmlFor="firstName"
              className="mb-2 text-sm flex flex-row items-center text-white"
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
              className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-2 text-sm flex flex-row items-center text-white"
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
              className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="mb-2 text-sm flex flex-row items-center text-white"
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
              className="border border-gray-400 rounded-md px-2 py-1 mb-4 text-black"
              required
            />
          </div>
        </div>
      </form>{" "}
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
          <div className="ml-2 flex flex-row items-center flex-wrap text-white">
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
    </>
  );
}
