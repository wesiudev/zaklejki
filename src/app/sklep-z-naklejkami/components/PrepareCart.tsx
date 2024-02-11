"use client";
import { prepareCart } from "@/redux/slices/shopSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PrepareCart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(prepareCart());
  }, []);
  return <div className="absolute left-0 top-0"></div>;
}
