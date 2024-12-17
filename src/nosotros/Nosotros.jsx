import frente from "../assets/IMG/frente.webp";
import BtnWhatsApp from "../common/BtnWhatsApp";
import Head from "../seo/Head";
import headData from "../helpers/head.js";

const Nosotros = () => {
  return (
    <>
      <Head head={headData.nosotros}></Head>
      <main className="w-[100%] relative px-8 py-20 md:p-20 lg:py-40 flex flex-col items-center gap-10 justify-center">
        <section className="xl:w-[70%] flex flex-col gap-5  ">
          <div>
            <h1 className="text-[32px] md:text-[35px] lg:text-[45px] lg:text-start mb-5 font-bold text-[#3361c4]">
              Sobre Nosotros
            </h1>
            <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
              Con más de 15 años brindando alojamiento a nuestros huéspedes, en
              Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal
              para descansar. Permítanos ser su hogar lejos de casa y disfrute
              de una experiencia agradable y memorable mientras explora los
              encantos de la hermosa ciudad de Cafayate en la provincia de
              Salta, noroeste argentino.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] md:text-[25px] mb-2 text-justify md:text-start">
              Nuestra historia
            </h2>
            <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
              El Hostal San Jorge comenzó su camino como un proyecto familiar
              con la visión de ofrecer a turistas y viajeros un espacio donde
              relajarse después de explorar los maravillosos paisajes de
              Cafayate. A lo largo de los años, nos hemos convertido en una
              opción preferida para aquellos que buscan un ambiente tranquilo,
              cálido y acogedor, manteniendo siempre una atención personalizada
              que nos diferencia.
            </p>
          </div>
          <figure className="w-full flex flex-col items-center">
            <img
              src={frente}
              className="object-cover w-[100%] md:w-[700px] h-[200px] md:h-[400px] border-[8px] border-gray-200"
              alt="Hostal San Jorge"
              title="Hostal San Jorge de Cafayate, Salta"
            />
            <figcaption>
              <small className="text-gray-500 text-justify text-[.8rem] lg:text-start">
                Hostal San Jorge abrió sus puertas en el año 2008.
              </small>
            </figcaption>
          </figure>
          <article className="w-[100%] flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">
                Misión
              </h3>
              <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
                Nuestra misión es ofrecer a nuestros huéspedes un lugar cómodo,
                tranquilo e ideal para descansar, comprometidos a brindar una
                experiencia única y agradable, donde puedan sentirse como en
                casa mientras exploran la cultura local.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">
                Visión
              </h3>
              <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
                Nuestra visión es ser un hostal de referencia en la ciudad,
                reconocido por nuestra hospitalidad, siendo un lugar donde cada
                huésped se sienta cómodo y seguro, asegurando que en el futuro
                nos elijan nuevamente.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">
                Valores
              </h3>
              <ul className="md:list-disc md:ms-8 text-justify md:text-start">
                <li className="text-gray-600 text-justify text-[1rem] lg:text-start">
                  Hospitalidad: Nos enorgullecemos de hacer sentir a nuestros
                  huéspedes como en casa, brindando un trato personalizado y
                  cordial.
                </li>
                <li className="text-gray-600 text-justify text-[1rem] lg:text-start">
                  Calidad: Mantenemos altos estándares de limpieza, confort y
                  atención para asegurar que su estadía sea inmejorable.
                </li>
                <li className="text-gray-600 text-justify text-[1rem] lg:text-start">
                  Compromiso: Estamos comprometidos con el bienestar de nuestros
                  huéspedes, haciendo todo lo posible para superar sus
                  expectativas.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>
      <BtnWhatsApp></BtnWhatsApp>
    </>
  );
};

export default Nosotros;
