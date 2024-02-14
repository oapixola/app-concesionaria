import React from "react";
import './about.css'

const About = () =>{

    const cars = [
        { name: 'Sedan A', color: 'Rojo', brand: 'Toyota', engine: '1.6L', availability: 'Disponible' },
        { name: 'SUV B', color: 'Azul', brand: 'Nissan', engine: '2.0L', availability: 'No disponible' },
        { name: 'Compacto C', color: 'Negro', brand: 'Mazda', engine: '1.8L', availability: 'Disponible' },
        { name: 'Camioneta D', color: 'Blanco', brand: 'Honda', engine: '2.5L', availability: 'Disponible' },
      ]

    return(
        <section>
            <h1>Inventario</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre del Automóvil</th>
          <th>Color</th>
          <th>Marca</th>
          <th>Motor</th>
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.name}</td>
            <td>{car.color}</td>
            <td>{car.brand}</td>
            <td>{car.engine}</td>
            <td>{car.availability}</td>
          </tr>
        ))}
      </tbody>
    </table>
            
        </section>
    );
}

export default About;