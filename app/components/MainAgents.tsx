import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const MainAgents = () => {
  return (
    <section className='bg-agent-pattern flex flex-row-reverse justify-center items-center gap-16'>
                <div>
                    <h1 className='font-tugsten font-semibold text-9xl text-white'>SEUS AGENTES</h1>
                    <p className='flex flex-col gap-8 max-w-2xl text-lg text-white'>
                        <span className='font-semibold text-lg pt-8'>A CRIATIVIDADE É SUA MELHOR ARMA.</span>
                        Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!
                    </p>
                    <Button className='mt-8 bg-white text-foreground hover:text-background'>Ver todos os agentes</Button>
                </div>
                <div>
                    <Image src="/Agents.png" alt="Agents" width={728} height={728} />
                </div>

            </section>
  )
}
