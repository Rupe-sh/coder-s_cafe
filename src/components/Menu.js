import React from 'react'
export default function Menu(){
    return(
        
        <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Our Menu</h2>
            <p>Check Our <span>coders cafe Menu</span></p>
          </div>

          <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                <h4>Starters</h4>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                <h4>Breakfast</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                <h4>Lunch</h4>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                <h4>Dinner</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

            <div className="tab-pane fade active show" id="menu-starters">

              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Starters</h3>
              </div>

              <div className="row gy-5">

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Paneer chilli</h4>
                  <p className="ingredients">
                  Paneer Chilli is a delicious starter
                  </p>
                  <p className="price">
                  ₹210/-
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Spring roll</h4>
                  <p className="ingredients">
                  Spring roll is a traditional Chinese snack
                  </p>
                  <p className="price">
                  ₹160/-
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Green Salad</h4>
                  <p className="ingredients">
                    Healthiest starter . Include in your diet
                  </p>
                  <p className="price">
                  ₹230/-
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Spicy salad</h4>
                  <p className="ingredients">
                  Healthiest starter with spices
                  </p>
                  <p className="price">
                  ₹260/-
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Italian starter</h4>
                  <p className="ingredients">
                  Taste something new explore Italian starter
                  </p>
                  <p className="price">
                  ₹330/-
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Dryfruit with green vegetables</h4>
                  <p className="ingredients">
                  Enjoy dry fruits with vegetable
                  </p>
                  <p className="price">
                  ₹350/-
                  </p>
                </div>

              </div>
            </div>

            <div className="tab-pane fade" id="menu-breakfast">

              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Breakfast</h3>
              </div>

              <div className="row gy-5">

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Magnam Tiste</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $5.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Aut Luia</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $14.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Est Eligendi</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $8.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Laboriosam Direva</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $9.95
                  </p>
                </div>

              </div>
            </div>

            <div className="tab-pane fade" id="menu-lunch">

              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Lunch</h3>
              </div>

              <div className="row gy-5">

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Magnam Tiste</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $5.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Aut Luia</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $14.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=" " /></a>
                  <h4>Est Eligendi</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $8.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Laboriosam Direva</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $9.95
                  </p>
                </div>

              </div>
            </div>

            <div className="tab-pane fade" id="menu-dinner">

              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Dinner</h3>
              </div>

              <div className="row gy-5">

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Magnam Tiste</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $5.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Aut Luia</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $14.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Est Eligendi</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $8.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Eos Luibusdam</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $12.95
                  </p>
                </div>

                <div className="col-lg-4 menu-item">
                  <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                  <h4>Laboriosam Direva</h4>
                  <p className="ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </p>
                  <p className="price">
                    $9.95
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    )
}