import React from 'react';
import Link from 'next/link';
import WhatsApp from './WhatsApp';
import CallButton from './Call';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {

    return (
        <footer className="footer_section mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 footer_col">
                        <div className="footer_contact">
                            <h4>
                                Address
                            </h4>
                            <div className="contact_link_box">

                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <a href='https://maps.app.goo.gl/VYJuVh65YCczeJNm8'><FaMapMarkerAlt /> Show on Google Map</a>
                                <h6>
                                    Shop No:3 Ground Floor BIZHUB Apartment Ambedkar Chowk Nehru Nagar Road, Pimpri,
                                    Maharashtra 411018
                                </h6>

                                <Link href="/contact">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                    <MdOutlinePhone />
                                        - Call +91 9175014994

                                    </span>
                                </Link>
                                <Link href="">

                                    <span>
                                        <AiOutlineMail />
                                         -  test@gmail.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="footer_social">
                            <Link href="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                            <Link href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                            <Link href="">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </Link>
                            <Link href="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-3 footer_col">
                    <div className="footer_detail">
                        <h4>
                        About
                        </h4>
                        <p>
                        Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
                        </p>
                    </div>
                    </div> */}
                    <div className="col-md-6 col-lg-2 mx-auto footer_col">
                        <div className="footer_link_box">
                            <h4>
                                Useful Links
                            </h4>
                            <div className="footer_links">
                                <Link className="active" href="/">
                                    Home
                                </Link>
                                <Link className="" href="/about">
                                    About
                                </Link>
                                <Link className="" href="/services">
                                    Services
                                </Link>
                                {/* <a className="" href="doctors.html">
                            Doctors
                        </a> */}
                                <Link className="" href="/contact">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-md-6 col-lg-3 footer_col ">
                        <h4>
                            Subscribe Here
                        </h4>
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* <div className="footer-info">
                    <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates<br><br></a>
                        &copy; <span id="displayYear"></span> Distributed By
                        <a href="https://themewagon.com/">ThemeWagon</a>
                    </p>
                
                </div>   */}
            </div>
            <CallButton/>
            <WhatsApp />
        </footer>
    )
}

export default Footer