import React from "react";
class ContactUs extends React.Component {
  state = { name: "", lastName: "", email: "", message: "" };
  nameUpdate = event => {
    this.setState({ name: event.target.value });
  };
  lastNameUpdate = event => {
    this.setState({ lastName: event.target.value });
  };
  emailUpdate = event => {
    this.setState({ email: event.target.value });
  };
  messageUpdate = event => {
    this.setState({ message: event.target.value });
  };
  
  EnviaMail = event => {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "fer.dev.valero@gmail.com",
      Password: "Ias343073",
      To: "fer.dev.valero@gmail.com",
      From: "fer.dev.valero@gmail.com",
      Subject: `This is a message from - ${this.state.name}`,
      Body: `From:${this.state.name} ${this.state.lastName}\nEmail:${this.state.email}\nMessage:${this.state.message}`
    }).then(message => alert(message));
  };
  render() {
    return (
      <>
        <div className="site-section bg-light" id="contact-section">
          <div className="container" id="contactanos">
            <div className="row justify-content-center text-center">
              <div className="col-7  mb-5">
                <h2 className="text-center">Envianos un mensaje</h2>
                <p className="text-justify">
                  Estamos a tus ordenes para resolver cualquier duda que tengas,
                  no dudes en dejar tus datos para ponernos en contacto contigo
                  o con tu empresa, tambien puedes adjuntar tu CV en formato PDF
                  para aplicar a alguna de nuestras vacantes.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mb-5">
                <div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={this.nameUpdate}
                      ></input>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        onChange={this.lastNameUpdate}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Correo Electronico"
                        onChange={this.emailUpdate}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escribe tu mensaje."
                        cols="30"
                        rows="10"
                        onChange={this.messageUpdate}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Adjunta tu archivo"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                      <input
                        type="submit"
                        className="btn btn-block btn-primary text-white py-3 px-5"
                        value="Enviar Mensaje"
                        onClick={this.EnviaMail}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ml-auto">
                <div className="bg-white p-3 p-md-5">
                  <h3 className="text-black mb-4">Información</h3>
                  <ul className="list-unstyled footer-link">
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Dirección:</span>
                      <span>Monterrey Nuevo Leon, Mexico</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Telefono:</span>
                      <span>+1 242 4942 290</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Email:</span>
                      <span>admin@sefo.mx</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
