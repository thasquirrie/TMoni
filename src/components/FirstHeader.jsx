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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = {
  pages: [
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function FirstHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                <div className='flow-root'>
                  <Link
                    to='#'
                    className='-m-2 p-2 block font-medium text-gray-900'
                  >
                    Log in
                  </Link>
                </div>
                <div className='flow-root'>
                  <Link
                    to='#'
                    className='-m-2 p-2 block font-medium text-gray-900'
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Secondary navigation */}
          <div className='bg-white'>
            <div className=' max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8'>
              <div className=' border-gray-200'>
                <div className='h-16 flex items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                    <Link to='/'>
                      <span className='sr-only'>Workflow</span>
                      <img
                        className='h-8 w-auto'
                        src='./img/TMoni.png'
                        alt=''
                      />
                    </Link>
                  </div>

                  {/* Mobile menu and search (lg-) */}

                  {/* Logo (lg-) */}
                  <Link to='/' className='lg:hidden'>
                    <span className='sr-only'>Workflow</span>
                    <img src='./img/TMoni.png' alt='' className='h-8 w-auto' />
                  </Link>

                  <div className='flex-1 flex items-center justify-end'>
                    <div className='flex items-center lg:ml-8'>
                      <Link
                        to='/about'
                        className=' text-[#0a3926] mr-[25px] hidden text-[17px] font-semibold  hover:text-gray-800 lg:block'
                      >
                        About
                      </Link>
                      <Link
                        to='/faq'
                        className='text-[#0a3926] mr-[25px] hidden text-[17px] font-semibold  hover:text-gray-800 lg:block'
                      >
                        FAQ
                      </Link>
                      <Link
                        to='/contact'
                        className='text-[#0a3926] mr-[25px] hidden text-[17px] font-semibold  hover:text-gray-800 lg:block'
                      >
                        Contact
                      </Link>
                      <Link
                        to='/login'
                        className='text-[#0a3926] mr-[25px] hidden text-[17px] font-semibold  hover:text-gray-800 lg:block'
                      >
                        Log in
                      </Link>
                      <Link
                        to='/signup'
                        className='mr-[25px] hidden text-[17px] font-semibold text-white lg:block px-10 bg-[#194350] py-1.5 rounded-md '
                      >
                        Signup
                      </Link>
                    </div>

                    <div className='flex items-center lg:hidden'>
                      <button
                        type='button'
                        className='-ml-2 bg-white p-2 rounded-md text-gray-400'
                        onClick={() => setOpen(true)}
                      >
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
