import Head from "next/head";
import Home from "@/pages/home";

export default function app() {
  return (
    <div className="bg-gray-950 min-h-screen font-primary">
      <Head>
        <title>AbandonTech</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://AbandonTech.cloud" />
        <meta property="og:title" content="AbandonTech" />
        <meta name="description" content="Custom solutions for your business" key="desc" />
        <meta property="og:description" content="We provide custom solutions for individuals and businesses looking to leverage technology to improve their experience." />
        <meta property="twitter:title" content="AbandonTech" />
        <meta property="og:site_name" content="AbandonTech" />
        <meta name="theme-color" content="#f59e0b" />

      </Head>

      <Home />
    </div>
  )
}
