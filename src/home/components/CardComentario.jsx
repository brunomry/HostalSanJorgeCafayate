import { RiStarSFill } from "react-icons/ri";

function CardComentario({ comentario }) {

    const verComentario = (ruta) => {
        window.open(ruta, "_BLANK");
      };

  return (
    <div onClick={() => verComentario(comentario.ruta)} className="card cursor-pointer bg-slate-50 border w-[250px] xl:w-[400px] flex flex-col justify-between items-center gap-3 xl:min-h-[100px] rounded-[8px] xl:p-10">
      <div className="flex flex-col items-center gap-3">
        <div className="flex justify-center">
          {[...Array(comentario.estrellas)].map((_, index) => (
            <RiStarSFill key={index} className="text-[20px] text-yellow-500" />
          ))}
        </div>
        <p className="text-gray-500 text-center">{comentario.comentario}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center">{comentario.nombre}</p>
        <small className="text-gray-500">{comentario.fecha}</small>
      </div>
    </div>
  );
}

export default CardComentario;
