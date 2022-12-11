import Head from "next/head";
import React from "react";

const Layout = ({children, }) => {
  return (
    <>
      <Head>
        <title>
          Curiosityxploring - Amazing global community of worldbest developer
        </title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen bg-blue-100">
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
};

export default Layout;
