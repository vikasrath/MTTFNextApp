import React from 'react'
import ServiceSection from '@/components/ServiceSection/ServiceSection'
import Partners from '@/components/Partners/Parteners'
import Header from '@/components/Header/Header'


function Home() {

  
  return (
    <>
      <Header
      isHome={true}
        />
      <ServiceSection />
      <Partners />
      


    </>
  )
}

export default Home