import React from "react";
import Tarjeta from "./Tarjetas";
import'./css/Tarjeta.css';
function Videos2 (props){
    return(
        <div className="todo">
            {props.corto.map((cosa)=>{
                return(
                    <Tarjeta
                    img={cosa.img}
                    title={cosa.title}
                    videos={cosa.videos}
                    descrip={cosa.descrip}/>
                )
            })}
        </div>
    )
}

export default Videos2