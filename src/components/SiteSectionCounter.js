import React from 'react'
const SiteSectionCounter = () => {
    return (
        <div className="site-section counter-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mb-5">
                        <div className="d-flex align-items-center counter">
                        <span className="icon-building-o wrap-icon mr-3"></span>
                        <div className="text">
                            <span className="d-block number">20</span>
                            <span className="caption">años de experiencia</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 mb-5">
                        <div className="d-flex align-items-center counter">
                        <span className="icon-home2 wrap-icon mr-3"></span>
                        <div className="text">
                            <span className="d-block number">1,500</span>
                            <span className="caption">reclutados en 2018-2019</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SiteSectionCounter;