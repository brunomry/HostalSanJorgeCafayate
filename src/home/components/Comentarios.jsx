import comentarios from "../../helpers/comentarios";
import CardComentario from "./CardComentario";

const Comentarios = () => {
  return (
    <section className="md:absolute w-[100%] vsm:pt-[170px] mb:pt-0 md:top-[55%] lg:relative lg:top-[450px] pb-10 mb:mb-[0px] lg:pb-20 xl:absolute xl:top-[90%] lg:mx-auto min-h-[400px] flex flex-col items-center gap-10 justify-center px-4 ">
      <div className="flex gap-5 md:flex-col lg:flex-row md:gap-0 md:px-5 lg:gap-5 justify-center containerComments w-[100%] min-h-[400px] ">
        {comentarios.map((comentario) => (
          <CardComentario
            key={comentario.id}
            comentario={comentario}
          ></CardComentario>
        ))}
      </div>
      <button className=" border w-[75%] md:w-[300px] p-3 text-gray-500">
        Ver reseñas en Google
      </button>
    </section>
  );
};

export default Comentarios;
