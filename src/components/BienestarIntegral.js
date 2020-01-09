import React from "react";

const BienestarIntegral = () => {
  return (
    <div
      className="site-section section-3"
      data-stellar-background-ratio="0.5"
      id="BienestarIntegral"
      style={{ backgroundImage: 'url("images/hero_3.jpg")', color: "white" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-10 text-justify">
            <h2 className="text-white section-heading primary-color-icon text-center">
              Bienestar Integral
            </h2>
            <p>-Psicología (Atención al personal, Salud Mental)</p>
            <p>-Valoración y medición de (Estrés y Ansiedad)</p>
            <p>-Life Balance (Cuidado y Balance Personal)</p>
            <p>
              -Formación (Talleres y Capacitación, Manejo de Estrés
              Comunicación)
            </p>
            <p>
              -Grupos de Entrenamiento (Habilidades para la Comunicación,
              Estilos de Liderazgo)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BienestarIntegral;
