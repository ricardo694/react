import React from "react";
import'./css/Saludos.css'
const Saludo=({name})=>(
        <div className="header">
            <div className="header--container">
                <div className="header--item">
                    <h1 className="titulo-youtube"> {name}</h1>
                </div>
                <div className="header--item-input">
                    <input className="input" placeholder="Buscar"></input>
                </div>
            </div>
        </div>
    )
export default Saludo