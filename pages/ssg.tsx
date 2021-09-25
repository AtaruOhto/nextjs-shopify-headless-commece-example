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
        <h1>Hi I'm rendered by SSG</h1>
        <ProductExampleSSGComponent ssgData={ssgData} />
      </main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps(_context) {
  const { data } = await apolloClient.query({
    query: ProductsExampleDocument,
    variables: {
      productCount: 20
    },
  });

  return {
    props: {
      ssgData: data
    },
  };
}