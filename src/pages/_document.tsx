import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Hi! Im Luna" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}