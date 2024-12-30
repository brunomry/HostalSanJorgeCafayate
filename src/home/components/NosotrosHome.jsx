import { Link } from "react-router-dom";
import salon from "../../assets/IMG/Home/desayunador.webp";
import { MdArrowForwardIos } from "react-icons/md";

function NosotrosHome() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-[250px] w-[100%] md:mt-[800px] lg:mt-[450px]">
      <div className="bg-slate-700 w-[100%] min-h-[200px] text-[#fff] flex flex-col gap-10 lg:flex-row lg:justify-center px-4 md:px-20 md:gap-10 py-10 md:py-20">
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-5 xl:gap-16 lg:px-0 2xl:p-20">
          <div>
            <h2 className="text-[25px] lg:text-[35px] font-bold">Sobre Nosotros</h2>
            <p className="xl:text-[16px] text-justify font-normal text-gray-300">
              Con más de 15 años brindando alojamiento a nuestros huéspedes, en
              Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal
              para descansar.{" "}
              <span className="hidden md:block">
                Permítanos ser su hogar lejos de casa y disfrute de una
                experiencia agradable y memorable mientras explora los encantos
                de la hermosa ciudad de Cafayate en la provincia de Salta,
                noroeste argentino.
              </span>
            </p>
          </div>

          <div className="w-[100%] flex lg:justify-start">
            <Link
              to={"/nosotros"}
              title="clic para leer más acerca de nosotros"
              className="bg-emerald-500 lg:hover:bg-emerald-600 text-white flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 xl:w-[40%] xl:text-[16px]"
            >
              <span>LEER MÁS</span> <MdArrowForwardIos />
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:flex justify-center lg:w-[50%]">
          <img
            src={salon}
            alt=""
            className="w-[100%] md:min-h-[300px] xl:max-w-[900px] xl:max-h-[500px] object-cover border-[8px] border-[#fff]"
          />
        </div>
      </div>
    </section>
  );
}

export default NosotrosHome;
