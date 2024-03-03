"use client";
import { usePathname } from "next/navigation";

export default function LayoutPadding({
  children,
}: {
  children: React.ReactNode;
}) {
  const patnhname = usePathname();
  function isPadding() {
    const noPaddingPathnames = ["/tworzenie-naklejek", "/admin"];
    if (noPaddingPathnames.includes(patnhname)) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div
      className={`${isPadding() && "px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32"}`}
    >
      {children}
    </div>
  );
}
