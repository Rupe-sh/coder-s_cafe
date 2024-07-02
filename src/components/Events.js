import React from 'react'
 export default function Events(){
    return(
        <section id="events" className="events">
            <div className="container-fluid" data-aos="fade-up">

              <div className="section-header">
                <h2>Events</h2>
                <p>Share <span>Your Moments</span> In Our Restaurant</p>
              </div>

              <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: "url(assets/img/events-1.jpg)" }}>
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">₹4000/-</div>
                    <p className="description">
                      Design your own theme.Enjoy What you love!!!!
                    </p>
                  </div>

                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: "url(assets/img/events-2.jpg)" }}>
                    <h3>Private Parties</h3>
                    <div className="price align-self-start">₹7000/-</div>
                    <p className="description">
                    Spend your time with your love one in your private space
                    </p>
                  </div>

                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: "url(assets/img/events-3.jpg)" }}>
                    <h3>Birthday Parties</h3>
                    <div className="price align-self-start">₹3000/-</div>
                    <p className="description">
                    Celebrate a wonderful birthday party at our Cafe.
                    </p>
                  </div>

                </div>
                <div className="swiper-pagination"></div>
              </div>

            </div>
          </section>
    )
 }