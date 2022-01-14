/* This example requires Tailwind CSS v2.0+ */
import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Example() {
  const [move, setMove] = useState(false);

  const listenToScroll = () => {
    console.log(window.scrollY);
    const active = window.scrollY > 1600 ? true : false;

    setMove(active);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  });
  return (
    <div className=' lg:px-20 px-4 py-[4.25%] bg-gradient-to-br from-[#88f27e] via-[#8ccb86] to-[#a0e19a] '>
      <div className='flex justify-between max-w-6xl mx-auto'>
        <div className='lg:w-[55%]'>
          <h4 className='mb-5 font-extrabold text-[36px] leading-[39px] text-white '>
            We are bridging the financial inclusion gap
          </h4>
          <p className='font-[400px] text-[18px] leading-[25px] text-[#194350] text-justify'>
            Everyone deserves a chance for better living, that's why at Tmoni
            we're passionate about providing financial services to financially
            vulnerable people - the farmers, artisans and small business owners.
          </p>
          <Link to={'#'} className='text-[#194350] underline mt-5 inline-block'>
            Learn More
          </Link>
        </div>

        <Transition.Root
          show={move}
          enter='transition transform duration-[2000ms]'
          enterFrom='translate-x-full opacity-0'
          enterTo='translate-x-0 opacity-1'
        >
          <img
            src='./img/atm.png'
            alt='atm-card'
            className='w-[390px] h-[240px] hidden lg:block'
          />
        </Transition.Root>
      </div>
    </div>
  );
}
