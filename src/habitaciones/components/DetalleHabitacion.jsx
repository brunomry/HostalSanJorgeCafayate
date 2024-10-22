import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import habitaciones from "../../helpers/habitaciones";
import { useEffect, useState } from "react";

const DetalleHabitacion = () => {
  const [habitacion, setHabitacion] = useState(null);
  const { id } = useParams();

  const obtenerHabitacion = () => {
    const habitacionBuscada = habitaciones.find((h) => h.id == id);
    setHabitacion(habitacionBuscada);
  };

  console.log(habitacion);

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
          href="https://hostalsanjorgecafayate.netlify.app/src/habitacion/"
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta property="og:title" content="| Hostal San Jorge - Alojamiento" />
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
          content="https://hostalsanjorgecafayate.netlify.app/src/habitacion/"
        />
        <title> | Hostal San Jorge - Alojamiento</title>
      </Helmet>
      <section className="px-10 pt-10">
        <div className="">
          <article className="w-[100%] xl:w-[45%]">
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
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(0,0,0,0.3)]"
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

              {/* <img
                src={habitacion.img1}
                alt="Habitacion doble"
                title="Habitación doble"
                className="h-[500px] max-w-[800px]"
                id="largeImg"
                loading="lazy"
              /> */}
              {/* <img
                src={habitacion.img2}
                alt="Habitación doble"
                title="Habitación doble"
                className="h-[400px] object-cover"
                id="smallImgOne"
                loading="lazy"
              />
              <img
                src={habitacion.img3}
                alt="Baño de habitación doble"
                title="Baño de habitación doble"
                className="h-[400px] object-cover"
                id="smallImgTwo"
                loading="lazy"
              /> */}
            </div>
          </article>

          {/* <article
            className=""
          >
            <div>
              <h1 className="">Habitación Doble</h1>
              <p className="">
                <span className="">Capacidad Máxima:</span> 2
              </p>
              <p className=" ">Comodidades:</p>

             
              <div
                className=""
              >
                <div className="">
                  <a href="#" className="" id="btnCheckRoom"
                    ><span className="mb-4">Consultar Habitación</span></a
                  >
                </div>
                <div className="">
                  <span className=" ">Compartir:</span>
                  <div className="">
                    <a href="" id="btnWhatsApp" title="WhatsApp"
                      ></a>
                    <a href="" id="btnFacebook" title="Facebook"
                      ></a>
                  </div>
                </div>
              </div>
            </div>
          </article> */}
        </div>
        <div className="">
          <p className="">
            <span className="">Check-In: </span>02:00 PM
          </p>
          <p className="">
            <span className="">Check-Out: </span>10:00 AM
          </p>
        </div>
      </section>
      <section className="">
        <h2 className="">Habitaciones</h2>
        <div className=""></div>
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
