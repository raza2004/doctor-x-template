
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Home1 from '@/components/Home1';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen p-3">
      {/* Render Navbar (which overlays the background image thanks to its z-index) */}
      <Navbar />
<Home1/>
      {/* Right-side Background Image on HomePage */}
     
    </div>
  );
};

export default HomePage;
