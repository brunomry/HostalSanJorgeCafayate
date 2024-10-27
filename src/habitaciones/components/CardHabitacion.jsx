import { ImWhatsapp } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function CardHabitacion({ habitacion }) {
  return (
    <article className="border h-[500px] md:h-[100%] md:min-h-[400px] min-w-[85%] md:w-[100%] cursor-pointer">
      <img
        src={habitacion.img1}
        alt=""
        className="h-[300px] xl:h-[350px] 2xl:h-[400px] w-full object-cover"
      />
      <div className="vsm:p-2 mb:p-4 md:p-8">
        <h3 className="text-[20px] md:text-[25px]">{habitacion.tipo}</h3>
        <p className="text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">{habitacion.descripcion_breve}</p>
        <div className="flex flex-col gap-2 items-center w-[100%] mt-4 md:mt-8">
        <Link
            to={`/habitacion/${habitacion.id}`}
            className="p-2 md:p-4 w-[100%] md:w-[70%] flex gap-2 justify-center items-center text-[1rem]  text-blue-500 hover:text-blue-800 hover:underline"
          >
            <span className="text-[.9rem] lg:text-[1rem]">MÁS INFORMACIÓN</span> <MdArrowForwardIos />
          </Link>
          <Link
            to={"/habitaciones"}
            className="p-2 md:p-4 w-[100%] flex gap-2 md:gap-3 justify-center items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
          >
            <ImWhatsapp className="vsm:text-[15px] mb:text-[20px] md:text-[30px]" />
            <span className="text-[.9rem] lg:text-[1rem]">CONSULTAR DISPONIBILIDAD</span>
          </Link>
        
        </div>
      </div>
    </article>
  );
}

export default CardHabitacion;
