import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Curiosity Community"}</title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen bg-blue-100">
        <header>
          <Header/>
        </header>
        <main>{children}</main>
        <footer clas>smile @ curiosityxploring 2022</footer>
      </div>
    </>
  );
};

export default Layout;
