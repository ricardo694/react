import React from "react";
import'./css/Tarjeta.css';
import { Link } from "react-router-dom";

export default class Tarjeta extends React.Component{

    render(){
        const{videos,img,title,descrip}=this.props
        return(
                <Link to={videos}>
                <div className="contenedor--tarjeta">
                    <img className="imagen" src={img} alt=""/>
                    <div className="contenedor--texto"> 
                        <h1 className="titulo">{title}</h1>
                        <p1 className="texto">{descrip}</p1>
                    </div>
                </div>
                </Link>
        )
    }
}