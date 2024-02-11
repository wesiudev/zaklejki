import Header from "@/components/Header";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <Header />
      {children}
    </div>
  );
}
