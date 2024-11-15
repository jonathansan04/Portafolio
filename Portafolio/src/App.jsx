import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Contenido from './components/Contenido'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acercade from './components/Acercade';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';

function App() {
 

  return (
    <>
    
      <BrowserRouter basename="/Portafolio">
      <Header/>
      <Routes>
      <Route path="/" element={<Contenido/>}/>
      <Route path="/aboutme" element={<Acercade/>}/>
      <Route path="/proyects" element={<Proyectos/>}/>
      <Route path="/tech" element={<Tecnologias/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
