import Head from 'next/head'
import ProductExampleCSRComponent from "../components/ProductExampleCSR";

// CSR Only
export default function CSR() {
  return (
    <>
      <Head>
        <title>Next.js CSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi the server didn't pass data to the client.</h1>
        <ProductExampleCSRComponent />
      </main>
    </>
  )
}
