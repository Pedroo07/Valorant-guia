import { Button } from '@/components/ui/button'
import React from 'react'
import { MainIntroduction } from './MainIntroduction'
import Image from 'next/image'
import { MainAgents } from './MainAgents'
import { MainMaps } from './MainMaps'

export const Main = () => {
    return (
        <>
            <MainIntroduction />
            <MainAgents />
            <MainMaps/>
        </>
    )
}

