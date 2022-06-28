import React from "react";
import "../assets/css/contactMe.css";
const ContactMe = () => {
  return (
    <div className="contacteme container">
      <h3 className="miH3">
        se te gusta mi trabajo, no dude en ponerse en contacto conmigo. Estoy
        aquí para ayudarle a usted.
      </h3>
      <form className="miForm ">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Apellido</label>

            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone nunber"
            aria-label="Telefono"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="col-4 form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="sendBtn">
          <button className="btn btn-dark" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
