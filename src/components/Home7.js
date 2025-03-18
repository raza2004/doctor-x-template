'use client';
import React from 'react'
import Image from 'next/image'

function Home7() {
  return (
    <div className="w-full py-16 flex flex-row items-center px-4 sm:px-12">
      {/* Left Side */}
      <div className="flex flex-col pl-12 w-1/2 space-y-4">
        <p className="text-blue-500 uppercase font-semibold tracking-widest">Our professionals</p>
        <h2 className="text-3xl sm:text-[3.75rem] w-[42vw] leading-[4rem] font-bold mt-2">We have a highly trained team </h2>
        <p className="font-normal text-lg text-gray-500 w-[27vw]">
        Lorem ipsum dolor sit amet consectetur venenatis ac volutpat vel viverra hendrerit sit eu tellus in ipsum sed venenatis dui a aliquam magna sem mi nullam augue quam viverra viverra ipsum pretium.
        </p>
        <button className="mt-6 lg:mt-10 text-white py-5 w-60 bg-[#3D65FF] flex flex-row gap-1 items-center justify-center text-xl font-semibold rounded-full hover:bg-[#13182f]">
                 <Image
                                            src="/Icons/star.svg"
                                            alt="phone"
                                            width={24}
                                            height={24}
                                            className="mr-2"
                                          />{" "}Meet our team
        </button>
      </div>

      {/* Right Side */}
      <div className="relative w-[50vw] flex h-[70vh]">
        {/* Large Bottom Image */}
        <Image
          src="/Backgrounds/home7bg1.png"
          width={576}
          height={480}
          alt="Large Image"
          className=" mt-48 w-[576px] h-[480px] rounded-3xl shadow-lg"
        />
        
        {/* Half Overlapping Image */}
        <Image
          src="/Backgrounds/home7bg2.png"
          width={640}
          height={632}
          alt="Half Overlapping Image"
          className="absolute rounded-2xl shadow-xl top-[0%] right-[10%]"
        />
      </div>
    </div>
  )
}

export default Home7