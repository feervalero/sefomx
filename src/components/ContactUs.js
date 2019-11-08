import React from "react";

const ContactUs = props => {
  return (<>
  <div className="site-section bg-light" id="contact-section">
      <div className="container" id="contactanos">
        <div className="row justify-content-center text-center">
        <div className="col-7  mb-5">
          <h2 className="text-center">Envianos un mensaje</h2>
          <p className="text-justify">Estamos a tus ordenes para resolver cualquier duda que tengas, no dudes en dejar tus datos para ponernos en contacto contigo o con tu empresa, tambien puedes adjuntar tu CV en formato PDF para aplicar a alguna de nuestras vacantes.</p>
        </div>
      </div>
        <div className="row">
          <div className="col-lg-8 mb-5" >
            <form action="#" method="post">
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input type="text" className="form-control" placeholder="Nombre"></input>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Apellido"></input>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Correo Electronico"></input>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <textarea name="" id="" className="form-control" placeholder="Escribe tu mensaje." cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <input type="file" className="form-control" placeholder="Adjunta tu archivo"></input>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Enviar Mensaje"></input>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Información</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Dirección:</span>
                  <span>Monterrey Nuevo Leon, Mexico</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Telefono:</span><span>+1 242 4942 290</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>admin@sefo.mx</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default ContactUs;
