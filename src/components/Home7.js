'use client';
import React from 'react'
import Image from 'next/image'

function Home7() {
  return (
    <div className="w-full py-16 flex sm:flex-row flex-col sm:items-center px-4 sm:px-12">
      {/* Left Side */}
      <div className="flex flex-col sm:pl-12 pl-4 sm:w-1/2 space-y-4">
        <p className="text-blue-500 uppercase font-semibold tracking-widest">Our professionals</p>
        <h2 className="text-4xl sm:text-[3.75rem] sm:w-[42vw] sm:leading-[4rem] font-bold mt-2">We have a highly trained team </h2>
        <p className="font-normal text-lg text-gray-500 sm:w-[27vw]">
        Lorem ipsum dolor sit amet consectetur venenatis ac volutpat vel viverra hendrerit sit eu tellus in ipsum sed venenatis dui a aliquam magna sem mi nullam augue quam viverra viverra ipsum pretium.
        </p>
        <button className=" mt-10 sm:mt-10 text-white py-5 sm:w-60 w-full bg-[#3D65FF] flex flex-row gap-1 items-center justify-center text-xl font-semibold rounded-full hover:bg-[#13182f]">
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
      <div className="relative sm:w-[50vw] flex h-[70vh]">
        {/* Large Bottom Image */}
        <Image
          src="/Backgrounds/home7bg1.png"
          width={576}
          height={480}
          alt="Large Image"
          className="mt-48 w-[576px] h-[480px] rounded-3xl shadow-lg"
        />
        
        {/* Half Overlapping Image */}
        <Image
          src="/Backgrounds/home7bg2.png"
          width={640}
          height={632}
          alt="Half Overlapping Image"
          className="absolute rounded-2xl shadow-xl sm:top-[0%] top-40 sm:right-[10%]"
        />
      </div>
    </div>
  )
}

export default Home7