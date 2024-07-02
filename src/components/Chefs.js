import React from 'react'

export default function Chefs(){
    return(
        <section id="chefs" className="chefs section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Chefs</h2>
            <p>Our <span>Proffesional</span> Chefs</p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Vineet Bhatia</h4>
                  <span>Master Chef</span>
                  <p>Bhatia went on to establish Zaika in 1999, and in 2001 became the first chef of Indian origin to be awarded a Michelin Star and that too in London. </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Garima Arora</h4>
                  <span>Patissier</span>
                  <p>In November 2018, she and her restaurant were awarded a Michelin star, with Arora being the first female Indian chef to receive the distinction.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sanjeev Kapoor</h4>
                  <span>Cook</span>
                  <p>He is the youngest Executive Chef of Centaur Hotel in Mumbai in the year 1992. He is also the recipient of the Best Executive Chef of India Award by H & FS and the Mercury Gold Award at Geneva, Switzerland by Indian Federation of Culinary Associations.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    )
}