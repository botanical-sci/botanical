import { XIcon } from '@heroicons/react/outline';
import { useCartStore } from '@shopify/state';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Cart = () => {
  const cartStore = useCartStore();
  const router = useRouter();

  const handleRemoveProduct = (e: any, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    cartStore.removeItem(id);
  };

  const handleChangeQty = (id: string, qty: string) => {
    cartStore.changeQty(id, +qty);
  };

  const handleGoToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            className="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            {cartStore.items.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="w-28 h-28">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="rounded-md min-h-full min-w-fit"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link href={`/product/${product.handle}`}>
                            <a className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label
                        htmlFor={`quantity-${productIdx}`}
                        className="sr-only"
                      >
                        Quantity, {product.title}
                      </label>
                      <select
                        id={`quantity-${productIdx}`}
                        name={`quantity-${productIdx}`}
                        onChange={(e) =>
                          handleChangeQty(product.id, e.target.value)
                        }
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>

                      <div className="absolute top-0 right-0">
                        <button
                          onClick={(e) => handleRemoveProduct(e, product.id)}
                          type="button"
                          className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className=" bg-gray-50 rounded-lg lg:col-span-5"
        >
          <div className=" border-gray-200 flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-base font-medium text-gray-900">
              ${cartStore.subtotal()}
            </dd>
          </div>
          <p className="text-zinc-400">
            Taxes and shipping calculated at checkout
          </p>

          <div className="mt-6">
            <button
              onClick={handleGoToCheckout}
              className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Checkout
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;
