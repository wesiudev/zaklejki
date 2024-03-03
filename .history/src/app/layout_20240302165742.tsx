import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";

import SessionHandler from "@/components/SessionHandler";
import StoreProvider from "@/redux/Provider";
import Toast from "@/components/Toast";
import PrepareCart from "./sklep/components/PrepareCart";
import Footer from "@/components/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${druk.variable}`}>
        {" "}
        <StoreProvider>
          <Toast />
          <Header />
          <PrepareCart />
          <SessionHandler />
          <LayoutPadding>{children}</LayoutPadding>
          <Footer />
        </StoreProvider>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YY7NKD2K0W"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YY7NKD2K0W');
          `}
        </Script>
      </body>
    </html>
  );
}
const druk = localFont({
  src: "../../public/fonts/Druk-wide.ttf",

  variable: "--font-druk",
});
