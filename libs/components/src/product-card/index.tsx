import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProductModel } from '@shopify/models';
import { truncateString } from '@shopify/utilities';
import { IconShoppingCartPlus } from '@tabler/icons';

interface Props {
  product: ProductModel;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="group relative rounded-md block">
      <Link href={`/product/${product.handle}`}>
        <a className="relative rounded-md block  bg-white  p-1 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-slate-200 transition-all duration-300 ">
          <div className="w-full overflow-hidden rounded-md relative lg:h-72 xl:h-80 ">
            <Image
              width={278}
              height={320}
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-2 py-1">
            <h3 className="text-sm text-gray-700" style={{ minHeight: 45 }}>
              {truncateString(product.title, 40)}
            </h3>
            <div className="flex justify-between mt-2 items-center">
              <p className="mt-1 text-md font-medium text-gray-900">
                ${product.priceRange.minVariantPrice.amount}
              </p>
              <button
                type="button"
                className="px-2 py-2 flex gap-2 items-center font-light text-xs border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <IconShoppingCartPlus size={16} />
                <span className="hidden md:block lg:block">Add to cart</span>
              </button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
