"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect({ cat }: { cat: any }) {
  const router = useRouter();
  useEffect(() => {
    router.push(`/sklep/${cat}`);
  }, []);
  return <div></div>;
}
