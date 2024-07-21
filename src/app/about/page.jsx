import About from '@/components/About'
import AboutBody from '@/components/About/AboutBody';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutBody/>
        <Footer/>
    </div>
  )
}

export default page;