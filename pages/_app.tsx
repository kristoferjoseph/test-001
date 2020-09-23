import React from 'react'
import '../styles/index.css'
//adding global css.
import { ApolloProvider } from '@apollo/react-hooks';
import { createApolloClient } from '../api/client';
import "animate.css/animate.min.css";
import Head from 'next/head'
import Metas from '../meta'

export default function MyApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <>
    <Head>
      {Metas.map((m, i) => <React.Fragment key={i}>{m}</React.Fragment>)}
    </Head>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
}
