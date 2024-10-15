import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Bienvenido a Hostal San Jorge. Nos encontramos ubicados a 2 cuadras de la Plaza Principal de Cafayate, en la provincia de Salta, noroeste argentino."
        />
        <meta
          name="keywords"
          content="hostal san jorge, hostal san jorge cafayate, san jorge, san jorge cafayate, alojamiento, Cafayate, Salta, habitaciones, desayuno, comodidades, redes sociales, Wi-Fi, baño privado, ropa de cama, toallas, preguntas frecuentes, cómo llegar, galería"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hostalsanjorgecafayate.netlify.app/"
        />
        <link rel="icon" href="./src/IMG/favicon.png" />
        <link rel="apple-touch-icon" href="./src/IMG/favicon.png" />
        <meta property="og:title" content="Home | Hostal San Jorge" />
        <meta
          property="og:description"
          content="Bienvenido a Hostal San Jorge. Nos encontramos ubicados a 2 cuadras de la Plaza Principal de Cafayate, en la provincia de Salta, noroeste argentino."
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/frente.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/"
        />
        <meta
          name="google-site-verification"
          content="Tkwt-VsZcevf6jFDeu66qgpSh4m_zMuXkBbHXYpDAcU"
        />
        <title>Home | Hostal San Jorge - Alojamiento en Cafayate, Salta</title>
        <link rel="stylesheet" href="./src/styles/estilos.css" />
        <link rel="stylesheet" href="./src/styles/index.css" />
      </Helmet>
      {/* <main>
      
      <section
        class="container-fluid px-0 d-flex justify-content-center mt-5 text-center "
      >
        <article class="row gx-5 justify-content-center mt-5 px-0 w-100 px-0">
          <div class="col-lg-4 mt-5">
            <h1 class="mb-4">Hostal San Jorge de Cafayate</h1>
            <!-- <p class="lead mt-3">
              Con más de 15 años brindando alojamiento a nuestros huéspedes, en
              Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal
              para descansar. Permítanos ser su hogar lejos de casa y disfrute de
              una experiencia agradable y memorable mientras explora los encantos
              de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste
              argentino.
            </p> -->
            <p>¡Tu espacio perfecto y la mejor experiencia la tendrás con nosotros!</p>
            <button class="border border-1 border-dark rounded-2 py-3 px-4">
              Nuestras Habitaciones
            </button>
            <article
          class="d-flex mt-5 gap-5 justify-content-center flex-wrap justify-content-lg-between justify-content-xl-center"
        >
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-wifi fs-4"></i>
            <span class="text-center lead">Wi-Fi</span>
          </div>
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-snowflake me-2 fs-4"></i>
            <span class="text-center lead">Calefacción</span>
          </div>
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-mug-hot me-2 fs-4"></i>
            <span class="text-center lead">Desayuno</span>
          </div>
          <div class="d-flex flex-column gap-2 text-center">
            <i class="fa-solid fa-shower fs-4"></i>
            <span class="text-center lead">Baño privado</span>
          </div>
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-soap me-2 fs-4"></i>
            <span class="text-center lead">Artículos de tocador</span>
          </div>
         
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-mask-ventilator me-2 fs-4"></i>
            <span class="text-center lead">Ventilador</span>
          </div>
          <div class="d-flex flex-column gap-2 text-center">
            <i class="fa-solid fa-bed fs-4"></i>
            <span class="text-center lead">Ropa de cama y toallas</span>
          </div>
       
        </article>
          </div>
          <div class="col-lg-5 bannerHome">
            <img src="./src/IMG/frente.webp" alt="">
          </div>
        </article>
      </section>
      <section
        class="container-fluid sectionService py-5 d-flex align-items-center"
      >
        <article
          class="containerService d-flex align-items-center flex-column flex-md-row"
        >
          <div class="containerDescriptionService text-center">
            <h2 class="pb-3 pb-md-0 pb-lg-3 fw-bold">Nuestras Habitaciones</h2>
            <p class="lead">
              Ofrecemos habitaciones privadas diseñadas para su comodidad y
              tranquilidad, que van desde simples hasta quíntuples.
            </p>
            <p class="lead mb-4 pb-md-0 pb-md-3 mb-0 mb-md-3">
              ¡Tu espacio perfecto y la mejor experiencia la tendrás con
              nosotros!
            </p>
            <a
              class="btnHabitaciones py-2 mt-md-4 px-3 lead"
              href="./src/PAGES/habitaciones.html"
              >Ver Habitaciones</a
            >
            
          </div>
          <div
            class="containerImageService mt-3 mt-md-0 d-flex align-items-center"
          >
            <img
              src="./src/IMG/Home/hab7.webp"
              alt="Habitación doble"
              title="Habitación doble"
              class="shadow rounded-1"
              loading="lazy"
            />
          </div>
        </article>
      </section>
      <section
        class="container-fluid sectionService py-5 d-flex justify-content-center align-items-center"
      >
        <article
          class="containerService d-flex justify-content-center align-items-center flex-column flex-md-row"
        >
          <div
            class="containerImageService imgBreakfast order-1 order-md-0 d-flex align-items-center"
          >
            <img
              src="./src/IMG/Home/desayuno.webp"
              alt="Desayuno"
              title="Desayuno"
              class="shadow rounded-1"
              loading="lazy"
            />
          </div>
          <div class="containerDescriptionService text-center">
            <h2 class="pb-3 pb-md-0 pb-lg-3 fw-bold">
              Servicio de Desayuno incluido
            </h2>
            <p class="lead">
              Comience sus mañanas con un rico desayuno para energizar su día.
              Te esperamos para brindarte nuestro servicio de desayuno, que
              podrás disfrutar durante tu estadía.
            </p>
            <div class="mt-4 d-none d-lg-block">
              <i class="fa-solid fa-mug-hot"></i>
            </div>
          </div>
        </article>
      </section>
      <section
        class="container-fluid sectionServices py-5 d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="pb-4 pb-lg-5 fw-bold">Comodidades y Servicios</h2>
        <article
          class="d-flex containerAmenities justify-content-center flex-wrap flex-md-nowrap justify-content-lg-between justify-content-xl-center"
        >
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-wifi"></i>
            <span class="text-center lead">Wi-Fi</span>
          </div>
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-snowflake me-2"></i>
            <span class="text-center lead">Aire acondicionado</span>
          </div>

          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-soap me-2"></i>
            <span class="text-center lead">Artículos de tocador</span>
          </div>
          <div class="d-flex flex-column gap-2 align-items-center">
            <i class="fa-solid fa-mask-ventilator me-2"></i>
            <span class="text-center lead">Ventilador de techo</span>
          </div>
          <div class="d-flex flex-column gap-2 text-center">
            <i class="fa-solid fa-bed"></i>
            <span class="text-center lead">Ropa de cama y toallas</span>
          </div>
          <div class="d-flex flex-column gap-2 text-center">
            <i class="fa-solid fa-shower"></i>
            <span class="text-center lead">Baño privado</span>
          </div>
        </article>
      </section>
      <section
        class="container-fluid sectionInfo py-5 d-flex justify-content-center align-items-center"
      >
        <article
          class="containerInfo text-center d-flex flex-wrap justify-content-center align-items-center"
        >
          <div class="description">
            <i class="fa-solid fa-circle-question pb-3"></i>
            <h3 class="fw-bold">Preguntas Frecuentes</h3>
            <p class="lead pb-md-2">
              Consultá las preguntas más frecuentes de nuestros huéspedes.
            </p>
            <a
              class="btnInfo py-2 px-4 lead"
              href="./src/PAGES/preguntasFrecuentes.html"
            >
              Ver más
            </a>
          </div>
          <div class="description">
            <i class="fa-solid fa-location-dot mb-3"></i>
            <h3 class="fw-bold">Cómo Llegar</h3>
            <p class="lead pb-md-2">
              Hostal San Jorge se encuentra ubicado a 2 cuadras de la plaza
              principal de Cafayate.
            </p>
            <a
              class="btnInfo py-2 px-4 lead"
              href="./src/PAGES/comoLlegar.html"
              >Ver más</a
            >
          </div>
          <div class="description">
            <i class="fa-solid fa-image pb-3"></i>
            <h3 class="fw-bold">Galería</h3>
            <p class="lead pb-md-2">
              También puedes ver más imágenes de nuestro Hostal.
            </p>
            <a
              class="btnInfo py-2 px-4 lead"
              href="./src/PAGES/galeria.html"
              >Ver más</a
            >
          </div>
        </article>
      </section>
      <a href="" id="btnWhatsAppFixed" class="btnWppFixed" title="WhatsApp"
        ><i class="fa-brands fa-square-whatsapp text-success"></i>
      </a>
    </main> */}
    </div>
  );
}

export default Home;
