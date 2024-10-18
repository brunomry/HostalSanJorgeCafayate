import { Helmet } from "react-helmet";

function Contacto() {
  return (
    <div>
      <Helmet>
      <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Descubre cómo llegar a Hostal San Jorge en Cafayate a través de Google Maps. Encuentra nuestra dirección, número de teléfono, y conéctate con nosotros en redes sociales."
    />
    <meta
      name="keywords"
      content="hostal san jorge como llegar, hostal san jorge cafayate, san jorge cafayate como llegar, alojamiento, ubicación, cómo llegar, reservas, teléfono, mapa de google maps, dirección, redes sociales, cafayate"
    />
    <meta name="author" content="Bruno Madozzo Romay" />
    <meta name="robots" content="index, follow" />
    <link
      rel="canonical"
      href="https://hostalsanjorgecafayate.netlify.app/src/PAGES/comoLlegar"
    />
    <link rel="icon" href="../../IMG/favicon.png" />
    <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
    <meta
      property="og:title"
      content="Cómo llegar | Hostal San Jorge - Alojamiento en Cafayate, Salta"
    />
    <meta
      property="og:description"
      content="Descubre cómo llegar a Hostal San Jorge en Cafayate a través de Google Maps. Encuentra nuestra dirección, número de teléfono, y conéctate con nosotros en redes sociales. ¡Te esperamos!"
    />
    <meta
      property="og:image"
      content="https://hostalsanjorgecafayate.netlify.app/src/IMG/frente.webp"
    />
    <meta
      property="og:url"
      content="https://hostalsanjorgecafayate.netlify.app/src/PAGES/comoLlegar"
    />
    <title>
      Cómo llegar | Hostal San Jorge - Alojamiento en Cafayate, Salta
    </title>
      </Helmet>
      {/* <section class="bannerImgHowToGet">
        <div class="bannerImgHowToGet">
          <img
            src="../../IMG/frente.webp"
            alt="Frente del hostal"
            title="Frente del hostal"
          />
        </div>
      </section>
      <section class="container py-5">
        <div class="text-center mb-5">
          <h1 class="mb-4 fw-bold">Cómo llegar a nuestro Hostal</h1>
          <p class="lead mt-3">Encuéntranos con Google Maps</p>
        </div>
        <div class="row">
          <article class="col-lg-6 containerMap">
            <div class="ratio ratio-16x9 border shadow border-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14335.370482057366!2d-65.9733965!3d-26.0713993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f316b69bb5591%3A0xbbf0869ad2ae3e8b!2sSan%20Jorge!5e0!3m2!1ses-419!2sar!4v1703898576596!5m2!1ses-419!2sar"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="ubicación"
              ></iframe>
            </div>
          </article>
          <article class="col-lg-6 text-center justify-content-center">
            <h2 class="mb-4 mt-5 fw-bold">Visítanos</h2>
            <address class="lead fst-italic">
              Calixto Mamaní 105, Cafayate, Salta, Argentina
            </address>
            <div class="d-flex flex-column mt-5">
              <div>
                <i class="fa-brands fa-whatsapp me-2 fs-1 text-success"></i
                ><span class="fs-5 text-success">WhatsApp</span>
              </div>
              <p class="lead">+54 9 387 6843082</p>
              <div>
                <i class="fa-solid fa-phone me-2 fs-1 text-dark"></i>
                <span class="fs-5">Teléfono</span>
              </div>
              <p class="lead">+54 9 3868 422388</p>
            </div>
          </article>
          <article class="d-flex flex-column align-items-center mt-5">
            <h3 class="text-center py-3 fw-bold">Deja tu consulta</h3>
            <form
              action=""
              id="formQuestions"
              method="POST"
              class="formContact px-md-4"
            >
              <div class="mb-3">
                <label for="name" class="form-label lead" title="Nombre y Apellido"
                  >Nombre y Apellido:</label
                >
                <input
                  type="text"
                  class="form-control py-3 rounded-1 border border-secondary"
                  id="name"
                  title="Nombre y Apellido"
                  name="Nombre y Apellido"
                  minlength="3"
                  maxlength="50"
                  pattern="\b[A-Za-z][a-z]+\b\s\b[A-Za-z][a-z]+\b"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="telephone" class="form-label lead" title="Teléfono">Teléfono:</label>
                <input
                  type="tel"
                  class="form-control py-3 rounded-1 text-secondary border border-secondary"
                  id="telephone"
                  name="Teléfono"
                  title="Teléfono"
                  minlength="10"
                  maxlength="10"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label lead" title="Email"
                  >Correo electrónico:</label
                >
                <input
                  type="email"
                  class="form-control py-3 rounded-1 text-secondary border border-secondary"
                  id="email"
                  title="Email"
                  name="Correo electrónico"
                  minlength="3"
                  maxlength="265"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="questions" class="form-label lead" title="Consulta">Consulta:</label>
                <textarea
                  class="form-control rounded-1 border border-secondary"
                  id="questions"
                  name="Consulta"
                  title="Consulta"
                  minlength="10"
                  maxlength="500"
                  required
                ></textarea>
              </div>
              <input type="text" hidden id="inputNext" name="_next" value="" />
              <input
                type="text"
                hidden
                name="_subject"
                value="CONSULTA - HOSTAL SAN JORGE"
              />
              <div class="mb-3 w-100">
                <button
                  type="submit"
                  class="btn btn-dark btnEnviar rounded-1 w-100 py-3 fs-5"
                >
                  Enviar
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>
      <a
        href=""
        id="btnWhatsAppFixed"
        class="btnWppFixed"
        target="_blank"
        title="WhatsApp"
        ><i class="fa-brands fa-square-whatsapp text-success"></i>
      </a> */}
    </div>
  )
}

export default Contacto