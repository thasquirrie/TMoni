/* This example requires Tailwind CSS v2.0+ */
import { Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
];

export default function Features() {
  const [move, setMove] = useState(false);
  const [move2, setMove2] = useState(false);
  const [move3, setMove3] = useState(false);
  const listenToScroll = () => {
    let active = window.scrollY > 500 ? true : false;
    setMove(active);
  };
  const listenToScroll2 = () => {
    let active = window.scrollY > 960 ? true : false;
    setMove2(active);
  };

  const listenToScroll3 = () => {
    let active = window.scrollY > 1553 ? true : false;
    setMove3(active);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    window.addEventListener('scroll', listenToScroll2);
    window.addEventListener('scroll', listenToScroll3);
  });

  return (
    <div className='py-16  overflow-hidden lg:py-24'>
      <div className='relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
        <div className='relative'>
          <h2 className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            A better way to send money
          </h2>
          <p className='mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>

        <div className='relative mt-12 lg:mt-24 lg:flex lg:justify-center lg: lg:items-center'>
          <div
            className='hidden mt-10 -ml-12 mr-16 relative lg:mt-0 w-1/2 lg:block'
            aria-hidden='true'
          >
            <Transition.Root
              // appear={true}
              show={move}
              enter='transition transform duration-[1000ms]'
              enterFrom='-translate-x-full opacity-0'
              enterTo='translation-x-0 opacity-1'
            >
              <img
                className='relative mx-auto max-w-[390px] h-[429px]'
                // width={490}
                // src='https://tailwindui.com/img/features/feature-example-1.png'
                src='./img/services-1.png'
                alt=''
                onScroll={() => console.log('Focused on this')}
              />
            </Transition.Root>
          </div>

          <div className='w-full mx-auto relative lg:w-1/2'>
            <h3 className='text-[22px] font-extrabold text-[#11324d] leading-[25px] tracking-tight'>
              Thrift/Cooperative Service
            </h3>
            <p className='text-justify text-[16px] text-black font-[400px] mt-[7px]'>
              Use Tmoni's Cooperative service to save and earn commissions.
              There’s more - earn more when people save through you!
            </p>
            <Link
              to='#'
              className='flex items-center cursor-pointer mt-5 group '
            >
              <ChevronRightIcon className='h-[40px] w-[40px] p-0 rounded-[20px] bg-[#f78812] border-none text-white mr-[15px] group-hover:bg-[#11324d] ' />
              <p className='text-[14px] font-black leading-[22px] text-[#f78812] group-hover:text-[#11324d] '>
                Learn More About Cooperative
              </p>
            </Link>
          </div>
        </div>

        <div className='relative mt-12 lg:mt-24 lg:flex lg:justify-center lg: lg:items-center'>
          <div className='w-full mx-auto relative lg:w-1/2'>
            <h3 className='text-[22px] font-extrabold text-[#11324d] leading-[25px] tracking-tight'>
              Value Added Services
            </h3>
            <p className=' text-justify text-[16px] text-black font-[400px] mt-[7px]'>
              Power up your account with commissions earned when you use our
              value added services. Start recharging!
            </p>
            <Link
              to='#'
              className='flex items-center cursor-pointer mt-5 group '
            >
              <ChevronRightIcon className='h-[40px] w-[40px] p-0 rounded-[20px] bg-[#f78812] border-none text-white mr-[15px] group-hover:bg-[#11324d] ' />
              <p className='text-[14px] font-black leading-[22px] text-[#f78812] group-hover:text-[#11324d] '>
                Learn More About Cooperative
              </p>
            </Link>
          </div>

          <div
            className='hidden mt-10 -mx-4 relative lg:mt-0 w-1/2 lg:block'
            aria-hidden='true'
          >
            <Transition.Root
              // appear={move}
              show={move2}
              enter='transition transform duration-[1000ms]'
              enterFrom='translate-x-full opacity-0'
              enterTo='translation-x-0 opacity-1'
            >
              <img
                className='relative mx-auto max-w-[390px] h-[429px]'
                // width={490}
                // src='https://tailwindui.com/img/features/feature-example-1.png'
                src='./img/services-2.png'
                alt=''
                onScroll={() => console.log('Focused on this')}
              />
            </Transition.Root>
          </div>
        </div>
        <div className='relative mt-12 lg:mt-24 lg:flex lg:justify-center lg: lg:items-center'>
          <div
            className='hidden mt-10 -ml-16 mr-24 relative lg:mt-0 w-1/2 lg:block mb-10'
            aria-hidden='true'
          >
            <Transition.Root
              // appear={move}
              show={move3}
              enter='transition transform duration-[1000ms]'
              enterFrom='-translate-x-full opacity-0'
              enterTo='translation-x-0 opacity-1'
            >
              <img
                className='relative mx-auto max-w-[390px] h-[429px]'
                // width={490}
                // src='https://tailwindui.com/img/features/feature-example-1.png'
                src='./img/services-3.png'
                alt=''
                onScroll={() => console.log('Focused on this')}
              />
            </Transition.Root>
          </div>

          <div className='w-full mx-auto relative lg:w-1/2'>
            <h3 className='text-[22px] font-extrabold text-[#11324d] leading-[25px] tracking-tight'>
              POS Management
            </h3>
            <p className='text-justify text-[16px] text-black font-[400px] mt-[7px]'>
              Use Tmoni's Cooperative service to save and earn commissions.
              There’s more - earn more when people save through you!
            </p>
            <Link
              to='#'
              className='flex items-center cursor-pointer mt-5 group '
            >
              <ChevronRightIcon className='h-[40px] w-[40px] p-0 rounded-[20px] bg-[#f78812] border-none text-white mr-[15px] group-hover:bg-[#11324d] ' />
              <p className='text-[14px] font-black leading-[22px] text-[#f78812] group-hover:text-[#11324d] '>
                Learn More About Cooperative
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
