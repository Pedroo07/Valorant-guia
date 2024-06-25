import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const MainMaps = () => {
    return (
        <section className='bg-Map-pattern flex justify-center items-center gap-20 min-h-[888px]'>
            <div className=''>
                <h1 className='font-tugsten text-9xl uppercase text-color2'>Seus Mapas</h1>
                <p className='flex flex-col gap-8 max-w-2xl text-lg'>
                    <span className='font-semibold text-lg pt-8'>BATALHE AO REDOR DO MUNDO</span>
                    Cada mapa serve como um palco para mostrar sua criatividade. Os mapas são feitos sob medida para estratégias de equipe, jogadas espetaculares e momentos eletrizantes. Faça as jogadas que todo mundo vai tentar imitar no futuro!
                </p>
                <Button className='mt-8'>Ver todos os mapas</Button>
            </div>
            <div>
                <Image src='/Maps.png' alt='Mapa' width={728} height={728} />
            </div>

        </section>
    )
}
