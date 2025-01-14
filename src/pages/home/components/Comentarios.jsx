import { Link } from "react-router-dom";
import comentarios from "../helpers/comentarios";
import CardComentario from "./CardComentario";

const Comentarios = ({traduccion}) => {
  return (
    <section className="md:absolute w-[100%] vsm:mt-[150px] mb:mt-0 md:top-[55%] lg:relative lg:top-[450px] pb-10 mb:mb-[0px] lg:pb-20 xl:absolute xl:top-[90%] lg:mx-auto min-h-[400px] flex flex-col items-center gap-10 justify-center px-4 ">
      <div className="flex gap-5 md:flex-col lg:flex-row md:gap-0 md:px-5 lg:gap-5 md:justify-center containerComments w-[100%] min-h-[400px] ">
        {comentarios.map((comentario, index) => (
          <CardComentario
            key={comentario.id}
            comentario={comentario}
            index={index}
          ></CardComentario>
        ))}
      </div>
      <Link to={"https://tinyurl.com/opinionesSanJorge"} target="_blank" rel="noopener noreferrer" className="text-center border w-[75%] md:w-[300px] p-3 text-gray-500 border-[#c5c5c5] hover:border-[#aaa9a9] shadow-md hover:shadow" title="ver reseñas en Google">
        {traduccion.paginaHome.seccionResenas.btn}
      </Link>
    </section>
  );
};

export default Comentarios;
