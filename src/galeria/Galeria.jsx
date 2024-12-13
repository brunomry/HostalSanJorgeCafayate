import galeria from "../helpers/galeriaImagenes";
import ImgGaleria from "./components/ImgGaleria";
import BtnWhatsApp from "../common/BtnWhatsApp";
import "./styles/galeria.css";
import Head from "../seo/Head";
import headData from "../helpers/head";

const Galeria = () => {
  return (
    <>
      <Head head={headData.galeria}></Head>
      <main className="py-24 lg:py-40 md:px-20 lg:px-24 px-4">
        <section className="text-center ">
          <h2 className="text-center text-[28px] lg:text-[32px] lg:text-start xl:text-[40px] md:mb-3">
            Galería de imágenes
          </h2>
          <p className="text-gray-600 lg:text-start">
            Conoce nuestras instalaciones y habitaciones a través de nuestra
            galería.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 flex-wrap justify-center items-center mt-5 gap-2 md:gap-4">
            {galeria.map((img, index) => (
              <ImgGaleria key={img.id} img={img} index={index}></ImgGaleria>
            ))}
          </div>
        </section>
      </main>
      <BtnWhatsApp></BtnWhatsApp>
    </>
  );
};

export default Galeria;
