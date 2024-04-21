import Footer from "@/components/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white overflow-hidden">{children}</div>;
}
