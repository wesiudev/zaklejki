import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Putin toaletowy wodoodporny | Zaklejki.pl",
  description:
    "Wykonane z wysokiej jakości materiałów. Możesz śmiało używać ozdobionych nimi przedmiotów nawet w deszczowe dni.",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center mt-[80px] px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      {children}
    </div>
  );
}
