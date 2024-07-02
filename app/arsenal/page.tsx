import React from 'react'
import  ArsenalSection  from './arsenalSection'

const Arsenal = () => {
  return (
    <div  className='bg-withe-pattern flex flex-col'>
        <h1 className='text-8xl font-tugsten uppercase py-40 px-44 text-color2'>Escolha a<br/> sua arma</h1>
        <div className='flex flex-col items-center pb-8'>
        <ArsenalSection />
        </div>
    </div>
  )
}

export default Arsenal