import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <>
      <div className="App">
        <div className="site-wrap" id="home-section">

          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
        
          <header class="site-navbar site-navbar-target" role="banner">

            <div class="container mb-3">
              <div class="d-flex align-items-center">
                <div class="site-logo mr-auto">
                  <a href="index.html">Noxen<span class="text-primary">.</span></a>
                </div>
                <div class="site-quick-contact d-none d-lg-flex ml-auto ">
                  <div class="d-flex site-info align-items-center mr-5">
                    <span class="block-icon mr-3"><span class="icon-map-marker"></span></span>
                    <span>34 Street Name, City Name Here, <br /> United States</span>
                  </div>
                  <div class="d-flex site-info align-items-center">
                    <span class="block-icon mr-3"><span class="icon-clock-o"></span></span>
                    <span>Sunday - Friday 8:00AM - 4:00PM <br /> Saturday CLOSED</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="menu-wrap d-flex align-items-center">
                <span class="d-inline-block d-lg-none"><a href="#" class="text-black site-menu-toggle js-menu-toggle py-5"><span class="icon-menu h3 text-black"></span></a></span>

                  

                  <nav class="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto ">
                      <li class="active"><a href="index.html" class="nav-link">Home</a></li>
                      <li><a href="services.html" class="nav-link">Services</a></li>
                      <li><a href="projects.html" class="nav-link">Projects</a></li>
                      <li><a href="about.html" class="nav-link">About</a></li>
                      <li><a href="blog.html" class="nav-link">Blog</a></li>
                      <li><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                  </nav>

                  <div class="top-social ml-auto">
                    <a href="#"><span class="icon-facebook"></span></a>
                    <a href="#"><span class="icon-twitter"></span></a>
                    <a href="#"><span class="icon-linkedin"></span></a>
                  </div>
              </div>
            </div>
          </header>
        
        </div>
        
        <div className="ftco-blocks-cover-1">
          <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <h1 className="mb-3">Digital Agency with Excellent Services.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                  <p className="mt-5"><a href="#" className="btn btn-primary">About Us</a></p>
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="white-dots">
                     <img src="images/img_2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-7 mb-5">
                <h5 className="subtitle">Features</h5>
                <h2>A creative digital agency with excellence services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="feature-1">
                  <span className="wrap-icon">
                    <span className="icon-home"></span>
                  </span>
                  <h3>Recusandae Cumque</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam, cumque a debitis reiciendis dolorum ad minus error.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="feature-1">
                  <span className="wrap-icon">
                    <span className="icon-face"></span>
                  </span>
                  <h3>Voluptas Ullam</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam, cumque a debitis reiciendis dolorum ad minus error.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="feature-1">
                  <span className="wrap-icon">
                    <span className="icon-drafts"></span>
                  </span>
                  <h3>Reiciendis Dolorum Minu</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam, cumque a debitis reiciendis dolorum ad minus error.</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12 text-center">
                <a href="#" className="btn btn-primary">View All Services</a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="h5 mb-4">Your digital partner starts here.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reprehenderit aspernatur, reiciendis explicabo doloribus aperiam sed sequi, aut repudiandae magni nobis voluptatem!</p>

                <div className="d-flex align-items-center">
                  <span className="sign mr-4">
                    <img src="images/signature.svg" alt="" className="img-fluid" />
                  </span>
                  <div>
                    <span className="d-block font-weight-bold">Mr. John Doe</span>
                    <span>CEO &amp; Co-Founder </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ml-auto">
                <h2 className="h5 mb-4">Our expertise and skills</h2>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>Writing</span>
                    <span className="ml-auto">55%</span>
                  </div>
                  <div className="progress rounded-0" style={{height:'7px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>WordPress</span>
                    <span className="ml-auto">85%</span>
                  </div>
                  <div className="progress rounded-0" style={{height:'7px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:'85%'}}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>Bootstrap</span>
                    <span className="ml-auto">93%</span>
                  </div>
                  <div className="progress rounded-0" style={{height:'7px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:'93%'}}  aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>jQuery</span>
                    <span className="ml-auto">83%</span>
                  </div>
                  <div className="progress rounded-0" style={{height:'7px'}}>
                    <div className="progress-bar" role="progressbar" style={{width:'83%'}}  aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/hero_2.jpg")'}}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <p className="lead text-white">Suscipit libero voluptate</p>
                <h2 className="text-white">Get ready to start your exciting journey. Our agency</h2>
              </div>
            </div>
            
          </div>
        </div>

        <div className="site-section counter-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="d-flex align-items-center counter">
                  <span className="icon-building-o wrap-icon mr-3"></span>
                  <div className="text">
                    <span className="d-block number">14k</span>
                    <span className="caption">number of firms</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="d-flex align-items-center counter">
                  <span className="icon-home2 wrap-icon mr-3"></span>
                  <div className="text">
                    <span className="d-block number">2k</span>
                    <span className="caption">in house crews</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="d-flex align-items-center counter">
                  <span className="icon-code wrap-icon mr-3"></span>
                  <div className="text">
                    <span className="d-block number">3920k</span>
                    <span className="caption">line of codes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 text-center">
                <h3 className="section-heading text-center">News &amp; Events</h3>
                <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>

              </div>

            </div>
            <div className="row">
              <div className="col-12">

                <div className="nonloop-block-13 owl-carousel">
                  <div className="news-1" style={{backgroundImage: 'url("images/img_1.jpg")'}}>
                    <div className="text">
                      <h3><a href="#">Consectetur adipisicing elit</a></h3>
                      <span className="category d-block mb-3">Web Development</span>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href="#" className="d-block arrow-wrap"><span className="icon-arrow_forward"></span></a>
                    </div>
                  </div>

                  <div className="news-1" style={{backgroundImage: 'url("images/img_2.jpg")'}}>
                    <div className="text">
                      <h3><a href="#">Consectetur adipisicing elit</a></h3>
                      <span className="category d-block mb-3">Web Development</span>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href="#" className="d-block arrow-wrap"><span className="icon-arrow_forward"></span></a>
                    </div>
                  </div>

                  <div className="news-1" style={{backgroundImage: 'url("images/img_3.jpg")'}}>
                    <div className="text">
                      <h3><a href="#">Consectetur adipisicing elit</a></h3>
                      <span className="category d-block mb-3">Web Development</span>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href="#" className="d-block arrow-wrap"><span className="icon-arrow_forward"></span></a>
                    </div>
                  </div>

                  <div className="news-1" style={{backgroundImage: 'url("images/img_3.jpg")'}}>
                    <div className="text">
                      <h3><a href="#">Consectetur adipisicing elit</a></h3>
                      <span className="category d-block mb-3">Web Development</span>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href="#" className="d-block arrow-wrap"><span className="icon-arrow_forward"></span></a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>


        

        <div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/hero_2.jpg")'}}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <h2 className="text-white section-heading primary-color-icon text-center">More Services</h2>
                <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-attach_money"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Consectetur Adipisicing Elit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-build"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Obcaecati Laboriosam</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-photo_camera"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Nostrum Suscipit Nobis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-redeem"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Harum Molestiae Optio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-phonelink"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Nostrum Suscipit Nobis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                  <span className="service-1-icon">
                    <span className="icon-child_friendly"></span>
                  </span>
                  <div className="service-1-contents">
                    <h3>Eaque Odit Molestias</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        
        
        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-7 text-center mb-5">
                <h2 className="section-heading text-center">Our Top Client Says</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2 text-center">
                  <div className="v-card mb-4 text-center">
                    <img src="images/person_1.jpg" alt="Image" className="img-fluid mx-auto d-block" />
                    <span>Mike Fisher</span>
                  </div>
                  <blockquote>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                  </blockquote>
                  
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2 text-center">
                  <div className="v-card mb-4 text-center">
                    <img src="images/person_2.jpg" alt="Image" className="img-fluid mx-auto d-block" />
                    <span>Jean Stanley</span>
                  </div>
                  <blockquote>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                  </blockquote>
                  
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2 text-center">
                  <div className="v-card mb-4 text-center">
                    <img src="images/person_3.jpg" alt="Image" className="img-fluid mx-auto d-block" />
                    <span>Katie Rose</span>
                  </div>
                  <blockquote>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                  </blockquote>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage:'url("images/hero_1.jpg")'}}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <h2 className="text-white section-heading primary-color-icon text-center">Quality Services</h2>
                <p className="lead text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
                <p><a href="#" className="btn btn-primary">Contact Us Now</a></p>
              </div>
            </div>
          </div>
        </div>


        <div className="site-section bg-white">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-7 text-center mb-5">
                <h2 className="section-heading text-center">Our Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_1.jpg" alt="Image"
                    className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">
                    
                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_2.jpg" alt="Image"
                    className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">
                    
                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_3.jpg" alt="Image"
                    className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">
                    
                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="footer-heading mb-3">About Us</h2>
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

                    <h2 className="footer-heading mb-4">Newsletter</h2>
                    <form action="#" className="d-flex subscribe">
                      <input type="text" className="form-control mr-3" placeholder="Email" />
                      <input type="submit" value="Send" className="btn btn-primary" />
                    </form>
              </div>
              <div className="col-lg-8 ml-auto">
                <div className="row">
                  <div className="col-lg-4 ml-auto">
                    <h2 className="footer-heading mb-4">Navigation</h2>
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h2 className="footer-heading mb-4">Navigation</h2>
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                    
                  </div>

                  
                  
                </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                </p>
                </div>
              </div>

            </div>
          </div>
        </footer>
        
      </div>

      </>
    );
  }
}

export default App;
