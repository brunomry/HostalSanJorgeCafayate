import { useState } from "react";
import galeria from "../helpers/galeriaImagenes";
import CarruselFullScreen from "../../../common/CarruselFullScreen";

const ImgGaleria = ({ img, index }) => {
  const [visible, setVisible] = useState(false);
  const [imgActual, setImgActual] = useState(0);

  const openCarousel = (index) => {
    setImgActual(index);
    setVisible(true);
  };

  return (
    <>
      <article
        className="relative w-[100%] vsm:h-[100px] mb:h-[150px] md:h-[175px] 2xl:h-[225px] cursor-zoom-in group overflow-hidden"
        onClick={() => openCarousel(index)}
      >
        <img
          src={img.url}
          alt={`imagen de ${img.descripcion}`}
          className="h-[100%] w-[100%] object-cover border-[1px] lg:shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-125"
          loading="lazy"
          title="Haz clic para ver"
        />
        {/* <div className="absolute top-0 left-0 hidden h-[100%] w-[100%] bg-[rgba(0,0,0,0.6)] text-white justify-center items-center group-hover:flex">
          <GoZoomIn className="text-[30px]" />
        </div> */}
      </article>
      {visible && (
        <CarruselFullScreen
          setVisible={setVisible}
          visible={visible}
          imagenesActuales={galeria}
          imgActual={imgActual}
        />
      )}
    </>
  );
};

export default ImgGaleria;
