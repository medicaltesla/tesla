"use client"
import React, { useEffect } from 'react';


const CounterSection = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.number');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-number');
                const count = +counter.innerText;
                const speed = 200;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }, []);

    return (
        <div className="ftco-section ftco-counter img mt-1" id="section-counter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="300">0</strong>
                                        <span>Happy Guests</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="50">0</strong>
                                        <span>Rooms</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="20">0</strong>
                                        <span>Staffs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="20">0</strong>
                                        <span>Destination</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
