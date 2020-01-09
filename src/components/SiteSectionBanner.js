import React from "react";
const SiteSectionBanner = () => {
  return (
    <div
      className="site-section section-3 pb-1"
      data-stellar-background-ratio="0.5"
      style={{
        backgroundImage: 'url("images/hero_2.jpg")',
        paddingTop: "250px"
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-7 text-center mb-5">
            <h2 className="text-white section-heading primary-color-icon text-center">
              Nuestros servicios
            </h2>
            <p className="lead text-white mb-5">
              Conoce las ventajas de trabajar con nosotros y los servicios que
              podemos ofrecerte.
            </p>
            <p>
              <a href="/servicios" className="btn btn-primary">
                Contactanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSectionBanner;
