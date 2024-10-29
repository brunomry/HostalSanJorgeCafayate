import { RiStarSFill } from "react-icons/ri";

function CardComentario({ comentario }) {

    const verComentario = (ruta) => {
        window.open(ruta, "_BLANK");
      };

  return (
    <div onClick={() => verComentario(comentario.ruta)} className="p-3 md:p-5 mb-4 text-justify card cursor-pointer bg-slate-50 border min-w-[250px] lg:w-[280px] xl:w-[400px] flex flex-col justify-between items-center gap-3 xl:min-h-[100px] rounded-[8px] xl:p-10">
      <div className="flex flex-col items-center md:items-start w-[100%] gap-3">
        <div className="flex justify-center md:justify-start w-[100%]">
          {[...Array(comentario.estrellas)].map((_, index) => (
            <RiStarSFill key={index} className="text-[20px] text-yellow-500" />
          ))}
        </div>
        <p className="text-gray-500 ">{comentario.comentario}</p>
      </div>
      <div className="flex flex-col items-center md:items-end w-[100%]">
        <p className="text-center md:text-end">{comentario.nombre}</p>
        <small className="text-gray-500">{comentario.fecha}</small>
      </div>
    </div>
  );
}

export default CardComentario;
