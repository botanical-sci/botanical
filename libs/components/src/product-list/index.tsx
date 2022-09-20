import ProductCard from '../product-card';

const ProductList = ({ title, moreText, products }: any) => {
  return (
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 my-16">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            {moreText}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product: any) => (
            <ProductCard product={product} />
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {moreText}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
  );
};

export default ProductList;
