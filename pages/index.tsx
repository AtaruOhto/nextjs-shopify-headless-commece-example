import Head from 'next/head'
import ProductExampleSSRComponent from "../components/ProductExampleSSR";
import { ProductsExampleDocument, ProductsExampleQuery } from '../graphql/graphql';
import { apolloClient } from '../utils/client';

type Props = {
  ssrData: ProductsExampleQuery
}

export default function Home({ ssrData }: Props) {
  return (
    <>
      <Head>
        <title>Next.js SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductExampleSSRComponent ssrData={ssrData} />
      </main>
    </>
  )
}

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