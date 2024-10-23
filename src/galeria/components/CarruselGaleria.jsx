import { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import galeria from "../../helpers/galeriaImagenes";

const CarruselGaleria = ({ setVisible, visible, setImgActual, imgActual }) => {
  const closeCarousel = () => {
    setVisible(false);
  };

  const [imagenes, setImagenes] = useState(null);

  const obtenerImagenes = () => {
    const imagenes = galeria.map((img) => img);
    setImagenes(imagenes);
  };

  useEffect(() => {
    obtenerImagenes();
  }, []);

  return (
    <div
      id="controls-carousel"
      className="z-30 fixed inset-0 h-[100vh] bg-[rgba(0,0,0,0.9)] w-full flex items-center justify-center"
      data-carousel="static"
    >
      <div className=" w-full max-w-3xl flex">
        {imagenes &&
          imagenes.map((img) => (
            <div
              className="h-[100vh] absolute overflow-hidden w-[auto] flex justify-center items-center"
              key={img.id}
              data-carousel-item
            >
              <img
                src={img.url}
                className=" block absolute h-[90vh] object-cover border-[15px]"
                alt="..."
              />
            </div>
          ))}
      </div>
      <button
        className="absolute top-4 right-[150px] z-30 text-white text-2xl cursor-pointer"
        onClick={() => closeCarousel()}
      >
        <RiCloseLargeFill className="text-[20px]" />
      </button>
      <button
        type="button"
        className="absolute z-30 top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-gray-500"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-gray-500"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default CarruselGaleria;
