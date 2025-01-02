import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import CarruselDetalleHabitacion from "./components/CarruselDetalleHabitacion";
import BreadcrumbDetalle from "./components/BreadcrumbDetalle";
import FiltrosDetalle from "./components/FiltrosDetalle";
import "./styles/detalleHabitacion.min.css";
import { consultaPorWhatsApp } from "../helpers/whatsApp";
import Head from "../seo/Head";

const DetalleHabitacion = ({ traduccion }) => {
  const [habitacion, setHabitacion] = useState(null);
  const { id } = useParams();

  const obtenerHabitacion = () => {
    const habitacionBuscada = traduccion.habitaciones.find((h) => h.id == id);
    setHabitacion(habitacionBuscada);
  };

  useEffect(() => {
    obtenerHabitacion();
  }, [id, traduccion]);

  if (!habitacion) {
    return <p>Cargando...</p>;
  }

  const consultaWhatsApp = () => {
    const url = window.location.href;
    const consulta = `Consulta de ${habitacion.nombre} \n\n${url}`;
    consultaPorWhatsApp(consulta);
  };

  return (
    <>
      <Head
        head={{
          title: `${habitacion.nombre} | Hostal San Jorge - Alojamiento`,
          robots: "index, follow",
          description: `Conoce nuestra ${habitacion.nombre}. Mira las imágenes y comodidades en detalle de esta habitación en Hostal San Jorge. ¡No dudes en contactarnos!`,
          keywords: `hostal san jorge ${habitacion.nombre}, san jorge ${habitacion.nombre}, san jorge cafayate ${habitacion.nombre}`,
          canonical: `habitacion/${habitacion.id}`,
          img: `${habitacion.imagenes[0]}`,
        }}
      ></Head>
      <main className="vsm:px-4 xl:px-20 my-8 vsm:py-10 md:py-20 vsm:w-[100%] flex flex-col gap-8 text-justify">
        <BreadcrumbDetalle habitacion={habitacion}></BreadcrumbDetalle>
        <FiltrosDetalle traduccion={traduccion}></FiltrosDetalle>
        <div className="flex flex-col flex-wrap vsm:gap-3 md:flex-row md:gap-10 vsm:w-[100%]">
          <article className="w-[100%] lg:w-[50%]">
            <CarruselDetalleHabitacion
              habitacion={habitacion}
            ></CarruselDetalleHabitacion>
          </article>
          <article className="vsm:w-[100%] lg:w-[45%] lg:mt-0">
            <div className="flex flex-col vsm:gap-2">
              <h1 className="vsm:text-[24px] mb-0 font-bold">
                {habitacion.nombre}
              </h1>
              <h2 className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:gap-3">
                <span className="text-[30px] text-[#3361c4] font-bold">$ {habitacion.precio}</span> <small className="text-gray-400 ms-1">{traduccion.paginaDetalle.tarifaActual}</small>
              </h2>
              <p className="text-gray-600">{habitacion.descripcion_breve}.</p>
              <p className="text-gray-600">
                <span>{traduccion.paginaDetalle.capacidad} {habitacion.capacidad}.</span>
              </p>
              <div>
                <h3 className="mb-1  text-[18px] font-medium">{traduccion.paginaDetalle.subtitulo1}:</h3>
                <div className="flex flex-wrap gap-1 md:gap-3">
                  {habitacion.comodidades &&
                    habitacion.comodidades.map((com, index) => (
                      <span
                        key={index}
                        className="border vsm:p-2 sm:py-2 sm:px-5 text-gray-600"
                      >
                        {com}
                      </span>
                    ))}
                </div>
              </div>
              <div className="fixed bottom-0 left-0 z-50 sm:z-0 py-1 flex md:px-20 lg:px-0 md:justify-center lg:justify-start pb-2 bg-gray-200 vsm:w-[100%] vsm:px-2 sm:static sm:bg-inherit">
                <button
                  onClick={consultaWhatsApp}
                  to={"/habitaciones"}
                  title="reservar habitación por whatsApp"
                  className="p-2 rounded-[100px] md:p-3 mt-2 w-[100%] lg:max-w-[300px] flex gap-2 justify-center items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
                >
                  <ImWhatsapp className="text-[30px]" />
                  <span>{traduccion.paginaDetalle.btnReservar}</span>
                </button>
              </div>
            </div>
          </article>
          <article className="vsm:w-[100%] lg:w-[50%] flex flex-col gap-2">
            <h3 className="vsm:text-[20px] md:text-[25px] border-b md:mb-4">
              {traduccion.paginaDetalle.subtitulo2}
            </h3>
            <p className="text-gray-600">{habitacion.descripcion_amplia}</p>
            <ul className="list-disc ms-5">
              <li className="text-gray-600">
                <span className="">Check-In: </span>{traduccion.paginaDetalle.checkin}
              </li>
              <li className="text-gray-600">
                <span className="">Check-Out: </span>{traduccion.paginaDetalle.checkout}
              </li>
              <li className="text-gray-600">{traduccion.paginaDetalle.estadia}</li>
              <li className="text-gray-600">
                <span className="">{traduccion.paginaDetalle.horarioDesayuno}</span>
              </li>
            </ul>
          </article>
          <article className="vsm:w-[100%] lg:w-[50%] flex flex-col gap-2">
            <h3 className="text-[20px] md:text-[25px] border-b md:mb-4">
            {traduccion.paginaDetalle.subtitulo3}
            </h3>
            <p className="text-gray-600">
            {traduccion.paginaDetalle.mediosPago}
            </p>
          </article>
        </div>
        <div className=" xl:mt-5 p-5 border border-[#818181] lg:w-[50%] shadow-lg">
          <p className="text-gray-700 text-center">
            {traduccion.paginaDetalle.nota}
          </p>
        </div>
      </main>
    </>
  );
};

export default DetalleHabitacion;
