import React, { FC } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'Super thick and non-irritating. Smells great and relieved my dry skin and eczema patches. Beyond impressed!',
    attribution: 'Stephanie Rosenwinkel / LavenderShea Hand & Body',
  },
  {
    id: 2,
    quote:
      'Super thick and non-irritating. Smells great and relieved my dry skin and eczema patches. Beyond impressed!',
    attribution: 'Bardia Maghami / Daily Moisturizer',
  },
  {
    id: 3,
    quote:
      'Super thick and non-irritating. Smells great and relieved my dry skin and eczema patches. Beyond impressed!',
    attribution: 'Jinny / Rosewater Facial Toner',
  },
  {
    id: 4,
    quote:
      'Super thick and non-irritating. Smells great and relieved my dry skin and eczema patches. Beyond impressed!',
    attribution: 'Hannah / Wild Oats & Honey Facial',
  },
];

const Testimonials: FC = () => {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="testimonial-heading"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          What are people saying?
        </h2>

        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="sm:flex lg:block border-2 p-4">
              <svg
                width={24}
                height={18}
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="flex-shrink-0 text-gray-300"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                <p className="text-lg text-gray-600">{testimonial.quote}</p>
                <cite className="mt-4 block font-semibold not-italic text-gray-900">
                  {testimonial.attribution}
                </cite>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
