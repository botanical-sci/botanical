import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useOrderStore } from '@shopify/state';

const OrderDetails: FC = () => {
  const router = useRouter();
  const orderStore = useOrderStore();
  useEffect(() => {
    orderStore.getOrder(
      `gid://shopify/Order/${router.query.id}?key=${router.query.key}`
    );
  }, []);

  const datePlaced = new Date(orderStore.order?.processedAt).toDateString();

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <h2 className="sr-only">Recent orders</h2>
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8 px-4 lg:max-w-4xl lg:px-0">
            <div className="bg-white border-t border-b border-gray-200 shadow-sm rounded-lg border">
              <h3 className="sr-only">
                Order placed on <time dateTime={datePlaced}>{datePlaced}</time>
              </h3>

              <div className="flex items-center p-4 border-b border-gray-200 sm:p-6">
                <dl className="flex-1 flex flex-wrap flex-col md:flex-row justify-between gap-x-6 text-sm divide-y divide-gray-200 space-y-4 md:divide-y-0 md:space-y-0">
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">Order number</dt>
                    <dd className="sm:mt-1 text-gray-500">
                      {orderStore.order?.orderNumber}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="sm:mt-1 text-gray-500">
                      <time dateTime={datePlaced}>{datePlaced}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">PAYMENT</dt>
                    <dd className="sm:mt-1">
                      {orderStore.order?.financialStatus}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">FULFILLMENT</dt>
                    <dd className="sm:mt-1">
                      {orderStore.order?.fulfillmentStatus}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">Total amount</dt>
                    <dd className="sm:mt-1 font-medium text-gray-900">
                      ${orderStore.order?.currentTotalPrice.amount}
                    </dd>
                  </div>
                </dl>
              </div>

              <h4 className="sr-only">Items</h4>
              <ul role="list" className="divide-y divide-gray-200">
                {orderStore.order?.lineItems.edges.map((item) => {
                  const product = item.node.variant;
                  return (
                    <li key={product.id} className="p-4 sm:p-6">
                      <div className="flex items-center sm:items-start">
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                          <img
                            src={product.image.src}
                            alt={product.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="flex-1 ml-6 text-sm">
                          <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                            <h5>{product.title}</h5>
                            <p className="mt-2 sm:mt-0">
                              ${product.priceV2.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
