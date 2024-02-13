export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center mt-[80px] px-4 md:px-8  xl:px-20 2xl:px-32">
      {children}
    </div>
  );
}
