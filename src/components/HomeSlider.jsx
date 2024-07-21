"use client";
import React, { useState, useEffect } from 'react';
import './HomeSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'At Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre, we pride ourselves on providing state-of-the-art technology and expert care to our patients. Our clinic is equipped with the latest advanced imaging equipment, including 3T MRI and 32-slice CT scan machines, ensuring the highest quality diagnostic images and accurate results.',
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
        // Add more slides here
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentSlide]);

    return (
        <div>
            <div className="container">
                <div className="heading_container heading_center">
                    <h2 style={{ fontSize: "28px" }}>
                        Health Tips
                    </h2>
                </div>
            </div>

            <div className="slider">
                <div className="container">
                    {/* <ArrowBackIosIcon onClick={prevSlide} className='slider-button'/> */}
                    {/* <button className="slider-button" onClick={prevSlide}>Previous</button> */}
                    <div className="slideText">
                        {slides[currentSlide]}
                    </div>
                    {/* <button className="slider-button" onClick={nextSlide}>Next</button> */}
                    {/* <ArrowForwardIosIcon onClick={prevSlide} className='slider-button'/> */}
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
