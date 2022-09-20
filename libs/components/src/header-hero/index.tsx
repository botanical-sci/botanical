const HeaderHero = () => {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-0 mt-20 md:gap-20 lg:gap-20">
      <div>
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesnt care if you live or die.
          </p>
        </div>
        <div>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 absolute opacity-10 md:relative lg:relative md:opacity-100 lg:opacity-100 -z-10 md:z-10 lg:z-10">
        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-44 h-64 rounded-lg overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHero;
