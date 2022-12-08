import 'keen-slider/keen-slider.min.css';
import './styles.css';

import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { Footer, Header } from '@shopify/components';
import { MenuBasicModel, UserResponseModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';
import { getUserByHandleQuery, menuQuery } from '@shopify/graphql-queries';
import { NextPage } from 'next';
import { useUserStore } from '@shopify/state';

interface Props extends AppProps {
  menuData: MenuBasicModel;
}

const ShopifyApp: NextPage<Props> = ({
  Component,
  pageProps,
  menuData,
}: Props) => {
  const userStore = useUserStore();
  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem('token') || sessionStorage.getItem('token')
    );
    const getUser = async () => {
      const userResponse = await storefront<UserResponseModel>(
        getUserByHandleQuery(token)
      );

      userStore.initiate(userResponse?.data?.customer);
    };
    if (token) {
      getUser();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Botanical Skin Science</title>
      </Head>
      <main className="app">
        <Header menu={menuData.menu.items} />

        <Component {...pageProps} />
        <Footer />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
      </main>
    </>
  );
};

ShopifyApp.getInitialProps = async ({ req, res }) => {
  res &&
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    );

  const data = await storefront<any>(menuQuery);

  return {
    menuData: data.data,
  } as any;
};

export default ShopifyApp;
