/* This example requires Tailwind CSS v2.0+ */
export default function GetStarted() {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-[22px] font-bold text-[#11324d] '>
          <span className='block'>Let's get Started</span>
          {/* <span className='block'>Start using Workflow today.</span> */}
        </h2>
        <p className='mt-4 text-lg leading-6 text-[#194350] max-w-full w-[540px] mx-auto '>
          Download our app now to join thousands already on their way to scoring
          their financial goals.
        </p>
        <a
          href='https://play.google.com/store/apps/details?id=com.thrievemoni.tmoni'
          className='mt-[50px] block'
          target={'blank'}
          rel='noopener noreferrer'
        >
          <img src='./img/google.png' className='w-[153px] mx-auto ' alt='' />
        </a>
      </div>
    </div>
  );
}
