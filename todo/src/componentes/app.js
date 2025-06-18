import React from 'react';
import {BrowserRouter, Route , Routes}from "react-router-dom";
import Principal from '../paginas/page';
import Crear from "../paginas/Crear"
import NotFound from './NotFound'

const App=()=>(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Principal/>}/>
            <Route exact path="/crear/new" element={<Crear/>}/>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
)
export default App