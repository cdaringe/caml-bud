import Head from "next/head";
import { BorderWalk } from "../src/components/border-walk";
import { CamlWalker } from "../src/components/caml-walker";

export default function Home() {
  return (
    <>
      <Head>
        <title>CAML Bud</title>
        <meta name="description" content="caml buds being best buds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BorderWalk walkId="caml">
        <CamlWalker id="caml" style={{ width: 120 }} scale={0.2} />
      </BorderWalk>
    </>
  );
}
