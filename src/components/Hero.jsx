/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Hero() {
  const [show, setShow] = useState(false);

  // console.log({ show });
  return (
    <div className='font-ubuntu'>
      <div className='relative overflow-hidden'>
        <main>
          <div className='pt-10 bg-white  mx-auto sm:pt-16 lg:pt-2 lg:pb-14 lg:overflow-hidden'>
            <div className='max-w-[1740px] lg:px-8'>
              <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:col-span-2 lg:flex lg:items-center'>
                  <div className='lg:py-4'>
                    <h1 className='mt-4 max-w-[636px] text-[#194350] text-4xl tracking-tight leading-[55.1px] font-bold sm:mt-5 sm:text-[44px] lg:mt-6 xl:text-5xl'>
                      Enabling financial Inclusion for the
                      <span className='text-[#46bb3c]'> Unbanked</span>
                    </h1>
                    <p className='mt-3 text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                      Because we understand the need for a healthy financial
                      lifestyle across board, we provide banking services to
                      farmers, artisans and the underrepresented groups in the
                      financial sector to enable them improve their lives.
                    </p>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.thrievemoni.tmoni'
                      className='mt-[50px] block'
                      target={'blank'}
                      rel='noopener noreferrer'
                    >
                      <img
                        src='./img/google.png'
                        className='w-[153px]'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <div className='hidden mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative ml-[-80px] lg:block '>
                  <div className='mx-auto my-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex justify-center items-center'>
                    <p className='bg-[#defedb] h-[350px] w-[350px] m-auto rounded-full absolute top-[23px]'></p>
                    <Transition.Root
                      appear={true}
                      show={true}
                      unmount={true}
                      enter='transition transform duration-[1000ms] ease-out'
                      enterFrom='translate-x-full opacity-0'
                      enterTo='translate-x-0 opacity-100'
                    >
                      <img
                        src='./img/phones.png'
                        className='relative ml-[-15px] w-[576px] max-w-none'
                        alt='Hero'
                      />
                    </Transition.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </div>
  );
}
