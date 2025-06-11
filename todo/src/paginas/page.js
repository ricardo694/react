import React from "react";
import Saludo from "../componentes/saludo";
import dog from '../img/image.png';
import rottwailer from '../img/image copy.png';
import colores from '../img/colores.png';
import elefante from '../img/elefante.png';
import stich from '../img/stich.png';
import dos from '../img/dos.png';
import tres from '../img/tres.png';
import cuatro from '../img/cuatro.png';
import cinco from '../img/cinco.png';
import seis from '../img/seis.png';
import siete from '../img/siete.png';
import ocho from '../img/ocho.png';
import nueve from '../img/nueve.png';
import '../componentes/css/page.css'
import "../componentes/css/Saludos.css";
import "../componentes/css/Tarjeta.css";
import Videos2 from "../componentes/Tajetas2"
import Botn from '../componentes/Button';
export default class Principal extends React.Component{
    constructor(props){
    super(props);
    this.state={
        Videos:[{
            "id":1,
            "title":"pitbull",
            "img":dog,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":2,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania, ",
            "img":rottwailer,
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"

        },
        {
            "id":3,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania, ",
            "img":colores,
            "color":"green",
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"

        },
            {
            "id":4,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":elefante,
            "color":"green",
 
            },
            {
            "id":5,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
   
            },
            {
            "id":6,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":dos,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
            {
            "id":7,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":tres,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
            {
            "id":8,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":cuatro,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
            {
            "id":9,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":cinco,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
           , {
            "id":10,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":seis,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
             {
            "id":11,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":siete,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
             {
            "id":12,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            },
             {
            "id":10,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "color":"green",
             "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
            }
    
    ]

    ,enlace:[{
            
    }]
    }
    }
    render(){
        return(
            <div className="body">
    <div>
            <Saludo
            name="Youtube"
            acceder="Acceder"
            enlace="Música"
            buscar="Ver"
            />
            {/* <ListaTarjetas
            personajes={this.state.data}
            /> */}
            <Botn/>
            <Videos2 corto={this.state.Videos}/>

            
    </div>
    </div>
        )
    }
}
