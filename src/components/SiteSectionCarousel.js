import React from 'react'
const SiteSectionCarousel = () => {
    return (
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
    );
}
 
export default SiteSectionCarousel;