import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Habitaciones from "./habitaciones/Habitaciones";
import "./App.css";
import Navbar from "./common/Navbar";
import "flowbite";
import DetalleHabitacion from "./habitaciones/components/DetalleHabitacion";
import Galeria from "./galeria/Galeria";
import Faqs from "./faqs/Faqs";
import Contacto from "./contacto/Contacto";
import Footer from "./common/Footer";
import ScrollTop from "./common/ScrollTop";
import Politicas from "./politicas/Politicas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop></ScrollTop>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/habitaciones"
            element={<Habitaciones></Habitaciones>}
          ></Route>
          <Route
            path="/habitacion/:id"
            element={<DetalleHabitacion></DetalleHabitacion>}
          ></Route>
          <Route path="/galeria" element={<Galeria></Galeria>}></Route>
          <Route path="/preguntasfrecuentes" element={<Faqs></Faqs>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/politicas" element={<Politicas></Politicas>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
