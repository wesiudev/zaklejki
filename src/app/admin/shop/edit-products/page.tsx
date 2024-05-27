"use client";
import Product from "@/components/AdminComponents/Product";
import { app } from "@/firebase";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "../../../../../types";

export default function EditProducts() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    const ref = collection(getFirestore(app), "quixy");
    const unsub = onSnapshot(ref, (querySnapshot: any) => {
      const snapshotData: any[] = [];
      querySnapshot.forEach((doc: any) => {
        snapshotData.push(doc.data());
      });
      setProducts(snapshotData);
    });
  }, []);

  return (
    <div className="grid grid-cols-5 text-white overflow-y-scroll h-screen">
      {products &&
        products[0]?.products?.map((item: IProduct, i: any) => (
          <Product product={item} key={i} />
        ))}
    </div>
  );
}
