import React from "react";
import'./css/Saludos.css';
import Boton from '../img/Boton.png';
import { Link } from "react-router-dom";

const Botn=(props)=>{
        <div className="center">
            <Link to="/crear/new">
                <img className="boton" src={Boton} alt=""/>
            </Link>
        </div>
}
export default Botn