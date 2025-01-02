import galeria from "../helpers/galeriaImagenes";
import ImgGaleria from "./components/ImgGaleria";
import BtnWhatsApp from "../common/BtnWhatsApp";
import "./styles/galeria.min.css";
import Head from "../seo/Head";
import headData from "../helpers/head";

const Galeria = ({traduccion}) => {
  return (
    <>
      <Head head={headData.galeria}></Head>
      <main className="py-24 lg:py-40 md:px-20 lg:px-24 px-4">
        <section className="text-center ">
          <h1 className="text-[32px] md:text-[35px] lg:text-[45px] text-start font-bold md:mb-3 text-[#3361c4]">
            {traduccion.paginaGaleria.title}
          </h1>
          <p className="text-gray-600 text-start pb-5">
            {traduccion.paginaGaleria.descripcion}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 flex-wrap justify-center items-center mt-5 gap-2 md:gap-1">
            {galeria.map((img, index) => (
              <ImgGaleria key={img.id} img={img} index={index}></ImgGaleria>
            ))}
          </div>
        </section>
      </main>
      <BtnWhatsApp traduccion={traduccion}></BtnWhatsApp>
    </>
  );
};

export default Galeria;
