import React from 'react';
import '../componentes/css/error.css'
import Tristeza from '../img/tristeza.png'
const Nueva =()=> (
     <div className='container-error'>
        <div className='container-main'>
            <img className='img-error'  src={Tristeza} alt="Tristeza" />
            <div className='container-text'>
                <h1 className='title-error'>Awwwww.....Don´t Cry </h1>
                <h2  className='title-error sub'>Page not found </h2>
                <p className='descrip-error'>Lo sentimos, pero la página que estás buscando no existe o ha sido movida</p>
            </div>
        </div>
    </div>
    
)
export default Nueva