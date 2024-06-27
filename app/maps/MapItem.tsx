"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import img1 from './img/sunset/img1.webp'
import img2 from './img/sunset/img2.webp'
import img3 from './img/sunset/img3.webp'
import img4 from './img/sunset/img4.webp'
import img5 from './img/sunset/img5.webp'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const MapsImgs = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
]

export const MapItem = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : MapsImgs.length - 1))
  }

  const handleNextClick = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex < MapsImgs.length - 1 ? prevIndex + 1 : 0))
  }

  const currentImg = MapsImgs[currentImgIndex].src
  const progressClass = [
    'w-1/5',
    'w-2/5',
    'w-3/5',
    'w-4/5',
    'w-5/5',
  ][currentImgIndex]
  return (
    <div className='flex flex-col gap-10 items-center p-10'>
      <div className='w-[1400px] flex flex-col gap-4 m-auto'>
        <h2 className='font-tugsten text-5xl'>SUNSET</h2>
        <p className='font-mark text-xs '>Um desastre em uma instalação da Kingdom ameaça engolir toda a vizinhança. Dê um <br /> pulo no seu food truck favorito e depois lute por toda a cidade neste mapa três rotas.</p>
      </div>
      <Image src={currentImg} width={1400} height={888} alt='ds' />
      <div className='flex flex-col gap-6'>
        <div className='flex gap-3'>
          {MapsImgs.map((map, index) => (
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
