import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import habitaciones from "../helpers/habitaciones";
import { useEffect, useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import CarruselDetalleHabitacion from "./components/CarruselDetalleHabitacion";
import banner from "../assets/IMG/Galeria/pasillo.webp";
import BreadcrumbDetalle from "./components/BreadcrumbDetalle";
import FiltrosDetalle from "./components/FiltrosDetalle";
import "./styles/detalleHabitacion.css";
import { consultaPorWhatsApp } from "../helpers/whatsApp";

const DetalleHabitacion = () => {
  const [habitacion, setHabitacion] = useState(null);
  const { id } = useParams();

  const obtenerHabitacion = () => {
    const habitacionBuscada = habitaciones.find((h) => h.id == id);
    setHabitacion(habitacionBuscada);
  };

  useEffect(() => {
    obtenerHabitacion();
  }, [id]);

  if (!habitacion) {
    return <p>Cargando...</p>;
  }

  const url = window.location.href;
  const consulta = `Consulta de ${habitacion.nombre} \n\n${url}`;

  const consultaWhatsApp = () => {
    consultaPorWhatsApp(consulta)
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Mira ahora mismo las imágenes y comodidades de nuestra habitación doble en Hostal San Jorge, Cafayate. ¡No dudes en contactarnos!"
        />
        <meta
          name="keywords"
          content="hostal san jorge habitacion doble, hostal san jorge cafayate, san jorge cafayate, detalle de habitación doble, habitación doble, imágenes, comodidades de habitación doble"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://hostalsanjorgecafayate.netlify.app/src/habitacion/${habitacion.nombre}`}
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content={`${habitacion.nombre} | Hostal San Jorge - Alojamiento`}
        />
        <meta
          property="og:description"
          content="Mira ahora mismo las imágenes y comodidades de nuestra habitación doble en Hostal San Jorge, Cafayate. ¡No dudes en contactarnos!"
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/Habitaciones/HabitacionDoble/hab6 (1).webp"
        />
        <meta
          property="og:url"
          content={`https://hostalsanjorgecafayate.netlify.app/src/habitacion/${habitacion.nombre}`}
        />
        <title> {habitacion.nombre} | Hostal San Jorge - Alojamiento</title>
      </Helmet>
      <section className="vsm:px-4 xl:px-20 my-14 vsm:py-10 md:py-20 vsm:w-[100%] flex flex-col gap-8 text-justify">
        <BreadcrumbDetalle habitacion={habitacion}></BreadcrumbDetalle>
        <FiltrosDetalle></FiltrosDetalle>
        <div className="flex flex-col flex-wrap vsm:gap-3 md:flex-row md:gap-10 vsm:w-[100%]">
          <article className="w-[100%] lg:w-[50%]">
            <CarruselDetalleHabitacion
              habitacion={habitacion}
            ></CarruselDetalleHabitacion>
          </article>
          <article className="vsm:w-[100%] lg:w-[45%] md:mt-28 lg:mt-0">
            <div className="flex flex-col vsm:gap-1">
              <h1 className="vsm:text-[24px] md:text-[32px] xl:text-[40px] mb-0  ">{habitacion.nombre}</h1>
              <p className="vsm:text-[18px] md:text-[24px] xl:text-[30px]">${habitacion.precio}</p>

              <p className="text-gray-600">{habitacion.descripcion_breve}</p>
              <p className="text-gray-600">
                <span className="">Capacidad máxima:</span>{" "}
                {habitacion.capacidad}
              </p>
              <div>
                <h3 className="mb-1  text-[18px] ">Comodidades:</h3>
                <div className="flex flex-wrap gap-2">
                  {habitacion.comodidades &&
                    habitacion.comodidades.map((com,index) => (
                      <span key={index} className="border vsm:p-2 sm:py-2 sm:px-5 text-gray-600">
                        {com}
                      </span>
                    ))}
                </div>
              </div>
              <div className="fixed bottom-0 left-0 z-50 sm:z-0 py-1 flex pb-2 bg-gray-200 vsm:w-[100%] vsm:px-0 sm:static sm:bg-inherit">
                <button 
                  onClick={consultaWhatsApp}
                  to={"/habitaciones"}
                  className="p-2 md:p-3 mt-2 w-[100%] md:max-w-[300px] flex gap-3 justify-center items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
                >
                  <ImWhatsapp className="text-[30px]" />
                  <span>CONSULTAR DISPONIBILIDAD</span>
                </button>
              </div> 
            </div>
          </article>
          <article className="vsm:w-[100%] lg:w-[50%] flex flex-col gap-2 xl:mt-10 2xl:mt-28">
            <h2 className="vsm:text-[20px] md:text-[25px] border-b md:mb-4">Más información</h2>
            <p className="text-gray-600">{habitacion.descripcion_amplia}</p>
            <p className="text-gray-600">
              <span className="">Check-In: </span>a partir de las 02:00 am hasta
              00:00
            </p>
            <p className="text-gray-600">
              <span className="">Check-Out: </span>hasta 10:00 am
            </p>
            <p className="text-gray-600">La estadía incluye Desayuno</p>
            <p className="text-gray-600">
              <span className="">Horario Desayuno: </span>8:30 a 09:45 am
            </p>
            {/* <div className="flex items-center gap-5">
              <span className=" text-gray-600">Compartir:</span>
              <div className="flex gap-4 mt-2">
                <Link
                  id="btnWhatsApp"
                  to={``}
                  title="WhatsApp"
                  className="bg-gray-200 p-2 rounded-[100%]"
                >
                  <ImWhatsapp className="text-[30px] text-green-400" />
                </Link>
                <Link
                  id="btnFacebook"
                  to={``}
                  title="Facebook"
                  className="bg-gray-200 p-2 rounded-[100%]"
                >
                  <FaFacebook className="text-[30px] text-blue-600" />
                </Link>
              </div>
            </div> */}
          </article>
          <article className="vsm:w-[100%] lg:w-[50%] flex flex-col gap-2">
            <h2 className="text-[20px] md:text-[25px] border-b md:mb-4">Formas de pago</h2>
            <p className="text-gray-600">
              Aceptamos efectivo, transferencias bancarias y también puedes
              abonar a través de link de mercadopago con tu tarjeta de
              débito/crédito. Esta última opción tiene un 10% de recargo.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default DetalleHabitacion;
