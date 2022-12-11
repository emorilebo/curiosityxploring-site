import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
     <Layout></Layout>
      <h1 className="text-red-500 font-bold text-2xl">
        Welcome to our CuriosityXploring
      </h1>
      <p className="p-5">This is the newsest update</p>
    </div>
  );
}
