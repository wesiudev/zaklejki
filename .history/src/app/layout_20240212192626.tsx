import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";

import SessionHandler from "@/components/SessionHandler";
import StoreProvider from "@/redux/Provider";
import Toast from "@/components/Toast";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} ${druk.variable} mt-[70px] px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32`}
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
