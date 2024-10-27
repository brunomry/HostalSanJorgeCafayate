import { Helmet } from "react-helmet";
import banner from "../assets/IMG/Galeria/pasillo.webp";
import habitaciones from "../helpers/habitaciones";
import CardHabitacion from "./components/CardHabitacion";
import "../habitaciones/styles/habitaciones.css";

function Habitaciones() {
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
      {/* <section className="w-[100%] relative xl:py-20">
        <div className="w-full ">
          <img
            src={banner}
            className="object-cover w-[100%] h-[400px] brightness-[0.7]"
            alt="Imagen de Habitación doble"
            title="Una de nuestras habitaciones dobles"
          />
        </div>
        <article className="absolute w-[50%] left-[450px] top-[200px] px-8 bg-[rgba(43,69,94,0.8)]  py-8">
          <h1 className=" text-[45px] text-[#fff] inline-block mb-3">
            Habitaciones
          </h1>
          <p className="text-white text-[20px]">
            Descubre el encanto y la comodidad de nuestras habitaciones. Cada
            espacio fue diseñado pensando en tu confort.
          </p>
        </article>
      </section> */}
      <section className="py-24 px-2 lg:px-24 xl:px-10 lg:py-40 w-[100%]">
        <article className="mb-8 xl:mb-14">
          <h1 className="text-center text-[28px] xl:text-[30px] md:mb-3">Nuestras habitaciones</h1>
          <p className="text-center text-gray-600 text-[1rem]">
            Descubre el encanto y la comodidad de nuestras habitaciones. Cada
            espacio fue diseñado pensando en tu confort.
          </p>
        </article>
        <article className="flex flex-col gap-3 ">
          <p className="text-center text-gray-600">
            Puedes seleccionar el tipo de habitación que estés buscando
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer bg-gray-200">
              Todas
            </span>
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer hover:bg-gray-200">
              Individual
            </span>
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer hover:bg-gray-200">
              Doble
            </span>
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer hover:bg-gray-200">
              Triple
            </span>
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer hover:bg-gray-200">
              Cuádruple
            </span>
            <span className="border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer hover:bg-gray-200">
              Quíntuple
            </span>
          </div>
        </article>
        <div className="flex gap-4 containerRooms w-[100%] h-[525px] sm:h-[initial] sm:px-4 sm:grid sm:grid-cols-2 xl:grid-cols-3  mt-10 md:gap-5 lg:gap-10 xl:justify-center xl:items-center 3xl:grid-cols-4">
          {habitaciones.map((habitacion) => (
            <CardHabitacion
              key={habitacion.id}
              habitacion={habitacion}
            ></CardHabitacion>
          ))}
        </div>
      </section>
    </>
  );
}

export default Habitaciones;
