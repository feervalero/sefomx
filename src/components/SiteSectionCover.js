import React from "react";

const SiteSectionCover = () => {
  return (
    <div className="ftco-blocks-cover-1">
      <div
        className="site-section-cover overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6 mt-3 pt-3">
              <h1 className="mb-3">
              Creando oportunidades, creando experiencias.
              </h1>
              <p>
                Proporcionamos servicios de alto valor añadido que contribuyen a
                mejorar los resultados de las organizaciones
              </p>
              <p className="mt-5">
                <a href="#contactanos" className="btn btn-primary">
                  Contactanos
                </a>
              </p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="white-dots">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSectionCover;
