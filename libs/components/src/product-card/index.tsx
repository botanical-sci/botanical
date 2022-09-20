const ProductCard = ({ product }: any) => {
  return (
    <div key={product.id} className="group relative bg-white rounded-md p-2">
      <div className="w-full h-56 overflow-hidden rounded-md relative group-hover:opacity-75 lg:h-72 xl:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute bottom-2 right-2 inset-x-0 h-72 flex items-end justify-end overflow-hidden">
        <button
        type="button"
        className="inline-flex items-center p-1 px-2 font-light text-xs border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add to cart
      </button>
        </div>
      </div>

      <h3 className="mt-4 text-sm text-gray-700">
        <a href={product.href}>
          <span className="absolute inset-0" />
          {product.name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  );
};

export default ProductCard;
