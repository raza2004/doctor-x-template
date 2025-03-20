'use client';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const contentData = [
  {
    title: '“The care and service is exceptional”',
    text1: 'Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et turpis ac lacus quam etiam integer eget dolor.',
    text2: 'John Carter, ',
    highlight: 'Patient since 2025',
    image: '/Backgrounds/home8pic.svg',
  },
  {
    title: '“The best app for medical appointments”',
    text1: 'Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et turpis ac lacus quam etiam integer eget dolor.',
    text2: 'Sandy Houston, ',
    highlight: 'Patient since 2024',
    image: '/Backgrounds/home8pic.svg',
  },
  {
    title: '"The next-gen app for medical care"',
    text1: 'Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et turpis ac lacus quam etiam integer eget dolor.',
    text2: 'Graham Hills,',
    highlight: ' Patient since 2024',
    image: '/Backgrounds/home8pic.svg',
  },
];

const Home8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length);
  };

  return (
    <div className="flex flex-col items-center mt-24 bg-[#f3f8ff] rounded-3xl h-[74rem] sm:h-[70rem]">
      <p className="text-blue-500 uppercase font-semibold tracking-widest mt-24">TESTIMONIALS</p>
      <h1 className="text-3xl sm:text-[3.5rem] sm:w-[42vw] sm:leading-[4rem] font-bold mt-2 text-center">Here’s what our great customers say</h1>
      
      <div className="relative flex items-center justify-center w-full mt-6">
        {/* Left Arrow */}
        <button 
          onClick={prevContent} 
          className="absolute sm:left-40 left-1 bg-gray-200 p-3 rounded-full hover:bg-gray-300"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Fixed Content Box */}
        <div className="sm:w-[60%] sm:p-0 p-5 w-[78vw] bg-white shadow-lg sm:h-[28rem] h-auto rounded-3xl flex sm:flex-row flex-col overflow-hidden">
          {/* Left 70% - Text Content */}
          <div className="sm:w-[70%] pr-3 sm:p-24 p-4">
            <h2 className="sm:text-4xl text-3xl font-semibold">{contentData[currentIndex].title}</h2>
            <p className="text-gray-500 mt-3">{contentData[currentIndex].text1}</p>
            <p className=" mt-8 text-blue-500 font-semibold">
              {contentData[currentIndex].text2} 
              <span className="text-gray-600 font-light"> {contentData[currentIndex].highlight}</span>
            </p>
          </div>

          {/* Right 30% - Image */}
          <div className="sm:w-[30%] p-6 mt-4 mr-7">
            <Image 
              src={contentData[currentIndex].image} 
              alt="Slide Image" 
              width={0} 
              height={0} 
              className="rounded-lg w-auto h-auto "
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextContent} 
          className="absolute sm:right-40 right-1 bg-gray-200 p-3 rounded-full hover:bg-gray-300"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
       <button className="bg-blue-500 sm:mt-14 mt-16 flex flex-row gap-1 items-center text-xl font-semibold text-white py-6 px-8 rounded-full hover:bg-[#13182f]">
                          <Image
                            src="/Icons/phone.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                          />{" "}
                          Book an Appointment
                        </button>
    </div>
  );
};

export default Home8;
