import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Home from "../components/Home";

export default function Home() {
  return (
    <Layout title="Welcome to Curiosity Amazing community">
      <Home />
    </Layout>
  );
}
