import habitacion from "../../../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";
import desayuno from "../../../assets/IMG/Home/desayuno.webp";
import habitacion7 from "../../../assets/IMG/Habitaciones/HabitacionDoble/habitacion7 (1).webp";
import habitacion4 from "../../../assets/IMG/habitacion4.webp";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function HabitacionesHome({ traduccion }) {
  return (
    <section className="px-4 py-8 md:px-20 md:pt-20 3xl:px-24 3xl:py-24 bg-[#e1eff8]">
      <div className="w-[100%] flex flex-col xl:flex-row gap-6 xl:gap-10 3xl:justify-center">
        <div className="md:w-[100%] hidden md:order-1 xl:w-[50%]  md:flex lg:flex-wrap gap-1">
          <div className="flex gap-1 md:w-[100%] max-h-[300px] containerImages">
            <img
              src={habitacion}
              alt="Habitación quíntuple"
              title="Habitación quíntuple"
              className="hidden lg:block lg:w-[50%] object-cover h-[100%]"
            />
            <img
              src={habitacion7}
              alt="Habitación doble"
              title="Habitación doble matrimonial"
              className="hidden md:w-[100%] md:block lg:w-[50%] lg:h-[100%] object-cover "
            />
          </div>
          <div className="flex gap-1 lg:w-[100%] max-h-[300px]">
            <img
              src={desayuno}
              alt="Desayuno"
              title="Desayuno en salón del Hostal"
              className="hidden lg:block lg:w-[45%] object-cover h-[100%] "
            />
            <img
              src={habitacion4}
              alt="Habitación cuádruple"
              title="Habitación cuádruple"
              className="hidden lg:block lg:max-w-[55%] object-cover h-[100%]"
            />
          </div>
        </div>
        <div className="w-[100%] xl:w-[50%] 2xl:w-[40%] object-cover flex flex-col xl:order-1 gap-6 2xl:gap-10">
          <div>
            <h2 className="text-[25px] lg:text-[35px] font-bold text-[#094067]">
              {traduccion.paginaHome.seccionHabitaciones.title}
            </h2>
            <p className="xl:text-[16px] 3xl:text-[1.2rem] font-normal text-[#363636] mt-2 ">
              {traduccion.paginaHome.seccionHabitaciones.descripcion}
            </p>
          </div>
          <div>
            <h3 className="lg:text-[20px] mb-3 text-[#094067]">
              {" "}
              {traduccion.paginaHome.seccionHabitaciones.subtitulo}
            </h3>
            <div className="flex flex-wrap gap-3 flex-shrink 2xl:gap-4">
              {traduccion.paginaHome.seccionHabitaciones.comodidades.map(
                (com, index) => (
                  <span
                    key={index}
                    className=" bg-[white]  p-2 md:py-2 md:px-5 text-[#363636] shadow 3xl:text-[1.2rem]"
                    title={`${com}`}
                  >
                    {com}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="w-[100%] flex justify-start xl:justify-start">
            <Link
              to={"/habitaciones"}
              className="uppercase bg-[#3d89c0] flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 xl:w-[45%] xl:text-[16px] shadow-md"
              title="ver habitaciones"
            >
              <span className="text-[#fff]">
                {" "}
                {traduccion.paginaHome.seccionHabitaciones.btn}
              </span>{" "}
              <MdArrowForwardIos className="text-[#fff]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HabitacionesHome;
