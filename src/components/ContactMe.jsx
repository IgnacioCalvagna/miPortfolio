import React from "react";
import "../assets/css/contactMe.css";
const ContactMe = () => {
  return (
    <div className=" container">
      <h3 id="contactMe"  className="miH3">Contactame</h3>


      <sub>Si te gusto mi trabajo no dudes con consultarme. con gusto respondere tu  consulta lo mas rapido que pueda </sub>
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
