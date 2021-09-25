import Link from 'next/link'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../utils/client';

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={apolloClient}>
    <>
      <ul>
        <li>
          <Link href="/csr">CSR</Link>
        </li>
        <li>
          <Link href="/ssr">SSR</Link>
        </li>
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          {/* Disable ISR when the Link component is displayed in a screen. */}
          <Link href="/isr" prefetch={false}>ISR</Link>
        </li>

        <noscript>JavaScript is currently disabeld.</noscript>
      </ul>
      <Component {...pageProps} />
    </>
  </ApolloProvider>
}

export default MyApp
