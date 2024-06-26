import React from 'react'
import { Agent } from './AgentItem'


const Agents = () => {
    return (
        <div className='bg-dark-pattern flex flex-col'>
            <h1 className='text-8xl text-color3 p-40 font-tugsten uppercase'>Agentes</h1>
            <div className='flex flex-col items-center'>
                <Agent />    
            </div>
        </div>

    )
}

export default Agents