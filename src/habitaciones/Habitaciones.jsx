import { Helmet } from "react-helmet";

function Habitaciones() {
  return (
    <div>
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
          href="https://hostalsanjorgecafayate.netlify.app/PAGES/habitaciones"
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
      {/* <main>
      <section class="bannerRooms">
        <div class="bannerImgRooms w-100">
          <img src="../../IMG/habitacion4.webp" alt="Habitación quíntuple" title="Habitación quíntuple"/>
        </div>
      </section>
      <section class="container py-5">
        <article class="descriptionRooms mx-auto">
          <h1 class="text-center pb-4 fw-bold">Nuestras Habitaciones</h1>
          <p class="lead text-center">
            Descubre el encanto y la comodidad de nuestras habitaciones. Cada
            espacio ha sido diseñado pensando en tu confort.
          </p>
          <p class="lead text-center pb-4 fw-medium">
            ¡Conoce nuestras habitaciones y no dudes en elegirnos!
          </p>
          <div
            class="pb-5 d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap gap-2 gap-md-4"
          >
            <p class="mb-0">También puedes ver:</p>
            <button
              class="btnPaymentMethods py-2 px-3"
              data-bs-toggle="modal"
              data-bs-target="#modalPaymentMethods"
            >
              Formas de pago
            </button>
          </div>
        </article>
        <article
          class="card mb-5 cardRoom border-1 rounded-0 mx-auto border border-1 border-dark"
        >
          <div class="row g-0">
            <div class="col-md-6 containerImg">
              <img
                src="../../IMG/Habitaciones/HabitacionSimple/hab8.webp"
                alt="Habitación individual"
                title="Habitación individual"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="fw-bold pt-md-2 text-center">
                  Habitación Individual
                </h3>
                <p class="lead mb-0 text-center">1 cama individual.</p>
                <p class="lead text-center d-md-none">
                  Capacidad Máxima:<span> 1</span>
                </p>
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
                    <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i
                    >Artículos de tocador
                  </li>
                  <li>
                    <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                    privado
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    href="../detalleHabitacion/habitacionSimple.html"
                    class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                    ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                    información</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
        <article
          class="card mb-5 cardRoom border-1 rounded-0 mx-auto border border-1 border-dark"
        >
          <div class="row g-0">
            <div class="col-md-6 containerImg">
              <img
                src="../../IMG/Habitaciones/HabitacionDoble/hab6 (1).webp"
                alt="Habitación doble"
                title="Habitación doble"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="fw-bold pt-md-2 text-center">Habitación Doble</h3>
                <p class="lead mb-0 text-center">1 cama matrimonial.</p>
                <p class="lead text-center d-md-none">
                  Capacidad Máxima:<span> 2</span>
                </p>
                <ul class="lead list-unstyled">
                  <li><i class="fa-solid fa-wifi px-2 text-dark"></i>Wi-Fi</li>
                  <li>
                    <i class="fa-solid fa-bed px-2 text-dark"></i>Ropa de cama y
                    toallas
                  </li>
                  <li>
                    <i class="fa-solid fa-mask-ventilator px-2 text-dark"></i
                    >Aire acondicionado y ventilador de techo
                  </li>
                  <li>
                    <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i
                    >Artículos de tocador
                  </li>
                  <li>
                    <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                    privado
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    href="../detalleHabitacion/habitacionDoble.html"
                    class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                    ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                    información</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
        <article
          class="card mb-5 cardRoom border-1 rounded-0 mx-auto border border-1 border-dark"
        >
          <div class="row g-0">
            <div class="col-md-6 containerImg">
              <img
                src="../../IMG/Habitaciones/HabitacionTriple/hab5.webp"
                alt="Habitación triple"
                title="Habitación triple"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="fw-bold pt-md-2 text-center">Habitación Triple</h3>
                <p class="lead mb-0 text-center">
                  1 cama matrimonial y 1 cama individual.
                </p>
                <p class="lead text-center d-md-none">
                  Capacidad Máxima:<span> 3</span>
                </p>
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
                    <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i
                    >Artículos de tocador
                  </li>
                  <li>
                    <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                    privado
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    href="../detalleHabitacion/habitacionTriple.html"
                    class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                    ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                    información</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
        <article
          class="card mb-5 cardRoom border-1 rounded-0 mx-auto border border-1 border-dark"
        >
          <div class="row g-0">
            <div class="col-md-6 containerImg">
              <img
                src="../../IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp"
                alt="Habitación quíntuple"
                title="Habitación quíntuple"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="fw-bold pt-md-2 text-center">
                  Habitación Quíntuple
                </h3>
                <p class="lead mb-0 text-center">
                  1 cama matrimonial, 1 cama individual y 1 cama cucheta.
                </p>
                <p class="lead text-center d-md-none">
                  Capacidad Máxima:<span> 5</span>
                </p>
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
                    <i class="fa-solid fa-soap px-2 ms-1 text-dark"></i
                    >Artículos de tocador
                  </li>
                  <li>
                    <i class="fa-solid fa-shower px-2 text-dark ms-1"></i>Baño
                    privado
                  </li>
                </ul>
                <div class="text-center">
                  <a
                    href="../detalleHabitacion/habitacionQuintuple.html"
                    class="btn btnMoreInfo fs-5 w-100 border border-dark rounded-0"
                    ><i class="bi bi-info-circle fs-5 me-3 text-dark"></i>Más
                    información</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <a href="" id="btnWhatsAppFixed" class="btnWppFixed" target="_blank" title="WhatsApp"
        ><i class="fa-brands fa-square-whatsapp text-success"></i>
      </a>
    </main> */}
    </div>
  );
}

export default Habitaciones;
