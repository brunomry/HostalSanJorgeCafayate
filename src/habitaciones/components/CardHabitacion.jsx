import { ImWhatsapp } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function CardHabitacion({ habitacion }) {
  return (
    <article className="border min-h-[400px] w-[100%] cursor-pointer">
      <img
        src={habitacion.imagenes[0]}
        alt=""
        className="h-[450px] w-full object-cover"
      />
      <div className="p-8">
        <h3 className="text-[25px]">{habitacion.tipo}</h3>
        <p className="text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">{habitacion.descripcion_breve}</p>
        <div className="flex flex-col gap-2 items-center w-[100%] mt-8">
        <Link
            to={"/habitaciones"}
            className="p-2 md:p-4 w-[70%] flex gap-2 justify-center items-center text-[1rem]  text-blue-500 hover:text-blue-800 hover:underline"
          >
            <span>MÁS INFORMACIÓN</span> <MdArrowForwardIos />
          </Link>
          <Link
            to={"/habitaciones"}
            className="p-2 md:p-4 w-[100%] flex  gap-3 justify-center items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
          >
            <ImWhatsapp className="text-[30px]" />
            <span>CONSULTAR DISPONIBILIDAD</span>
          </Link>
        
        </div>
      </div>
    </article>
  );
}

export default CardHabitacion;
