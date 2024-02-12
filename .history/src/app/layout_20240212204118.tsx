import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";
import SessionHandler from "@/components/SessionHandler";
import StoreProvider from "@/redux/Provider";
import Toast from "@/components/Toast";
import PrepareCart from "./sklep-z-naklejkami/components/PrepareCart";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${druk.variable} ${cocosharp.variable} font-coco mt-[70px] px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32`}
      >
        {" "}
        <StoreProvider>
          <Toast />
          <Header />
          <PrepareCart />
          <SessionHandler />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
const druk = localFont({
  src: "../../public/fonts/Druk-wide.ttf",

  variable: "--font-druk",
});
const cocosharp = localFont({
  src: "../../public/fonts/Regular.ttf",

  variable: "--font-cocosharp",
});