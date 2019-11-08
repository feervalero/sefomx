import React from "react";
const CulturaOrg = () => {
  return (
    <div
      className="site-section section-3"
      data-stellar-background-ratio="0.5"
      style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-10 text-justify mb-5 text-white">
            <h2 className="text-white section-heading primary-color-icon text-center">
              Cultura Organizacional
            </h2>
            <p className="text-white">
              Cultura Organizacional tiene como objetivo evaluar procesos, áreas
              de las empresas, así como también permite conocer la perspectiva y
              medir el desempeño y competencias de cada colaborador a través de
              diferentes ángulos para aumentar la productividad y el logro de
              objetivos.
            </p>
            <p className="text-white">
              Descripción: el proceso es a través de un abanico criterios de
              medición, seleccionadas según la necesidad del cliente y la
              cultura de la empresa, analizando aspectos individuales y
              grupales, mediante Entrevista Profunda, Assessment, Competencias.
            </p>
            <h3 className="text-white">Beneficios:</h3>
            <ul>
              <li>
                Detección de Áreas de Oportunidad, Fortalezas, Vulnerabilidad y
                Oportunidades tanto, de forma individual y organizacional
              </li>
              <li>Identificación y descripción de procesos</li>
              <li>Mejora en la dinámica de trabajo</li>
              <li>Mayor productividad</li>
              <li>Cumplimiento de objetivos</li>
              <li>Desarrollar un sistema de evaluación</li>
              <li>Enfoque de perspectivas de desempeño de cada colaborador.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturaOrg;
