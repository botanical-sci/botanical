import { FC } from 'react';
import Image from 'next/future/image';

import {
  Container,
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
      <Container className="pt-28">
        <h2 className="font-medium -tracking-5 font-noto text-center pr-[45px] pl-[45px] text-52 md:text-150 text-dark">
          Enjoy the Science behind Nature
        </h2>
      </Container>

      <Container className="py-24">
        <ProductList
          title={data.trendingProducts.title}
          moreText="Shop the collection"
          moreUrl={`/collections/${data.trendingProducts.handle}`}
          products={data.trendingProducts.products}
          badge="TRENDING"
        />
      </Container>
      <section className="bg-lightest py-24">
        <Perks />
      </section>
      <Container className="py-24">
        <ProductList
          title={data.bestSellersProducts.title}
          moreText="Shop the collection"
          moreUrl={`/collections/${data.bestSellersProducts.handle}`}
          products={data.bestSellersProducts.products}
          badge="BEST SELLER"
        />
      </Container>

      <div className="bg-lightest py-20">
        <SelectedCategories />
      </div>

      <div className="pt-24 pb-56">
        <Testimonials />
      </div>

      <div className="bg-dark">
        <Container>
          <div className=" text-white grid grid-cols-1 md:grid-cols-2 h-auto md:h-[672px] gap-20 p-3 md:p-0">
            <div className="flex flex-col justify-center gap-6">
              <h5 className="font-noto text-[#e5e8f0] text-52 font-light">
                Healthy Skincare
              </h5>
              <p className="font-normal text-lg text-[#e5e8f0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pretium pellentesque nibh eget venenatis. Sed volutpat, purus eu
                pellentesque lobortis, nulla erat fermentum ligula, non dictum
                odio nisl eget velit.
              </p>
            </div>
            <div className="flex flex-col justify-center mt-20 md:mt-0">
              <Image
                src="/images/footer-cover.jpeg"
                className="rounded-xl -mt-[30%]"
                width={640}
                height={640}
                alt="Botanical Skin Care"
              />
            </div>
          </div>
        </Container>
      </div>
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
