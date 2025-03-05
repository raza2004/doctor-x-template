'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// ... (keep your slides array the same)
const slides = [
    {
      id: 1,
      icon: '/feature-icon1.png', // Change to actual icon path
      title: 'Pshyology',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 2,
      icon: '/feature-icon2.png',
      title: 'Pathalogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 3,
      icon: '/feature-icon3.png',
      title: 'Gynacology',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 4,
      icon: '/feature-icon4.png',
      title: 'Opthamalogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 5,
      icon: '/feature-icon5.png',
      title: 'Pedialogy',
      description: 'Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas.',
    },
    {
      id: 6,
      icon: '/feature-icon6.png',
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
  const cardWidth = 30; // 30vw
  const spacing = 4; // 4vw (approx 12px)
  const translation = currentIndex * (cardWidth + spacing);

  return (
    <div className="w-[100vw] mt-44 padding-reset bg-blue-900 py-16 flex flex-col relative sm:flex-row overflow-hidden items-center sm:items-center justify-center">
      
      {/* Left Side (keep this section the same) */}
      <div className="w-full sm:w-[30vw] px-6 sm:px-12 flex flex-col items-start text-white">
        <p className="text-blue-300 uppercase font-semibold tracking-widest">Our Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">We Offer Best Medical Services</h2>
        <p className="text-gray-300 mt-4">
          Our healthcare services ensure top-notch treatment and patient care. 
          We continuously strive to improve and bring innovation in the medical field.
        </p>
        <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
      {/* Right Side (Carousel) */}
      <div className="relative w-full sm:w-[60vw] flex items-center justify-center mt-10 sm:mt-0">
        
        {/* Arrows (keep arrow buttons the same) */}
 {/* Left Arrow */}
        <button 
          className="absolute left-0 sm:-left-10 bg-white text-blue-900 p-2 rounded-full shadow-lg hover:bg-gray-200"
          onClick={prevSlide}
        >
          <FaArrowLeft size={24} />
        </button>
        {/* Slide Container */}
        <div className="overflow-hidden w-[70%] sm:w-[60vw] h-[350px]">
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
                className="flex-shrink-0 mx-2 transition-all duration-300"
                style={{ 
                  width: `${cardWidth}vw`,
                  marginLeft: index === 0 ? 0 : `${spacing / 2}vw`,
                  marginRight: `${spacing / 2}vw`
                }}
              >
                <div className="w-full h-full bg-white rounded-3xl flex flex-col items-center text-center p-6">
                  <Image src={slide.icon} alt={slide.title} width={60} height={60} />
                  <h3 className="text-2xl font-semibold mt-4 text-blue-900">{slide.title}</h3>
                  <p className="text-gray-600 mt-2 px-4">{slide.description}</p>
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
          className="absolute right-0 sm:right-20 bg-white text-blue-900 p-2 rounded-full shadow-lg hover:bg-gray-200 z-40"
          onClick={nextSlide}
        >
          <FaArrowRight size={24} />
        </button>

      </div>
    </div>
  );
};

export default FeatureCarousel;