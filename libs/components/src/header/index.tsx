import { FC, Fragment, useEffect, useState } from 'react';

import Image from 'next/future/image';
import Link from 'next/link';

import { Dialog, Transition } from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import { MenuModel } from '@shopify/models';
import { useCartStore } from '@shopify/state';

import PopupCart from '../popup-cart';
import { extractHandleFromUrl } from '@shopify/utilities';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  menu: MenuModel[];
}

const Header: FC<Props> = ({ menu }: Props) => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartStore = useCartStore();

  const handleDisplayCart = (e: any) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    const cartInitialData = localStorage.getItem('user_cart');

    if (cartInitialData) {
      cartStore.initiate(JSON.parse(cartInitialData));
    }
  }, []);

  return (
    <div className="bg-white sticky top-0 z-40">
      <PopupCart
        isOpen={cartOpen}
        onCartClose={() => {
          setCartOpen(false);
        }}
      />
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-5 mb-5 border-stone-200 border-b flex justify-between">
                <Link href="/">
                  <a>
                    <span className="sr-only">botanical skin science</span>
                    <Image
                      width={100}
                      height={40}
                      priority={true}
                      className="h-8 w-auto"
                      src="/images/logo-top.png"
                      alt="botanical skin science"
                    />
                  </a>
                </Link>
                <div>
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <ul className="flex flex-col gap-5 ml-4 mb-5 md:hidden lg:hidden">
                {menu?.map((category) => (
                  <a
                    href="/"
                    key={category.title}
                    className="text-sm group relative"
                  >
                    {category.title}
                  </a>
                ))}
              </ul>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        {/* Top navigation */}
        <nav
          aria-label="Top"
          className="relative z-20 bg-white shadow-sm bg-opacity-90 backdrop-filter backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <a>
                    <span className="sr-only">botanical skin science</span>
                    <Image
                      width={100}
                      height={40}
                      priority={true}
                      className="h-8 w-auto"
                      src="/images/logo-top.png"
                      alt="botanical skin science"
                    />
                  </a>
                </Link>
              </div>

              <ul className="hidden gap-5 ml-7 lg:flex md:flex">
                {menu?.map((category) => (
                  <li className="text-sm group relative cursor-pointer">
                    {(!category.items || category.items.length === 0) && (
                      <Link
                        href={
                          extractHandleFromUrl(category.url, category.type) ??
                          ''
                        }
                      >
                        <a>{category.title}</a>
                      </Link>
                    )}

                    {category.items && category.items.length > 0 && (
                      <>
                        <span>{category.title}</span>
                        <ul
                          className="hidden group-hover:flex gap-3 flex-col absolute z-50 shadow-md bg-white p-3 rounded-md"
                          style={{ minWidth: 250 }}
                        >
                          {category.items.map((i) => (
                            <li>
                              <Link
                                href={extractHandleFromUrl(i.url, i.type) ?? ""}
                                key={i.title}
                              >
                                <a className={classNames(' text-sm')}>
                                  {i.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a
                    href="#"
                    className="group -m-2 p-2 flex items-center"
                    onClick={handleDisplayCart}
                  >
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cartStore.items.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
