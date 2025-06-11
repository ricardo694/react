import React from 'react';
import {BrowserRouter, Route , Routes}from "react-router-dom";
import Principal from '../paginas/page';
import Crear from "../paginas/Crear"

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/crear/new" element={<Crear/>}/>
        </Routes>
        </BrowserRouter>
    )
}