import { Link } from "react-router-dom";
import salon from "../../../assets/IMG/Home/desayunador.webp";
import { MdArrowForwardIos } from "react-icons/md";

function NosotrosHome({ traduccion }) {
  return (
    <section className=" flex flex-col items-center justify-center min-h-[250px] w-[100%] md:mt-[800px] lg:mt-[450px]">
      <div className="bg-[#094067] w-[100%] min-h-[200px] text-[#fff] flex flex-col gap-10 lg:flex-row lg:justify-center px-4 md:px-20 md:gap-10 py-10 md:py-20">
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-5 xl:gap-16 lg:px-0 2xl:p-20">
          <div>
            <h2 className="text-[25px] lg:text-[35px] font-bold">
              {traduccion.paginaHome.seccionNosotros.title}
            </h2>
            <p className="xl:text-[16px] text-justify font-normal text-gray-300 3xl:text-[1.2rem]">
              {traduccion.paginaHome.seccionNosotros.descripcion1}
              <span className="hidden md:block 3xl:text-[1.2rem] text-gray-300">
                {traduccion.paginaHome.seccionNosotros.descripcion2}
              </span>
            </p>
          </div>
          <div className="w-[100%] flex lg:justify-start">
            <Link
              to={"/nosotros"}
              title="clic para leer más acerca de nosotros"
              className="uppercase bg-[#3da9fc] lg:hover:bg-[#3da9fcd2] text-white flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%] xl:text-[16px]"
            >
              <span> {traduccion.paginaHome.seccionNosotros.btn}</span>{" "}
              <MdArrowForwardIos />
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:flex justify-center lg:w-[50%]">
          <img
            src={salon}
            alt="Salón Desayunador"
            title="Salón Desayunador"
            className="w-[100%] md:min-h-[300px] xl:max-w-[900px] xl:max-h-[500px] object-cover border-[8px] border-[#fff]"
          />
        </div>
      </div>
    </section>
  );
}

export default NosotrosHome;
