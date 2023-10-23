import "../styles/globals.css";
import Layout from "../components/misc/layout";
import type { AppProps } from "next/app";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
        return (
            <>
                <Head>
                    <title>Hi! Im Luna</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
}