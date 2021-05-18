import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
