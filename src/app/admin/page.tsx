import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Panel administracyjny",
};
export default function Admin() {
  return <div className="grid grid-cols-4"></div>;
}
