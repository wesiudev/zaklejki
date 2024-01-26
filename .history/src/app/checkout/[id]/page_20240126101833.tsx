import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ClearCache from "./ClearCache";

export default async function Checkout({ params }: { params: { id: string } }) {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe/orders?secret=${process.env.API_SECRET_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  ).then((res) => res.json());
  const order = orders?.data?.find(
    (order: any) => order.metadata.id === params.id
  );
  if (!order) {
    return (
      <div className="bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-300 flex flex-col items-center justify-center text-white h-screen absolute left-0 top-0 w-screen">
        <h1 className="text-3xl font-bold text-center">
          Nie znaleziono zamówienia
        </h1>
        <Link
          href="/"
          className="text-white font-bold text-xl flex flex-row items-center relative z-50"
        >
          <FaArrowLeft className="mr-2" />
          Powrót
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-300 p-5 lg:p-7 xl:p-12 text-center">
      <Link
        href="/"
        className="text-white font-bold text-xl flex flex-row items-center relative z-50"
      >
        <FaArrowLeft className="mr-2" />
        Powrót
      </Link>
      <div className="text-white text-2xl mt-4">
        {order.metadata.productName}
      </div>
      <div className="flex flex-col items-center justify-center text-white h-screen absolute left-0 top-0 w-screen">
        {order.payment_status === "paid" && (
          <>
            <ClearCache />
            <h1 className="text-3xl font-bold text-center">
              Dziękujemy za zakupy!
            </h1>
            <h2 className="text-xl font-bold text-center my-2">
              Twój numer zamówienia:{" "}
              <span className="text-green-400">{order.metadata.id}</span>
            </h2>
            <p className="text-center">
              W razie pytań prosimy o kontakt na adres:{" "}
              <Link
                href="mailto:zaklejkishop@gmail.com"
                className="underline text-blue-400"
              >
                zaklejkishop@gmail.com
              </Link>
            </p>
          </>
        )}
        {order.payment_status === "unpaid" && (
          <>
            {" "}
            <h1 className="text-3xl font-bold text-center">
              Płatność nie powiodła się
            </h1>
            <h2 className="text-xl font-bold text-center my-2">
              Twój numer zamówienia:{" "}
              <span className="text-red-400">{order.metadata.id}</span>
            </h2>
            <span>
              Spróbuj ponowić płatność tutaj:{" "}
              <Link href={order.url} className="text-blue-400">
                Przejdź do płatności
              </Link>
            </span>
            <p className="text-center mt-2">
              W razie pytań prosimy o kontakt na adres:{" "}
              <Link
                href="mailto:zaklejkishop@gmail.com"
                className="underline text-blue-400"
              >
                zaklejkishop@gmail.com
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
