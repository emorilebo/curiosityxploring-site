import React from "react";

export default function Layout({children}) {
  return (
    <>
      <div>
        <header>
          <h1 className="text-red-500 font-bold text-2xl">
            Welcome to our CuriosityXploring website
          </h1>
        </header>
        <main>{children}</main>

        <footer>Footer</footer>
      </div>
    </>
  );
}
