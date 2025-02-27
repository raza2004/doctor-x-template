import React from "react";
import Image from "next/image";

function Home1() {
  const radientBg = `3D65FF`;
  return (
    <div className="flex flex-col">
      <div className="absolute top-0 right-0 w-[46%] h-[94%] z-10 ">
        <Image
          src="/Backgrounds/background.png"
          alt="Right Background"
          fill
          className="object-cover rounded-br-3xl"
        />
      </div>
      <div className="absolute top-32 right-32 z-10">
        <Image
          src="/Backgrounds/bg3.svg"
          alt="Right Background"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="mt-10 relative z-10 p-8 ">
        <div>
          <p className="text-xl font-semibold text-[#3D65FF]">
            WELCOME TO DOCTOR X
          </p>
          <div className="mt-8 text-7xl font-bold leading-[1.2em] w-[38vw]">
            <p className=" ">Holistic wellness for optimal living</p>
          </div>
          <div className="mt-1 text-xl font-normal leading-[1.2em] w-[38vw]">
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis
              aliquet ipsum donec tempus ac interdum enim.
            </p>
          </div>
        </div>
        {/* Additional homepage content */}
        <div className="flex flex-row space-x-4 mt-7">
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
