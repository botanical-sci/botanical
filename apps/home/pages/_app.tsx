import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import {
  Footer,
  Header,
} from '@shopify/components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} toastOptions={{duration: 5000 , style: {fontSize: 18}}} />
      </main>
    </>
  );
}

export default CustomApp;
