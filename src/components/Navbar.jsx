'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './Navbar.css'
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image'
import logo from '@/public/images/logo1.png';
import { PiVideo } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const dropdownRef = useRef(null);
    const router = useRouter();

    const getNavLinkClass = (path) => {
        return router.pathname === path ? 'nav-link active' : 'nav-link';
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setDropdownOpen(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleOutsideClick);
    //     return () => {
    //         document.removeEventListener('mousedown', handleOutsideClick);
    //     };
    // }, []);

    return (
        <>
            <header className="header_section">
                <div className="">
                    <nav className="navbar navbar-expand-lg custom_nav-container">

                        <Link className="navbar-brand" href="/">
                            <Image src={logo} width={180} height={50} alt='logo image' />
                        </Link>

                        <CiMenuFries className="navbar-toggler" onClick={toggleSidebar} style={{ color: 'white', fontSize: '1rem' }} />

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/')} href="/">Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/services')} href="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/about')} href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/about')} href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {openSidebar && (
                        <div>
                            <ul className="mobile-sidebar-menu">
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/')} href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/services')} href="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/about')} href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={getNavLinkClass('/contact')} href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </header>


        </>
    )
}

export default Navbar
