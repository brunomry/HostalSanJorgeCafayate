import "../habitaciones/styles/habitaciones.css";
import { useState } from "react";
import FiltrosHabitacion from "./components/FiltrosHabitacion";
import ListaHabitaciones from "./components/ListaHabitaciones";
import Head from "../../common/seo/Head";
import headData from "../../common/seo/headData";

function Habitaciones({ traduccion }) {
  const [listaHabitaciones, setListaHabitaciones] = useState(
    traduccion.habitaciones
  );
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState([]);
  const [tipo, setTipo] = useState("");

  return (
    <>
      <Head head={headData.habitaciones}></Head>
      <main className="py-24 px-4 lg:px-24 xl:px-10 lg:py-40 w-[100%]">
        <section className="mb-8 xl:mb-14">
          <h1 className="text-[32px] md:text-[35px] lg:text-[45px] lg:text-start font-bold mb-3 text-[#3361c4]">
            {traduccion.paginaHabitaciones.title}
          </h1>
          <p className=" text-gray-600 text-justify text-[1rem] lg:text-start">
            {traduccion.paginaHabitaciones.descripcion}
          </p>
        </section>
        <section className="flex flex-col gap-3 ">
          <p className="text-center text-gray-600">
            {traduccion.paginaHabitaciones.descripcionFiltro}
          </p>
          <FiltrosHabitacion
            tipo={tipo}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            setTipo={setTipo}
            traduccion={traduccion}
          ></FiltrosHabitacion>
        </section>
        <ListaHabitaciones
          listaHabitaciones={listaHabitaciones}
          habitacionSeleccionada={habitacionSeleccionada}
          traduccion={traduccion}
        ></ListaHabitaciones>
        <div className="mx-auto mt-10 p-5 border border-[#818181] md:w-[50%] shadow-lg">
          <p className="text-gray-700 text-center">
            {traduccion.paginaHabitaciones.nota}
          </p>
        </div>
      </main>
    </>
  );
}

export default Habitaciones;
