import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const CarruselGaleria = ({ setVisible, visible, imagenesActuales, imgActual  }) => {
  const [posicionActual, setPosicionActual] = useState(imgActual);

  const closeCarousel = (e) => {
    if(e.target.matches(".noClose")){
      return;
    }

    if(e.target.matches(".noClose *")){
      return;
    }

    setVisible(false);
  };

  const handlePrev = () => {
    setPosicionActual((posicion) =>
      posicion === 0 ? imagenesActuales.length - 1 : posicion - 1
    );
  };

  const handleNext = () => {
    setPosicionActual((posicion) =>
      posicion === imagenesActuales.length - 1 ? 0 : posicion + 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="z-50 fixed inset-0 h-[100vh] bg-[rgba(0,0,0,0.9)] w-full flex items-center justify-center"
      data-carousel="static"
      onClick={(e)=>closeCarousel(e)}
    >
      <div className="relative w-full max-w-[75%] h-[55%] lg:h-[75%] flex justify-center" >
            <div
              className="h-[100%] flex justify-center items-center"
              data-carousel-item
            >
              <img
                src={imagenesActuales[posicionActual].url}
                className="noClose block absolute max-w-full object-cover max-h-full border-[5px] md:border-[15px]"
                alt="..."
              />
            </div>
        
      </div>
      {/* <button
        className="absolute hidden md:block top-[20px] mb:top-[100px] right-[70px] md:top-[200px] md:right-[100px] lg:top-4 2xl:right-[250px] 2xl:top-[75px] z-30 text-white text-2xl cursor-pointer"
        onClick={(e)=>closeCarousel(e)}
      >
        <RiCloseLargeFill className="text-[20px] xl:text-[30px]" />
      </button> */}
      <button
        type="button"
        className="noClose absolute top-0 left-0 z-30 flex items-center justify-center md:w-[100px] lg:w-[200px] 2xl:w-[400px] translate-y-[40vh] lg:translate-y-[30vh] 2xl:translate-y-[40vh] h-[200px] px-4 cursor-pointer group focus:outline-none lg:hover:bg-[rgba(0,0,0,0.3)]"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="noClose inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 noClose h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
        className="noClose absolute top-0 end-0 z-30 flex items-center justify-center md:w-[100px] lg:w-[200px] 2xl:w-[400px] translate-y-[40vh] lg:translate-y-[30vh] 2xl:translate-y-[40vh] h-[200px] px-4 cursor-pointer group focus:outline-none lg:hover:bg-[rgba(0,0,0,0.3)]"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="noClose inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
