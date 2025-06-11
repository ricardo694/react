import React from "react";
import'./css/Saludos.css'
function Saludo(props){
    return(
        <div className="header">
            <div className="header--container">
                <div className="header--item">
                    <h1 className="titulo-youtube"> {props.name}</h1>
                </div>
                <div className="header--item-input">
                    <input className="input" placeholder="Buscar"></input>
                </div>
                <div className="acceder"> 
                    <button>{props.acceder}</button>
                </div>
            </div>
            <div className="container--descripcion">
                <div className="descripcion--item"> 
                </div>
            </div>
        </div>
        
        
    )
}
export default Saludo