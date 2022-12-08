import '@fontsource/rubik';
import '@fontsource/work-sans';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import theme from 'utils/theme';

import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Origin" />
        <link rel="icon" href="/favicon.ico" />
        <title>Origin</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
