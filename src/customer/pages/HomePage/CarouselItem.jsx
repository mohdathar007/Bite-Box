import React from 'react'

const CarouselItem = ({image,title}) => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center text-center'>
        <img className='w-[5rem] h-[5rem] md:w-[9rem] md:h-[9rem] lg:w-[12rem] lg:h-[12rem] rounded-full object-cover object-center' src={image} alt="" />
        <span className='py-5 font-semibold text-xl text-gray-400 '>{title}</span>
    </div>
  )
}

export default CarouselItem