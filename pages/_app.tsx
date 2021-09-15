import Link from 'next/link'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../utils/client';

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={apolloClient}>
    <>
      <ul>
        <li>
          <Link href="/">SSR</Link>
        </li>
        <li>
          <Link href="/csr">CSR</Link>
        </li>
        <noscript>JavaScript is currently disabeld.</noscript>
      </ul>
      <Component {...pageProps} />
    </>
  </ApolloProvider>
}

export default MyApp
