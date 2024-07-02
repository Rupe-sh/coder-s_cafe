import React from 'react'
export default function Flook() {
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center section-bg">
                <div className="container">
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
                            <p data-aos="fade-up" data-aos-delay="100"> Don’t forget the flavors - sweet, salty, tart, pleasantly bitter.</p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>

                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                            <img src="assets/img/hero-img.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
