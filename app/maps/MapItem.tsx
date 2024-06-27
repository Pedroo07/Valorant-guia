"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import img1 from './img/sunset/img1.webp'
import img2 from './img/sunset/img2.webp'
import img3 from './img/sunset/img3.webp'
import img4 from './img/sunset/img4.webp'
import img5 from './img/sunset/img5.webp'



const Maps = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
]


export const MapItem = () => {
  const [currentImg, setCurrentImg] = useState(img1)
  return (
    <div className='flex flex-col gap-10 items-center p-10'>
      <div className='w-[1400px] flex flex-col gap-4 m-auto'>
      <h2 className='font-tugsten text-5xl'>SUNSET</h2>
      <p className='font-mark text-xs '>Um desastre em uma instalação da Kingdom ameaça engolir toda a vizinhança. Dê um <br /> pulo no seu food truck favorito e depois lute por toda a cidade neste mapa três rotas.</p> 
      </div>
      <Image src={currentImg} width={1400} height={888} alt='ds' />
      <div className='flex gap-3'>
        {Maps.map((map, index) => (
          <Image  src={map.src} key={index} height={128} width={223} alt='sunset' onClick={() => setCurrentImg(map.src)} className={`border cursor-pointer ${map.src === currentImg ? 'border-2 border-red-500 p-0.5' : ''}`} />
        ))}
      </div>
    </div>
  )
}
