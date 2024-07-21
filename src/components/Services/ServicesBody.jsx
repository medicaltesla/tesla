import React from 'react'
import Image from 'next/image';
import imageUrl from '@/public/images/dr.sir.jpg';
import imageUrl1 from '@/public/images/dr.nitesh-jian.jpg';
import imageUrl2 from '@/public/images/doctor.JPEG';
import imageUrl3 from '@/public/images/t1.jpg';

const AboutBody = () => {
    return (
        <div className="about_section layout_padding">
            <div className="container  mx-auto">
                <div className="row">
                    <div className="col-md-6">
                        <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={500} height={400} src={imageUrl2} loading="eager" />
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container heading_center">
                                <h4>
                                    Welcome to Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre
                                </h4>
                            </div>
                            <p className='mx-4'>
                                Pune&apos;s most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care. With a focus on advanced technologies like our high-resolution 3T MRI and 32-slice CT scans and more, we ensure precise diagnoses and tailored treatment plans. At Tesla Hi-Tech, our commitment extends beyond technology; our experienced team of radiologists and medical professionals strive to provide compassionate service and support throughout your healthcare journey. Experience the difference at Tesla Hi-Tech, where innovation meets excellence for your health and well-being.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="detail-box">
                            <div className="heading_container heading_center">
                                <h4>
                                Our Mission and Vision
                                </h4>
                            </div>
                            <p className='mx-4'>
                                <b>Mission Statement:</b> At Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre, our mission is to provide superior diagnostic imaging services that empower healthcare decisions and improve patient outcomes. We are dedicated to leveraging advanced technology, including our state-of-the-art 3T MRI and 32-slice CT scan, to deliver precise and reliable results. Our commitment extends to fostering a supportive and compassionate environment where patient care remains our top priority.
                            </p>
                            <p className='mx-4'>
                                <b>Vision Statement:</b> Our vision at Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre is to lead the way in diagnostic excellence and patient-centered care in Pune and beyond. We aim to continuously innovate and expand our capabilities to meet the evolving needs of our community. By embracing cutting-edge advancements and investing in our team&apos;s expertise, we strive to set new benchmarks for diagnostic accuracy, accessibility, and patient satisfaction. Our long-term goal is to be recognized as the preferred choice for advanced imaging services, making a positive impact on the health and well-being of every patient we serve.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={600} height={600} src={imageUrl3} loading="eager" /> 
                    </div>
                    <div className="col-md-6">
                       <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={400} height={400} src={imageUrl} loading="lazy" /> 
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container heading_center">
                                <h4>
                                    Meet Our Team
                                </h4>
                            </div>
                            <p className='mx-4'>
                            <b> Dr. Ketan Kalaskar</b> is a highly skilled radiologist with extensive experience in diagnostic imaging. He completed his MBBS and MD in Radiodiagnosis and pursued a Fellowship in Body Imaging to specialize further in his field. With over 10 years of practice, Dr. Kalaskar is known for his expertise in interpreting complex medical images with precision and clarity. He is committed to ensuring accurate diagnoses and providing compassionate care to every patient at Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <p className='mx-4'>
                                <b>Dr. Nitesh Jain</b> is a distinguished radiologist with more than 15 years of experience in the medical field. He holds an MBBS degree, MD in Radiodiagnosis, DMRE (Diploma in Medical Radiodiagnosis), and AFIH (Associate Fellow of Industrial Health). Dr. Jain&apos;s extensive training and expertise enable him to deliver comprehensive diagnostic evaluations and interpretations. He is dedicated to staying at the forefront of advancements in radiology to offer state-of-the-art diagnostic services that meet the highest standards of quality and patient care at our clinic.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={400} height={400} src={imageUrl1} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody;