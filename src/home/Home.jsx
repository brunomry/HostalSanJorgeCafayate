import "./styles/home.css";
import BannerHome from "./components/BannerHome";
import Comentarios from "./components/Comentarios";
import NosotrosHome from "./components/NosotrosHome";
import HabitacionesHome from "./components/HabitacionesHome";
import BtnWhatsApp from "../common/BtnWhatsApp";
import Head from "../seo/Head";
import Faq from "../faqs/components/Faq";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import preguntas from "../helpers/faqs";
import headData from "../helpers/head";

function Home() {
  return (
    <main>
      <Head head={headData.home}></Head>
      <BannerHome></BannerHome>
      <Comentarios></Comentarios>
      <NosotrosHome></NosotrosHome>
      <HabitacionesHome></HabitacionesHome>
      <section className="px-4 py-24 w-[100%] xl:px-10 flex flex-col gap-5 md:gap-10  xl:py-32">
        <h2 className="text-[20px] lg:text-[25px] text-center">Preguntas frecuentes</h2>
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
            className="bg-slate-500 flex justify-center items-center gap-3 px-15 p-3 md:p-4 xl:p-5 lg:px-8 2xl:w-[10%] xl:text-[16px]"
            title="ver más preguntas"
          >
            <span className="text-[#fff]">VER MÁS</span>{" "}
            <MdArrowForwardIos className="text-[#fff]" />
          </Link>
        </div>
      </section>
      <BtnWhatsApp></BtnWhatsApp>
    </main>
  );
}

export default Home;
