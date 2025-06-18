import React from "react";
import Tarjeta from "./Tarjetas"
const ListaTarjetas=({personaje})=>(
        <div className="container">
            {personaje.map((personajes)=>(
                                <Tarjeta
                                key={personajes.id}
                                title={personajes.title}
                                descrip={personajes.descrip}
                                img={personajes.img}
                                videos={personajes.videos}
                                />
            ))
                    }
        </div>
)
export default ListaTarjetas