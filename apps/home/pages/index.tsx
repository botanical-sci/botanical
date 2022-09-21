import {
  CategoriesList,
  Container,
  HeaderHero,
  Perks,
  ProductList,
} from '@shopify/components';

const products = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
];
export function Index() {
  return (
    <>
      <Container>
        <HeaderHero />
      </Container>
      <section className="bg-neutral-100">
        <Container>
          <ProductList
            title="Trending products"
            moreText="Shop the collection"
            products={products}
          />
        </Container>
      </section>
      <Perks />
      <section className="bg-neutral-100">
        <Container>
          <ProductList
            title="Best Sellers"
            moreText="Shop the collection"
            products={products}
          />
        </Container>
      </section>

      <Container>
        <CategoriesList />
      </Container>
    </>
  );
}

export default Index;
