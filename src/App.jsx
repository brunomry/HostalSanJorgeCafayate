import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Habitaciones from "./habitaciones/Habitaciones";
import "./App.css";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/habitaciones" element={<Habitaciones></Habitaciones>}></Route>
      </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App
