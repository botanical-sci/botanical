import React, {
  FC,
  useState,
} from 'react';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/future/image';
import Link from 'next/link';

import {
  IconChevronLeft,
  IconChevronRight,
  IconCircle,
} from '@tabler/icons';

interface Slide {
  id: number;
  title: string;
  url: string;
  image: string;
  textColor: string;
}

const data: Slide[] = [
  {
    id: 1,
    title: 'Anti-DERMATITIS',
    url: '/collections/anti-dermatitis',
    image:
      'https://cdn.shopify.com/s/files/1/0631/8309/4005/files/New_Project2_1200x464.jpg?v=1663540193',
    textColor: '#000',
  },
  {
    id: 2,
    title: 'Anti-AGING',
    url: '/collections/anti-aging',
    image:
      'https://cdn.shopify.com/s/files/1/0631/8309/4005/files/New_Project_1200x464.jpg?v=1663540193',
    textColor: '#000',
  },
  {
    id: 3,
    title: 'Anti-Blemish',
    url: '/collections/anti-blemish',
    image:
      'https://cdn.shopify.com/s/files/1/0631/8309/4005/files/New_Project1_1200x464.jpg?v=1663540193',
    textColor: '#fff',
  },
];

function Arrow(props: {
  disabled: boolean;
  onClick: (event: any) => void;
  left?: boolean;
}) {
  const { disabled, onClick, left = false } = props;
  if (left)
    return (
      <IconChevronLeft
        onClick={onClick}
        size={60}
        className="cursor-pointer absolute top-0 bottom-0 left-0 ml-10 m-auto "
        color={'#000'}
      />
    );

  return (
    <IconChevronRight
      onClick={onClick}
      size={60}
      className="cursor-pointer absolute top-0 bottom-0 right-0 mr-10 m-auto "
      color={'#000'}
    />
  );
}

const ImageSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const renderSlide = (slide: Slide) => (
    <figure
      key={slide.id}
      className="keen-slider__slide rounded-md relative overflow-hidden"
    >
      <Image
        style={{ width: '100%', height: '100%' }}
        fill
        src={slide.image}
        alt={slide.title}
      />
      <figcaption className="absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center flex-col gap-10">
        <h5
          className="font-light spacing text-5xl tracking-widest"
          style={{ color: slide.textColor }}
        >
          {slide.title}
        </h5>
        <Link href={slide.url}>
          <a className="inline-flex items-center px-3 py-3 border border-transparent text-sm rounded-sm shadow-sm text-white bg-botanical hover:bg-indigo-700">
            SHOW PRODUCTS
          </a>
        </Link>
      </figcaption>
    </figure>
  );

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-86 relative rounded-md overflow-hidden">
      <div ref={sliderRef} className="keen-slider " style={{ minHeight: 460 }}>
        {data.map((img) => renderSlide(img))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current?.track?.details?.slides.length - 1
            }
          />
        </>
      )}
      {loaded && instanceRef.current && (
        <div className='absolute b-0 right-0 left-0 m-auto flex justify-center'>
          <div className="dots flex gap-2 -mt-10">
            {[...Array(data.length).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                >
                  <IconCircle
                    fill="#000"
                    opacity={currentSlide === idx ? 1 : 0.2}
                    size={12}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
