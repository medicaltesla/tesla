import React from 'react'
import ServicesBody from '@/components/Services/ServicesBody'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ServicesBody />
        <Footer/>
    </div>
  )
}

export default page