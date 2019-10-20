import React from 'react'

const SiteSectionProgress = () => {
    return (
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
    );
}
 
export default SiteSectionProgress;