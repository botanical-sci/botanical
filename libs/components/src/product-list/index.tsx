import { FC } from 'react';

import Link from 'next/link';

import { ProductsModel } from '@shopify/models';

import ProductCard from '../product-card';

interface Props {
  title: string;
  moreText: string;
  moreUrl: string;
  products: ProductsModel;
}

const ProductList: FC<Props> = ({ title, moreText, moreUrl, products }) => {
  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-86">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <Link href={moreUrl}>
          <a
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            {moreText}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-2 xs:gap-y-1 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products.nodes.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-sm md:hidden">
        <Link href={moreUrl}>
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
            {moreText}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
