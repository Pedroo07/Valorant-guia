import React from 'react'
import { MapItem } from './MapItem'

import img1 from './img/sunset/img1.webp'
import img2 from './img/sunset/img2.webp'
import img3 from './img/sunset/img3.webp'
import img4 from './img/sunset/img4.webp'
import img5 from './img/sunset/img5.webp'


const sunsetImg = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
]

export const MapsSection = () => {
    return (
        <section>
            <MapItem
                title='sunset'
                images={sunsetImg}
                description='Um desastre em uma instalação da Kingdom ameaça engolir toda a vizinhança. Dê um pulo no seu food truck favorito e depois lute por toda a cidade neste mapa três rotas.'
            />
        </section>
    )
}

