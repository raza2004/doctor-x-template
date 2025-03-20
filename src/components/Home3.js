'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="flex flex-col ml-[3%] p-3 sm:flex-row items-center justify-between px-6 sm:px-14 sm:py-12 space-y-10 sm:space-y-0">
      
      {/* Left Section: Background Images */}
      <div className="relative w-full sm:w-[507px] sm:top-0 top-[55rem] h-[2rem] sm:h-[479px]">
        {/* First background image (Bottom) */}
        <Image
          src="/Backgrounds/home3bg1.svg"
          alt="Background Doctor"
          fill
          className="object-cover sm:h-auto h-[20rem] rounded-2xl sm:mt-48 mt-72 sm:ml-24 ml-6"
        />

        {/* Second overlapping image (Top) */}
        <div className="absolute sm:bottom-[40%] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90vw] sm:w-[547px] sm:h-[637px]">
          <Image
            src="/Backgrounds/home3bg2.svg"
            alt="Overlapping Doctor"
            width={547}
            height={637}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Section: About Content */}
      <div className="w-full sm:w-[35vw] flex flex-col space-y-6 sm:space-y-8 ">
        <div className='flex flex-col space-y-5'>
        {/* About Us Text & Heading */}
        <p className="text-blue-600 uppercase font-semibold tracking-widest">About Us</p>
        <h2 className="text-3xl sm:text-5xl  font-bold text-gray-800 leading-relaxed">
        Our caring doctors are here for you
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et turpis ac lacus quam etiam integer eget dolor.
        </p>

        {/* Doctor's Quote */}
        <blockquote className="relative text-xl italic text-gray-700 mt-6 lg:mt-10">
        “Our goal is to provide you with the necessary resources and advice to turn my business idea”
        </blockquote>
        </div>
        {/* Doctor Info */}
        <div className="flex items-center mt-6 lg:mt-10">
          {/* Doctor Image */}
          <Image
            src="/Icons/home3doctor.svg"
            alt="Doctor"
            width={60}
            height={60}
            className="rounded-full border border-gray-300"
          />
          {/* Name & Profession */}
          <div className="ml-4">
            <p className="text-lg font-semibold text-gray-800">John Carter</p>
            <p className="text-gray-500">Cardiologist</p>
          </div>
          {/* Doctor Signature */}
          <div className="ml-auto">
            <Image
              src="/Icons/sign.svg"
              alt="Doctor Signature"
              width={100}
              height={50}
            />
          </div>
        </div>

        {/* Book Appointment Button */}
        <button className="mt-6 lg:mt-10 text-white py-5 sm:w-64 px-4 bg-[#3D65FF] flex flex-row gap-1 items-center text-xl font-semibold rounded-full hover:bg-[#13182f] ">
          <Image
                        src="/Icons/phone.svg"
                        alt="phone"
                        width={24}
                        height={24}
                      />{" "}
          Book an Appointment
        </button>

      </div>
    </div>
  );
};

export default AboutSection;
