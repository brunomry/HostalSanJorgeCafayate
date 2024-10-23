import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Habitaciones from "./habitaciones/Habitaciones";
import "./App.css";
import Navbar from "./common/Navbar";
import 'flowbite';
import DetalleHabitacion from "./habitaciones/components/DetalleHabitacion";
import Galeria from "./galeria/Galeria";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/habitaciones" element={<Habitaciones></Habitaciones>}></Route>
        <Route path="/habitacion/:id" element={<DetalleHabitacion></DetalleHabitacion>}></Route>
        <Route path="/galeria" element={<Galeria></Galeria>}></Route>
      </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App;
