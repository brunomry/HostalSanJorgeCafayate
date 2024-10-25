import { Helmet } from "react-helmet";
import frente from "../assets/IMG/frente.webp";
import BtnWhatsApp from "../common/BtnWhatsApp";

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenido a Hostal San Jorge. Nos encontramos ubicados a 2 cuadras de la Plaza Principal de Cafayate, en la provincia de Salta, noroeste argentino."
        />
        <meta
          name="keywords"
          content="hostal san jorge, hostal san jorge cafayate, san jorge, san jorge cafayate, alojamiento, Cafayate, Salta, hostal san jorge historia"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hostalsanjorgecafayate.netlify.app/nosotros"
        />
        <link rel="icon" href="./src/IMG/favicon.png" />
        <link rel="apple-touch-icon" href="./src/IMG/favicon.png" />
        <meta property="og:title" content="Nosotros | Hostal San Jorge" />
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
          content="https://hostalsanjorgecafayate.netlify.app/nosotros"
        />
        <title>
          Nosotros | Hostal San Jorge - Alojamiento en Cafayate, Salta
        </title>
      </Helmet>
      <section className="w-[100%] relative p-20 xl:py-40 bg-slate-700 flex flex-col items-center gap-10 justify-center">
        <article className="md:w-[70%] flex flex-col gap-5  ">
          <div>
            <h1 className="text-start text-[45px] text-white">Sobre Nosotros</h1>
            <p className="text-gray-300">
              Con más de 15 años brindando alojamiento a nuestros huéspedes, en
              Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal
              para descansar. Ubicado en la hermosa ciudad de Cafayate, en la
              provincia de Salta, noroeste argentino, nuestro hostal es el hogar
              perfecto lejos de casa para aquellos que buscan explorar los
              encantos de esta región única.
            </p>
          </div>
          <div>
            {" "}
            <h2 className="text-[25px] mb-2 text-white">Nuestra historia</h2>
            <p className="text-gray-300">
              El Hostal San Jorge comenzó su camino como un proyecto familiar
              con la visión de ofrecer a turistas y viajeros un espacio donde
              relajarse después de explorar los maravillosos paisajes de
              Cafayate. A lo largo de los años, nos hemos convertido en una
              opción preferida para aquellos que buscan un ambiente tranquilo,
              cálido y acogedor, manteniendo siempre una atención personalizada
              que nos diferencia.
            </p>
          </div>
        </article>
        <figure className="w-full flex flex-col items-center">
          <img
            src={frente}
            className="object-cover w-[700px] h-[400px] border-[8px] border-[#fff]"
            alt="Hostal San Jorge"
            title="Hostal San Jorge de Cafayate, Salta"
          />
          <figcaption>
            <small className="text-gray-300">
              Hostal San Jorge fue fundado en el año 2007. Imagen tomada por Sol
              Herrera. Instagram: solherrera.ar
            </small>
          </figcaption>
        </figure>

        <article className="w-[70%] flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-[25px] text-white">Misión</h2>
            <p className="text-gray-300">
              Nuestra misión es ofrecer a nuestros huéspedes un lugar cómodo,
              tranquilo e ideal para descansar, comprometidos a brindar una
              experiencia única y agradable, donde puedan sentirse como en casa
              mientras exploran la cultura local.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[25px] text-white">Visión</h2>
            <p className="text-gray-300">
              Nuestra visión es ser un hostal de referencia en la ciudad,
              reconocido por nuestra hospitalidad, siendo un lugar donde cada
              huésped se sienta cómodo y seguro, asegurando que en el futuro nos
              elijan nuevamente.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[25px] text-white">Valores</h2>
            <ul className="list-disc ms-8">
              <li className="text-gray-300">
                Hospitalidad: Nos enorgullecemos de hacer sentir a nuestros
                huéspedes como en casa, brindando un trato personalizado y
                cordial.
              </li>
              <li className="text-gray-300">
                Calidad: Mantenemos altos estándares de limpieza, confort y
                atención para asegurar que su estadía sea inmejorable.
              </li>
              <li className="text-gray-300">
                Compromiso: Estamos comprometidos con el bienestar de nuestros
                huéspedes, haciendo todo lo posible para superar sus
                expectativas.
              </li>
              <li className="text-gray-300">
                Autenticidad: Promovemos la cultura local y ofrecemos a nuestros
                huéspedes la posibilidad de conocer Cafayate desde una
                perspectiva genuina.
              </li>
              <li className="text-gray-300">
                Sostenibilidad: Fomentamos el cuidado del medio ambiente a
                través de prácticas responsables en nuestras instalaciones.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <BtnWhatsApp></BtnWhatsApp>
    </>
  );
};

export default Nosotros;
