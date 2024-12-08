import { Helmet } from "react-helmet";
import bannerGaleria from "../assets/IMG/Galeria/antiguedades2.webp";
import galeria from "../helpers/galeriaImagenes";
import ImgGaleria from "./components/ImgGaleria";
import { useState } from "react";
import BtnWhatsApp from "../common/BtnWhatsApp";
import "./styles/galeria.css"

const Galeria = () => {

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes en Hostal San Jorge, Cafayate!"
        />
        <meta
          name="keywords"
          content="hostal san jorge galeria, hostal san jorge cafayate, san jorge cafayate galeria, galería, habitaciones, instalaciones, imágenes"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://hostalsanjorgecafayate.netlify.app/PAGES/galeria"
        />
        <link rel="icon" href="../../IMG/favicon.png" />
        <link rel="apple-touch-icon" href="../../IMG/favicon.png" />
        <meta
          property="og:title"
          content="Galería | Hostal San Jorge - Alojamiento en Cafayate, Salta"
        />
        <meta
          property="og:description"
          content="¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes en Hostal San Jorge, Cafayate!"
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/antiguedades1.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/src/PAGES/galeria"
        />
        <title>
          Galería | Hostal San Jorge - Alojamiento en Cafayate, Salta
        </title>
      </Helmet>
      <section className="py-24 lg:py-40 md:px-20 lg:px-24 px-4">
        <article className="text-center ">
          <h2 className="text-center text-[28px] lg:text-[32px] lg:text-start xl:text-[40px] md:mb-3">Galería de imágenes</h2>
          <p className="text-gray-600 lg:text-start">
            Conoce nuestras instalaciones y habitaciones a través de nuestra galería.
          </p>
          <div className="text-center mt-10">
            <small className="text-gray-600">Imágenes tomadas por Sol Herrera. Instagram: solherrera.ar</small>
          </div>
        </article>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 flex-wrap justify-center items-center mt-5 gap-2 md:gap-4">
          {galeria.map((img, index) => (
            <ImgGaleria key={img.id} img={img} index={index}></ImgGaleria>
          ))}
        </div>
      </section>
      <BtnWhatsApp></BtnWhatsApp>
    </>
  );
}

export default Galeria;
