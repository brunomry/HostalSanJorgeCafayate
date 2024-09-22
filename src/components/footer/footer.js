const footer = document.querySelector(".footer");

footer.innerHTML = ` 
    <section class="container-fluid">
        <div class="row gap-4 gap-md-0 justify-content-md-center pb-5">
          <article class="col-md-12 col-lg-4 text-center mb-4 containerLogo">
            <a alt="Logo Hostal San Jorge" title="Logo Hostal San Jorge">Hostal San Jorge</a>
          </article>
          <article class="col-md-6 col-lg-4 text-center">
            <h4 class="fw-bold mb-3">Información</h4>
            <ul class="list-unstyled">
              <li class="nav-link pb-2">
                <p class="mb-0">Calixto Mamaní 105, Cafayate, Salta, Argentina</p>
              </li>
              <li class="nav-link pb-2">
                <i class="fa-brands fa-whatsapp me-2 fs-5 text-success"></i>
                WhatsApp: +54 9 387 6843082
              </li>
              <li class="nav-link pb-2">
                <i class="fa-solid fa-phone me-2 fs-5 text-dark"></i>
                Teléfono: +54 9 3868 422388
              </li>
              <li class="nav-link pb-4 pb-lg-0">
                <i class="fa-brands fa-google me-2 fs-5 text-danger"></i>
                hostalsanjorgecafayate@gmail.com
              </li>
            </ul>
          </article>
          <article class="col-md-6 col-lg-4 text-center">
            <h4 class="fw-bold">Síguenos en nuestras redes</h4>
            <div class="d-flex justify-content-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100089399326566"
                target="_blank"
                title="Facebook"
                ><i class="fa-brands fa-facebook fs-2 iconFacebook"></i
              ></a>
              <a
                href="https://www.instagram.com/hostalsanjorgecafayate/"
                target="_blank"
                title="Instagram"
                ><i class="fa-brands fa-instagram fs-2 iconInstagram"></i
              ></a>
            </div>
          </article>
        </div>
      </section>
      <section
        class="py-3 d-flex flex-column align-items-center justify-content-end flex-md-row justify-content-md-center align-items-md-end bg-light"
      >
        <p class="mb-1 text-center text-dark">
          &copy;Todos los derechos reservados. 2024.
        </p>
        <p class="mb-1 ms-1 text-center text-dark">
          <span> Diseñado por </span>
          <span class="text-dark fw-bold">Bruno Madozzo</span>.
        </h6>
        <span class="ms-2 pb-1">
          <a href="https://www.linkedin.com/in/bruno-madozzo" target="_blank" title="Linkedin"
            ><i class="fa-brands fa-linkedin fs-5 text-primary"></i>
          </a>
        </span>
      </section>
`;