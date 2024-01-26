"use client";
import { useEffect } from "react";

export default function ClearCache() {
  useEffect(() => {
    window.localStorage.clear();
  }, []);
  return <div></div>;
}
