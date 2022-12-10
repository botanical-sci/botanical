/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { CheckCircleIcon } from '@heroicons/react/solid';

const orders = [
  {
    number: 'WU88191111',
    href: '#',
    invoiceHref: '#',
    createdDate: 'Jul 6, 2021',
    createdDatetime: '2021-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$160.00',
    products: [
      {
        id: 1,
        name: 'Micro Backpack',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      {
        id: 1,
        name: 'Micro Backpack',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      // More products...
    ],
  },
  // More orders...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const OrderDetails = () => {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <h2 className="sr-only">Recent orders</h2>
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8 px-4 lg:max-w-4xl lg:px-0">
            {orders.map((order) => (
              <div
                key={order.number}
                className="bg-white border-t border-b border-gray-200 shadow-sm rounded-lg border"
              >
                <h3 className="sr-only">
                  Order placed on{' '}
                  <time dateTime={order.createdDatetime}>
                    {order.createdDate}
                  </time>
                </h3>

                <div className="flex items-center p-4 border-b border-gray-200 sm:p-6">
                  <dl className="flex-1 flex flex-wrap flex-col md:flex-row justify-between gap-x-6 text-sm divide-y divide-gray-200 space-y-4 md:divide-y-0 md:space-y-0">
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">
                        Order number
                      </dt>
                      <dd className="sm:mt-1 text-gray-500">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="sm:mt-1 text-gray-500">
                        <time dateTime={order.createdDatetime}>
                          {order.createdDate}
                        </time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">PAYMENT</dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">FULFILLMENT</dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">
                        Total amount
                      </dt>
                      <dd className="sm:mt-1 font-medium text-gray-900">
                        {order.total}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Products */}
                <h4 className="sr-only">Items</h4>
                <ul role="list" className="divide-y divide-gray-200">
                  {order.products.map((product) => (
                    <li key={product.id} className="p-4 sm:p-6">
                      <div className="flex items-center sm:items-start">
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="flex-1 ml-6 text-sm">
                          <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                            <h5>{product.name}</h5>
                            <p className="mt-2 sm:mt-0">{product.price}</p>
                          </div>
                          <p className="hidden text-gray-500 sm:block sm:mt-2">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 sm:flex sm:justify-between">
                        <div className="flex items-center">
                          <CheckCircleIcon
                            className="w-5 h-5 text-green-500"
                            aria-hidden="true"
                          />
                          <p className="ml-2 text-sm font-medium text-gray-500">
                            Delivered on{' '}
                            <time dateTime={order.deliveredDatetime}>
                              {order.deliveredDate}
                            </time>
                          </p>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                          <div className="flex-1 flex justify-center">
                            <a
                              href={product.href}
                              className="text-indigo-600 whitespace-nowrap hover:text-indigo-500"
                            >
                              View product
                            </a>
                          </div>
                          <div className="flex-1 pl-4 flex justify-center">
                            <a
                              href="#"
                              className="text-indigo-600 whitespace-nowrap hover:text-indigo-500"
                            >
                              Buy again
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
