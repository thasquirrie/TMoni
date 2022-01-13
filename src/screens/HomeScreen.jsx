import Hero from '../components/Hero';
import LogoClouds from '../components/LogoClouds';
import Features from '../components/Features';
import CTA from '../components/CTA';
import GetStarted from '../components/GetStarted';

export default function HomeScreen({ match }) {
  console.log({ match });

  // const location = useLocation();
  // console.log({ location });
  return (
    <>
      <div id='/' className='relative bg-white overflow-hidden mb-3'>
        <Hero />
        <LogoClouds />
      </div>
      <div className='overflow-hidden max-w-7xl mx-auto'>
        <Features />
      </div>
      <div>
        <CTA />
      </div>
      <GetStarted />
    </>
  );
}
