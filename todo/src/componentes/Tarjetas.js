import React from "react";
import'./css/Tarjeta.css';
import { Link } from "react-router-dom";

export default class Tarjeta extends React.Component{

    render(){
        const{videos,img,title}=this.props
        return(
           
            <div className="todo">
                <Link to={videos}  >
                <div className="contenedor--tarjeta"/*style={{background:`${color}`}}*/>
                    <div className="contenedor--img">
                        <img className="imagen" src={img} alt=""/>
                    </div>
                    <div className="contenedor--texto"> 
                        <h1 className="titulo">{title}</h1>
                    </div>
                </div>
                    </Link>
            </div>
        
        )
    }
}