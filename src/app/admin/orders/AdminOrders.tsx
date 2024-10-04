import moment from "moment";
import "moment/locale/pl";

export default function AdminOrders({ orders }: { orders: any }) {
  const newOrders = orders?.map((order: any) => ({
    ...order,
    ...order.metadata,
    customerInfo: JSON.parse(order.metadata.customerInfo),
  }));

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <div className="flex flex-col pt-24 px-3 lg:px-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Twoje zamówienia
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-6 gap-4">
        {newOrders?.map((session: any, i: any) => (
          <div key={i} className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">
                {session?.metadata?.productName}
              </h2>
              <div className="flex items-center ml-2">
                <p className="text-gray-500">
                  {session?.payment_status === "paid" ? (
                    <span className="bg-green-400 p-2 text-white font-bold rounded-lg">
                      opłacone
                    </span>
                  ) : (
                    <span className="bg-red-400 p-2 text-white font-bold rounded-lg">
                      nieopłacone
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mt-3">
                <p className="text-gray-500">
                  Suma: {session?.amount_total / 100}PLN
                </p>
                <p className="text-gray-500">
                  {moment(session?.created * 1000).format(
                    "MMMM Do YYYY hh:mm:ss"
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-500">
                <span className="font-bold"> Dane do wysyłki:</span>
                <div className="grid grid-cols-2 w-[400px]">
                  {`${session?.customerInfo.firstName} ${session?.customerInfo.lastName}`}

                  <div className="">
                    {`${session?.customerInfo.street} ${session?.customerInfo.houseNumber}`}
                  </div>
                  <div className="">
                    {`${session?.customerInfo.postalCode} ${session?.customerInfo.city}`}
                  </div>
                  <div className="">
                    {`Tel: ${session?.customerInfo.phoneNumber}`}
                  </div>
                  <div className="">{session.customer_details?.email}</div>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
