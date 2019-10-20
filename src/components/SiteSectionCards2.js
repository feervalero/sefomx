import React from 'react'
const SiteSectionCard2 = (props) => {
    return (
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
    );
}
 
export default SiteSectionCard2;