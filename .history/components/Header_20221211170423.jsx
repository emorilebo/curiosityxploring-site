import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-white p-3 shadow-xl flex  align-middle item-center justify-between">
      <Link>
        <img className="h-10 w-10" src="/images/curiositylogo.png" alt="" />
      </Link>
      <Link href="/join">
        <div className="text-orange-600 font-bold text-lg">Join</div>
      </Link>
    </nav>
  );
};

export default Header;
