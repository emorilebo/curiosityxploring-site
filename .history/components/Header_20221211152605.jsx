import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="">
      <Link href="/">
        <h2>Curiosity</h2>
      </Link>
    </nav>
  );
}
