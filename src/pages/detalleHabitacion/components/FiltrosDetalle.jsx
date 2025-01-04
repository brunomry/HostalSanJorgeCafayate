import { Link, useParams } from "react-router-dom";

const FiltrosDetalle = ({traduccion}) => {
  const { id } = useParams();

  return (
    <div className="flex w-[100%] h-[60px] pe-2 filtersDetail md:flex-wrap sm:justify-center vsm:gap-2 md:gap-3 md:h-[inherit]">
      {traduccion.habitaciones.map((h) => (
        <Link
          key={h.id}
          to={`/habitacion/${h.id}`}
          title={h.tipo}
          className={` ${
            id == h.id ? "bg-gray-200" : ""
          } border vsm:min-w-[125px] md:min-w-[120px] text-center vsm:h-[50px] vsm:p-2 sm:py-2 sm:px-5 text-gray-600 cursor-pointer hover:bg-gray-200 3xl:text-[1.2rem]`}
        >
          {h.tipo}
        </Link>
      ))}
    </div>
  );
};

export default FiltrosDetalle;
