/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          // src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
          src='./img/people.png'
          alt=''
        />
        <div
          className='absolute inset-0 bg-[#80e677] mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Who we are...
        </h1>
        <p className='mt-6 text-white leading-[25px] text-[18px] font-normal max-w-3xl'>
          We offer financial services geared towards eliminating obstales that
          hinder the business development of rural and marginalized
          agriculturists, enabling them to participate and contribute to the
          agro industry more effectively while maintaining thorough financial
          stability and responsibility. One thing that should ring out for you
          is that success is possible when we work together.
        </p>
      </div>
    </div>
  );
}
