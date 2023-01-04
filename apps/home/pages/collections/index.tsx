import { getCollections } from '@shopify/graphql-queries';
import { CollectionsListModel, CollectionsModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';
import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/future/image';
import { Breadcrumb } from '@shopify/components';

interface Props {
  collections: CollectionsModel[];
}

const Collections: FC<Props> = ({ collections }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1432px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>
          <Breadcrumb
            list={[
              {
                current: true,
                href: '/collections',
                name: 'Collections',
              },
            ]}
          />

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {collections.map((c) => (
              <div key={c.handle} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  {c.image && (
                    <Image
                      src={c.image.url}
                      alt={c.image.altText}
                      width={300}
                      height={330}
                    />
                  )}
                </div>
                <h3 className="mt-6 font-semibold text-gray-900">
                  <Link href={`/collection/${c.handle}`}>
                    <a>
                      <span className="absolute inset-0" />
                      {c.title}
                    </a>
                  </Link>
                </h3>
                <div
                  className="text-based text-justify text-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: c.descriptionHtml }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const collections = await storefront<CollectionsListModel>(getCollections);

  return {
    props: {
      collections: collections.data.collections.nodes,
    },
    revalidate: 300,
  } as any;
}

export default Collections;
