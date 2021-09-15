import Head from 'next/head'
import ProductExampleCSRComponent from "../components/ProductExampleCSR";

export default function CSR() {
  return (
    <>
      <Head>
        <title>Next.js CSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductExampleCSRComponent />
      </main>
    </>
  )
}
