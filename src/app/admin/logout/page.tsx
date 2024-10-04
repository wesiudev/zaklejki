"use client";

import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    signOut(auth).then(() => redirect("/admin"));
  }, []);
  return;
}
