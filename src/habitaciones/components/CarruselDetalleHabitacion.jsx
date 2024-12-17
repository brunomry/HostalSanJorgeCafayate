import { useState, useEffect } from "react";
import { GoZoomIn } from "react-icons/go";
import CarruselFullScreen from "../../common/CarruselFullScreen";

const CarruselDetalleHabitacion = ({ habitacion }) => {
  const [imgActual, setImgActual] = useState(0);

  const handlePrev = () => {
    setImgActual((posicion) =>
      posicion === 0 ? habitacion.imagenes.length - 1 : posicion - 1
    );
  };

  const handleNext = () => {
    setImgActual((posicion) =>
      posicion === habitacion.imagenes.length - 1 ? 0 : posicion + 1
    );
  };

  const [visible, setVisible] = useState(false);

  const openCarousel = (index) => {
    setImgActual(index);
    setVisible(true);
  };

  useEffect(() => {
    setImgActual(0);
  }, [habitacion]);

  return (
    <>
      <div className="bg-[rgba(172,171,171,0.1)] flex justify-center flex-col gap-3 items-center">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div
            className="relative h-56 overflow-hidden flex justify-center md:h-96 cursor-zoom-in"
            onClick={() => openCarousel(imgActual)}
          >
            <div className="h-[100%] md:h-[400px]" data-carousel-item>
              <img
                src={habitacion.imagenes[imgActual]}
                className=" absolute block object-cover  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
                alt={`imagen de habitación ${habitacion.nombre}`}
                title="clic para ver en pantalla completa"
                onClick={() => openCarousel(imgActual)}
              />
              <div className="hidden absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 containerBg h-[100%] w-[100%]  bg-[rgba(0,0,0,0.6)] text-white">
                <span>Haz clic para ver</span>
                <GoZoomIn className="text-[30px]" />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(172,171,171,0.1)]"
            data-carousel-prev
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(172,171,171,0.1)]"
            data-carousel-next
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div className="md:flex gap-3 hidden">
          <img
            src={habitacion.imagenes[0]}
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] 2xl:w-[150px] 2xl:h-[125px] object-cover cursor-pointer bg-gray-800"
            onClick={() => setImgActual(0)}
            alt={`Imagen 1 de ${habitacion.nombre}`}
            title="clic para ver imagen"
          ></img>
          <img
            src={habitacion.imagenes[1]}
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] 2xl:w-[150px] 2xl:h-[125px] object-cover cursor-pointer bg-gray-800"
            onClick={() => setImgActual(1)}
            alt={`Imagen 2 de ${habitacion.nombre}`}
            title="clic para ver imagen"
          ></img>
          <img
            src={habitacion.imagenes[2]}
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] 2xl:w-[150px] 2xl:h-[125px] object-cover cursor-pointer bg-gray-800"
            onClick={() => setImgActual(2)}
            alt={`Imagen 3 de ${habitacion.nombre}`}
            title="clic para ver imagen"
          ></img>
        </div>
      </div>
      {visible && (
        <CarruselFullScreen
          setVisible={setVisible}
          visible={visible}
          imagenesActuales={habitacion.imagenes}
          imgActual={imgActual}
        ></CarruselFullScreen>
      )}
    </>
  );
};

export default CarruselDetalleHabitacion;
