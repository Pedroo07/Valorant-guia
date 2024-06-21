import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='flex w-full justify-between bg-black px-10 py-6 items-center fixed max-h-full'>
        <section>
            <a href="#"><Image  src={'./valorant-logo.svg'} width={35} height={35} alt='logo valorant'/>    </a>
        </section>
        <section>
            <ul className='flex space-x-8 text-white'>
                <a href=""><li className='font-mark'>Agentes</li></a>
                <a href=""><li className='font-mark'>Mapas</li></a>
                <a href=""><li className='font-mark'>Arsenal</li></a> 
            </ul>
        </section>
    </div>
  )
}

