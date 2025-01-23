import React from 'react'
import ServiceSection from '@/components/ServiceSection/ServiceSection'
import OurVisionMission from '@/components/OurVisionMision/OurVisionMision'
import Partners from '@/components/Partners/Parteners'
import Cordinator from '@/components/Cordinator/Cordinator'
import ContactUs from '@/components/ContactUs/ContactUs'
import Header from '@/components/Header/Header'


function Home() {
  return (
    <>


      <Header
      isHome={true}
        />
        <OurVisionMission />
      <ServiceSection />
      <Partners />
      <Cordinator />
      <ContactUs />


    </>
  )
}

export default Home