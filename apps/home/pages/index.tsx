import { FC } from 'react';

import {
  CategoriesList,
  Container,
  HeaderHero,
  Perks,
  ProductList,
} from '@shopify/components';
import { homeStructureQuery } from '@shopify/graphql-queries';
import { HomeBasicModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';

const products = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '/product/leather-long-wallet',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '/product/leather-long-wallet1',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '/product/leather-long-wallet2',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '/product/leather-long-wallet3',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
];


const Index: FC<HomeBasicModel> = ({data}) => {
  console.log(data);
  return (
    <>
      <Container>
        <HeaderHero />
      </Container>
      <section className="bg-neutral-100">
        <Container>
          <ProductList
            title={data.trendingProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.trendingProducts.handle}`}
            products={data.trendingProducts.products}
          />
        </Container>
      </section>
      <Perks />
      <section className="bg-neutral-100">
        <Container>
          <ProductList
            title={data.bestSellersProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.bestSellersProducts.handle}`}
            products={data.bestSellersProducts.products}
          />
        </Container>
      </section>

      <Container>
        <CategoriesList />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await storefront<HomeBasicModel>(homeStructureQuery);

  return {
    props: {
      data
    },
  };
}

export default Index;
