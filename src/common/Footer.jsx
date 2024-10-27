import { FaFacebook, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:flex-col lg:flex-row md:justify-between gap-8 w-[100%]">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col gap-10 lg:gap-20 lg:items-center">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Hostal San Jorge
                </span>
                <small className="text-sm">Cafayate, Salta</small>
              </div>
              <div>
                <p className="mb-3">Síguenos en nuestras redes</p>
                <div className="flex gap-3">
                  <Link
                    to={``}
                    title="Instagram"
                    className="shadow-sm border p-2 rounded-[100%] hover:scale-110"
                  >
                    <RiInstagramFill className="text-[30px] text-rose-700" />
                  </Link>
                  <Link
                    to={``}
                    title="Facebook"
                    className="shadow-sm border p-2 rounded-[100%] hover:scale-110"
                  >
                    <FaFacebook className="text-[30px] text-blue-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contacto
              </h4>
              <ul className="text-gray-600 flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-[20px] text-teal-500" />
                  <p>Calixto Mamaní 105, Cafayate, Salta, Argentina</p>{" "}
                </li>
                <li className="flex gap-2 items-center">
                  <IoLogoWhatsapp className="text-[20px] text-teal-500" />
                  <p>+54 387 6843082</p>
                </li>
                <li className="flex gap-2 items-center">
                  <FaPhone className="text-[20px] text-teal-500" />
                  <p>+54 03868 422388</p>
                </li>
                <li className="flex gap-2 items-center">
                  <MdEmail className="text-[20px] text-teal-500" />
                  <p>hostalsanjorgecafayate@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Información
              </h4>
              <ul className="text-gray-600 ">
                <li className="mb-4">
                  <Link to={"/politicas"} className="hover:underline text-gray-600">
                    Políticas del Hostal
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/preguntasfrecuentes"}
                    className="hover:underline text-gray-600"
                  >
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link to={"/nosotros"} className="hover:underline text-gray-600">
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between border-t mt-8 pt-6">
          <span className=" text-gray-600 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Hostal San Jorge
            </a>
            . Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <p className="text-gray-600">
              Desarrollado por{" "}
              <Link
                to={"https://brunomadozzo-portfolio.netlify.app"}
                target="_blank"
                className="text-blue-600 cursor-pointer hover:underline"
              >
                BRUNO MADOZZO
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
