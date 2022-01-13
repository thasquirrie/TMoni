/* This example requires Tailwind CSS v2.0+ */
export default function LogoClouds() {
  return (
    <div className='bg-white'>
      <div className='max-w-[1740px] mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-7'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-[90px]'
              // src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
              src='./img/thrive.png'
              alt='Thrive Agric'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-[90px]'
              // src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
              src='./img/providus.png'
              alt='Providus'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-[46px] mt-6'
              // src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
              src='./img/opay.png'
              alt='OPay'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-[60px] mt-4 -ml-2'
              // src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
              src='./img/pax.svg'
              alt='PAX'
            />
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-[40px] w-[100px] mt-[35px]'
              // src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
              src='./img/vtpass.png'
              alt='VTpass'
            />
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-[90px] w-[160px] mt-2.5'
              // src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
              src='./img/interswitch.png'
              alt='Interswitch'
            />
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-[130px] w-[200px] -mt-2.5 -ml-2.5'
              // src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
              src='./img/flutterwave.svg'
              alt='Flutterwave'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
