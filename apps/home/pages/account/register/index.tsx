import { useState } from 'react';
import Link from 'next/link';

import { Breadcrumb } from '@shopify/components';
import { storefront } from '@shopify/utilities';
import { registerQuery } from '@shopify/graphql-queries';
import { RegisterResponseModel } from '@shopify/models';

const breadcrumbList = [
  { name: 'Account', href: '/account', current: false },
  { name: 'Register', href: '/account/register', current: true },
];

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const registerResponse = await storefront<RegisterResponseModel>(
      registerQuery,
      {
        input: {
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
          ...(event.target.phone.value && { phone: event.target.phone.value }),
          email: event.target.email.value,
          password: event.target.password.value,
          acceptsMarketing: true,
        },
      }
    );
    setLoading(false);
    localStorage.setItem(
      'user',
      JSON.stringify(registerResponse?.data?.customerCreate?.customer)
    );
  };
  return (
    <div className="min-h-full flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
        <div className="flex justify-center">
          <Breadcrumb list={breadcrumbList} />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="flex items-center text-sm font-medium text-gray-700"
              >
                First name
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number <span className="text-xs">(Optional)</span>
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300"
              >
                Register
              </button>
            </div>
            <div className="font-medium text-sm">
              <span>Already have an account?</span>
              <Link href="/account/login">
                <a className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
                  Login
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
