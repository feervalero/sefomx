import React from "react";

const Footer = props => {
  return (
    <footer style={styles.footer} className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="footer-heading mb-3">About Us</h2>
            <p className="mb-2">
              Somos es una Compañía especializada en Servicios Profesionales y
              Consultoría en Recursos Humanos desarrollando estrategias con la
              finalidad de garantizar la optimización, desarrollo y crecimiento
              de las organizaciones{" "}
            </p>

            
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-4 ml-auto"></div>
              <div className="col-lg-4">
                <h2 className="footer-heading mb-4">Navigation</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#servicios">Servicios</a>
                  </li>
                  <li>
                    <a href="#contacto">Contacto</a>
                  </li>
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
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com">
                  Colorlib
                </a>
                </p>
                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                <div className="top-social ml-auto">
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#">
                  <span className="icon-linkedin"></span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles={
    footer:{
        paddingBottom:"20px"
    }
}