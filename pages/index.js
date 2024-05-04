import Head from "next/head";
import Intro from "../components/Intro/intro.js";
import Tech from "../components/Tech/tech.js";
import Service from "../components/Services/service.js";
import Portfolio from "../components/Portfolio/Portfolio.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sudipto Kumar Mitra Portfolio</title>
        <meta name="description" content="Sudipto Kumar Mitra Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Intro />
        <Tech />
        <Service />
        <Portfolio />
      </section>
    </>
  );
}
