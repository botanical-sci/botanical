import 'keen-slider/keen-slider.min.css';
import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { Footer } from '@shopify/components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Botanical Skin Science</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} toastOptions={{duration: 5000}} />
      </main>
    </>
  );
}

export default CustomApp;
