import React from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

import "../assets/css/contactMe.css";
const ContactMe = () => {
  const basicSchemas = yup.object().shape({
    nombre: yup
      .string("El nombre debe tener solamente letras")
      .min(2, "Nombre muy corto!")
      .max(50, "Nombre muy largo!")
      .matches(/^[a-zA-Z]/, "El nombre debe teneer solo letras")
      .required("El nombre es requerido"),
    apellido: yup
      .string()
      .matches(/^[a-zA-Z]/, "El apellido debe teneer solo letras")
      .min(2, "Apellido muy corto!")
      .max(50, "Apellido muy largo!")
      .required("El apellido es requerido"),
    email: yup
      .string()
      .email("Debes ingresar un email valido")
      .required("El email es requerido"),
    telefono: yup
      .number()
      .required("El telefono es requerido"),
    consulta: yup
      .string()
      .min(2, "Mensaje muy corto!")
      .max(140, "Mensaje muy largo!")
      .required("Es necesario que comentes algo"),
  });

  const SendEmail = async (object) => {
    await emailjs.send(
      "server_porfolio",
      "template_porfolio",
      object,
      "Avf8ZqlmCp25qpmjl"
    );
    await resetForm();
    await Swal.fire(
      "Good job!",
      `Envio exitoso! 
  te responderemos a la brevedad al email ${object.email}`,
      "success"
    );
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      consulta: "",
    },
    onSubmit: (values) => {
      SendEmail(values);
    },
    validationSchema: basicSchemas,
  });

  return (
    <div className=" container">
      <h2 id="contactMe" className="mih3">
        Contactame
      </h2>

      <p className="parrafito container">
        Si te gustó mi trabajo no dudes con consultarme. con gusto responderé tu
        consulta lo mas rápido que pueda{" "}
      </p>

      <form
        id="miform"
        action="https://submit-form.com/sc5cNwnw"
        className="miForm"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Nombre <span className="errores">*</span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="First name"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && (
              <span className="errores">{errors.nombre}</span>
            )}
          </div>

          <div className="col-6">
            <label htmlFor="">Apellido <span className="errores">*</span></label>

            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              aria-label="Last name"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.apellido && errors.apellido && (
              <span className="errores">{errors.apellido}</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="">Email <span className="errores">*</span></label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <span className="errores">{errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Telefono <span className="errores">*</span></label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone nunber"
            aria-label="Telefono"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.telefono && errors.telefono && (
            <span className="errores">{errors.telefono}</span>
          )}
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
           Consulta <span className="errores">*</span>
          </label>
          <textarea
            className="col-4 form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="escribe el motivo de tu mensaje..."
            name="consulta"
            value={values.consulta}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.consulta && errors.consulta && (
            <span className="errores">{errors.consulta}</span>
          )}
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
