import React from 'react'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <div className="bg-white text-center">
                <div className="container mx-auto text-center py-3 flex flex-col md:flex-row justify-center items-center gap-4">
                    <Image
                  src="/Logo.png"
                  width={200}
                  height={82}
                  alt="GTCFX"
                  className="lg:w-[220px] lg:h-[82px] md:w-[160px] md:h-[59px] w-[160px] h-[59px] cursor-pointer"
                 />
                </div>
            </div>
  )
}

export default MainHeader