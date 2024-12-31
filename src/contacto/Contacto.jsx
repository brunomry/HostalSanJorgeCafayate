import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import FormContacto from "./components/FormContacto";
import BtnWhatsApp from "../common/BtnWhatsApp";
import Head from "../seo/Head";
import headData from "../helpers/head";

const Contacto = ({traduccion}) => {
  return (
    <>
      <Head head={headData.contacto}></Head>
      <main className="w-[100%] vsm:py-20 vsm:px-3 mb:px-5 md:px-20 md:py-20 lg:py-32 xl:py-40 flex justify-center flex-wrap vsm:gap-5 md:gap-10">
        <section className="vsm:w-[100%] xl:w-[45%] order-1 xl:order-[0]">
          <p className=" my-3 text-gray-600">{traduccion.paginaContacto.descripcion2}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14335.370482057366!2d-65.9733965!3d-26.0713993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f316b69bb5591%3A0xbbf0869ad2ae3e8b!2sSan%20Jorge!5e0!3m2!1ses-419!2sar!4v1703898576596!5m2!1ses-419!2sar"
            className="w-[100%] vsm:h-[200px] md:h-[500px]"
            loading="lazy"
            title="ubicación"
          ></iframe>
        </section>
        <section className="vsm:mt-5 md:mt-10 vsm:w-[100%] xl:w-[45%]">
          <h1 className="mb-3 text-[32px] md:text-[35px] lg:text-[45px] font-bold text-[#3361c4]">
            {traduccion.paginaContacto.title}
          </h1>
          <p className="mb-3 text-gray-600">
          {traduccion.paginaContacto.descripcion1}
          </p>
          <div className="flex flex-col gap-5">
            <div className="border-y py-5">
              <h2 className="md:text-[18px] mb-2"> {traduccion.paginaContacto.direccion}</h2>
              <div className="flex gap-2 items-center" title="Dirección: Calixto Mamaní 105, Cafayate, Salta, Argentina">
                <FaMapMarkerAlt className="text-[20px] text-teal-500" />
                <p className="text-gray-600">
                  Calixto Mamaní 105, Cafayate, Salta, Argentina
                </p>
              </div>
            </div>
            <div className="border-b pb-5" title="WhatsApp: +54 387 6843082">
              <h2 className="md:text-[18px] mb-2">WhatsApp</h2>
              <div className="flex gap-2 items-center">
                <IoLogoWhatsapp className="text-[20px] text-teal-500" />
                <p className="text-gray-600">+54 387 6843082</p>
              </div>
            </div>
            <div className="border-b pb-5" title="Teléfono fijo: +54 3868 422388">
              <h2 className="md:text-[18px] mb-2">{traduccion.paginaContacto.telefono}</h2>
              <div className="flex gap-2 items-center">
                <FaPhone className="text-[20px] text-teal-500" />
                <p className="text-gray-600">+54 03868 422388</p>
              </div>
            </div>
            <div className="border-b pb-5 md:border-0 md:pb-0" title="Email: hostalsanjorgecafayate@gmail.com">
              <h2 className="md:text-[18px] mb-2">Email</h2>
              <div className="flex gap-2 items-center">
                <MdEmail className="text-[20px] text-teal-500" />
                <p className="text-gray-600">
                  hostalsanjorgecafayate@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex flex-column align-items-center mt-5 w-[100%] order-2">
          <h3 className="text-center py-3  vsm:text-[20px] md:text-[25px]">
          {traduccion.paginaContacto.formulario.title}
          </h3>
          <FormContacto traduccion={traduccion}></FormContacto>
        </section>
      </main>
      <BtnWhatsApp traduccion={traduccion}></BtnWhatsApp>
    </>
  );
};

export default Contacto;
