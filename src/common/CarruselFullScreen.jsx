import { useState } from "react";

const CarruselFullScreen = ({
  setVisible,
  visible,
  imagenesActuales,
  imgActual,
}) => {
  const [posicionActual, setPosicionActual] = useState(imgActual);

  const closeCarousel = (e) => {
    if (e.target.matches(".noClose")) {
      return;
    }

    if (e.target.matches(".noClose *")) {
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
      className="z-50 fixed inset-0 h-[100vh] bg-[rgba(0,0,0,0.9)] w-full flex items-center justify-center cursor-zoom-out"
      data-carousel="static"
      onClick={(e) => closeCarousel(e)}
      title="clic para cerrar"
    >
      <div className="relative w-full max-w-[75%] h-[55%] lg:h-[75%] flex justify-center">
        <div
          className="h-[100%] flex justify-center items-center  cursor-default"
          data-carousel-item
        >
          <img
            src={
              imagenesActuales[posicionActual].url ||
              imagenesActuales[posicionActual]
            }
            className="noClose block absolute max-w-full object-cover max-h-full border-[5px] md:border-[15px]"
            alt="imagen full screen"
            title="imagen"
          />
        </div>
      </div>
      <button
        type="button"
        className="noClose absolute top-0 left-0 z-30 flex items-center justify-center md:w-[100px] lg:w-[200px] 2xl:w-[400px] translate-y-[40vh] lg:translate-y-[30vh] 2xl:translate-y-[40vh] h-[200px] px-4 cursor-pointer group focus:outline-none lg:hover:bg-[rgba(0,0,0,0.3)]"
        data-carousel-prev
        title="clic para ver imagen anterior"
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
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        title="clic para ver siguiente imagen"
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
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarruselFullScreen;
