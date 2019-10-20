import React from 'react'

const SiteSectionCover = () => {
    return (
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
    );
}
 
export default SiteSectionCover;