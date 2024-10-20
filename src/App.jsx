import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Habitaciones from "./habitaciones/Habitaciones";
import "./App.css";
import Navbar from "./common/Navbar";

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/habitaciones" element={<Habitaciones></Habitaciones>}></Route>
      </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App
