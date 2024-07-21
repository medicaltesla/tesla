import React from 'react'
import Image from 'next/image'
// import 'bootstrap/dist/css/bootstrap.min.css';
import imageUrl from '../public/images/about-img.jpg';
import imageUrl1 from '../public/images/bg.jpg';

const Header = () => {
    return (
        <>
            <div className="hero_area" style={{ backgroundImage: `url(${imageUrl1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <div className="hero_bg_box">
                    <Image src="/app/images/hero-bg.png" alt="Logo" width={90} height={90} />
                </div> */}

                <div className="slider_section">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h1>
                                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                                </h1>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                </p>
                                                {/* <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Read More
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Image alt="Banner" className=" mt-12 object-cover object-center rounded height-auto responsiveImg" width={600} height={600} src={imageUrl} loading="eager" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="carousel-item ">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                We Provide Best Healthcare
                                            </h1>
                                            <p>
                                                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                We Provide Best Healthcare
                                            </h1>
                                            <p>
                                                Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                        {/* <ol className="carousel-indicators">
                        <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                        <li data-target="#customCarousel1" data-slide-to="1"></li>
                        <li data-target="#customCarousel1" data-slide-to="2"></li>
                    </ol> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

