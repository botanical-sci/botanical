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
      <Header menu={data.menu.items} />

      <Container>
        <ImageSlider />
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
        <SelectedCategories />
      </Container>

      <section className="bg-neutral-100">
        <Container>
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
