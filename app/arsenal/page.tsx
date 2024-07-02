import React from 'react'
import  ArsenalSection  from './arsenalSection'

const Arsenal = () => {
  return (
    <div  className='bg-withe-pattern flex flex-col'>
        <h1 className='text-8xl font-tugsten uppercase p-40'>Escolha a<br/> sua arma</h1>
        <div className='flex flex-col items-center'>
        <ArsenalSection />
        </div>
    </div>
  )
}

export default Arsenal