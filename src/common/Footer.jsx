import { FaFacebook, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = ({ traduccion }) => {
  return (
    <footer className=" dark:bg-gray-900 border-t">
      <section className="mx-auto vsm:w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:flex-col lg:flex-row md:justify-between gap-8 w-[100%]">
          <article className="mb-6 md:mb-0">
            <div className="flex flex-col gap-10 lg:gap-20 lg:items-center">
              <Link
                className="flex flex-col"
                to={"/"}
                title="clic para ir a la página principal"
              >
                <span className="text-2xl text-[#3361c4] logo font-bold whitespace-nowrap dark:text-white">
                  Hostal San Jorge
                </span>
                <small className="text-sm text-gray-600">Cafayate, Salta</small>
              </Link>
              <div>
                <p className="mb-3 text-[.9rem]">{traduccion.footer.redes}</p>
                <div className="flex gap-3">
                  <Link
                    to={`https://www.instagram.com/hostalsanjorgecafayate`}
                    title="clic para visitar perfil de Instagram"
                    className="shadow-sm border p-2 rounded-[100%] hover:scale-110"
                    target="_blank"
                    rel="noopener"
                  >
                    <RiInstagramFill className="text-[30px] text-rose-700" />
                  </Link>
                  <Link
                    to={`https://www.facebook.com/profile.php?id=100089399326566`}
                    title="clic para visitar perfil de Facebook"
                    className="shadow-sm border p-2 rounded-[100%] hover:scale-110"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaFacebook className="text-[30px] text-blue-600" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <article>
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {traduccion.footer.contacto}
              </h4>
              <ul className="text-gray-600 flex flex-col gap-4">
                <li
                  className="flex gap-2 items-center"
                  title="Dirección: Calixto Mamaní 105, Cafayate, Salta, Argentina"
                >
                  <FaMapMarkerAlt className="text-[20px] text-teal-500" />
                  <p className="text-[.9rem]">
                    Calixto Mamaní 105, Cafayate, Salta, Argentina
                  </p>{" "}
                </li>
                <li
                  className="flex gap-2 items-center"
                  title="WhatsApp: +54 387 6843082"
                >
                  <IoLogoWhatsapp className="text-[20px] text-teal-500" />
                  <p className="text-[.9rem]">+54 387 6843082</p>
                </li>
                <li
                  className="flex gap-2 items-center"
                  title="Teléfono fijo: +54 3868 422388"
                >
                  <FaPhone className="text-[20px] text-teal-500" />
                  <p className="text-[.9rem]">+54 03868 422388</p>
                </li>
                <li
                  className="flex gap-2 items-center"
                  title="Email: hostalsanjorgecafayate@gmail.com"
                >
                  <MdEmail className="text-[20px] text-teal-500" />
                  <p className="text-[.9rem]">
                    hostalsanjorgecafayate@gmail.com
                  </p>
                </li>
              </ul>
            </article>
            <article>
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {traduccion.footer.info.title}
              </h4>
              <ul className="text-gray-600 ">
                <li className="mb-4">
                  <Link
                    to={"/politicas"}
                    className="hover:underline text-gray-600 text-[.9rem]"
                  >
                    {traduccion.footer.info.politicas}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/preguntasfrecuentes"}
                    className="hover:underline text-gray-600 text-[.9rem]"
                  >
                    {traduccion.footer.info.faqs}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/nosotros"}
                    className="hover:underline text-gray-600 text-[.9rem]"
                  >
                    {traduccion.footer.info.nosotros}
                  </Link>
                </li>
              </ul>
              <h4 className="mt-7 mb-6 text-sm font-semibold text-gray-900 uppercase ">
                {traduccion.footer.colaboraciones.title}
              </h4>
              <ul className="text-gray-600 ">
                <li className="mb-4 text-[.9rem]">
                  {traduccion.footer.colaboraciones.ph}:
                  <Link
                    to={""}
                    target="_blank"
                    rel="noopener"
                    title="ir a perfil de Sol Herrera"
                    className="hover:underline text-blue-600 ms-1"
                  >
                    Sol Herrera
                  </Link>
                </li>
                <li className="mb-4 text-[.9rem]">
                  {traduccion.footer.colaboraciones.traducciones}:
                  <Link
                    to={""}
                    target="_blank"
                    rel="noopener"
                    className="hover:underline text-blue-600 ms-1"
                  >
                    Daniel Sueldo
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <article className="sm:flex sm:items-center sm:justify-between border-t mt-8 pt-6 text-[.9rem]">
          <span className=" text-gray-600 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://tinyurl.com/2xpevaq2"
              title="Hostal San Jorge en Google"
              className="hover:underline"
              target="_blank"
              rel="noopener"
            >
              Hostal San Jorge
            </a>
            . {traduccion.footer.derechos.derechos}
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <p className="text-gray-600">
              {traduccion.footer.derechos.autor}
              <Link
                to={"https://brunomadozzo-portfolio.netlify.app"}
                target="_blank"
                rel="noopener"
                className="text-blue-600 cursor-pointer hover:underline ms-1"
                title="clic para visitar perfil de LinkedIn de Bruno Madozzo"
              >
                Bruno Madozzo
              </Link>
            </p>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
