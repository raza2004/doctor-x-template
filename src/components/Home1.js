import React from "react";
import Image from "next/image";

function Home1() {
  const radientBg = `3D65FF`;
  return (
    <div className="flex flex-col sm:max-h-[55rem] h-auto ml-[3%] p-3">
      <div className="relative overflow-hidden w-[44vw] "> </div>
      <div className="absolute sm:top-0 top-[63rem] sm:right-0 w-[97vw] left-0 sm:left-[55%] margin-reset  sm:w-[44vw] h-[90vh] z-10 ">
        <Image
          src="/Backgrounds/background.png"
          alt="Right Background"
          fill
          className="object-cover sm:rounded-br-3xl sm:rounded-none rounded-xl"
        />
      </div>
      <div className="absolute top-[58rem] right-3 sm:top-28 sm:right-20 z-10">
        <Image
          src="/Backgrounds/bg3.svg"
          alt="Right Background"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="sm:mt-10 relative sm:ml-0 ml-2 z-10 sm:p-8 ">
        <div>
          <p className="sm:text-xl font-semibold text-[#3D65FF]">
            WELCOME TO DOCTOR X
          </p>
          <div className="sm:mt-8 mt-4 sm:text-7xl text-5xl font-bold leading-[1.2em] sm:w-[38vw]">
            <p className=" ">Holistic wellness for optimal living</p>
          </div>
          <div className="mt-1 text-xl font-normal leading-[1.2em] w-[77vw] sm:w-[38vw]">
            <p className="text-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis
              aliquet ipsum donec tempus ac interdum enim.
            </p>
          </div>
        </div>
        {/* Additional homepage content */}
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 sm:space-x-4 mt-7">
          <button className="bg-[#3D65FF] flex flex-row gap-1 items-center text-xl font-semibold text-white py-6 px-8 rounded-full hover:bg-[#13182f]">
            <Image
              src="/Icons/phone.svg"
              alt="Twitter"
              width={24}
              height={24}
            />{" "}
            Book an Appointment
          </button>
          <button className="bg-[#ffffff] flex flex-row gap-1 items-center border border-black text-xl font-normal text-gray-800 py-6 px-7 rounded-full">
            <Image
              src="/Icons/star.svg"
              alt="Twitter"
              width={24}
              height={24}
            />{" "}
            Our Specialities
          </button>
        </div>
        <div className="flex mt-14 z-10">
        <Image
          src="/Backgrounds/bg2.svg"
          alt="Right Background"
          width={0}
          height={0}

          className="w-auto h-auto"
        />
      </div>
      </div>
    </div>
  );
}

export default Home1;
