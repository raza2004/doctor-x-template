'use client';

import Image from 'next/image';
import { FaPlay, FaUserMd, FaHospital, FaClock } from 'react-icons/fa';

const Home5 = () => {
  return (
    <div className="w-full sm:py-16 flex flex-col sm:items-center sm:text-center px-6 sm:px-12">
      {/* Section Title */}
      <p className="text-blue-500 uppercase font-semibold tracking-widest">
        Why Choose Us
      </p>
      <h2 className="text-3xl sm:text-[3.75rem] sm:w-[42vw] sm:leading-[4rem] font-bold mt-2">
      The right care for your loved ones
      </h2>
      
      {/* Content Container */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-start mt-10 sm:mt-16">
        
        {/* Left Side (Image + Video Overlay) */}
        <div className="relative w-full sm:w-1/2 h-1 sm:h-[70vh] flex justify-center sm:top-0 top-[35rem] ">
          <div className="relative mt-28 w-[90vw] sm:w-[50vw] sm:h-[400px]">
            <Image
              src="/Backgrounds/bg3.png"
              alt="Medical Service"
              width={500}
              height={500}
              className="sm:w-auto sm:h-auto h-[23rem] absolute sm:left-1 left-0 rounded-xl"
            />
          </div>
          
          {/* Video Box Overlay */}
          <div className='absolute top-10 sm:left-44 left-10 flex items-center justify-center w-[80vw] h-[25rem] sm:w-[33vw] sm:h-[32rem] bg-gray-200 rounded-3xl shadow-lg '>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaPlay size={52} className="text-blue-600" />
          </a></div>
        </div>
        
        {/* Right Side (Features List) */}
        <div className="w-full sm:w-1/2 flex space-y-16 flex-col sm:mt-10 sm:pl-12 text-left">
          {[ 
            { icon: FaUserMd, title: "Resident care", text: "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas." },
            { icon: FaHospital, title: "Quality support", text: "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas." },
            { icon: FaClock, title: "24/7 nurse staff", text: "Lorem ipsum dolor sit amet consectetur sit dignissim pellentesque egestas." },
          ].map((feature, index) => (
            <div key={index} className="flex items-start ">
              <feature.icon className="text-blue-900 sm:mt-3 text-3xl sm:text-5xl mr-4 justify-center items-center text-center" />
              <div>
                <h3 className="text-xl sm:text-3xl font-semibold">{feature.title}</h3>
                <p className="text-gray-500 mt-1 sm:w-[26vw]">{feature.text}</p>
              </div>
            </div>
          ))}
          
          {/* Button */}
           <button className="mt-6 lg:mt-10 text-white py-5 sm:w-64 px-4 bg-[#3D65FF] flex flex-row gap-1 items-center text-xl font-semibold rounded-full hover:bg-[#13182f] ">
                    <Image
                                  src="/Icons/phone.svg"
                                  alt="phone"
                                  width={24}
                                  height={24}
                                />{" "}
                    Book Appointment
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Home5;
