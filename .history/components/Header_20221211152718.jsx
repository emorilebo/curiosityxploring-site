import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="">
      <Link href="/">
        <h2 className="text-orange-900 font-bold text-2xl">Curiosity</h2>
      </Link>
    </nav>
  );
}
