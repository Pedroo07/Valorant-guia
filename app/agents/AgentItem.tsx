import Image from 'next/image'
import React from 'react'


import sage from './img/sage.webp'
import brimstone from './img/brimstone.webp'
import astra from './img/astra.webp'
import breach from './img/breach.webp'
import chamber from './img/chamber.webp'
import clove from './img/clove.webp'
import cypher from './img/cypher.webp'
import deadlock from './img/deadlock.webp'
import fade from './img/fade.webp'
import gekko from './img/gekko.webp'
import harbor from './img/harbor.webp'
import iso from './img/iso.webp'
import jett from './img/jett.webp'
import kayo from './img/kayo.webp'
import killjoy from './img/killjoy.webp'
import neon from './img/neon.webp'
import phoenix from './img/phoenix.webp'
import raze from './img/raze.webp'
import reyna from './img/reyna.webp'
import skye from './img/skye.webp'
import sova from './img/sova.webp'
import viper from './img/viper.webp'
import yoru from './img/yoru.webp'
import omen from './img/omen.webp'

type agentProps = {
    src: string | any
    name: string
}

const agents = [
    { src: brimstone, name: 'brimstone' },
    { src: viper, name: 'viper' },
    { src: omen, name: 'omen' },
    { src: killjoy, name: 'killjoy' },
    { src: cypher, name: 'cypher' },
    { src: sova, name: 'sova' },
    { src: reyna, name: 'reyna' },
    { src: sage, name: 'sage' },
    { src: phoenix, name: 'phoenix' },
    { src: jett, name: 'jett' },
    { src: raze, name: 'raze' },
    { src: breach, name: 'breach' },
    { src: skye, name: 'skye' },
    { src: yoru, name: 'yoru' },
    { src: astra, name: 'astra' },
    { src: kayo, name: 'kayo' },
    { src: chamber, name: 'chamber' },
    { src: neon, name: 'neon' },
    { src: fade, name: 'fade' },
    { src: harbor, name: 'harbor' },
    { src: gekko, name: 'gekko' },
    { src: deadlock, name: 'deadlock' },
    { src: clove, name: 'clove' },
    { src: iso, name: 'iso' }
]

export const Agent = () => {
    return (
            <section className='grid grid-cols-4 gap-8 max-w-[1600px]'>
                {agents.map((agent, index) => (
                    <AgentItem key={index} name={agent.name} src={agent.src} />
                )
                )}
            </section>
          )
        
}

const AgentItem: React.FC<agentProps> = ({ src, name }) => {
    return (
        <div className='flex flex-col'>
            <Image src={src} alt={name} width={356} height={474} className='hover:scale-105' />
            <span className='bg-color3 font-tugsten text-2xl uppercase px-6 py-2'>{name}</span>
        </div>
    )
}
