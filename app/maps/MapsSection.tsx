import React from 'react'
import { MapItem } from './MapItem'
import { maspData } from './imageData'



export const MapsSection = () => {
    return (
        <section>
            {
                maspData.map((map, index) => (
                    <MapItem
                        key={index}
                        title={map.title}
                        images={map.images.map(src => ({ src }))}
                        description={map.description}
                    />
                ))
            }

        </section>
    )
}

