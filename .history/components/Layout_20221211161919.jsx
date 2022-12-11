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
            <header>header</header>
            <main>main</main>
            <footer>footer</footer>
        </div>
    </>
  )
}

export default Layout