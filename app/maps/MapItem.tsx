"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


type MapitemProps = {
  title: string
  description: string
  images: { src: string | any }[]
}

export const MapItem: React.FC<MapitemProps> = ({ title, description, images }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
  }

  const handleNextClick = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
  }

  const currentImg = images[currentImgIndex].src

  const progressClasses: Record<number, string[]>  = {
    4: ['w-1/4', 'w-2/4', 'w-3/4', 'w-full'],
    5: ['w-1/5', 'w-2/5', 'w-3/5', 'w-4/5', 'w-full'],
  }
  const progressClass = progressClasses[images.length][currentImgIndex]
  return (
    <div className='flex flex-col gap-10 items-center p-10'>
      <div className='w-[1400px] flex flex-col gap-4 m-auto'>
        <h2 className='font-tugsten text-5xl uppercase'>{title}</h2>
        <p className='font-mark text-xs max-w-3xl'>{description}</p>
      </div>
      <Image src={currentImg} width={1400} height={888} alt='ds' />
      <div className='flex flex-col gap-6'>
        <div className='flex gap-3'>
          {images.map((map, index) => (
            <Image src={map.src} key={index} height={128} width={223} alt='sunset' onClick={() => setCurrentImgIndex(index)} className={`border cursor-pointer ${map.src === currentImg ? 'border-2 border-red-500 p-0.5' : ''}`} />
          ))}
        </div>
        <div className='w-full flex items-center'>
          <div className='w-full bg-gray-300 h-1 rounded'>
            <div className={`bg-red-500 h-1 rounded ${progressClass}`}></div>
          </div>
          <button onClick={handlePrevClick} className='text-color1 ml-4 text-2xl'><GoArrowLeft /></button>
          <button onClick={handleNextClick} className='text-color1 text-2xl'><GoArrowRight /></button>
        </div>
      </div>
    </div>
  )
}
