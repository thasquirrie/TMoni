import { Transition } from '@headlessui/react';
import {
  CashIcon,
  DeviceMobileIcon,
  PencilIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const incentives = [
  {
    name: 'Download the App',
    icon: DeviceMobileIcon,
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Register as an Agent',
    icon: PencilIcon,
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Start Transacting',
    icon: CashIcon,
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Example() {
  const [active, setActive] = useState(false);

  const listenToScroll = () => {
    console.log(window.scrollY);
    const move = window.scrollY > 1600 ? true : false;
    setActive(move);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  });

  return (
    <div className='bg-gray-200'>
      <div className='max-w-7xl mx-auto py-12 sm:px-2 sm:py-16 lg:px-4'>
        <div className='max-w-2xl mx-auto px-4 lg:max-w-none'>
          <div className='grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                The Process?
              </h2>
              <p className='mt-4 text-gray-500'>
                Looking for how to get started? Here is the right spot to come
                to. Follow the instructions below and start transacting. Cheers!
              </p>
              <a
                href='https://play.google.com/store/apps/details?id=com.thrievemoni.tmoni'
                className='mt-[50px] block'
                target={'blank'}
                rel='noopener noreferrer'
              >
                <img src='./img/google.png' className='w-[153px]' alt='' />
              </a>
            </div>
            <div className='hidden lg:block aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <Transition.Root
                show={active}
                enter='transition transform duration-[2000ms]'
                enterFrom='-translate-y-10 opacity-0'
                enterTo='translate-y-4 opacity-1'
                entered='translate-y-0 opacity 1 duration-[2000ms]'
              >
                <img
                  src='./img/services-2.png'
                  alt=''
                  className='object-center object-cover w-[390px] h-[429px]'
                />
              </Transition.Root>
            </div>
          </div>
          <div className='mt-10 sm:mt-1 grid grid-cols-1 gap-y-4 gap-x-8 lg:grid-cols-3'>
            {incentives.map((incentive, index) => (
              <div key={incentive.name} className='sm:flex lg:block'>
                <div className='sm:flex-shrink-0 p-2 inline-block bg-[#46bb3c] rounded-xl shadow-lg'>
                  <incentive.icon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {index + 1}. {incentive.name}
                  </h3>
                  <p className='mt-2 text-sm text-gray-500'>
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
