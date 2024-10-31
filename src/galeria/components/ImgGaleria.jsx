import CarruselGaleria from "./CarruselGaleria";
import { useEffect, useState } from "react";
import galeria from "../../helpers/galeriaImagenes";
import { GoZoomIn } from "react-icons/go";

const ImgGaleria = ({ img, index }) => {
  const [imagenes, setImagenes] = useState([]);

  const [visible, setVisible] = useState(false);
  const [imgActual, setImgActual] = useState(0);

  const openCarousel = (index) => {
    setImgActual(index);
    setVisible(true);
  };

  return (
    <>
      <article
        className="w-[100%] vsm:h-[100px] mb:h-[150px] md:h-[175px] 2xl:h-[180px] cursor-pointer containerImgGalery"
        onClick={() => openCarousel(index)}
      >
        <img
          src={img.url}
          alt=""
          className="h-[100%] w-[100%] object-cover border-[1px] lg:shadow-lg"
          loading="lazy"
          title="Haz clic para ver"
        />
        <div className="hidden containerBg h-[100%] w-[100%] top-0 bg-[rgba(0,0,0,0.6)] text-white">
          <span>Haz clic para ver</span>
          <GoZoomIn className="text-[30px]"/>
        </div>
      </article>

      {visible && (
        <CarruselGaleria
          setVisible={setVisible}
          visible={visible}
          imagenesActuales={galeria}
          imgActual={imgActual}
        ></CarruselGaleria>
      )}
    </>
  );
};

export default ImgGaleria;
