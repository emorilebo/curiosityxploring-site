import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="">
      <Link href="/">
        <img src="/images/" alt="" />
      </Link>
    </nav>
  );
}
