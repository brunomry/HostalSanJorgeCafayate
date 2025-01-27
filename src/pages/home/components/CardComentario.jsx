import { RiStarSFill } from "react-icons/ri";

function CardComentario({ comentario, index }) {
  const verComentario = (ruta) => window.open(ruta, "_BLANK");

  return (
    <div
      onClick={() => verComentario(comentario.ruta)}
      className={`cursor-grab ${index===4 || index===5 ? "md:hidden": "3xl:flex"} p-3 shadow-md md:p-5 mb-4 text-justify card  bg-slate-50 border min-w-[250px] lg:w-[280px] xl:w-[400px] flex flex-col justify-between items-center gap-3 xl:min-h-[100px] rounded-[8px] xl:p-10 hover:border-[#c5c5c5]`}
      title="clic para ver reseña en Google"
    >
      <div className="flex flex-col items-center md:items-start w-[100%] gap-3">
        <div className="flex justify-center md:justify-start w-[100%]">
          {[...Array(5)].map((_, index) => (
            <RiStarSFill
              key={index}
              className={`text-[20px] ${
                index < comentario.estrellas ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-500">{comentario.comentario}</p>
      </div>
      <div className="flex flex-col items-center md:items-end w-[100%]">
        <p className="text-center md:text-end">{comentario.nombre}</p>
        <small className="text-gray-500">{comentario.fecha}</small>
      </div>
    </div>
  );
}

export default CardComentario;
