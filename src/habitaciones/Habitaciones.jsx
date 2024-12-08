import { Helmet } from "react-helmet";
import habitaciones from "../helpers/habitaciones";
import "../habitaciones/styles/habitaciones.css";
import { useState } from "react";
import FiltrosHabitacion from "./components/FiltrosHabitacion";
import ListaHabitaciones from "./components/ListaHabitaciones";

function Habitaciones() {
  const [listaHabitaciones, setListaHabitaciones] = useState(habitaciones);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState([]);
  const [tipo, setTipo] = useState("");

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Descubre el encanto y la comodidad de nuestras habitaciones en Hostal San Jorge, Cafayate. ¡Conoce nuestras habitaciones y no dudes en elegirnos!"
        />
        <meta
          name="keywords"
          content="hostal san jorge habitaciones, hostal san jorge cafayate, san jorge cafayate habitaciones, habitaciones, imágenes, comodidades"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://hostalsanjorgecafayate.netlify.app/src/habitaciones"
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content="Habitaciones | Hostal San Jorge - Alojamiento en Cafayate, Salta"
        />
        <meta
          property="og:description"
          content="Descubre el encanto y la comodidad de nuestras habitaciones en Hostal San Jorge, Cafayate. ¡Conoce nuestras habitaciones y no dudes en elegirnos!"
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/habitacion4.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/PAGES/habitaciones"
        />
        <title>
          Habitaciones | Hostal San Jorge - Alojamiento en Cafayate, Salta
        </title>
      </Helmet>
      <section className="py-24 px-4 lg:px-24 xl:px-10 lg:py-40 w-[100%]">
        <article className="mb-8 xl:mb-14">
          <h1 className="text-[28px] lg:text-[32px] lg:text-start xl:text-[40px] md:mb-3">
            Nuestras habitaciones
          </h1>
          <p className=" text-gray-600 text-justify text-[1rem] lg:text-start">
            Descubre el encanto y la comodidad de nuestras habitaciones. Cada
            espacio fue diseñado pensando en tu confort.
          </p>
        </article>
        <article className="flex flex-col gap-3 ">
          <p className="text-center text-gray-600">
            Puedes seleccionar la habitación que estés buscando
          </p>
          <FiltrosHabitacion
            tipo={tipo}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            setTipo={setTipo}
          ></FiltrosHabitacion>
        </article>
        <ListaHabitaciones
          listaHabitaciones={listaHabitaciones}
          habitacionSeleccionada={habitacionSeleccionada}
        ></ListaHabitaciones>
      </section>
    </>
  );
}

export default Habitaciones;
