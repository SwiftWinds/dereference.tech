import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Nav from "../components/Nav";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Dereference - decentralized reference for developers</title>
      </Head>
      <UserProvider>
        <Nav />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
