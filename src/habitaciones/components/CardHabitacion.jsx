import { ImWhatsapp } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { consultaPorWhatsApp } from "../../helpers/whatsApp";

function CardHabitacion({ habitacion }) {
  const url = window.location.origin + "/habitacion/" + habitacion.id;
  const consulta = `Consulta de ${habitacion.nombre} \n\n${url}`;

  const consultaWhatsApp = () => consultaPorWhatsApp(consulta);

  const navegacion = useNavigate();

  const verDetalle = (e) => {
    if (!e.target.matches(".btnQuery")) {
      navegacion(`/habitacion/${habitacion.id}`);
    }
    return;
  };

  return (
    <article
      className="border h-[550px] md:h-[100%] md:min-h-[400px] min-w-[85%] md:w-[100%] lg:cursor-pointer lg:hover:shadow-xl"
      onClick={(e) => verDetalle(e)}
      title="clic para ver más información"
    >
      <img
        src={habitacion.imagenes[0]}
        alt={`imagen de ${habitacion.nombre}`}
        title="clic para ver más información"
        className="h-[300px] xl:h-[350px] 2xl:h-[400px] w-full object-cover"
      />
      <div className="vsm:p-2 mb:p-4 md:p-8">
        <p className="text-[20px] font-normal">{habitacion.nombre}</p>
        <h3 className="text-[30px]">$ {habitacion.precio}</h3>
        <p className="text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
          {habitacion.descripcion_breve}
        </p>
        <div className="flex flex-col gap-2 items-center w-[100%] mt-4 md:mt-8">
          <Link
            to={`/habitacion/${habitacion.id}`}
            className="p-2 md:p-4 w-[100%] md:w-[100%] flex gap-2 justify-center items-center text-[1rem]  text-blue-500 hover:text-blue-800 hover:underline"
          >
            <span className="text-[.9rem] lg:text-[1rem]">MÁS INFORMACIÓN</span>{" "}
            <MdArrowForwardIos />
          </Link>
          <button
            onClick={consultaWhatsApp}
            title="clic para consultar habitación por WhatsApp"
            className="btnQuery p-2 md:p-4 w-[100%] flex gap-2 justify-center rounded-[100px] items-center text-[1rem] bg-emerald-600 text-white lg:hover:bg-emerald-700 lg:hover:text-[#fff] "
          >
            <ImWhatsapp className="btnQuery vsm:text-[15px] mb:text-[20px] md:text-[30px]" />
            <span className="btnQuery text-[.9rem] lg:text-[1rem]">
              RESERVAR
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardHabitacion;
