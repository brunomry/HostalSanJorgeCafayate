import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import habitaciones from "../../helpers/habitaciones";
import { useEffect, useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

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

  return (
    <main>
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
          href={`https://hostalsanjorgecafayate.netlify.app/src/habitacion/${habitacion.tipo}`}
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content={`${habitacion.tipo} | Hostal San Jorge - Alojamiento`}
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
          content={`https://hostalsanjorgecafayate.netlify.app/src/habitacion/${habitacion.tipo}`}
        />
        <title> {habitacion.tipo} | Hostal San Jorge - Alojamiento</title>
      </Helmet>
      <section className="xl:px-20 pt-20 w-[100%] flex flex-col gap-10">
        <div className="flex flex-wrap justify-center  gap-5">
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Individual
          </span>
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Doble opción 1
          </span>
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Doble opción 2
          </span>
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Triple
          </span>
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Cuádruple
          </span>
          <span className="border py-2 px-5 text-[#363636] cursor-pointer hover:bg-gray-200">
            Quíntuple
          </span>
        </div>
        <div className="flex flex-wrap gap-10 w-[100%]">
          <article className="w-[100%] xl:w-[50%]">
            <div className="border bg-gray-100 flex justify-center">
              <div
                id="default-carousel"
                class="relative w-full"
                data-carousel="static"
              >
                <div class="relative h-56 overflow-hidden flex justify-center rounded-lg md:h-96">
                  <div
                    class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
                    data-carousel-item
                  >
                    <img
                      src={habitacion.img1}
                      class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
                      alt="..."
                    />
                  </div>
                  <div
                    class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
                    data-carousel-item
                  >
                    <img
                      src={habitacion.img2}
                      class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
                      alt="..."
                    />
                  </div>
                  <div
                    class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
                    data-carousel-item
                  >
                    <img
                      src={habitacion.img3}
                      class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
                      alt="..."
                    />
                  </div>
                </div>
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full bg-gray-800"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>
                <button
                  type="button"
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(0,0,0,0.1)]"
                  data-carousel-prev
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(0,0,0,0.3)]"
                  data-carousel-next
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </article>

          <article className="w-[45%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-[45px] mb-0">Habitación Doble</h1>
              <p className="text-gray-600">{habitacion.descripcion_breve}</p>
              <p className="text-gray-600">
                <span className="">Capacidad máxima:</span>{" "}
                {habitacion.capacidad}
              </p>
              <div>
                <h3 className="mb-1  text-[18px] ">Comodidades:</h3>
                <div className="flex flex-wrap gap-2">
                  {habitacion.comodidades &&
                    habitacion.comodidades.map((com) => (
                      <span className="border py-2 px-5 text-gray-600">
                        {com}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <Link
                  to={"/habitaciones"}
                  className="p-2 md:p-3 mt-2 w-[100%] md:max-w-[300px] flex gap-3 justify-center items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
                >
                  <ImWhatsapp className="text-[30px]" />
                  <span>CONSULTAR DISPONIBILIDAD</span>
                </Link>
              </div>
            </div>
          </article>
          <article className="w-[50%] flex flex-col gap-2">
          <h2 className="text-[25px] border-b mb-4">Más información</h2>
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
          <div className="flex items-center gap-5">
            <span className=" text-gray-600">Compartir:</span>
            <div className="flex gap-4 mt-2">
              <Link id="btnWhatsApp" to={`` } title="WhatsApp" className="bg-gray-200 p-2 rounded-[100%]">
              
              <ImWhatsapp className="text-[30px] text-green-400" />
              </Link>
              <Link id="btnFacebook" to={``} title="Facebook" className="bg-gray-200 p-2 rounded-[100%]">
              <FaFacebook className="text-[30px] text-blue-600"/>
              </Link>
            </div>
          </div>
        </article>
        </div>
        
      </section>

      {/* <div
        id="fullscreen"
        className="fullscreen text-center"
        data-bs-slide="carousel"
      >
        <i className="bi bi-x-lg d-md-none" id="cerrar"></i>
        <div id="carouselFullScreen" className="carousel slide carouselFullScreen">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/habitacion-doble.webp"
                alt="Habitación doble"
                title="Habitación doble"
                className="imgCarousel"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../IMG/Home/hab7.webp"
                alt="habitación doble"
                title="habitación doble"
                className="imgCarousel"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/bañoHab6 (1).webp"
                alt="Baño de habitación doble"
                title="Baño de habitación doble"
                className="imgCarousel"
                loading="lazy"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            id="carouselPrev"
            type="button"
            data-bs-target="#carouselFullScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            id="carouselNext"
            type="button"
            data-bs-target="#carouselFullScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center d-md-none">
          <button
            className="btn btn-dark mt-3 fs-5  border border-white px-5"
            id="btnCerrar"
          >
            Cerrar
          </button>
        </div>
      </div> */}
    </main>
  );
};

export default DetalleHabitacion;
