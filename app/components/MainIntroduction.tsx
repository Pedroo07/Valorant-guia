import { Button } from '@/components/ui/button'
import React from 'react'

export const MainIntroduction = () => {
    return (
            <section className='flex justify-center items-center pt-48  max-h-[768px]'>
                <div className='flex flex-col max-w-[50%]  text-start pr-52'>
                    <h1 className='font-tugsten font-semibold text-9xl'>NÓS SOMOS<br /> VALORANT</h1>
                    <p className='flex flex-col gap-8 max-w-2xl text-lg'>
                        <span className='font-semibold text-lg pt-8'>DESAFIE SEUS LIMITES</span>
                        Misture o seu estilo e experiência em um cenário global e competitivo. Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!
                    </p>
                    <Button className='mt-8'>Conheça o jogo</Button>
                </div>
                <div>
                    <video src="./video-main.mp4" autoPlay muted loop playsInline width={750} />
                </div>
            </section>
    )
}
