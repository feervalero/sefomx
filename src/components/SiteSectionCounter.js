import React from 'react'
const SiteSectionCounter = () => {
    return (
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
    );
}
 
export default SiteSectionCounter;