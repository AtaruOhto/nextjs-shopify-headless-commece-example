import Head from 'next/head'
import ProductExampleSSGComponent from "../components/ProductExampleSSG";
import { ProductsExampleDocument, ProductsExampleQuery } from '../graphql/graphql';
import { apolloClient } from '../utils/client';

type Props = {
  ssgData: ProductsExampleQuery
}

// Static Site Generation
export default function SSG({ ssgData }: Props) {
  return (
    <>
      <Head>
        <title>Next.js SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi I'm rendered by SSG and will be refreshed by ISR</h1>
        <ProductExampleSSGComponent ssgData={ssgData} />
      </main>
    </>
  )
}

// Static Site Generation

/* This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in */
export async function getStaticProps(_context) {
  const { data } = await apolloClient.query({
    query: ProductsExampleDocument,
    variables: {
      productCount: 20
    },
  });

  console.log("hello I'm revalidated on the server!")

  return {
    props: {
      ssgData: data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds    
  };
}