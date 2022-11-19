import { FC } from 'react';

import {
  Container,
  Header,
  ImageSlider,
  Perks,
  ProductList,
  SelectedCategories,
  Testimonials,
} from '@shopify/components';
import { homeStructureQuery } from '@shopify/graphql-queries';
import { HomeBasicModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';

const Index: FC<HomeBasicModel> = ({ data }) => {
  return (
    <>
      <Container paddingOnDesktop={true}>
        <ImageSlider />
      </Container>

      <section className="bg-neutral-100">
        <Container paddingOnDesktop={false}>
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
        <Container paddingOnDesktop={false}>
          <ProductList
            title={data.bestSellersProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.bestSellersProducts.handle}`}
            products={data.bestSellersProducts.products}
          />
        </Container>
      </section>

      <Container paddingOnDesktop={false}>
        <SelectedCategories />
      </Container>

      <section className="bg-neutral-100">
        <Container paddingOnDesktop={false}>
          <Testimonials />
        </Container>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await storefront<HomeBasicModel>(homeStructureQuery);

  return {
    props: {
      data,
    },
  };
}

export default Index;
