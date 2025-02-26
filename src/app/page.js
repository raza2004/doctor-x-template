
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen p-3">
      {/* Render Navbar (which overlays the background image thanks to its z-index) */}
      <Navbar />

      {/* Right-side Background Image on HomePage */}
      <div className="absolute top-0 right-0 w-[46%] h-[682px] z-10">
        <Image
          src="/Backgrounds/background.png"
          alt="Right Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 p-8">
        <h1 className="text-4xl font-bold">Welcome to Our HomePage</h1>
        {/* Additional homepage content */}
      </main>
    </div>
  );
};

export default HomePage;
