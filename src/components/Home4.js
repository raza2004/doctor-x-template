'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// ... (keep your slides array the same)
const slides = [
    {
      id: 1,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512', // Change to actual icon path
      title: 'Pshyology',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 2,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512',
      title: 'Pathalogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 3,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512',
      title: 'Gynacology',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 4,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512',
      title: 'Opthamalogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 5,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512',
      title: 'Pedialogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 6,
      icon: 'https://framerusercontent.com/images/5oCa2yIZDoCaXfwJgx8LQaKuUGA.png?scale-down-to=512',
      title: 'Cardiology',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
  ];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  };

  // Calculate translation based on card width and spacing
  const cardWidth = 25; // 30vw
  const spacing = 4; // 4vw (approx 12px)
  const translation = currentIndex * (cardWidth + spacing);

  return (
    <div className="w-full rounded-[3rem] mt-44 padding-reset bg-[#13182f] mb-7 sm:h-[49rem] h-[65rem] flex flex-col relative sm:flex-row overflow-hidden items-center sm:items-center justify-center">
      
      {/* Left Side (keep this section the same) */}
      <div className="w-full sm:w-[30vw] p-6 sm:mt-0 mt-20 sm:p-12 flex flex-col items-start justify-center text-white">
        <p className="text-blue-600 uppercase font-semibold tracking-widest">Specialities</p>
        <h2 className="text-4xl sm:text-5xl font-bold mt-3 sm:leading-normal">Our wide range of specialities</h2>
        <p className="text-gray-300 mt-6 text-lg">
        Lorem ipsum dolor sit amet consectetur non venenatis nisi et in quis fermentum vel magna.
        </p>
         <button className="bg-[#ffffff] mt-5 flex flex-row gap-1 items-center border border-black text-xl font-normal text-gray-800 py-6 sm:px-7 px-12 rounded-full">
                   <Image
                     src="/Icons/star.svg"
                     alt="Twitter"
                     width={24}
                     height={24}
                   />{" "}
                  Browse all Specialities
                 </button>
      </div>
      {/* Right Side (Carousel) */}
      <div className="relative w-full sm:w-[60vw] flex items-center justify-center mt-10 sm:mt-0">
        
        {/* Arrows (keep arrow buttons the same) */}
 {/* Left Arrow */}
        <button 
          className="absolute left-0 z-50 bg-blue-700 text-gray-200 sm:p-5 p-3 rounded-full shadow-lg hover:bg-blue-500"
          onClick={prevSlide}
        >
          <FaArrowLeft size={32} />
        </button>
        {/* Slide Container */}
        <div className="overflow-hidden w-[90vw] sm:w-[60vw] h-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ 
              transform: `translateX(-${translation}vw)`,
              width: `${(cardWidth + spacing) * slides.length}vw`
            }}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className="flex-shrink-0 h-[25rem] mx-2 transition-all card duration-300"
                style={{ 
                  width: `${cardWidth}vw`,
                  marginLeft: index === 0 ? 0 : `${spacing / 2}vw`,
                  marginRight: `${spacing / 2}vw`
                }}
              >
                <div className="w-full h-full bg-white  rounded-3xl flex flex-col items-center text-center p-6">
                  <Image src={slide.icon} alt={slide.title} width={60} height={60} className='rounded-full mt-20'/>
                  <h3 className="text-2xl font-semibold mt-4 text-blue-900">{slide.title}</h3>
                  <p className="text-gray-600 mt-4 px-4 sm:w-80">{slide.description}</p>
                  <button className="mt-4 flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Learn More <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <button 
          className="absolute right-0 sm:right-10  bg-blue-700 text-gray-200 sm:p-5 p-3 rounded-full shadow-lg hover:bg-blue-500 z-40"
          onClick={nextSlide}
        >
          <FaArrowRight size={32} />
        </button>

      </div>
    </div>
  );
};

export default FeatureCarousel;