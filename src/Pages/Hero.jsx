import React from 'react'
import HeroComp from '../Components/Elements/HeroComp'
import LitePaper from '../Components/Elements/LitePaper'
import PlatformInterface from '../Components/Elements/PlatformInterface'
import ProductRoadmap from '../Components/Elements/ProductRoadmap'
import Table from '../Components/Elements/Table'
import FAQs from '../Components/Utils/FAQs'

const Hero = () => {
  return (
    <>

        <HeroComp/>
        <LitePaper/>
        <PlatformInterface/>
        <Table/>
        <ProductRoadmap/>
        <FAQs/>
    </>
  )
}

export default Hero
