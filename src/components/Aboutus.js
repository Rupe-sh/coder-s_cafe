import React from 'react'
export default function Aboutus() {
  return(
    
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>About Us</h2>
        <p>Learn More <span>About Us</span></p>
      </div>

      <div className="row gy-4">
        <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: "url(assets/img/about.jpg)" }} data-aos="fade-up" data-aos-delay="150">
          <div className="call-us position-absolute">
            <h4>Book a Table</h4>
            <p>+91 7573021850</p>
          </div>
        </div>
        <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
            coder's cafe combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original (recipe), we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i>Low cost. High quality.We are always here to serve you.</li>
              <li><i className="bi bi-check2-all"></i>Something hot. Something tasty . Food that makes you say wow</li>
              <li><i className="bi bi-check2-all"></i> smooth, silky, unctuous, coating, tender, and juicy.“Our mission is to WOW people every day!”</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>

            <div className="position-relative mt-4">
              <img src="assets/img/about-2.jpg" className="img-fluid" alt="" />
              <a href="#" className="glightbox play-btn"></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}
