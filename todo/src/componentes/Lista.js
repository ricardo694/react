import React from "react";
import Tarjeta from "./Tarjetas"
function ListaTarjetas(props){
    return(
        <div className="container">
              {props.personajes.map((personajes)=>{
                            return(
                                <Tarjeta
                                title={personajes.title}
                                descrip={personajes.descrip}
                                img={personajes.img}
                                color={personajes.color}
                                />
                                
                            )
                        })
                    },
        </div>
    )
}
export default ListaTarjetas