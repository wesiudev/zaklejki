"use client";

import { useRouter } from "next/router";
import { userAgent } from "next/server";

export default function Page() {
  const router = useRouter();
  router.push("/");
  return <div></div>;
}
