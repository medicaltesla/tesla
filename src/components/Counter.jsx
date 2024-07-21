"use client"
import React, { useState, useEffect } from 'react';
import './CounterSection.css';
import Link from 'next/link';

const Counter = () => {
    const [doctorCount, setDoctorCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [customerCount, setcustomerCount] = useState(0);
    const [extraCount, setextraCount] = useState(0);
    const maxDoctorCount = 10; // Set the maximum limit for guest count
    const maxCustomerCount = 500; 
    const maxStaffCount = 30;
    const maxExtraCount = 70; // Set the maximum limit for staff count

    useEffect(() => {
        const interval = setInterval(() => {
            setDoctorCount(prevCount => (prevCount < maxDoctorCount ? prevCount + 1 : prevCount));
            setStaffCount(prevCount => (prevCount < maxStaffCount ? prevCount + 1 : prevCount));
            setcustomerCount(prevCount => (prevCount < maxCustomerCount? prevCount + 1 : prevCount));
            setextraCount(prevCount => (prevCount < maxExtraCount ? prevCount + 1 : prevCount));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="department_section layout_padding mt-4 mb-4" style={{ background:"#1e81b0" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3>Our Doctors</h3>
                                <span className='counter_number'>{doctorCount}+</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3>Our Staff</h3>
                                <span className='counter_number'>{staffCount}+</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3>Customer</h3>
                                <span className='counter_number'>{customerCount}+</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3>Services</h3>
                                <span className='counter_number'>{extraCount}+</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default Counter;