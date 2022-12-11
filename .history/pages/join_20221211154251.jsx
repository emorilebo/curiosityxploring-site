import Head from "next/head";
import React from "react";

export default function join() {
  return <>
   <Head>
        <title>
          {title
            ? title + " - Curiosityxploring"
            : "Curiosityxploring - Amazing global community of worldbest developer"}
        </title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>

    </div>
  </>;
}
