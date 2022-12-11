import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex just bg-white shadow-lg p-3">
      <Link href="/">
        <img className="h-10 w-10" src="/images/curiositylogo.png" alt="" />
      </Link>
      <Link href="/">
        <p className="text-orange-600 font-bold text-xl">Join</p>
      </Link>
    </nav>
  );
}
