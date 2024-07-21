import Image from 'next/image'
import React from 'react'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import HealingIcon from '@mui/icons-material/Healing';
import './Services.css'

const Services = () => {
    return (
        <div className="department_section layout_padding">
            <div className="">
                <div className="container ">
                    <div className='detail-box'>
                        <div className="heading_container heading_center">
                            <h2 style={
                                {fontSize:"28px"}
                            }>
                                Our Services
                            </h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <HealthAndSafetyIcon className='service_icon' />
                                    {/* <Image src="/images/s1.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝟑𝐓 𝐌𝐑
                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <MonitorHeartIcon className='service_icon' />
                                    {/* <Image src="/images/s2.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝟑𝟐 𝐒𝐥𝐢𝐜𝐞 𝐂𝐓 𝐬𝐜𝐚𝐧

                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <MedicalInformationIcon className='service_icon' />
                                    {/* <Image src="/images/s3.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝐂𝐓 𝐆𝐮𝐢𝐝𝐞𝐝 𝐈𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧𝐚𝐥 𝐏𝐫𝐨𝐜𝐞𝐝𝐮𝐫𝐞𝐬

                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <HealingIcon className='service_icon' />
                                    {/* <Image src="/images/s4.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝐏𝐚𝐭𝐡𝐨𝐥𝐨𝐠𝐲 𝐋𝐚𝐛 ( 𝐁𝐥𝐨𝐨𝐝 𝐭𝐞𝐬𝐭)
                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <HealthAndSafetyIcon className='service_icon' />
                                    {/* <Image src="/images/s1.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝐔𝐒𝐆 & 𝐂𝐨𝐥𝐨𝐫 𝐃𝐨𝐩𝐩𝐥𝐞𝐫

                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <MonitorHeartIcon className='service_icon' />
                                    {/* <Image src="/images/s2.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝐗- 𝐑𝐚𝐲 & 𝐗- 𝐑𝐚𝐲 𝐏𝐫𝐨𝐜𝐞𝐝𝐮𝐫𝐞𝐬
                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <MedicalInformationIcon className='service_icon' />
                                    {/* <Image src="/images/s3.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝐄𝐂𝐆 & 𝐒𝐭𝐫𝐞𝐬𝐬 𝐓𝐞𝐬𝐭
                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box ">
                                <div className="img-box">
                                    <HealingIcon className='service_icon' />
                                    {/* <Image src="/images/s4.png" alt="" width={50} height={50}/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        𝟮𝗗 𝗲𝗰𝗵𝗼

                                    </h5>
                                    <p>
                                        In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services