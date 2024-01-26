"use client";

import { useRouter } from "next/navigation";
import { userAgent } from "next/server";

export default function Page() {
  const router = useRouter();
  router.push("/");
  return (
    <div className="bg-white text-black min-h-screen flex flex-col-reverse font-coco"></div>
  );
}
