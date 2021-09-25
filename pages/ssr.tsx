import Head from 'next/head'
import ProductExampleSSRComponent from "../components/ProductExampleSSR";
import { ProductsExampleDocument, ProductsExampleQuery } from '../graphql/graphql';
import { apolloClient } from '../utils/client';

type Props = {
  ssrData: ProductsExampleQuery
}

// Server Side Rendering
export default function SSR({ ssrData }: Props) {
  return (
    <>
      <Head>
        <title>Next.js SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi I'm rendered by SSR</h1>
        <ProductExampleSSRComponent ssrData={ssrData} />
      </main>
    </>
  )
}

// Server Side Rendering
export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: ProductsExampleDocument,
    variables: {
      productCount: 20
    },

    // enable cache 
    // fetchPolicy: "no-cache
  });

  return {
    props: {
      ssrData: data
    },
  };
}