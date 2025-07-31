import React from 'react'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto text-center py-3 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-52 h-18 relative">
          <Image
            src="/demo/Logo-Standard.svg"
            alt="Footer Logo"
            layout="fill"
            objectFit="contain"
            className="block dark:hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default MainHeader
