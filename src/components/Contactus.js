import React from 'react'
export default function Contactus(){
    return(
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Contact</h2>
                <p>Need Help? <span>Contact Us</span></p>
              </div>

              <div className="mb-3">
                <iframe style={{ border: "0", width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?place/Vesu,+Surat,+Gujarat,+India/@21.139087,72.7494012,14z/data=!3m1!4b1!4m6!3m5!1s0x3be05276ea0507ad:0x73c16cff225b784!8m2!3d21.1417761!4d72.7709415!16s%2Fg%2F11c1q4y5cq?hl=en-US&entry=ttu" frameBorder="0" allowFullScreen></iframe>
              </div>

              <div className="row gy-4">

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-map flex-shrink-0"></i>
                    <div>
                      <h3>Our Address</h3>
                      <p>786,RangunPlaza,vesu surat 395010 - IND</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center">
                    <i className="icon bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p><a href="mailto:rupeshyadav9558@gmail.com" className="__cf_email__" data-cfemail="e2818d8c96838196a2879a838f928e87cc818d8f">coderscafe@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+91 7573021850</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-share flex-shrink-0"></i>
                    <div>
                      <h3>Opening Hours</h3>
                      <div><strong>Mon-Sat:</strong> 11AM - 8PM;
                        <strong>Sunday: </strong> Closed
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <form action="#" method="post" role="form" className="php-email-form p-3 p-md-4">
                <div className="row">
                  <div className="col-xl-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-xl-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>
          </section>
    )
}