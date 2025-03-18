import React from 'react'
import Image from 'next/image'

function Home6() {
  return (
    <div className="w-[98vw] ml-4 rounded-[3rem] mt-8 padding-reset bg-[#3d65ff] mb-7 h-[39rem] flex flex-row sm:flex-row items-center ">
<div className="flex justify-center relative w-[55vw] items-center mt-1 sm:mt-1">
    <Image
      src="/Backgrounds/home6bg1.png"
      alt="Medical Service"
      width={700}
      height={700}
      className="w-auto h-auto absolute z-20 left-[-1vw] rounded-3xl"
    />
</div>
 <div className="w-full sm:w-[40vw] px-6 sm:p-12 flex flex-col items-start justify-center text-white">
        <p className="text-white uppercase font-semibold tracking-widest">Book now

</p>
        <h2 className="text-3xl sm:text-6xl font-bold mt-3 leading-normal ">Book your medical appointment today</h2>
        <p className="text-blue-100 mt-6 text-xl font-light">
        Lorem ipsum dolor sit amet consectetur non venenatis nisi et in quis fermentum vel magna.
        </p>
        <div className="flex flex-row space-x-4 mt-7">
                  <button className="bg-[#13182f] flex flex-row gap-1 items-center text-xl font-semibold text-white py-6 px-8 rounded-full hover:bg-[#13182f]">
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
      </div>
    </div>
  )
}

export default Home6