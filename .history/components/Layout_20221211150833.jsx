import Head from "next/head";
import React from "react";

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
      <div className="flex flex-col justify-between min-h-screen al">
        <header>
          <h1 className="text-red-500 font-bold text-2xl">
            Welcome to our CuriosityXploring
          </h1>
        </header>
        <main>{children}</main>

        <footer>smile @ curiosityxploring 2022</footer>
      </div>
    </>
  );
}
