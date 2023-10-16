<link rel="stylesheet" href="./Navbar.css"></link>
import {RiShoppingCart2Line} from "react-icons/ri"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
    <div>
        <h4>Tienda de Envases</h4>
        <ul>
            <li><button type="button" className="btn btn-success">Inicio</button></li>
            <li><button type="button" className="btn btn-success">Nuestros Productos</button></li>
            <li><button type="button" className="btn btn-success">Quienes somos</button></li>
            <li><button type="button" className="btn btn-success">Contacto</button></li>
        </ul>
        <div>
        <RiShoppingCart2Line color="lightgreen" size="50px"/>
        <span>3</span>
        </div>
    </div>
    );
}

export default Navbar

