import React from 'react'
import Image from 'next/image'

function Home9() {
  return (
    <div className='w-full rounded-[3rem] mt-28 flex'>
        <div className="flex justify-center w-full relative items-center mt-1 sm:mt-1">
            <Image
              src="/Backgrounds/home9.svg"
              alt="Medical Service"
              width={0}
              height={0}
              className="w-auto h-auto absolute z-20 rounded-3xl"
            />
        </div>
    </div>
  )
}

export default Home9