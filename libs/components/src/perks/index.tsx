import {
  IconShieldChevron,
  IconShoppingCartPlus,
  IconTruckDelivery,
} from '@tabler/icons';

import Container from '../container';

const perks = [
  {
    name: '30 Day Money Back Guarantee',
    Icon: <IconShieldChevron width={50} height={50} className='text-botanical' />,
    description:
      'Most effective treatment for all types of skin ailments. Guarantee you see results or your money back!',
  },
  {
    name: 'Free Delivery',
    Icon: <IconTruckDelivery width={50} height={50} className='text-botanical' />,
    description:
      'Free shipping over 50$',
  },
  {
    name: 'All year discount',
    Icon: <IconShoppingCartPlus width={50} height={50} className='text-botanical' />,
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    Icon: <IconShoppingCartPlus width={50} height={50} className='text-botanical' />,
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

const Perks = () => {
  return (
    <section aria-labelledby="perks-heading" className='pt-16'>
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center mb-10">
          Why Botanical Skin Science
        </h2>
      </Container>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-20 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => {
            return (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="flow-root">
                    {perk.Icon}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Perks;
