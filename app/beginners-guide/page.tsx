import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GuideIntroduction } from './GuideIntroduction'

const BeginnersGuide = () => {
  return (
    <div>
        <Header/>
        <GuideIntroduction/>
        <Footer/>
    </div>
  )
}

export default BeginnersGuide
