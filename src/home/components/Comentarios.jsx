import comentarios from "../../helpers/comentarios";
import CardComentario from "./CardComentario";

const Comentarios = () => {
  return (
    <section className="absolute  w-[100%] top-[90%] mx-auto flex flex-col items-center gap-10 justify-center">
      <div className="flex gap-5">
        {comentarios.map((comentario) => (
          <CardComentario
            key={comentario.id}
            comentario={comentario}
          ></CardComentario>
        ))}
      </div>
      <button className=" border w-[300px] p-3 text-gray-500">
        Ver reseñas en Google
      </button>
    </section>
  );
};

export default Comentarios;
