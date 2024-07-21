import Image from 'next/image';
import React from 'react';
import styles from './WhyChooseUs.css';
import Link from 'next/link';

const WhyChooseUs = () => {
    return (
        <div className="department_section layout_padding">
            <div className="why_container">
                <div className="container p-4">
                    <div className="heading_container heading_center">
                        <h2 style={
                                {fontSize:"28px"}
                            }>
                            Why Choose Tesla Hi-Tech 3T MRI Amazing & Diagnostic Center?
                        </h2>
                        <p className='mb-3 text-start'>
                            At Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre, we pride ourselves on providing state-of-the-art technology and expert care to our patients. Our clinic is equipped with the latest advanced imaging equipment, including 3T MRI and 32-slice CT scan machines, ensuring the highest quality diagnostic images and accurate results.
                        </p>
                        <p className='mb-3 text-start'>Our team of expert radiologists brings a wealth of experience and qualifications, dedicated to delivering precise diagnostics and compassionate care. We offer a comprehensive range of diagnostic services, including CT guided interventional procedures, a full pathology lab for blood tests, USG & color doppler, X-ray & X-ray procedures, ECG & stress tests, and 2D echo. This ensures that all your diagnostic needs are met under one roof.</p>
                        <p className='mb-3 text-start'>Patient-centric care is at the heart of what we do. We prioritize patient comfort and satisfaction, providing a welcoming and supportive environment. Conveniently located in Pune, our clinic is easily accessible, making it simple for you to reach us for your diagnostic needs.</p>
                        <p className='mb-3 text-start'>Choose Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre for unparalleled diagnostic accuracy, expert care, and a patient-first approach.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="btn-box">
                                <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                Comprehensive Services
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="btn-box">
                                <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                Comprehensive Services
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="btn-box">
                                <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                Comprehensive Services
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="btn-box">
                                <Link href="#" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                    Comprehensive Services
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
