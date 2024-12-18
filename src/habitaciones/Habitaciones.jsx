import habitaciones from "../helpers/habitaciones";
import "../habitaciones/styles/habitaciones.css";
import { useState } from "react";
import FiltrosHabitacion from "./components/FiltrosHabitacion";
import ListaHabitaciones from "./components/ListaHabitaciones";
import Head from "../seo/Head";
import headData from "../helpers/head";

function Habitaciones({traduccion}) {
  const [listaHabitaciones, setListaHabitaciones] = useState(habitaciones);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState([]);
  const [tipo, setTipo] = useState("");

  return (
    <>
      <Head head={headData.habitaciones}></Head>
      <main className="py-24 px-4 lg:px-24 xl:px-10 lg:py-40 w-[100%]">
        <section className="mb-8 xl:mb-14">
          <h1 className="text-[32px] md:text-[35px] lg:text-[45px] lg:text-start font-bold mb-3 text-[#3361c4]">
            Nuestras habitaciones
          </h1>
          <p className=" text-gray-600 text-justify text-[1rem] lg:text-start">
            Descubre el encanto y la comodidad de nuestras habitaciones. Cada
            espacio fue diseñado pensando en tu confort.
          </p>
        </section>
        <section className="flex flex-col gap-3 ">
          <p className="text-center text-gray-600">
            Puedes seleccionar la habitación que estés buscando
          </p>
          <FiltrosHabitacion
            tipo={tipo}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            setTipo={setTipo}
          ></FiltrosHabitacion>
        </section>
        <ListaHabitaciones
          listaHabitaciones={listaHabitaciones}
          habitacionSeleccionada={habitacionSeleccionada}
          traduccion={traduccion}
        ></ListaHabitaciones>
      </main>
    </>
  );
}

export default Habitaciones;
