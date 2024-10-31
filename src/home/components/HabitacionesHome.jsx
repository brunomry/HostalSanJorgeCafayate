import habitacion from "../../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";
import desayuno from "../../assets/IMG/Home/desayuno.webp";
import habitacion7 from "../../assets/IMG/Habitaciones/HabitacionDoble/hd1.jpeg";
import habitacion4 from "../../assets/IMG/habitacion4.webp";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function HabitacionesHome() {
  return (
    <section className="px-4 pt-8 md:px-20 md:pt-20 3xl:px-24 3xl:pt-24">
      <div className="w-[100%] flex flex-col xl:flex-row gap-5 xl:gap-10 3xl:justify-center">
        <div className="md:w-[100%] hidden md:order-1 xl:w-[50%]  md:flex lg:flex-wrap gap-2 3xl:gap-2">
          <div className="flex gap-2 md:w-[100%] max-h-[300px]">
            <img
              src={habitacion}
              alt=""
              className="hidden lg:block lg:w-[50%] object-cover h-[100%]"
            />
            <img
              src={habitacion7}
              alt=""
              className="hidden md:w-[100%] md:block lg:w-[50%] lg:h-[100%] object-cover "
            />
          </div>
          <div className="flex gap-2 lg:w-[100%] max-h-[300px]">
            <img
              src={desayuno}
              alt=""
              className="hidden lg:block lg:w-[45%] object-cover h-[100%] "
            />
            <img
              src={habitacion4}
              alt=""
              className="hidden lg:block lg:max-w-[55%] object-cover h-[100%]"
            />
          </div>
        </div>
        <div className="w-[100%] xl:w-[50%] 2xl:w-[40%] object-cover flex flex-col xl:order-1 gap-2 2xl:gap-10">
          <div>
            <h2 className="text-[20px] lg:text-[25px]">
              Nuestras Habitaciones
            </h2>
            <p className="xl:text-[16px] font-normal text-[#363636] mb-0">
              Ofrecemos habitaciones privadas diseñadas para su comodidad y
              tranquilidad, que van desde simples hasta quíntuples.
            </p>
          </div>
          <div>
            <h3 className="lg:text-[20px] mb-3">Comodidades y Servicios:</h3>
            <div className="flex flex-wrap gap-1 flex-shrink 2xl:gap-5">
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">Wi-Fi</span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Desayuno incluido
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Ropa de cama
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Aire acondicionado
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">Estufa</span>
            
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">Toallas</span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Baño privado
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Habitaciones privadas
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Ventilador
              </span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Artículos de tocador
              </span>
            
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">Armario</span>
              <span className="border p-2 md:py-2 md:px-5 text-[#363636]">
                Zona de estar
              </span>
            </div>
          </div>
          <div className="w-[100%] flex justify-start xl:justify-start">
            <Link
              to={"/habitaciones"}
              className="bg-emerald-500 flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 2xl:w-[35%] xl:text-[16px]"
            >
              <span className="text-[#fff]">VER HABITACIONES</span>{" "}
              <MdArrowForwardIos className="text-[#fff]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HabitacionesHome;
