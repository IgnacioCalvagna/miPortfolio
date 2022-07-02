
import React from "react";
import axios from "axios";
// import { useForm, ValidationError } from '@formspree/react';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import "../assets/css/contactMe.css";
import useInput from "../hook/useInput";
import Swal from "sweetalert2";


const ContactMe = () => {


  const nombre = useInput('')
  const apellido =useInput('')
  const email = useInput('')
  const telefono=useInput(0)
  const consulta =useInput('')
  
const handleSubmit= (e)=>{
  e.preventDefault();
  const miFormu={
    nombre:nombre.value,
    apellido:apellido.value,
    email:email.value,
    telefono:telefono.value,
    consulta:consulta.value,

  }


  
  axios.post("https://submit-form.com/sc5cNwnw",{miFormu})
  
  /*SERVICE_ID:  service_vfv9luh */

  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
  console.log(miFormu)
}

  return (
    <div className=" container">
      <h2 id="contactMe"  className="mih3">Contactame</h2>


      <p className="parrafito container">Si te gusto mi trabajo no dudes con consultarme. con gusto respondere tu  consulta lo mas rapido que pueda </p>
      <form id='miform' action='https://submit-form.com/sc5cNwnw' className="miForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              {...nombre}
              required={true}
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Apellido</label>

            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              {...apellido}
              required={true}
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
            {...email}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone nunber"
            aria-label="Telefono"
            {...telefono}
            required={true}
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
            {...consulta}
            required={true}
          ></textarea>
        </div>
        <div className="sendBtn">
          <button className="btn btn-dark" type="submit" >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
