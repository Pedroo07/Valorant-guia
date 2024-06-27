import React from 'react'
import { MapItem } from './MapItem'
import { MapsSection } from './MapsSection'

const Maps = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='w-[1400px] text-8xl font-tugsten uppercase pt-40 pb-20'>Mapas</h1>
        <MapsSection/>
    </div>
  )
}

export default Maps