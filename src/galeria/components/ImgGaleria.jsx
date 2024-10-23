import { MdZoomOutMap } from "react-icons/md";
import CarruselGaleria from "./CarruselGaleria";
import { useEffect, useState } from "react";

const ImgGaleria = ({ img, index }) => {
  const [visible, setVisible] = useState(false);
  const [imgActual, setImgActual] = useState(0);

  const openCarousel = (index) => {
    setImgActual(index);
    setVisible(true);
  };

  return (
    <>
      <article className="xl:w-[400px] xl:h-[300px] cursor-pointer " onClick={()=>openCarousel(index)}>
        <img
          src={img.url}
          alt=""
          className="h-[100%] w-[100%] object-cover"
          loading="lazy"
        />
        {/* <div className="absolute top-[50%] left-[50%] translate-y-1/2 translate-x-1/2 ">
      <MdZoomOutMap className="text-[#40ff3a] text-[30px] " />
    </div> */}
      </article>

      {visible && <CarruselGaleria setVisible={setVisible} setImgActual={setImgActual} visible={visible} imgActual={imgActual}></CarruselGaleria>}
    </>
  );
}

export default ImgGaleria;
