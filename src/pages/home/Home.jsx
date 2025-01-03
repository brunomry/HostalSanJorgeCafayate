import "./styles/home.css";
import BannerHome from "./components/BannerHome";
import Comentarios from "./components/Comentarios";
import NosotrosHome from "./components/NosotrosHome";
import HabitacionesHome from "./components/HabitacionesHome";
import BtnWhatsApp from "../../common/BtnWhatsApp";
import Head from "../../common/seo/Head";
import Faq from "../faqs/components/Faq";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import headData from "../../common/seo/headData.js";

function Home({traduccion}) {

  const preguntas = traduccion.paginaFaqs.faqs;

  return (
    <main>
      <Head head={headData.home}></Head>
      <BannerHome traduccion={traduccion}></BannerHome>
      <Comentarios traduccion={traduccion}></Comentarios>
      <NosotrosHome traduccion={traduccion}></NosotrosHome>
      <HabitacionesHome traduccion={traduccion}></HabitacionesHome>
      <section className="px-4 py-24 w-[100%] xl:px-10 flex flex-col gap-5 md:gap-10  xl:py-32">
        <h2 className="text-[25px] lg:text-[35px] font-bold md:text-center text-[#3361c4]">{traduccion.paginaFaqs.title}</h2>
        <p className="mb-3 text-gray-600 md:text-center ">
            {traduccion.paginaFaqs.descripcion}
          </p>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="border-none rounded-none outline-none flex flex-col items-center w-[100%] gap-2 md:gap-5"
        >
          {preguntas
            .filter((_, index) => index < 7)
            .map((faq) => (
              <Faq key={faq.id} faq={faq}></Faq>
            ))}
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <Link
            to={"/preguntasfrecuentes"}
            className="bg-emerald-500 hover:bg-emerald-600 flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 lg:px-8 xl:w-[15%] 2xl:w-[15%] 3xl:w-[10%] xl:text-[16px]"
            title="ver más preguntas"
          >
            <span className="text-[#fff] uppercase">{traduccion.paginaHome.btnVerMas}</span>{" "}
            <MdArrowForwardIos className="text-[#fff]" />
          </Link>
        </div>
      </section>
      <BtnWhatsApp traduccion={traduccion}></BtnWhatsApp>
    </main>
  );
}

export default Home;
