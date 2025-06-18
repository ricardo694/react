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
import '../componentes/css/page.css'
import "../componentes/css/Saludos.css";
import "../componentes/css/Tarjeta.css";
import ListaTarjetas from "../componentes/Lista";
import Botn from '../componentes/Button';


export default class Principal extends React.Component{
state={
        data:[{
            "id":0,
            "title":"pitbull",
            "img":dog,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":1,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania, ",
            "img":rottwailer,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":2,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania, ",
            "img":colores,
            "color":"green",
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":3,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":elefante,
            "color":"green",
        },
        {
            "id":4,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":5,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":dos,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":6,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":tres,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":7,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":cuatro,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":8,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":cinco,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":9,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":seis,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":10,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":siete,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":11,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        },
        {
            "id":12,
            "title":"rottwailer",
            "descrip":"El rottweiler es una raza canina de tipo molosoide originaria de Alemania,",
            "img":stich,
            "videos":"https://www.youtube.com/watch?v=0tU_PTOlehs"
        }
    ]
    }
    
    render(){
        return(
    <div>
            <Saludo
            name="Youtube"
            acceder="Acceder"
            enlace="Música"
            buscar="Ver"
            />
            { <ListaTarjetas
            personaje={this.state.data}
            /> 
            }
            <Botn/>
    </div>
        )
    }
}
