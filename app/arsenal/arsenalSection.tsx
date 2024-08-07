import Image from 'next/image'
import React from 'react'
import { guns } from './guns'


type arsenalProps = {
    url: string | any
    title: string
    description: string
    type: string

}

 const ArsenalSection = () => {
    return (
        <div className='grid grid-cols-3 gap-8 max-w-[1200px]'>
            {guns.map((gun, index) => (
                <ArsenalItem key={index} title={gun.title} description={gun.description} type={gun.type} url={gun.url} />
            ))}
        </div>
    )
}

const ArsenalItem: React.FC<arsenalProps> = ({ url, title, description, type }) => {
    return (
        <div className='flex flex-col gap-2 last:col-start-2'>
            <Image width={380} height={220} alt='' src={url} />
            <h6 className='text-2xl uppercase '>{title}.</h6>
            <span className='font-next font-semibold uppercase'>types // {type}</span>
            <p className='text-sm'>{description}</p>
        </div>
    )
}
export default ArsenalSection