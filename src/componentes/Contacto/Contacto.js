import React from "react";
import "./Contacto.css";
import { useForm } from "react-hook-form";


const Contacto = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  }


return (
<>
<div className="contenedor">

  <section className="direcciones"> 
  <h2 className="tituloContacto"> contacto</h2>
    <ul className="lista">
      <li> <svg className="icono icono-lg icono-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg> <a href="https://wa.me/5492612197075" class="contact-link">5492512197075</a></li>
      <li><svg class="icono icono-lg icono-inline" viewBox="0 0 512 512"><path d="M487.8 24.1L387 .8a31.3 31.3 0 0 0-35.8 18.1l-46.5 108.5a31.4 31.4 0 0 0 8.9 36.5l53.9 44.1a350 350 0 0 1-159.6 159.6l-44.1-53.9a31.4 31.4 0 0 0-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7A31.2 31.2 0 0 0 54.5 512 457.4 457.4 0 0 0 512 54.5a31 31 0 0 0-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23A425.3 425.3 0 0 1 55.1 480z"></path></svg> <a href="tel:261-4378298" class="contact-link">261-4378298</a></li>
      <li> <svg class="icono icono-lg icono-inline" viewBox="0 0 512 512"><path d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM48 96h416a16 16 0 0 1 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3A6862.8 6862.8 0 0 1 32 153.4V112a16 16 0 0 1 16-16zm416 320H48a16 16 0 0 1-16-16V195a11843 11843 0 0 0 130.7 104.7c20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3A11843 11843 0 0 0 480 195v205a16 16 0 0 1-16 16z"></path></svg> <a href="mailto:libreriacriolla@hotmail.com" class="contact-link">libreriacriolla@hotmail.com</a></li>
    </ul>
  </section>
<section className="formulario">

  <form onSubmit={handleSubmit(onSubmit)} className="formulario_contenido">
    <div className="formulario_contenido">
      <label> Nombre </label>
      <input type="text" {...register('nombre', {
        required:true,
      })} />
  
      {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
  
    </div>
    <div className="formulario_contenido">
      <label> Apellido </label>
      <input type="text" {...register('apellido',{ 
        required:true
      
      })} />
        {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
    </div>
    <div className="formulario_contenido">
      <label> Email </label>
      <input type="text" {...register('email', {
        required:true,
        pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
      })} />
  
  {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
    </div>
    <div className="formulario_contenido">
      <label> Provincia </label>
      <select {...register('sabor')}>
        <option value="ba"> Buenos Aires </option>        
        <option value="ct"> Catamarca </option>
        <option value="ch"> Chaco </option>
        <option value="chu"> Chubut </option>  
        <option value="cor"> Córdoba </option>
        <option value="cr"> Corrientes </option>
        <option value="er"> Entre Rios </option>
        <option value="for"> Formosa </option>
        <option value="ju"> Jujuy </option>
        <option value="lp"> La Pampa </option>
        <option value="lr"> La Rioja </option>
        <option value="mdz"> Mendoza </option>
        <option value="mi"> Misiones </option>
        <option value="ne"> Neuquen</option>
        <option value="rn"> Rio Negro</option>
        <option value="sa"> Salta </option>
        <option value="sc"> Santa Cruz </option>
        <option value="sf"> Santa Fe </option>
        <option value="se"> Santiago del Estero </option>
        <option value="sj"> San Juan </option>
        <option value="sl"> San Luis </option>
        <option value="tf"> Tierra del Fuego </option>
        <option value="tu"> Tucuman </option>

      </select>
    </div>
    <label for="mensaje"> Realizar un comentario</label>
    <textarea name="mensaje" id="mensaje" cols="20" rows="5" maxlength="200" placeholder="Escriba su consulta"></textarea>
    <input type="submit" value="Enviar" className="submit"/>
    
  </form>
  
  </section>
  </div>
  </>
  
  
  );
};
    export default Contacto;