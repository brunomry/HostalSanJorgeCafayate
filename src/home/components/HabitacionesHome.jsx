import habitacion from "../../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";
import desayuno from "../../assets/IMG/Home/desayuno.webp";
import habitacion7 from "../../assets/IMG/Habitaciones/HabitacionDoble/hd1.jpeg";
import habitacion4 from "../../assets/IMG/habitacion4.webp";
import { MdArrowForwardIos } from "react-icons/md";

function HabitacionesHome() {
  return (
    <section className="my-20 px-20">
      <div className="w-[100%] flex">
        <div className="w-[60%] flex flex-wrap gap-5">
          <img
            src={habitacion}
            alt=""
            className=" imgRoom w-[480px] h-[350px]"
          />
          <img
            src={habitacion7}
            alt=""
            className=" imgRoom w-[450px] h-[350px]"
          />
          <img src={desayuno} alt="" className=" imgRoom w-[380px] h-[220px]" />

          <img
            src={habitacion4}
            alt=""
            className=" imgRoom w-[550px] h-[300px]"
          />
        </div>
        <div className="w-[40%] flex flex-col gap-10">
          <div>
            <h2 className="lg:text-[45px]">Nuestras Habitaciones</h2>
            <p className="xl:text-[16px] font-normal text-[#363636] mb-0">
              Ofrecemos habitaciones privadas diseñadas para su comodidad y
              tranquilidad, que van desde simples hasta quíntuples.
            </p>
          </div>
          <div>
            <h3 className="lg:text-[25px] mb-3">Comodidades y Servicios</h3>
            <div className="flex flex-wrap gap-5">
              <div className="border py-2 px-5 text-[#363636]">Wi-Fi</div>
              <div className="border py-2 px-5 text-[#363636]">
                Desayuno incluido
              </div>
              <div className="border py-2 px-5 text-[#363636]">
                Aire acondicionado
              </div>
              <div className="border py-2 px-5 text-[#363636]">Estufa</div>
              <div className="border py-2 px-5 text-[#363636]">
                Ropa de cama
              </div>
              <div className="border py-2 px-5 text-[#363636]">Toallas</div>
              <div className="border py-2 px-5 text-[#363636]">
                Baño privado
              </div>
              <div className="border py-2 px-5 text-[#363636]">
                Artículos de tocador
              </div>
              <div className="border py-2 px-5 text-[#363636]">Ventilador</div>
              <div className="border py-2 px-5 text-[#363636]">Armario</div>
              <div className="border py-2 px-5 text-[#363636]">
                Zona de estar
              </div>
            </div>
          </div>
          <div className="w-[100%] flex items-center">
            <button className="bg-emerald-500 flex justify-center items-center gap-3 px-15 p-5 xl:w-[35%] xl:text-[16px]">
              <span className="text-[#fff]">VER HABITACIONES</span>{" "}
              <MdArrowForwardIos className="text-[#fff]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HabitacionesHome;
