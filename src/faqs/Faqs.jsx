import { RiAddLargeFill } from "react-icons/ri";
import faqs from "../helpers/faqs";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Faq from "./components/Faq";
import BtnWhatsApp from "../common/BtnWhatsApp";

const Faqs = () => {
  const rutaActual = window.location.href;
  const faqsMin = faqs.filter((_, index) => index < 7);

  return (
    <section className=" pt-3 w-[100%] xl:px-10 flex flex-col gap-10 xl:py-20">
      <h3 className="text-[25px] text-center ">Preguntas frecuentes - FAQS</h3>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="border-none rounded-none outline-none flex flex-col items-center w-[100%] gap-5"
      >
        {rutaActual.includes("preguntasfrecuentes")
          ? faqs.map((faq) => <Faq key={faq.id} faq={faq}></Faq>)
          : faqsMin.map((faq) => <Faq key={faq.id} faq={faq}></Faq>)}
      </div>
      {!rutaActual.includes("preguntasfrecuentes") && (
        <div className="w-[100%] flex justify-center items-center">
          <Link
            to={"/preguntasfrecuentes"}
            className="bg-slate-500 flex justify-center items-center gap-3 px-15 p-5 xl:w-[10%] xl:text-[16px]"
          >
            <span className="text-[#fff]">VER MÁS</span>{" "}
            <MdArrowForwardIos className="text-[#fff]" />
          </Link>
        </div>
      )}
      <BtnWhatsApp></BtnWhatsApp>
    </section>
  );
};

export default Faqs;
