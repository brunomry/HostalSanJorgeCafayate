import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Habitaciones from "./habitaciones/Habitaciones";
import "./App.css";
import Navbar from "./common/Navbar";
import "flowbite-react";
import DetalleHabitacion from "./habitaciones/DetalleHabitacion";
import Galeria from "./galeria/Galeria";
import Faqs from "./faqs/Faqs";
import Contacto from "./contacto/Contacto";
import Footer from "./common/Footer";
import ScrollTop from "./common/ScrollTop";
import Politicas from "./politicas/Politicas";
import Nosotros from "./nosotros/Nosotros";
import { traducciones } from "./helpers/traducciones";
import { useState } from "react";

const App = () => {

  const [idioma, setIdioma] = useState(localStorage.getItem('idiomaKey') || 'es');
  const traduccion = traducciones[idioma];

  return (
    <>
      <BrowserRouter>
        <ScrollTop></ScrollTop>
        <Navbar setIdioma={setIdioma} traduccion={traduccion}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/habitaciones"
            element={<Habitaciones traduccion={traduccion}></Habitaciones>}
          ></Route>
          <Route
            path="/habitacion/:id"
            element={<DetalleHabitacion></DetalleHabitacion>}
          ></Route>
          <Route path="/galeria" element={<Galeria></Galeria>}></Route>
          <Route path="/preguntasfrecuentes" element={<Faqs></Faqs>}></Route>
          <Route path="/contacto" element={<Contacto traduccion={traduccion}></Contacto>}></Route>
          <Route path="/politicas" element={<Politicas></Politicas>}></Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
