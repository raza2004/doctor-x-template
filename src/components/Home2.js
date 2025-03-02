import React from 'react';
import Image from 'next/image';

function Home2() {
  return (
    <div className="flex flex-row h-auto ml-6 bg-[#F3F8FF] w-[87vw] rounded-3xl p-12 mb-11">
      {/* Left Section: Booking Information */}
      <div className="flex flex-col justify-center h-[25rem] space-y-4 ml-5 w-[26vw]">
        <div className="text-xl font-normal text-[#3D65FF]">
          BOOKING
        </div>
        <div className="mt-4 text-5xl font-semibold leading-[1.2em]">
          <p>Let us take care of your health</p>
        </div>
        <div className="mt-1 text-xl font-normal leading-[1.2em]">
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel.
          </p>
        </div>
      </div>

      {/* Right Section: Two Divs in a Row */}
      <div className="flex flex-row gap-8 h-[25rem] ml-12 w-[50vw] justify-center">
        {/* First Div */}
        <div className="flex flex-col space-y-4 [20vw] p-6  rounded-2xl ">
          {/* Icon */}
          <div className="">
            <Image
            alt='icon'
            width={0}
            height={0}
            src="/Icons/home2icon1.svg"
            className='h-auto w-auto'
            />
          </div>
          {/* Heading */}
          <div className="text-3xl font-semibold">
          Visit us on
          </div>
          {/* Two Lines of Text */}
          <div className="text-lg ">
            <p className='w-[22vw]'>680 47th St. San Francisco, CA 90011</p>
            <p className='text-xl font-semibold mt-2 text-[#3D65FF]'>Open on Google Maps

</p>
          </div>
          {/* Horizontal Line */}
          <hr className="border-t border-gray-300 my-4" />
          {/* Two Separate Lines of Text */}
          <div className="text-lg text-gray-600 flex flex-col space-y-3">
            <p>Mon - Fri: 8:00am to 5:00pm</p>
            <p>Saturday: 9:00am to 3:30pm</p>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex flex-col space-y-4 [20vw] p-6">
          {/* Icon */}
          <div className="text-4xl text-[#3D65FF]">
          <Image
            width={0}
            height={0}
            alt='icon'
            src="/Icons/home2icon2.svg"
             className='h-auto w-auto'
            />
          </div>
          {/* Heading */}
          <div className="text-3xl font-semibold">
          Contact us
          </div>
          {/* Two Lines of Text */}
          <div className="text-lg text-gray-700 flex flex-col space-y-3 ">
            <p className=''>Phone number</p>
            <p className='text-xl font-semibold mt-2 text-black'>(253) 456 - 1189</p>
          </div>
          {/* Horizontal Line */}
          <hr className="border-t border-gray-300 my-4" />
          {/* Two Separate Lines of Text */}
          <div className="text-lg text-gray-600">
            <p>Email address</p>
            <p className='font-semibold text-black mt-2'>contact@doctr.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;