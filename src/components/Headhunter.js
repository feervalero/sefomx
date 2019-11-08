import React from "react";

const Headhunter = () => {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-10 text-justify">
            <h2 className="section-heading text-center">Headhunter</h2>
            <p>
              Tiene como <span style={styles.bold}>objetivo</span> la
              prospección de la fuerza laboral, a través de la búsqueda,
              selección y evaluación determinar el match idóneo para cubrir las
              necesidades del cliente basándonos en un análisis cultural, con
              finalidad de mejorar la calidad y eficiencia de las empresas.
            </p>
            <p>
              Descripción: Análisis, exploración, detalle y rastreo de la
              información más relevante acerca de creencias, forma de trabajo,
              valores, fortalezas, áreas de oportunidad y motivaciones de los
              sujetos, así como sus experiencias significativas en el contexto
              de su función y la relación con la organización Fit Cultural Vs
              Habilidades Técnicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headhunter;

const styles = {
  bold: {
    textWeight: "500"
  }
};
