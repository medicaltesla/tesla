"use client"
import React, {useState} from 'react'
import './Contact.css';
import { FaMapMarkerAlt } from "react-icons/fa";
const { GoogleSpreadsheet } = require('google-spreadsheet');
import Image from 'next/image';
import imageUrl2 from '../public/images/t3.jpg';

export default function Contact() {

    //  app script
    function Submit(e) {
        const formEle = document.querySelector("form");
        e.preventDefault()
        // console.log("Form Submitted")
        const formData = new FormData(formEle);
        // for (const entry of formData.entries()) {
        //     console.log(entry[0] + ': ' + entry[1]);
        // }
        // console.log(formData)
        fetch("https://script.google.com/macros/s/AKfycbzZuo17jkisx4CRwag5xyBzA9lA7JTWZjY2lyeyEPaBs3Ehryj9bgS1I0NK_qsD947O/exec",
          {
            method: "POST",
            mode: 'no-cors',
            body: formData
          }
        )
        alert("Your Message is Submitted!")
    }


    return (
        <div className="contact_section layout_padding">
            <div className="container">

                <div className="heading_container heading_center">
                    <h2>
                        Get In Touch
                    </h2>
                </div>
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="form_container contact-form">
                            <form onSubmit={(e) => Submit(e)}>
                                <div className="form-row">
                                    <input type="text" name="Name" placeholder="Name" required/>
                                    <input type="text" name="Number" placeholder="Number" required/>
                                    <input type="email" name="Email" placeholder="Email" required/>
                                    <input type="text" name="Message" className="message-box" placeholder="Message" required/>
                              
                                    <button type="submit" className="btn_box">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="heading_container heading_center mt-4"><h6 >OR</h6></div>
                        
                        <div className="form_container contact-form ">
                            <div className="btn_box">
                                <a href='https://maps.app.goo.gl/VYJuVh65YCczeJNm8'>
                                    <button>
                                        <FaMapMarkerAlt className='contact_map' /> Locate us on Google Map
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={500} height={550} src={imageUrl2} loading="eager" />
                    </div>
                </div>
            </div>
        </div>
    )
}

