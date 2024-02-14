import React, { useState } from 'react';
import './contact.css'
import axios from 'axios'; // Asegúrate de tener instalado axios


const Contact = () =>{

    const [formData, setFormData] = useState({
        tipoAuto: '',
        marcaAuto: '',
        nombre: '',
        dpi: '',
        numeroTelefono: '',
        correoElectronico: '',
      });
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3001/v1/reservaAuto/crearReserva', {
            reservaAuto: {
              auto: {
                tipoAuto: formData.tipoAuto,
                marcaAuto: formData.marcaAuto,
              },
              solicitante: {
                nombre: formData.nombre,
                dpi: formData.dpi,
              },
              telefonos: [
                {
                  numeroTelefono: formData.numeroTelefono,
                },
              ],
              correo: [
                {
                  correoElectronico: formData.correoElectronico,
                },
              ],
            },
          },
          {
            headers: {
              'Authorization': 'Bearer xxxx',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Max-Age': '1800',
              'Access-Control-Allow-Headers': 'content-type',
              'Access-Control-Allow-Methods': "PUT, POST, GET, DELETE, PATCH, OPTIONS"
            },
          }
        );
        alert('Usted ha realizado una reseva con éxito!!');
        console.log(response.data);
        } catch (error) {
          console.error('Error al enviar los datos del formulario:', error);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    

    return(
        <section>
            <h1>Cotización</h1>

            <form onSubmit={handleSubmit}>
      <div>
        <h2>Sección 1: Automóvil</h2>
        <label>
          Tipo de Auto:
          <input
            type="text"
            name="tipoAuto"
            value={formData.tipoAuto}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Marca de Auto:
          <input
            type="text"
            name="marcaAuto"
            value={formData.marcaAuto}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <h2>Sección 2: Cliente</h2>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          DPI:
          <input
            type="text"
            name="dpi"
            value={formData.dpi}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <h2>Sección 3: Datos Adicionales</h2>
        <label>
          Número de Teléfono:
          <input
            type="tel"
            name="numeroTelefono"
            value={formData.numeroTelefono}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
        </section>       
    );
}

export default Contact;