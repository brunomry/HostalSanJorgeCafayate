import { Helmet } from "react-helmet";
import bannerContacto from "../assets/IMG/frente.webp";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import FormContacto from "./components/FormContacto";

const Contacto = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Descubre cómo llegar a Hostal San Jorge en Cafayate a través de Google Maps."
        />
        <meta
          name="keywords"
          content="contacto hostal san jorge, hostal san jorge contacto, como llegar hostal san jorge, hostal san jorge cafayate"
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
          content="Contacto | Hostal San Jorge - Alojamiento en Cafayate, Salta"
        />
        <meta
          property="og:description"
          content="Descubre cómo llegar a Hostal San Jorge en Cafayate a través de Google Maps. ¡Te esperamos!"
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/assets/IMG/frente.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/contacto"
        />
        <title>
          Contacto | Hostal San Jorge - Alojamiento en Cafayate, Salta
        </title>
      </Helmet>
      <section className="w-[100%] relative">
        <div className="w-full ">
          <img
            src={bannerContacto}
            className="object-cover w-[100%] h-[400px] brightness-[0.6]"
            alt="Imagen de Habitación doble"
            title="Una de nuestras habitaciones dobles"
          />
        </div>
        <article className="absolute w-[100%] top-[180px] text-center">
          <h1 className="text-center text-[45px] text-[#fff] inline-block">
            Contacto
          </h1>
        </article>
      </section>
      <section className="py-5 md:px-20 md:py-20 flex justify-center flex-wrap gap-10">
        <article className=" md:w-[45%] ">
          <p className=" my-3 text-gray-600">Encuéntranos con Google Maps</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14335.370482057366!2d-65.9733965!3d-26.0713993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f316b69bb5591%3A0xbbf0869ad2ae3e8b!2sSan%20Jorge!5e0!3m2!1ses-419!2sar!4v1703898576596!5m2!1ses-419!2sar"
            className="w-[100%] h-[500px]"
            loading="lazy"
            title="ubicación"
          ></iframe>
        </article>
        <article className="mt-10 w-[45%]">
          <h2 className="mb-3 text-[25px] font-medium">Contáctanos</h2>
          <p className="mb-3 text-gray-600">Nos encontramos ubicados a 2 cuadras de la plaza principal de Cafayate.</p>
          <div className="flex flex-col gap-5">
            <div className="border-y py-5">
              <p className="text-[18px] mb-2">Dirección</p>
              <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-[20px] text-teal-500" /><p className="text-gray-600">Calixto Mamaní 105, Cafayate, Salta, Argentina</p>
              </div>
            </div>
            <div className="border-b pb-5">
              <p className="text-[18px] mb-2">WhatsApp</p>
              <div className="flex gap-2 items-center">
              <IoLogoWhatsapp className="text-[20px] text-teal-500" /><p className="text-gray-600">+54 387 6843082</p>
              </div>
            </div>
            <div className="border-b pb-5">
              <p className="text-[18px] mb-2">Teléfono fijo</p>
              <div className="flex gap-2 items-center">
              <FaPhone className="text-[20px] text-teal-500"/><p className="text-gray-600">+54 03868 422388</p>
              </div>
            </div>
            <div>
              <p className="text-[18px] mb-2">Email</p>
              <div className="flex gap-2 items-center">
              <MdEmail className="text-[20px] text-teal-500" /><p className="text-gray-600">hostalsanjorgecafayate@gmail.com</p>
              </div>
            </div>
          </div>
        </article>
        <article className="d-flex flex-column align-items-center mt-5 w-[100%]">
          <h2 className="text-center py-3 text-[25px]">Déjanos tu consulta</h2>
          <FormContacto></FormContacto>
        </article>
      </section>
    </>
  );
};

export default Contacto;
