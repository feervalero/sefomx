import React from 'react';

const Footer = (props) => {
    return ( <footer className="site-footer">
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
    );
}
 
export default Footer;