import React from 'react'

const SiteSectionCards = (props) => {
    return (
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
    );
}
 
export default SiteSectionCards;