import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="about_section layout_padding">
        <div className="container mx-auto">
            <div className="row">
                <div className="col-md-12">
                    <div className="detail-box">
                        <div className="heading_container heading_center">
                            <h2 style={
                                {fontSize:"28px"}
                            }>
                                Welcome to Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre
                            </h2>
                        </div>
                        <p className='mx-4'>
                            Pune&apos;s most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care. With a focus on advanced technologies like our high-resolution 3T MRI and 32-slice CT scans and more, we ensure precise diagnoses and tailored treatment plans. At Tesla Hi-Tech, our commitment extends beyond technology; our experienced team of radiologists and medical professionals strive to provide compassionate service and support throughout your healthcare journey. Experience the difference at Tesla Hi-Tech, where innovation meets excellence for your health and well-being.
                        </p>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About