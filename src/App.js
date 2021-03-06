import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/FirstHeader';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <div className='bg-white font-ubuntu'>
        <div className='relative overflow-hidden'>
          <Header />
          <main className='max-w-[1740px] mx-auto '>
            <Routes>
              <Route path='/about' element={<AboutScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
