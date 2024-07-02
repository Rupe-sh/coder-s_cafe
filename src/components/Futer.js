import React from 'react'

export default function Futer() {
    return (
        <>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-3 col-md-6 d-flex">
                        <i className="bi bi-geo-alt icon"></i>
                        <div>
                            <h4>Address</h4>
                            <p>
                                786 <br />
                                RangunPlaza,vesu surat 395010 - IND<br />
                            </p>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-telephone icon"></i>
                        <div>
                            <h4>Reservations</h4>
                            <p>
                                <strong>Phone:</strong> +91 7573021850<br />
                                <strong>Email:</strong> <a href="mailto:rupeshyadav9558@gmail.com" className="__cf_email__" data-cfemail="a7cec9c1c8e7c2dfc6cad7cbc289c4c8ca">coderscafe@gmail.com</a><br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-clock icon"></i>
                        <div>
                            <h4>Opening Hours</h4>
                            <p>
                                <strong>Mon-Sat: 11AM</strong> - 8PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Follow Us</h4>
                        <div className="social-links d-flex">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>coder's cafe</span></strong>. All Rights Reserved
                </div>

            </div>
        </>
    )
}