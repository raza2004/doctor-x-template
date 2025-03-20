import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Home1 from '@/components/Home1';
import Home2 from '@/components/Home2';
import Home3 from '@/components/Home3';
import FeatureCarousel from '@/components/Home4';
import Home5 from '@/components/Home5';
import Home6 from '@/components/Home6';
import Home7 from '@/components/Home7';
import Home8 from '@/components/Home8';
import Home9 from '@/components/Home9';
import Footer from '@/components/Bottombar';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 h-screen ">
      {/* Render Navbar (which overlays the background image thanks to its z-index) */}
      <Navbar />
      
      {/* Home1 Component with consistent gap */}
      <div className="flex-grow">
        <Home1 />
      </div>

      {/* Home2 Component with additional gap if needed */}
      <div className="flex-grow mt-[44rem] sm:mt-12"> {/* Add more gap here if needed */}
        <Home2 />
      </div>
      <div className="flex-grow mt-[0rem] sm:mt-12 "> {/* Add more gap here if needed */}
        <Home3 />
      </div>
      <div className="flex-grow mt-[27rem] sm:mt-12"> {/* Add more gap here if needed */}
      <FeatureCarousel/>
      </div>
      <div className="flex-grow mt-12"> {/* Add more gap here if needed */}
      <Home5/>
      </div>
      <div className="flex-grow mt-[35rem] sm:mt-12"> {/* Add more gap here if needed */}
      <Home6/>
      </div>
      <div className="flex-grow mt-12"> {/* Add more gap here if needed */}
      <Home7/>
      </div>
      <div className="flex-grow mt-[20rem] sm:mt-[14rem]"> {/* Add more gap here if needed */}
      <Home8/>
      </div>
      <div className="flex-grow sm:mt-[22rem]"> {/* Add more gap here if needed */}
        <Home9/>
        </div>
        <div className='flex-grow mt-[6rem] sm:mt-[20rem]'>
          <Footer/>
        </div>
    </div>
  );
};

export default HomePage;