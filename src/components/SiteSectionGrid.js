import React from 'react'

const SiteSectionGrid = () => {
    return (<div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url("images/hero_2.jpg")'}}>
    <div className="container">
        <div className="row justify-content-center text-center">
        <div className="col-7 text-center mb-5">
            <h2 className="text-white section-heading primary-color-icon text-center">Servicios</h2>
            
        </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-1">
                <span className="service-1-icon">
                    <span className="icon-attach_money"></span>
                </span>
                <div className="service-1-contents">
                    <a href="/servicios#HeadHunter">
                        <h3 style={styles.header}>Headhunter</h3>
                    </a>
                    <p style={styles.parragraph}>Prospección de capital humano</p>
                    <p style={styles.parragraph}>Desarrollo de perfil</p>
                    <p>Investigación de mercado</p>
                </div>
                </div>
            </div>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-1">
            <span className="service-1-icon">
                <span className="icon-build"></span>
            </span>
            <div className="service-1-contents">
                <a href="/servicios#PruebasPsicometricas">
                    <h3 style={styles.header}>Pruebas psicometricas</h3>
                </a>
                <p style={styles.parragraph}>Personalidad</p>
                <p style={styles.parragraph}>Comportamiento</p>
                <p style={styles.parragraph}>Inteligencia</p>
                <p style={styles.parragraph}>Valores </p>
                <p>Rasgos psicopatológicos</p>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-1">
            <span className="service-1-icon">
                <span className="icon-photo_camera"></span>
            </span>
            <div className="service-1-contents">
                <a href="/servicios#ConfianzaEtica">
                    <h3 style={styles.header}>Evaluaciones de confianza y ética</h3>
                </a>
                <p style={styles.parragraph}>Evaluaciones pre empleo</p>
                <p style={styles.parragraph}>Evaluaciones post contratación</p>
            </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-1">
            <span className="service-1-icon">
                <span className="icon-redeem"></span>
            </span>
            <div className="service-1-contents">
                <a href="/servicios#CulturaOrganizacional">
                    <h3 style={styles.header}>Cultura Organizacional</h3>
                </a>
                <p style={styles.parragraph}>Análisis de entorno laboral</p>
                <p style={styles.parragraph}>Desarrollo de estrategias</p>
                <p>Plan de desarrollo vida y carrera</p>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-1">
            <span className="service-1-icon">
                <span className="icon-wb_sunny"></span>
            </span>
            <div className="service-1-contents">
                <a href="/servicios#BienestarIntegral">
                <h3 style={styles.header}>Modelo 360 bienestar Integral</h3>
                </a>
                <p style={styles.parragraph}>Psicología</p>
                <p style={styles.parragraph}>Valoración y medición de estrés y Ansiedad</p>
                <p style={styles.parragraph}>Life Balance</p>
                <p style={styles.parragraph}>Formación</p>
                <p style={styles.parragraph}>Grupos de Entrenamiento</p>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-1">
            <span className="service-1-icon">
                <span className="icon-phonelink"></span>
            </span>
            <div className="service-1-contents">
                <h3 style={styles.header}>Training Generations</h3>
                <p>Sensibilización, entrenamientos e integración   de equipos de altos desempeño.</p>
            </div>
            </div>
        </div>
        

        </div>
    </div>
</div>);
}
 
export default SiteSectionGrid;

const styles={
    header:{
        fontSize:"30px"
    },
    parragraph:{
        margin:"0"
    }
};