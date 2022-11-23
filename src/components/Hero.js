import React from 'react';
import wallpaper from '../assets/wallpaper.jpg';

export default function Hero() {
    return (
        <div className=" ">
              <div className='flex w-full relative shadow-gray-500 lg:w-[90vw] h-[15rem] sm:h-[21rem] md:h-[25rem]  '>
      <img className='min-[250px]:w-full min-[250px]:h-[15rem]  min-[250px]:object-cover w-90% mx-[4rem] object-cover absolute h-[35rem] cursor-pointer lg:w-full sm:w-full md:w-full sm:h-[21rem] md:h-[25rem] max-[1024px]:mx-0 ' src={wallpaper} alt="" />
    </div>
      </div>
  
  )
}

