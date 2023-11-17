import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.JS Hosted on EC2</title>
        <meta name="description" content="Next.JS Hosted on EC2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.JS Hosted on EC2</h1>

        <Link href="/server">Navigate to SSR page</Link>
      </main>
    </>
  );
}
