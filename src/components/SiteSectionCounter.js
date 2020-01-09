import React from 'react';
import scriptloader from 'react-async-script-loader';
import './counter.js';
const SiteSectionCounter = () => {
    return (
        <div className="site-section counter-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mb-5">
                        <div className="d-flex justify-content-center counter">
                        <span className="icon-face wrap-icon mr-3"></span>
                        <div className="text">
                        <span className="d-block number value" style={{fontSize:"3em",color:"LightBlue"}}>1500</span>
                            <span className="caption">Reclutados en 2018-2019</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 mb-5 numbers">
                        <div className="d-flex justify-content-center counter">
                        <span className="icon-building-o wrap-icon mr-3"></span>
                        <div className="text">
                            <span className="d-block number value" style={{fontSize:"3em",color:"LightBlue"}}>20</span>
                            <span className="caption">Años de experiencia</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default scriptloader("/counter.js")(SiteSectionCounter);