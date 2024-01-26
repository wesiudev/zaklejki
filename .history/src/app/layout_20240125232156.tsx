import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Putin w muszli klozetowej | Zaklejki.pl",
  description:
    "wykonane z wysokiej jakości materiałów. Możesz śmiało używać ozdobionych nimi przedmiotów nawet w deszczowe dni.",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
