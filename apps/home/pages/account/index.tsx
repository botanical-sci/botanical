import { FC, useState, useEffect } from 'react';

import { AccountLayout } from '@shopify/components';
import { useUserStore } from '@shopify/state';
import { storefront } from '@shopify/utilities';
import { updateUserQuery } from '@shopify/graphql-queries';
import { UpdateUserResponseModel } from '@shopify/models';

type FormValuesType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const Account: FC = () => {
  const userStore = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValuesType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const handleOnChangeFormInputs = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const updatedUserResponse = await storefront<UpdateUserResponseModel>(
      updateUserQuery,
      {
        customer: {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
        },
        customerAccessToken: JSON.parse(
          localStorage.getItem('token') || sessionStorage.getItem('token')
        ),
      }
    );
    userStore.getUser();
    setLoading(false);
  };
  useEffect(() => {
    if (userStore.user) {
      setFormValues({
        firstName: userStore.user.firstName,
        lastName: userStore.user.lastName,
        phone: userStore.user.phone,
        email: userStore.user.email,
      });
    }
  }, [userStore.user]);

  return (
    <AccountLayout page="Profile">
      <div className="space-y-6 sm:px-6 px-4 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment-details-heading">
          <form noValidate onSubmit={handleSubmit}>
            <div className="shadow rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 sm:p-6">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Profile
                </h1>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="cc-given-name"
                      value={formValues.firstName}
                      onChange={handleOnChangeFormInputs}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="cc-family-name"
                      value={formValues.lastName}
                      onChange={handleOnChangeFormInputs}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formValues.email}
                      onChange={handleOnChangeFormInputs}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      value={formValues.phone}
                      onChange={handleOnChangeFormInputs}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </AccountLayout>
  );
};

export default Account;
