import frente from "../../assets/IMG/frente.webp";
import BtnWhatsApp from "../../common/BtnWhatsApp.jsx";
import Head from "../../common/seo/Head.jsx";
import headData from "../../common/seo/headData.js";

const Nosotros = ({ traduccion }) => {
  return (
    <>
      <Head head={headData.nosotros}></Head>
      <main className="w-[100%] relative px-8 py-20 md:p-20 lg:py-40 flex flex-col items-center gap-10 justify-center">
        <section className="xl:w-[70%] flex flex-col gap-5  ">
          <div>
            <h1 className="text-[32px] md:text-[35px] lg:text-[45px] lg:text-start mb-5 font-bold text-[#3361c4]">
              {traduccion.paginaNosotros.title}
            </h1>
            <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
              {traduccion.paginaNosotros.descripcion1}
            </p>
          </div>
          <div>
            <h2 className="text-[25px] mb-2 text-justify md:text-start">
              {traduccion.paginaNosotros.subtitulo}
            </h2>
            <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
              {traduccion.paginaNosotros.descripcion2}
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
                {traduccion.paginaNosotros.apertura}
              </small>
            </figcaption>
          </figure>
          <article className="w-[100%] flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">
                {traduccion.paginaNosotros.subtitulo1}
              </h3>
              <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
                {traduccion.paginaNosotros.descripcion3}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">Visión</h3>
              <p className="text-gray-600 text-justify text-[1rem] lg:text-start">
                {traduccion.paginaNosotros.descripcion4}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] text-justify md:text-start">
                Valores
              </h3>
              <ul className="md:list-disc md:ms-8 text-justify md:text-start">
                {traduccion.paginaNosotros.descripcion5.map((valor, i) => (
                  <li
                    className="text-gray-600 text-justify text-[1rem] lg:text-start"
                    key={i}
                  >
                    {valor}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </main>
      <BtnWhatsApp traduccion={traduccion}></BtnWhatsApp>
    </>
  );
};

export default Nosotros;
