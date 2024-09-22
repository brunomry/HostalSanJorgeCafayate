const header = document.querySelector(".header");
const rutaActual = window.location.href;
let rutaPagina;
let rutaLogo;

if(rutaActual.includes("index")){
    rutaPagina = "./src/PAGES/";
    index = "";
}else{
    rutaPagina = "../";
    index = "../../../../";
}

header.innerHTML = `<nav class="navbar navbar-expand-lg py-lg-0 navBar">
        <div
          class="container-fluid d-flex align-items-center flex-lg-row justify-content-lg-evenly"
        >
          <a class="navbar-brand ms-xxl-5" href="${index}index.html" title="Logo de Hostal San Jorge"
            >Hostal San Jorge</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse my-2 d-lg-flex justify-content-center justify-content-xl-end me-xxl-5"
            id="navbarNav"
          >
            <ul
              class="navbar-nav d-flex gap-2 align-items-center justify-content-lg-end gap-xl-4 my-xl-2 lead navigation"
            >
              <li class="nav-item text-center">
                <a class="nav-link pb-0 pb-sm-2" href="${index}index.html">Home</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="${rutaPagina}habitaciones/habitaciones.html">Habitaciones</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="${rutaPagina}galeria/galeria.html">Galería</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="${rutaPagina}comoLlegar/comoLlegar.html">Cómo Llegar</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="${rutaPagina}preguntasFrecuentes/preguntasFrecuentes.html"
                  >Preguntas Frecuentes</a
                >
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-globe"></i
                  ><span class="ms-2">Idioma</span>
                </a>
                <ul class="dropdown-menu lead text-center text-lg-start">
                  <li>
                    <a
                      class="dropdown-item text-secondary fw-light"
                      href="#"
                      id="optionEs"
                      ><img
                        src="../../IMG/argentina.webp"
                        class="ms-3 ms-lg-0"
                        alt="bandera de Argentina"
                        title="Idioma Español"
                      />
                      Español</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-secondary fw-light"
                      href="#"
                      id="optionEn"
                      ><img
                        src="../../IMG/ingles.webp"
                        alt="bandera de Inglaterra"
                        title="Idioma Inglés"
                      />
                      Inglés</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;