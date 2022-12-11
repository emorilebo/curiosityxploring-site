import Head from 'next/head'
import React from 'react'

const Layout = () => {
  return (
    <>
     <Head>
        <title>
          Curiosityxploring - Amazing global community of worldbest developer
        </title>
        <meta name="description" content="Developer community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <header><h1 className="text-red-500 font-bold text-2xl">
        Welcome to our CuriosityXploring
      </h1></header>
            <main>main</main>
            <footer>smile @ curiosityxploring </footer>
        </div>
    </>
  )
}

export default Layout