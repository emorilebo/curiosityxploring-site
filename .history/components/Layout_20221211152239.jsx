import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + " - Curiosityxploring"
            : "Curiosityxploring - Amazing global community of worldbest developer"}
        </title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen text-center  bg-gradient-to-r from-orange-600 via-orange-200 to-yellow-900">
        <header>
          <Header
        </header>
        <main>{children}</main>

        <footer>smile @ curiosityxploring 2022</footer>
      </div>
    </>
  );
}
