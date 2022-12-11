import { FC, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { AccountLayout, Spinner } from '@shopify/components';
import { useUserStore } from '@shopify/state';
import { storefront } from '@shopify/utilities';
import { deleteAddressQuery } from '@shopify/graphql-queries';
import { DeleteAddressResponseModel } from '@shopify/models';

const Addresses: FC = () => {
  const userStore = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (event, addressID: string) => {
    event.preventDefault();
    setLoading(true);
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || '';

    const deleteAddressResponse = await storefront<DeleteAddressResponseModel>(
      deleteAddressQuery,
      {
        customerAccessToken: token,
        id: addressID,
      }
    );
    if (!deleteAddressResponse.data.customerUserErrors?.length) {
      toast.success('The address has been deleted successfully!');
      userStore.getUser();
    } else {
      toast.error('The address has not been deleted!');
    }
    setLoading(false);
  };

  return (
    <AccountLayout page="Addresses">
      <div className="sm:px-6 px-4 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment-details-heading">
          <div className="sm:overflow-hidden">
            <div className="pb-6 sm:pb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Addresses
                </h1>
                <Link href="/account/addresses/create">
                  <a className="text-indigo-600 hover:text-indigo-900">
                    Create new address
                  </a>
                </Link>
              </div>
              <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Role
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {userStore.user?.addresses.nodes.map((address) => {
                            const href =
                              address.id.split('/')[
                                address.id.split('/').length - 1
                              ];
                            return (
                              <tr key={address.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {address.firstName} {address.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {address.address1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {address.city}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {address.zip}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <Link href={`/account/addresses/${href}`}>
                                    <a className="text-indigo-600 hover:text-indigo-900">
                                      Edit
                                    </a>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={(event) =>
                                      handleDelete(event, address.id)
                                    }
                                    disabled={loading}
                                    className="inline-flex ml-3 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
                                  >
                                    {loading && <Spinner />}
                                    delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AccountLayout>
  );
};

export default Addresses;
