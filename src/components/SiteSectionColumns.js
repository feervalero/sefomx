import React from 'react'

const SiteSectionColumns = (props) => {
    return (
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
    );
}
 
export default SiteSectionColumns;