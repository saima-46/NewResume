import React from 'react'
import Navbar from '../../component/navbar'
import HeroSection from '../../component/heroSection'

import ResumeShowcase from '../../component/resumeShowCase'
import Company from '../../component/company'
import FAQSection from '../../component/FQAs'
import Footer from '../../component/footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ResumeShowcase/>
      <Company/>
      <FAQSection/>
      <Footer/>
     
    </>
  )
}

export default Home
