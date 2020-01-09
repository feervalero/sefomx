import React from "react";

const SiteSectionCards = props => {
  return (
    <div className="site-section" id="QuienesSomos">
      <div className="container">
        <div className="row justify-content-center text-center" >
          <div className="col-md-7 mb-5">
            <h2>A creative digital agency with excellence services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 mb-2 mb-lg-0">
            <div className="feature-1">
              <span className="wrap-icon">
                <span className="icon-home"></span>
              </span>
              <h3>¿Quienes somos?</h3>
              <p>
                Somos es una Compañía especializada en Servicios Profesionales y
                Consultoría en Recursos Humanos desarrollando estrategias con la
                finalidad de garantizar la optimización, desarrollo y
                crecimiento de las organizaciones.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-2 mb-lg-0">
            <div className="feature-1">
              <span className="wrap-icon">
                <span className="icon-face"></span>
              </span>
              <h3>Misión</h3>
              <p>
                Brindar servicios y soluciones integrales, siempre actuales y
                eficaces en Recursos Humanos que respondan a las necesidades
                particulares de nuestros clientes en su interés por obtener
                resultados satisfactorios vinculados con la personalidad
                estratégica del negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSectionCards;
