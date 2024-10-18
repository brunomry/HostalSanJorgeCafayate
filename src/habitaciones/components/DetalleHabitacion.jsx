import { Helmet } from "react-helmet";

function DetalleHabitacion() {
  return (
    <div>
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
          href="https://hostalsanjorgecafayate.netlify.app/src/PAGES/habitacionDoble"
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content="Habitación Doble | Hostal San Jorge - Alojamiento"
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
          content="https://hostalsanjorgecafayate.netlify.app/src/PAGES/HabitacionDoble"
        />
        <title>Habitación Doble | Hostal San Jorge - Alojamiento</title>
      </Helmet>
      {/* <section class="container-fluid pt-5 sectionRoom">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-md-0 mb-lg-4 mb-xl-5">
            <li class="breadcrumb-item lead">
              <a href="../index.html" class="text-decoration-none">Home</a>
            </li>
            <li class="breadcrumb-item lead">
              <a href="habitaciones.html" class="text-decoration-none"
                >Habitaciones</a
              >
            </li>
            <li class="breadcrumb-item active lead" aria-current="page">
              Habitación Doble
            </li>
          </ol>
        </nav>
        <div
          class="my-4 pb-5 mt-md-0 d-flex flex-column flex-lg-row justify-content-lg-center gap-4"
        >
          <article class="mt-md-4 mt-lg-0 pb-3 pb-md-5 pb-lg-0 articleImgRoom">
            <div class="containerImg">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/habitacion-doble.webp"
                alt="Habitacion doble"
                title="Habitación doble"
                class="shadow border border-dark"
                id="largeImg"
                loading="lazy"
              />
            </div>
            <div
              class="d-flex justify-content-center gap-2 mt-3 containerSmallImg px-2"
            >
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/habitacion-doble.webp"
                alt="Habitación doble"
                title="Habitación doble"
                class="shadow border border-dark smallImg"
                id="smallImgOne"
                loading="lazy"
              />
              <img
                src="../../IMG/Home/hab7.webp"
                alt="Baño de habitación doble"
                title="Baño de habitación doble"
                class="shadow border border-dark smallImg"
                id="smallImgTwo"
                loading="lazy"
              />
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/bañoHab6 (1).webp"
                alt="Baño de habitación doble"
                title="Baño de habitación doble"
                class="shadow border border-dark smallImg"
                id="smallImgThree"
                loading="lazy"
              />
            </div>
          </article>
          <article
            class="mt-4 mt-md-0 text-center text-lg-start descriptionRoom"
          >
            <div>
              <h1 class="fw-bold">Habitación Doble</h1>
              <hr />
              <p class="mt-4 fw-bold mb-0 lead">Descripción</p>
              <p class="lead">
                Esta habitación cuenta con 1 cama matrimonial para 2 personas y
                comodidades como Wi-Fi, aire acondicionado, baño privado, ropa
                de cama, toallas, artículos de tocador y ventilador de techo.
                Además cuenta con un mini balcón.
              </p>
              <p class="lead">
                <span class="fw-bold">Capacidad Máxima:</span> 2
              </p>
              <p class="fw-bold lead">Comodidades:</p>
              <div
                class="d-flex justify-content-center gap-4 gap-lg-2 containerAmenities flex-wrap flex-sm-nowrap justify-content-xxl-start"
              >
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-wifi fs-2"></i>
                  <span class="lead">Wi-Fi</span>
                </div>
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-snowflake me-2 fs-2"></i>
                  <span class="lead">Aire acondicionado</span>
                </div>
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-bed fs-2"></i>
                  <span class="lead">Ropa de cama y toallas</span>
                </div>
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-mask-ventilator fs-2 me-2"></i>
                  <span class="lead">Ventilador de techo</span>
                </div>
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-soap fs-2 me-2"></i>
                  <span class="lead">Artículos de tocador</span>
                </div>
                <div class="d-flex flex-column gap-2 text-center">
                  <i class="fa-solid fa-shower fs-2 me-2"></i>
                  <span class="lead">Baño privado</span>
                </div>
              </div>
              <div
                class="mt-4 d-flex flex-column align-items-center gap-3 flex-md-row justify-content-md-center align-items-md-start gap-md-5 justify-content-lg-start"
              >
                <p class="lead mb-0">
                  <span class="fw-bold">Check-In: </span>02:00 PM
                </p>
                <p class="lead">
                  <span class="fw-bold">Check-Out: </span>10:00 AM
                </p>
              </div>
              <div
                class="d-flex flex-column align-items-center flex-lg-row justify-content-between align-items-lg-start align-items-lg-center gap-4 gap-lg-2 mt-3"
              >
                <div class="my-auto">
                  <a href="#" class="btn border border-1 border-dark btnCheckRoom lead rounded-0" id="btnCheckRoom"
                    ><i class="bi bi-whatsapp me-2 fs-4 text-success"></i
                    ><span class="mb-4">Consultar Habitación</span></a
                  >
                </div>
                <div class="d-flex align-items-center gap-4">
                  <span class="fw-bold lead">Compartir:</span>
                  <div class="d-flex gap-4">
                    <a href="" id="btnWhatsApp" title="WhatsApp"
                      ><i class="fa-brands fa-whatsapp fs-1 iconWhatsApp"></i
                    ></a>
                    <a href="" id="btnFacebook" title="Facebook"
                      ><i class="fa-brands fa-facebook fs-1 iconFacebook"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="container-fluid py-5 mt-5 sectionMoreRooms">
        <h2 class="text-center fw-bold pt-5 pb-4">Habitaciones</h2>
        <div class="row justify-content-center gap-5 px-3 pb-5">
          <article
            class="card px-0 border border-dark cardRoom rounded-0"
          >
            <div class="containerImgCard">
              <img
                src="../../IMG/Habitaciones/HabitacionSimple/hab8.webp"
                alt="Habitación individual"
                title="Habitación individual"
                loading="lazy"
              />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="fw-bold pt-md-2 text-center">Habitación Individual</h3>
              <p class="lead mb-0 text-center">1 cama matrimonial.</p>
              <p class="lead text-center">Capacidad Máxima: 1</p>
              <ul class="lead list-unstyled">
                <li><i class="fa-solid fa-wifi px-2 text-dark"></i>Wi-Fi</li>
                <li>
                  <i class="fa-solid fa-bed px-2 text-dark"></i>Ropa de cama y
                  toallas
                </li>
                <li>
                  <i class="fa-solid fa-mask-ventilator px-2 text-dark"></i
                  >Ventilador de techo
                </li>
                <li>
                  <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i>Artículos
                  de tocador
                </li>
                <li>
                  <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                  privado
                </li>
              </ul>
              <div class="text-center">
                <a
                  href="habitacionSimple.html"
                  class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                  ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                  información</a
                >
              </div>
            </div>
          </article>
          <article
            class="card px-0 border border-dark cardRoom rounded-0"
          >
            <div class="containerImgCard">
              <img
                src="../../IMG/Habitaciones/HabitacionTriple/hab5.webp"
                alt="Habitación triple"
                title="Habitación triple"
                loading="lazy"
              />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="fw-bold pt-md-2 text-center">Habitación Triple</h3>
              <p class="lead mb-0 text-center">
                1 cama matrimonial y 1 cama individual.
              </p>
              <p class="lead text-center">Capacidad Máxima: 3</p>
              <ul class="lead list-unstyled">
                <li><i class="fa-solid fa-wifi px-2 text-dark"></i>Wi-Fi</li>
                <li>
                  <i class="fa-solid fa-bed px-2 text-dark"></i>Ropa de cama y
                  toallas
                </li>
                <li>
                  <i class="fa-solid fa-mask-ventilator px-2 text-dark"></i
                  >Ventilador de techo
                </li>
                <li>
                  <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i>Artículos
                  de tocador
                </li>
                <li>
                  <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                  privado
                </li>
              </ul>
              <div class="text-center">
                <a
                  href="habitacionTriple.html"
                  class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                  ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                  información</a
                >
              </div>
            </div>
          </article>
          <article
            class="card px-0 border border-dark cardRoom rounded-0"
          >
            <div class="containerImgCard">
              <img
                src="../../IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp"
                alt="Habitación quíntuple"
                title="Habitación quíntuple"
                loading="lazy"
              />
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="fw-bold pt-md-2 text-center">Habitación Quíntuple</h3>
              <p class="lead mb-0 text-center">
                1 cama matrimonial, 1 cama individual y 1 cama cucheta.
              </p>
              <p class="lead text-center">Capacidad Máxima: 5</p>
              <ul class="lead list-unstyled">
                <li><i class="fa-solid fa-wifi px-2 text-dark"></i>Wi-Fi</li>
                <li>
                  <i class="fa-solid fa-bed px-2 text-dark"></i>Ropa de cama y
                  toallas
                </li>
                <li>
                  <i class="fa-solid fa-mask-ventilator px-2 text-dark"></i
                  >Ventilador de techo
                </li>
                <li>
                  <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i>Artículos
                  de tocador
                </li>
                <li>
                  <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                  privado
                </li>
              </ul>
              <div class="text-center">
                <a
                  href="habitacionQuintuple.html"
                  class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                  ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                  información</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="col-12 my-5 py-5 text-center">
        <h3 class="fw-bold pb-3">Por Consultas o Reservas:</h3>
        <article
          class="d-flex flex-column gap-2 justify-content-center flex-md-row gap-md-5"
        >
          <div>
            <i class="fa-brands fa-whatsapp me-2 fs-1 text-success"></i>
            <span class="fs-4 text-success">WhatsApp</span>
            <p class="lead">+54 9 387 6843082</p>
          </div>
          <div>
            <i class="fa-solid fa-phone me-2 fs-1 text-dark"></i>
            <span class="fs-4">Teléfono</span>
            <p class="lead">+54 9 3868 422388</p>
          </div>
        </article>
      </section>
      <div
        id="fullscreen"
        class="fullscreen text-center"
        data-bs-slide="carousel"
      >
        <i class="bi bi-x-lg d-md-none" id="cerrar"></i>
        <div id="carouselFullScreen" class="carousel slide carouselFullScreen">
          <div class="carousel-inner">
            <div class="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/habitacion-doble.webp"
                alt="Habitación doble"
                title="Habitación doble"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Home/hab7.webp"
                alt="habitación doble"
                title="habitación doble"
                class="imgCarousel"
                loading="lazy"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/bañoHab6 (1).webp"
                alt="Baño de habitación doble"
                title="Baño de habitación doble"
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
      </div> */}
    </div>
  );
}

export default DetalleHabitacion;