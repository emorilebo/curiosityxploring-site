import Head from "next/head";
import Image from "next/image";
import HomeScreen from "../components/HomeScreen";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="">
      <Layout title="Welcome to Curiosity Amazing community">
        <HomeScreen/>
      </Layout>
    </div>
  );
}
