import { Dropdown, RadioGroup } from '@shopify/components';
import { getCollectionByHandleQuery } from '@shopify/graphql-queries';
import { SingleCollectionModel, SingleProductModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';
import ProductCard from 'libs/components/src/product-card';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';
import { Switch } from '@headlessui/react';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
interface Props {
  collection: SingleCollectionModel;
  meta: {
    total_products: number;
    in_stock: number;
    out_of_stock: number;
    min_price: number;
    max_price: number;
  };
}

const Collection: FC<Props> = ({ collection: drivedCollection, meta }) => {
  const collection = drivedCollection.data.collection;
  const pages = [
    { name: 'Collection', href: '/collections', current: false },
    {
      name: collection.title,
      href: `/collections/${collection.handle}`,
      current: true,
    },
  ];

  const renderFilterBox = () => (
    <div>
      <div className="mb-10 border-b pb-10">
        <p className="mb-5">Sort by</p>

        <RadioGroup
          onChange={(v) => {
            console.log(v);
          }}
          groupName="sort-by"
          defaultChecked="manual"
          items={[
            { key: 'manual', value: 'Featured' },
            { key: 'best-selling', value: 'Alphabetically, A-Z' },
            { key: 'title-ascending', value: 'Alphabetically, A-Z' },
            { key: 'title-descending', value: 'Alphabetically, Z-A' },
            { key: 'price-ascending', value: 'Price, low to high' },
            { key: 'price-descending', value: 'Price, high to low' },
            { key: 'created-ascending', value: 'Date, old to new' },
            { key: 'created-descending', value: 'Date, new to old' },
          ]}
        />
      </div>

      <div className="mb-5 border-b pb-10">
        <p className="mb-5">Availability</p>

        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={true}
            //onChange={setEnabled}
            className={classNames(
              true ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-0 focus:ring-offset-0'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                true ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3">
            <span className="text-sm font-medium text-gray-900">In Stock</span>
            <span className="text-sm text-gray-500">({meta.in_stock})</span>
          </Switch.Label>
        </Switch.Group>
        <Switch.Group as="div" className="flex items-center mt-5">
          <Switch
            disabled={meta.out_of_stock === 0}
            checked={false}
            //onChange={setEnabled}
            className={classNames(
              false ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-0 focus:ring-offset-0'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                false ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3">
            <span className="text-sm font-medium text-gray-900">
              Our of stock{' '}
            </span>
            <span className="text-sm text-gray-500">({meta.out_of_stock})</span>
          </Switch.Label>
        </Switch.Group>
      </div>
    </div>
  );

  const renderProducts = () =>
    collection.products.nodes.map((p) => (
      <ProductCard key={p.id} product={p} />
    ));

  return (
    <div>
      <Head>
        <title>{collection.title} | Botanical Skin Science</title>
      </Head>
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl">{collection.title}</h1>
        <nav className="flex mt-3" aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center justify-center space-x-2"
          >
            <li>
              <div>
                <Link href="/">
                  <a className="text-xs font-thin hover:text-gray-700">Home</a>
                </Link>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-3 w-3 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  {page.current && (
                    <span className={'ml-3 text-xs font-thin'}>
                      {page.name}
                    </span>
                  )}
                  {!page.current && (
                    <Link href={page.href}>
                      <a
                        className={'ml-3 text-xs font-thin hover:text-gray-700'}
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <hr className="mt-10 mb-10" />

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">{renderFilterBox()}</div>
          <div className="grid grid-cols-3 gap-5 col-span-9">
            {renderProducts()}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const slug = context.params.slug;

  const query = context.query;

  const filters = {
    availability: query.availability ? query.availability : '1',
    sort_by: query.sort_by ? query.sort_by : 'manual',
    price_min: query.price_min ? query.price_min : '0',
    price_max: query.price_max ? query.price_max : '99999',
  }

  console.log(filters);

  const collection = await storefront<SingleCollectionModel>(
    getCollectionByHandleQuery(slug as string)
  );

  const products = collection.data.collection.products.nodes;
  let MAX_PRICE = 0;
  let availableProducts = 0;
  const totalProducts = products.length;

  products.forEach((p) => {
    if (+p.priceRange.maxVariantPrice.amount > MAX_PRICE)
      MAX_PRICE = +p.priceRange.maxVariantPrice.amount;

    if (p.availableForSale) availableProducts += 1;
  });

  return {
    props: {
      collection,
      meta: {
        total_products: totalProducts,
        in_stock: availableProducts,
        out_of_stock: totalProducts - availableProducts,
        min_price: 0,
        max_price: MAX_PRICE,
      },
    },
  } as any;
};

export default Collection;
