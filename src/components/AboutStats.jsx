/* This example requires Tailwind CSS v2.0+ */
import { Transition } from '@headlessui/react';
import { ChartSquareBarIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

export default function AboutStats() {
  const [active, setActive] = useState(false);

  const listenToScroll = () => {
    const move = window.scrollY > 1130 ? true : false;
    // console.log(window.scrollY);
    setActive(move);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);
  return (
    <div className='relative bg-white'>
      <div className='hidden lg:block h-56 bg-white sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2'>
        <Transition.Root
          show={active}
          enter='transition transform duration-[2000ms]'
          enterFrom='-translate-x-6 opacity-0'
          enterTo='translate-x-4 opacity-1'
          entered='translate-x-0 opacity-1 duration-[2000ms]'
        >
          <img
            className=' w-[434px] h-full m-auto pt-[93px]'
            // src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
            src='./img/chart.jpg'
            alt='Support team'
          />
        </Transition.Root>
      </div>
      <div className='relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16'>
        <div className='max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10'>
          <div>
            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-[#46bb3c] text-white'>
              <ChartSquareBarIcon className='h-6 w-6' aria-hidden='true' />
            </div>
          </div>
          <h2 className='mt-6 text-3xl font-extrabold text-[#46bb3c] sm:text-4xl'>
            What we've achieved...
          </h2>
          <p className='mt-6 text-lg text-gray-500'>
            The figures below show how far we've come and the numbers still
            climbing.
          </p>
          <div className='mt-8 overflow-hidden'>
            <dl className='-mx-8 -mt-8 flex flex-wrap'>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Active customers
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-[#194350] sm:text-3xl'>
                  6,273
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Active POS Terminals
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-[#194350] sm:text-3xl'>
                  24K
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Processed Weekly
                </dt>
                <dd className='order-1 text-2xl font-extrabold text-[#194350] sm:text-3xl'>
                  1B
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
