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
        <h2 className="font-medium -tracking-5 font-noto text-center pr-[45px] pl-[45px] text-52 md:text-150 text-dark mt-[110px] mb-[110px]">
          Enjoy the Science behind Nature
        </h2>
      </Container>

      <Container paddingOnDesktop={false}>
        <ProductList
          title={data.trendingProducts.title}
          moreText="Shop the collection"
          moreUrl={`/collection/${data.trendingProducts.handle}`}
          products={data.trendingProducts.products}
          badge="TRENDING"
        />
      </Container>
      <Perks />
      <section className="bg-white pt-20 pb-5">
        <Container paddingOnDesktop={false}>
          <ProductList
            title={data.bestSellersProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.bestSellersProducts.handle}`}
            products={data.bestSellersProducts.products}
            badge="BEST SELLER"
          />
        </Container>
      </section>

      <section className="bg-white pt-5 pb-1">
        <Container paddingOnDesktop={false}>
          <SelectedCategories />
        </Container>
      </section>

      <section className="bg-neutral-100">
          <Testimonials />
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
