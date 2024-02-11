import './header.css';
import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    const abrir_cerrar_menu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
      }
    return(
        <header>
            <div className='barras'>
            <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'></button>
            </div>
            <nav id='menu' className='desplegable'>
                <ui>
                    <li><Link to="/" className='item'>Inicio</Link></li>
                    <li><Link to="/about" className='item'>Inventario</Link></li>
                    <li><Link to="/contact" className='item'>Cotización</Link></li>
                </ui>
            </nav>
        </header>
    );
}

export default Header;