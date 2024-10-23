import { Helmet } from "react-helmet";
import bannerGaleria from "../assets/IMG/Galeria/antiguedades2.webp";
import galeria from "../helpers/galeriaImagenes";
import ImgGaleria from "./components/ImgGaleria";
import { useState } from "react";

const Galeria = () => {

  return (
    <main className="relative">
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
      <section className="">
        <div className="w-[100%] h-[70vh]">
          <img
            src={bannerGaleria}
            className="w-[100%] h-[100%] brightness-[0.7]"
            alt=""
            title=""
          />
        </div>
        <article className="absolute w-[100%] top-[280px] text-center">
          <h1 className="text-center text-[45px] text-[#fff] inline-block">
            Galería
          </h1>
        </article>
      </section>
      <section className="py-20 md:px-20">
        <article className="text-center">
          <h2 className="text-[25px] mb-2">Galería de imágenes</h2>
          <p className="lead">
            Conoce nuestras instalaciones y habitaciones.
          </p>
          <div className="text-center mt-10">
            <small>Imágenes tomadas por Sol Herrera. Ig: solherrera.ar</small>
          </div>
        </article>
        <div className="flex flex-wrap justify-center items-center mt-5 gap-8">
          {galeria.map((img, index) => (
            <ImgGaleria key={img.id} img={img} index={index}></ImgGaleria>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Galeria;
