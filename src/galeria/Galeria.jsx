import { Helmet } from "react-helmet";

function Galeria() {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes en Hostal San Jorge, Cafayate!"
        />
        <meta
          name="keywords"
          content="hostal san jorge galeria, hostal san jorge cafayate, san jorge cafayate galeria, galería, habitaciones, instalaciones, imágenes"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://hostalsanjorgecafayate.netlify.app/PAGES/galeria"
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content="Galería | Hostal San Jorge - Alojamiento en Cafayate, Salta"
        />
        <meta
          property="og:description"
          content="¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes en Hostal San Jorge, Cafayate!"
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/antiguedades1.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/src/PAGES/galeria"
        />
        <title>
          Galería | Hostal San Jorge - Alojamiento en Cafayate, Salta
        </title>
      </Helmet>
      {/* <section class="bannerGallery">
        <div class="bannerImgGallery w-100">
          <img
            src="../../IMG/Galeria/antiguedades1.webp"
            alt="Antiguedades"
            title="Antiguedades"
          />
        </div>
      </section>
      <section class="container py-5">
        <article class="text-center">
          <h1 class="pb-4 fw-bold">Galería de imágenes</h1>
          <p class="lead">
            ¡Conoce nuestras instalaciones y habitaciones a través de nuestra
            galería de imágenes!
          </p>
          <p class="lead mb-5">Puedes ver cada imagen en detalle.</p>
          <div class="text-center">
            <small>Imágenes tomadas por Sol Herrera. Ig: solherrera.ar</small>
          </div>
        </article>
        <div class="row g-2 g-sm-3 pt-4">
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/frente.webp"
              alt="frente del hostal"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/televisor.webp"
              alt="televisor antiguo"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/pasillo.webp"
              alt="pasillo principal"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Home/desayunador.webp"
              alt="desayunador"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/habitacion6.webp"
              alt="habitacion matrimonial"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/relojes.webp"
              alt="relojes antiguos"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/escaleras.webp"
              alt="escaleras"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/maquinaDeEscribir.webp"
              alt="máquina de escribir"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/antiguedades2.webp"
              alt="espejo antiguo y tocadiscos"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (1).webp"
              alt="parra de uva"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/parra.webp"
              alt="parra de uva"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Habitaciones/HabitacionSimple/hab8.webp"
              alt="habitacion simple"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Habitaciones/HabitacionDoble/hab6 (3).webp"
              alt="habitacion doble"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/antiguedades1 (1).webp"
              alt="baño"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
          <article class="col-6 col-lg-4 containerImg">
            <img
              src="../../IMG/Galeria/espejo.webp"
              alt="baño"
              class="shadow border border-2 border-white rounded-1"
              loading="lazy"
            />
            <div class="containerBg">
              <i class="fa-solid fa-magnifying-glass-plus fs-2"></i>
            </div>
          </article>
        </div>
      </section>
      <a href="" id="btnWhatsAppFixed" class="btnWppFixed" target="_blank" title="WhatsApp"
        ><i class="fa-brands fa-square-whatsapp text-success"></i>
      </a>
      <section
        id="fullscreen"
        class="fullscreen text-center"
        data-bs-slide="carousel"
      >
        <i class="bi bi-x-lg d-md-none" id="cerrar"></i>
        <div id="carouselFullScreen" class="carousel slide carouselFullScreen">
          <div class="carousel-inner">
            <div class="carousel-item">
              <img
                src="../../IMG/frente.webp"
                alt="Frente del Hostal"
                title="Frente del Hostal"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/televisor.webp"
                alt="Televisor antiguo"
                title="Televisor antiguo"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/pasillo.webp"
                alt="Pasillo principal"
                title="Pasillo principal"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Home/desayunador.webp"
                alt="Salón Desayunador"
                title="Salón Desayunador"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/habitacion6.webp"
                alt="Habitación Doble"
                title="Habitación Doble"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/relojes.webp"
                alt="Relojes antiguos"
                title="Relojes antiguos"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/escaleras.webp"
                alt="Escaleras y parra"
                title="Escaleras y parra"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/maquinaDeEscribir.webp"
                alt="Máquina de escribir"
                title="Máquina de escribir"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/antiguedades2.webp"
                alt="Mesa de desayuno y antiguedades"
                title="Mesa de desayuno y antiguedades"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (1).webp"
                alt="Espejo de baño en habitación quíntuple"
                title="Baño de habitación quíntuple"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/parra.webp"
                alt="Parra de uvas"
                title="Parra de uvas"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionSimple/hab8.webp"
                alt="Habitación Individual"
                title="Habitación Individual"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/hab6 (3).webp"
                alt="Habitación doble"
                title="Habitación doble"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/antiguedades1 (1).webp"
                alt="Antiguedades"
                title="Antiguedades"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Galeria/espejo.webp"
                alt="Espejo y parra de uvas de fondo"
                title="Espejo y parra de uvas de fondo"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            id="carouselPrev"
            type="button"
            data-bs-target="#carouselFullScreen"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            id="carouselNext"
            type="button"
            data-bs-target="#carouselFullScreen"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="text-center d-md-none">
          <button
            class="btn btn-dark mt-3 fs-5 fw-bold border border-white px-5"
            id="btnCerrar"
          >
            Cerrar
          </button>
        </div>
      </section> */}
    </div>
  );
}

export default Galeria;