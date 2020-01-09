import React from "react";
const Quality = () => {
  return (
    <div
      className="site-section section-3" id="ConfianzaEtica"
      data-stellar-background-ratio="0.5"
      style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-8 text-justify mb-5 text-white">
            <h2 className="text-white section-heading primary-color-icon text-center">
              Evaluaciones de Confianza y Ética
            </h2>
            <p className="lead text-white mb-5">
              Especialistas en el cuidado y seguridad del personal que ingresa a
              la organización, a través de una herramienta única y exclusiva en
              el mercado, que te ayudará a detectar probables fraduses actuales
              o próximos ingresos en tu organización.
            </p>
            <ul>
              <p>Evaluaciones pre empleo</p>
              <p>Evaluaciones post contratación</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
