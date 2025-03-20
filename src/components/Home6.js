import React from 'react'
import Image from 'next/image'

function Home6() {
  return (
    <div className="w-[98vw] sm:ml-4 rounded-[2rem] mt-8 padding-reset bg-[#3d65ff] sm:h-[39rem] h-[65rem] flex sm:flex-row sm:items-center relative">
<div className="hidden sm:flex justify-center relative w-[55vw] items-center mt-1 sm:mt-1">
    <Image
      src="/Backgrounds/home6bg1.png"
      alt="Medical Service"
      width={700}
      height={700}
      className="w-auto h-auto absolute z-20 left-[-1vw] rounded-3xl"
    />
</div>
 <div className="w-full sm:w-[40vw] px-6 sm:p-12 sm:pt-0 pt-16 flex flex-col items-start sm:justify-center text-white">
        <p className="text-white uppercase font-semibold tracking-widest">Book now

</p>
        <h2 className="text-4xl sm:text-6xl font-bold mt-3 sm:leading-tight ">Book your medical appointment today</h2>
        <p className="text-blue-100 mt-6 text-xl font-light">
        Lorem ipsum dolor sit amet consectetur non venenatis nisi et in quis fermentum vel magna.
        </p>
        <div className="flex sm:flex-row am:space-x-4 flex-col mt-7">
                  <button className="bg-[#13182f] flex flex-row gap-1 items-center text-xl font-semibold text-white py-6 sm:px-8 px-12 rounded-full hover:bg-[#13182f]">
                    <Image
                      src="/Icons/phone.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />{" "}
                    Book an Appointment
                  </button>
                  <button className="bg-[#ffffff] sm:mt-0 mt-4 flex flex-row gap-1 items-center border border-black text-xl font-normal text-gray-800 py-6 sm:px-7 px-12 rounded-full">
                    <Image
                      src="/Icons/star.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />{" "}
                    Our Specialities
                  </button>
                </div>
      </div>
      <Image
      src="/Backgrounds/home6bg1.png"
      alt="Medical Service"
      width={700}
      height={750}
      className="sm:hidden sm:h-auto w-[90vw] h-[30rem] top-[35rem] absolute z-50 left-[-1vw] rounded-3xl"
    />
    </div>
  )
}

export default Home6