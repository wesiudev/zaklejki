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
import LayoutPadding from "@/components/LayoutPadding";
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
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1412218822832669');
            fbq('track', 'PageView');
            </script>
            <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1412218822832669&ev=PageView&noscript=1"
/>`}
        </Script>
      </body>
    </html>
  );
}
const druk = localFont({
  src: "../../public/fonts/Druk-wide.ttf",

  variable: "--font-druk",
});
