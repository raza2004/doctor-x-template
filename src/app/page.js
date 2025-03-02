import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Home1 from '@/components/Home1';
import Home2 from '@/components/Home2';
import Home3 from '@/components/Home3';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 h-screen p-3">
      {/* Render Navbar (which overlays the background image thanks to its z-index) */}
      <Navbar />
      
      {/* Home1 Component with consistent gap */}
      <div className="flex-grow">
        <Home1 />
      </div>

      {/* Home2 Component with additional gap if needed */}
      <div className="flex-grow mt-12"> {/* Add more gap here if needed */}
        <Home2 />
      </div>
      <div className="flex-grow mt-12"> {/* Add more gap here if needed */}
        <Home3 />
      </div>
    </div>
  );
};

export default HomePage;