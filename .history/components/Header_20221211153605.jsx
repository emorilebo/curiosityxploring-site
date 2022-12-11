import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="">
      <Link href="/">
        <img className="" src="/images/curiositylogo.png" alt="" />
      </Link>
    </nav>
  );
}
