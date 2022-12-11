import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Curiosityxploring - Amazing global community of worldbest developer
        </title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-red-500 font-bold text-2xl">
        Welcome to our CuriosityXploring
      </h1>
      <p className="p-5">This is the newsest update</p>
    </div>
  );
}
